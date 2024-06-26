"use client";

import { createContext, useEffect, useRef } from "react";
import { ThemeProvider, useTheme } from "next-themes";

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    let media = window.matchMedia("(prefers-color-scheme: dark)");

    function onMediaChange() {
      let systemTheme = media.matches ? "dark" : "light";
      // console.log('theme', systemTheme);

      if (resolvedTheme === systemTheme) {
        setTheme("system");
      }
    }

    onMediaChange();
    media.addEventListener("change", onMediaChange);

    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [resolvedTheme, setTheme]);

  return null;
}

let initialState = {};
export const AppContext = createContext({
  initialState: {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={{ initialState }}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ThemeWatcher />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}
