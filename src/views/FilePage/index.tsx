import LoadingSpinner from "@/components/LoadingSpinner";
import { useI18n } from "@/context/context";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

export default function FilePage() {
  const params = useParams();
  const { i18n } = useI18n();

  const isMobile = useIsMobile();
  const [pdf, setPdf] = useState<PDFDocument | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [pdfRendering, setPdfRendering] = useState<boolean>(false);
  const [pageRendering, setPageRendering] = useState<boolean>(false);
  const [pdfjsLoaded, setPdfjsLoaded] = useState<boolean>(false);

  const lng = params?.lng as string;
  const language = lng ?? i18n.language;
  const pdfUrl = `/pdf/APN_MOVVE_${language?.toUpperCase()}.pdf`;

  async function loadPdfFromUrl(url: string) {
    try {
      setPdfRendering(true);
      const PDFJS = window.pdfjsLib;
      const _PDF_DOC = await PDFJS.getDocument(url).promise;
      setPdf(_PDF_DOC);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error loading PDF from URL:", error);
    } finally {
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
    if (isMobile) {
      const checkPDFJS = () => {
        if (window.pdfjsLib) {
          setPdfjsLoaded(true);
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${window.pdfjsLib.version}/pdf.worker.min.js`;
        } else {
          setTimeout(checkPDFJS, 100);
        }
      };
      checkPDFJS();
    }
  }, [isMobile]);

  useEffect(() => {
    if (pdfUrl && pdfjsLoaded && isMobile) {
      loadPdfFromUrl(pdfUrl);
    }
  }, [pdfUrl, pdfjsLoaded, isMobile]);

  useEffect(() => {
    if (pdf && isMobile) {
      renderPages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf, isMobile]);

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-black">
      <Suspense fallback={<LoadingSpinner />}>
        {(pdfRendering || pageRendering) && isMobile && <LoadingSpinner />}
        {!isMobile && (
          <embed
            src={pdfUrl}
            type="application/pdf"
            className="w-full h-full rounded-lg"
          />
        )}
        {isMobile && (
          <div className=" flex flex-col gap-2">
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full">
                <img
                  src={image}
                  alt={`PDF page ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
}
