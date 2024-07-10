import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@/config/theme-provider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import "@uploadthing/react/styles.css";
import "./globals.css";
import RightDrawer from "@/components/common/right.drawer";

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
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider>
              <CssBaseline />
              <Toaster
                position="top-center"
                toastOptions={{
                  classNames: {
                    success: "bg-green-700 text-white",
                    error: "bg-red-700 text-white",
                  },
                }}
              />
              <RightDrawer />
              {children}
            </ThemeProvider>
          </StyledEngineProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
