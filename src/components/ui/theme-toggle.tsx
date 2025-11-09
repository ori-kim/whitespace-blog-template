"use client";

import React from "react";

import { STORAGE_THEME_KEY, THEME_MAP } from "~/lib/theme";

interface ThemeToggleProps {
  className?: string;
  children: React.ReactNode;
}

export function ThemeToggle({ children }: ThemeToggleProps) {
  const handleToggleTheme = React.useCallback(() => {
    const themeList = Object.keys(THEME_MAP);

    const switchTheme = () => {
      const currentThemeIndex = themeList.findIndex((c) =>
        document.documentElement.classList.contains(c)
      );

      if (currentThemeIndex !== -1) {
        document.documentElement.classList.remove(themeList[currentThemeIndex]);
      }

      const nextTheme = themeList[(currentThemeIndex + 1) % themeList.length];
      localStorage.setItem(STORAGE_THEME_KEY, nextTheme);
      document.documentElement.classList.add(nextTheme);

      // Giscus theme change event
      const event = new CustomEvent("theme-change", {
        detail: { theme: nextTheme },
      });
      window.dispatchEvent(event);
    };

    // @ts-ignore - startViewTransition is experimental
    if (!document.startViewTransition) {
      switchTheme();
    } else {
      // @ts-ignore
      document.startViewTransition(switchTheme);
    }
  }, []);

  return (
    <>
      <span className="sr-only">toggle theme</span>
      <div onClick={handleToggleTheme}>{children}</div>
    </>
  );
}
