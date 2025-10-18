import { useEffect, useState } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pdfjsLib: any;
  }
}

interface PDFDocument {
  numPages: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPage: (pageNumber: number) => Promise<any>;
}

interface PdfCarouselProps {
  pdfUrl: string;
}

export function PDFViewer({ pdfUrl }: PdfCarouselProps) {
  const [pdf, setPdf] = useState<PDFDocument | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [pdfRendering, setPdfRendering] = useState<boolean>(false);
  const [pageRendering, setPageRendering] = useState<boolean>(false);
  const [pdfjsLoaded, setPdfjsLoaded] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  async function loadPdfFromUrl(url: string) {
    try {
      setPdfRendering(true);
      const PDFJS = window.pdfjsLib;
      const _PDF_DOC = await PDFJS.getDocument(url).promise;
      setPdf(_PDF_DOC);
      setPdfRendering(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error loading PDF from URL:", error);
      setPdfRendering(false);
    }
  }

  async function renderPages() {
    if (!pdf) return;
    setPageRendering(true);
    setImages([]);
    const canvas = document.createElement("canvas");

    for (let i = 1; i <= pdf.numPages; i++) {
      try {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: canvas.getContext("2d"), viewport })
          .promise;
        const dataUrl = canvas.toDataURL("image/png");

        setImages((prev) => [...prev, dataUrl]);
      } catch (error) {
        console.error(`Error rendering page ${i}:`, error);
      }
    }

    setPageRendering(false);
  }

  useEffect(() => {
    const checkPDFJS = () => {
      if (window.pdfjsLib) {
        setPdfjsLoaded(true);
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${window.pdfjsLib.version}/pdf.worker.min.js`;
      } else {
        setTimeout(checkPDFJS, 100);
      }
    };
    checkPDFJS();
  }, []);

  useEffect(() => {
    if (pdfUrl && pdfjsLoaded) {
      loadPdfFromUrl(pdfUrl);
    }
  }, [pdfUrl, pdfjsLoaded]);

  useEffect(() => {
    if (pdf) {
      renderPages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative overflow-hidden rounded-lg w-full h-full aspect-[16/9]">
        {(pageRendering || pdfRendering || !pdfjsLoaded) && (
          <div className="flex h-full w-full justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="ml-2">Carregando visualizador de PDF...</span>
          </div>
        )}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <img
              src={image}
              alt={`PDF page ${index + 1}`}
              className="absolute top-1/2 left-1/2 w-full h-full object-contain -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
          >
            <span className=" inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </>
      )}
    </div>
  );
}
