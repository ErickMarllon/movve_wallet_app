"use client";

import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useI18n } from "@/context/context";
import { useParams } from "react-router-dom";

export default function FilePage() {
  const params = useParams();
  const { i18n } = useI18n();

  const lng = params?.lng as string;
  const language = lng ?? i18n.language;
  const pdfFile = `/pdf/APN_MOVVE_${language?.toUpperCase()}.pdf`;
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-black">
      <Suspense fallback={<LoadingSpinner />}>
        <iframe
          src={pdfFile}
          className="w-full h-screen border-none"
          title="Plano de Negócios"
        />
      </Suspense>
    </div>
  );
}
