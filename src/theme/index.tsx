import type { ReactNode } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
//
import type { Shadows, Theme } from "@mui/material";
import customShadows from "./customShadows";
import GlobalStyles from "./globalStyles";
import componentsOverride from "./overrides";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";
// ----------------------------------------------------------------------
export type ThemeCustom = Theme & {
  customShadows: ReturnType<typeof customShadows>;
};
const themeOptions = {
  palette: palette as any,
  shape: { borderRadius: 6 },
  typography: typography as any,
  shadows: shadows() as Shadows,
  customShadows: customShadows(),
} as ThemeCustom;
const theme = createTheme(themeOptions);
theme.components = componentsOverride(theme);
export default function ThemeProvider({ children }: { children?: ReactNode }) {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
