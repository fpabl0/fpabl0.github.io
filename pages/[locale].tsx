import { useEffect } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Cookies from "js-cookie";

import { MainLayout } from "@/components/layouts/MainLayout";
import { Locale, i18n } from '../i18n-config';
import { Dict, getDictionary } from "@/get-dictionary";

import { AboutView } from "@/components/views/AboutView";
import { SkillsView } from "@/components/views/SkillsView";
import { ExperienceView } from "@/components/views/ExperienceView";
import { ContactView } from "@/components/views/ContactView";

type Props = {
  locale: Locale;
  dict: Dict;
};

type Params = {
  locale: Locale;
};

const IndexLocalePage = ({ locale, dict }: Props) => {

  useEffect(() => {
    Cookies.set("locale", locale);
  }, []);

  return (
    <MainLayout
      title="Pablo Fuentes"
      description="Pablo Fuentes - Electronic & Software Engineer"
      curLocale={locale}
      navbarDict={dict.navbar}
      footerDict={dict.footer}
      scrollToTopButton
    >
      <AboutView id="about" dict={dict.about_view} />
      <SkillsView id="skills" dict={dict.skills_view} />
      <ExperienceView id="experience" dict={dict.experience_view} />
      <ContactView id="contact" title={dict.navbar.contact} />
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async (ctx) => {
  return {
    paths: i18n.languages.map((l) => ({
      params: {
        locale: l.locale,
      }
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {

  const locale = ctx.params!.locale;
  const dict = await getDictionary(locale);

  return { props: { locale, dict } };
};

export default IndexLocalePage;