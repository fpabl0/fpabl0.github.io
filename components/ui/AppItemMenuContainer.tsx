import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  selected?: boolean;
  sx?: SxProps<Theme> | undefined;
  onClick?: () => void;
};

export const AppItemMenuContainer = ({ selected = false, onClick, sx, children }: Props) => {
  return (
    <Box
      component="div"
      onClick={onClick}
      style={{
        margin: "4px 5px",
        padding: "3px 10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      sx={{
        color: (theme) => selected ? theme.palette.primary.main : undefined,
        backgroundColor: (theme) => selected ? theme.palette.itemBackground.main : undefined,
        "&:hover": {
          backgroundColor: (theme) => theme.palette.itemBackground.main,
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};