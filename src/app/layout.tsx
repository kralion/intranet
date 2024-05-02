import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TRPCReactProvider } from "@/trpc/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: "Kindranet - Educational intranet for the High Schools",
  description:
    "A high school intranet for the education department, and students progress tracking",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            {children}
            {modal}
          </TRPCReactProvider>
          <div id="modal-root" />
        </ThemeProvider>
      </body>
    </html>
  );
}
