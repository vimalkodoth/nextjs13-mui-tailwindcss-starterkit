"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { theme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import InjectTailwind from "@/injectTailwind";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <InjectTailwind>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </InjectTailwind>
    </html>
  );
}
