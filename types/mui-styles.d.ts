import { Palette, PaletteOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {

  interface Palette {
    itemBackground: Palette['primary'];
  }

  interface PaletteOptions {
    itemBackground: PaletteOptions['primary'];
  }

}