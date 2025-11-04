import React from "react";
import useShowOnlyOnRoutes, {
  ACTIVE_COMPONENTS,
} from "@/hooks/useShowOnlyOnRoutes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasNavbar = useShowOnlyOnRoutes(ACTIVE_COMPONENTS.navbar);
  const hasFooter = useShowOnlyOnRoutes(ACTIVE_COMPONENTS.footer);

  return (
    <>
      {hasNavbar && <Header />}
      {children}
      {hasFooter && <Footer />}
    </>
  );
}
