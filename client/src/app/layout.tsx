import type { ReactNode } from 'react';
import Header from "../widgets/header/ui";
import Footer from "../widgets/footer/ui";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
