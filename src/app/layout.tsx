import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import Scripts from "@/components/scripts";
import { Toaster } from "@/components/ui/toaster";
import { validateEnvVars } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Metadata } from "next/types";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const title = "Tech With Mitchel";
  const description = "Getting Started with your tech journey";
  const images = "https://www.mitchelinaju.com/static/seo-images/mitchel-og-image.png";
  const url = "https://mitchelinaju.com";

  const metadata: Metadata = {
    metadataBase: new URL(url),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: title,
      images,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
      creator: "@mitchelinaju",
      site: "@mitchelinaju",
    },
  };

  return metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  validateEnvVars();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container flex min-h-screen flex-col pt-2">
          <Providers>
            <Scripts />
            <Header />
            <main className="flex-grow">{children}</main>
            {/* <Footer /> */}
          </Providers>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
