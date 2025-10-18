export const downloadPdf = (pdfUrl: string) => {
  if (!pdfUrl) return;

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = pdfUrl.split("/").pop() || "document.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
