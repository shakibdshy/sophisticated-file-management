"use client";

import { createTheme, ThemeProvider as Provider } from "@mui/material";
import { amber, deepOrange, grey, teal } from "@mui/material/colors";
import { Roboto } from "next/font/google";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: roboto.style.fontFamily,
        },
        palette: {
          mode,          
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Provider theme={theme}>{children}</Provider>
    </ColorModeContext.Provider>
  );
}
