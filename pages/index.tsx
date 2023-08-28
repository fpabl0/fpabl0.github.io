import { useRouter } from "next/router";
import type { GetStaticProps } from "next";
import { useEffect } from "react";
import Cookies from 'js-cookie';

import CircularProgress from "@mui/material/CircularProgress";

import { type Dict, getDictionary } from "@/get-dictionary";

import { MainLayout } from "@/components/layouts/MainLayout";
import { i18n } from "@/i18n-config";


type Props = {
  dict: Dict;
};

const HomePage = ({ dict }: Props) => {

  const router = useRouter();

  useEffect(() => {
    let locale = Cookies.get("locale");
    locale = i18n.languages.find(l => l.locale === locale)?.locale || i18n.defaultLanguage.locale;
    router.push(`/${locale}`);
  }, []);

  return (
    <MainLayout
      title="Pablo Fuentes"
      description="Pablo Fuentes - Electronic & Software Engineer"
      navbarDict={dict.navbar}
      footerDict={dict.footer}
    >
      <div style={{
        width: '100vw',
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <CircularProgress />
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {

  const dict = await getDictionary("en");

  return { props: { dict } };
};

export default HomePage;