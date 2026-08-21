import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://play-juicy.com"),
  title: "Juicy — One Community. Every World.",
  description: "Juicy is a growing multigame community, starting with a custom Rust experience and expanding into new worlds.",
  icons: { icon: "/juicy-logo.png" },
  openGraph: {
    title: "Juicy — One Community. Every World.",
    description: "A growing multigame community. Rust is only the beginning.",
    url: "https://play-juicy.com",
    siteName: "Juicy",
    images: [{ url: "/juicy-logo.png", alt: "Juicy gaming community" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juicy — One Community. Every World.",
    description: "A growing multigame community. Rust is only the beginning.",
    images: ["/juicy-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
