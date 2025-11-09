import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isProd = import.meta.env.PROD;

export function getRootCssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name);
}
