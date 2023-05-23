import { SxProps, Theme } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = {
  size: number;
  sx?: SxProps<Theme> | undefined;
};

export const Logo = ({ size, sx }: Props) => {
  return (
    <Box sx={{
      display: "block",
      backgroundColor: "#262525",
      width: `${size}px`,
      height: `${size}px`,
      transform: "rotate(45deg)",
      overflow: "hidden",
      boxShadow: (theme) => `1px 1px 10px ${theme.palette.primary.main}`,
      ...sx,
    }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `${size}px`,
        height: `${size}px`,
        paddingRight: `2px`,
        transform: "rotate(-45deg)",
      }}>
        <Typography fontFamily="Playball, cursive" fontSize={3 * size / 4} variant="h6" color="primary">
          P<Typography fontFamily="Playball, cursive" component="span" fontSize={3 * size / 8}>f</Typography>
        </Typography>
      </Box>
    </Box>
  );
};