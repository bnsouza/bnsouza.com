// ------------------------------------------------------------------------------------------------

import {useTranslations} from "next-intl";

import SkillSheet from "@/components/home/Skills";

import {Container} from "../Container";

// ------------------------------------------------------------------------------------------------

export default function MyJourney() {
  // Translations
  const t = useTranslations("MyJourney");

  return (
    <>
      <div className="mx-2 my-24 rounded-4xl bg-gray-900 dark:bg-zinc-100 bg-[url(/dot-texture.svg)] pb-24 pt-72 lg:pt-36">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
            <div className="lg:relative">
              <div className="lg:sticky lg:top-8">
                <div className="-mt-96 lg:-mt-52">
                  <div className="-m-2 rounded-4xl bg-white/15 dark:bg-zinc-900/15 shadow-[inset_0_0_2px_1px_#ffffff4d] dark:shadow-[inset_0_0_2px_1px_#0000004d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-md">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <SkillSheet />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-lg:mt-16 lg:col-span-2 lg:px-16">
              <h3 className="text-base font-semibold leading-7 text-zinc-400 dark:text-zinc-600 uppercase tracking-tight">
                {t("h3")}
              </h3>
              <h2 className="mt-2 text-3xl font-bold text-zinc-100 dark:text-zinc-900 sm:text-4xl tracking-tighter">
                {t("h2")}
              </h2>
              <div className="text-zinc-200 dark:text-zinc-800 tracking-tight">
                <p className="mt-6">{t("p1")}</p>
                <p className="mt-8">{t("p2")}</p>
                <p className="mt-8">{t("p3")}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

// ------------------------------------------------------------------------------------------------
