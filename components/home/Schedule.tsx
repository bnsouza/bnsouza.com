// ------------------------------------------------------------------------------------------------

import {useTranslations} from "next-intl";

import {Container} from "../Container";

// ------------------------------------------------------------------------------------------------

export function Schedule() {
  // Translations
  const t = useTranslations("Schedule");

  return (
    <Container>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 md:flex md:items-center md:justify-between md:px-8 md:gap-6">
        <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 md:text-4xl md:max-w-xl">
          {t("question")}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 md:mt-0 md:flex-shrink-0">
          <a
            href="https://calendly.com/bnsouza/chat"
            target="_blank"
            className="rounded-md bg-zinc-900 dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-zinc-900 shadow-sm hover:bg-zinc-700 dark:hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {t("button")}
          </a>
        </div>
      </div>
    </Container>
  );
}

// ------------------------------------------------------------------------------------------------
