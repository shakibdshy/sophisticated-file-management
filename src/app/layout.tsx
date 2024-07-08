import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import theme from "@/config/theme";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
  title: "Sophisticated File Management System",
  description: "A sophisticated file Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="root">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </StyledEngineProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
