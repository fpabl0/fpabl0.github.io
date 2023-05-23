import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Dict } from "@/get-dictionary";

type Props = {
  dict: Dict["footer"];
};

export const Footer = ({ dict }: Props) => {
  return (
    <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="body2" color="white" textAlign="center">
        {dict.developed_by} <Typography
          variant="body2"
          component="span"
          color="primary"
          fontWeight={700}
        >
          Pablo Fuentes
        </Typography>
      </Typography>
    </Toolbar>
  );
};