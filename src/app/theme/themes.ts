"use client";
import { createTheme } from "@mui/material/styles";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigModule from "../../../tailwind.config.js";
const tailwindConfig = resolveConfig(tailwindConfigModule);

export const theme = createTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.colors.primary.main,
    },
  },
});
