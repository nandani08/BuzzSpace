import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("BuzzSpace-theme") || "dim",
  setTheme: (theme) => {
    localStorage.setItem("BuzzSpace-theme", theme);
    set({ theme });
  },
}));