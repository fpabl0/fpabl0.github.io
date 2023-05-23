import useScrollTrigger from "@mui/material/useScrollTrigger";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type Props = {
  topAnchorRef: string;
};

export const ScrollTop = ({ topAnchorRef }: Props) => {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (e.target as HTMLDivElement).ownerDocument || document
    ).querySelector(topAnchorRef);
    if (!anchor) return;
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={onClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};