import { MutableRefObject, ReactNode } from "react";
import Head from "next/head";

import Toolbar from "@mui/material/Toolbar";

import { Navbar } from "../ui/Navbar";
import { ScrollTop } from "../ui/ScrollTop";
import { Footer } from "../ui/Footer";

import { Dict } from "@/get-dictionary";

type Props = {
  title: string;
  description: string;
  navbarDict: Dict['navbar'];
  footerDict: Dict['footer'];
  scrollToTopButton?: boolean;
  children: ReactNode | ReactNode[];
};

export const MainLayout = ({ title, description, navbarDict, footerDict, children, scrollToTopButton = false }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>

      <nav id="main-nav">
        <Navbar dict={navbarDict} />
      </nav>

      {/* MobileNavBar */}

      <main>
        {children}
      </main>

      <Toolbar />
      <footer>
        <Footer dict={footerDict} />
      </footer>
      {
        scrollToTopButton && (
          <ScrollTop topAnchorRef="#main-nav" />
        )
      }
    </>
  );
};