// ------------------------------------------------------------------------------------------------

import type {Metadata} from "next";
import clsx from "clsx";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

import {Blob} from "@/components/Blob";
import {Layout} from "@/components/Layout";
import {TailwindIndicator} from "@/components/tailwind-indicator";

import {fontSans} from "./fonts";
import {Providers} from "./providers";

import "../globals.css";

// ------------------------------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Bruno Souza - Full-Stack Developer",
  description:
    "Full-stack developer with 25 years of experience, helping companies create efficient technological solutions.",
  openGraph: {
    title: "Bruno Souza - Desenvolvedor Full-Stack",
    description:
      "Full-stack developer with 25 years of experience, helping companies create efficient technological solutions.",
    url: "https://bnsouza.com",
    siteName: "Bruno Souza - Full-Stack Developer",
    locale: "en_US",
    type: "website",
  },
};

// ------------------------------------------------------------------------------------------------

export default async function RootLayout({
  children,
  params: {locale},
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={clsx("h-full antialiased", fontSans.variable)} suppressHydrationWarning>
      <body className="flex h-full bg-zinc-100 dark:bg-zinc-900">
        <Blob />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </Providers>
        </NextIntlClientProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}

// ------------------------------------------------------------------------------------------------
