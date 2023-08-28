import { MutableRefObject, ReactNode } from "react";
import Head from "next/head";

import Toolbar from "@mui/material/Toolbar";

import { NavDrawer } from "../ui/NavDrawer";
import { ScrollTop } from "../ui/ScrollTop";
import { Footer } from "../ui/Footer";

import { Dict } from "@/get-dictionary";

type Props = {
  title: string;
  description: string;
  curLocale?: string;
  navbarDict: Dict['navbar'];
  footerDict: Dict['footer'];
  scrollToTopButton?: boolean;
  children: ReactNode | ReactNode[];
};

export const MainLayout = ({ title, description, navbarDict, footerDict, children, scrollToTopButton = false, curLocale = "" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>

      <nav id="main-nav">
        <NavDrawer curLocale={curLocale} dict={navbarDict} />
      </nav>

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