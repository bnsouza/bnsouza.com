// -------------------------------------------------------------------------------------------------

import {DM_Mono as FontMono, DM_Sans as FontSans} from "next/font/google";

// -------------------------------------------------------------------------------------------------

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

// -------------------------------------------------------------------------------------------------
