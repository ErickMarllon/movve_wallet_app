import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer";
import useShowOnlyOnRoutes, {
  ACTIVE_COMPONENTS,
} from "@/hooks/useShowOnlyOnRoutes";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasNavbar = useShowOnlyOnRoutes(ACTIVE_COMPONENTS.navbar);
  const hasFooter = useShowOnlyOnRoutes(ACTIVE_COMPONENTS.footer);

  return (
    <>
      {hasNavbar && <Navbar />}
      {children}
      {hasFooter && <Footer />}
    </>
  );
}
