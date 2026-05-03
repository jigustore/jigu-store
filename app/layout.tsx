import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jigustore",
  description: "Website of Jigustore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
