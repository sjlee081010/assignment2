import type { ReactNode } from 'react';
import GlobalStyle from '../shared/style/global';
import Header from "../widgets/header/ui";
import Footer from "../widgets/footer/ui";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
}
