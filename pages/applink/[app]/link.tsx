import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";

type Params = {
  app: string;
};

type Props = {
  app: String;
};

const AppLinkPage = ({ app }: Props) => {
  const router = useRouter();
  const appData = router.query.data;

  const redirectUrl = useMemo(() => {
    if (appData === "" || appData === undefined || appData === null) return "";
    switch (app) {
      case 'tide_table':
        return `fpabl0://tide_table/link?data=${appData}`;
    }
    return "";
  }, [app, appData]);

  if (redirectUrl === "") return (<></>);

  if (typeof window !== "undefined") {
    window.location.href = redirectUrl;
  }
  return (
    <div className="app-link-container">
      <div className="app-link-text">
        Redirecting...
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async (ctx) => {
  return {
    paths: [
      {
        params: {
          app: "tide_table"
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
  const app = ctx.params!.app;
  return { props: { app } };
};

export default AppLinkPage;