import { useCallback, useEffect, useState } from "react";

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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkPDFJS = () => {
      if (window.pdfjsLib) {
        const pdfjsVersion = window.pdfjsLib.version || "3.11.174";
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;
      } else {
        setTimeout(checkPDFJS, 100);
      }
    };

    checkPDFJS();
  }, []);

  const loadPdfFromUrl = useCallback(async (url: string) => {
    try {
      const PDFJS = window.pdfjsLib;

      const loadingTask = PDFJS.getDocument({
        url: url,
        cMapUrl: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/cmaps/`,
        cMapPacked: true,
      });

      const _PDF_DOC = await loadingTask.promise;
      setPdf(_PDF_DOC);
    } catch (error) {
      console.error("Error loading PDF from URL:", error);
    }
  }, []);

  const renderPages = useCallback(async () => {
    if (!pdf) return;

    setImages([]);
    const canvas = document.createElement("canvas");

    try {
      const imgs = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const context = canvas.getContext("2d", {
          alpha: false,
          willReadFrequently: true,
        });

        if (!context) {
          throw new Error("Could not get canvas context");
        }

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;

        const dataUrl = canvas.toDataURL("image/jpeg");
        imgs.push(dataUrl);
        // setImages((prev) => [...prev, dataUrl]);
      }
      setImages(imgs);
    } catch (error) {
      console.error("Error rendering pages:", error);
    }
  }, [pdf]);

  useEffect(() => {
    if (pdfUrl) {
      loadPdfFromUrl(pdfUrl);
    }
  }, [pdfUrl, loadPdfFromUrl]);

  useEffect(() => {
    if (pdf) {
      renderPages();
    }
  }, [pdf, renderPages]);

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
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, images.length]);

  return (
    <div className="relative w-full z-40 bg-[#011e04]/50 backdrop-blur-[3px] py-0 md:py-10 px-0 md:px-[10%] rounded-4xl md:border border-accent-green ">
      <div className="flex relative rounded-lg w-full h-full max-h-[804px] aspect-[16/9]">
        <div
          className="flex overflow-hidden relative rounded-lg w-full h-full max-h-[804px] aspect-[16/9]"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div
            className={`relative flex transition-transform duration-700 ease-in-out`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {images?.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full ">
                <img
                  src={image}
                  alt={`PDF page ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="absolute top-0 start-0 md:-start-[12%] lg:-start-[10%] xl:-start-20 z-50 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={prevSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <span className=" inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#001301]/71 border border-accent-green/50  group-hover:bg-[#001301] group-focus:ring-2 group-focus:ring-accent-green/50 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-[#00C213] rtl:rotate-180"
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
              className="absolute top-0 end-0 md:-end-[12%] lg:-end-[10%] xl:-end-20 z-50 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={nextSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#001301]/71 border border-accent-green/50 group-hover:bg-[#001301] group-focus:ring-2 group-focus:ring-accent-green/50 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-[#00C213] rtl:rotate-180"
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

      {images.length > 1 && (
        <>
          <div
            className="absolute z-30 flex -translate-x-1/2 bottom-5 md:bottom-16 left-1/2 space-x-2 md:space-x-3 rtl:space-x-reverse"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${
                  index === currentSlide
                    ? "bg-[#D9D9D9]/88"
                    : "bg-[#D9D9D9]/23 hover:bg-[#D9D9D9]/60"
                }`}
                aria-current={index === currentSlide}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
