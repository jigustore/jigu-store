import { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Jigu Store",
  description:
    "Shop the lastest electronics and technological components, accessories and software solution at Jigu Store. Providing high-quality tech solution & educational kits across Kathmandu, Nepal",
  keywords: [
    "Tech Store Nepal",
    "Jigu Store",
    "Jigu Electronics",
    "jigustore",
    "JiguStore",
    "Jigustore",
    "Jigu Technology",
    "Electronics Component Kathamdnu",
    "Online Electronics Nepal",
    "Kits",
    "DIY Kits",
    "NIC Jigu Store",
    "Vending Machine Nepal",
    "Jigu Store Vending Machine",
    "Education Kits",
    "Electronics Kits",
  ],

  openGraph: {
    title: "Jigu Store",
    description:
      "Your one-stop shop for tech hardware and software gadgets in Nepal",
    url: "https://jigustore.com.np",
    siteName: "Jigu Store",
    locale: "en_NP",
    type: "website",
  },

  icons: {
    icon: [{ url: "/icon.png" }],
  },

  alternates: {
    canonical: "https://jigustore.com.np",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased `}>
      <head>
        <meta
          name="google-site-verification"
          content="c6V1ouF2juqZmodl2dxau5EaIM-Ju2g_kYBO47d6OeU"
        />
      </head>
      <body className="min-h-full flex flex-col justify-between items-center relative pt-15 text-center font-main dark:text-theme-w dark:bg-theme-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
