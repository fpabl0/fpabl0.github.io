import { useRouter } from "next/router";
import { useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";

const Page404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <CircularProgress />
    </div>
  );
};

export default Page404;