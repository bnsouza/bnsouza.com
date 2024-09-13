// ------------------------------------------------------------------------------------------------

import Link from "next/link";
import {faGithub, faInstagram, faLinkedin, faWhatsapp} from "@awesome.me/kit-69a64c1416/icons/classic/brands";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslations} from "next-intl";

import {ContainerInner, ContainerOuter} from "@/components/Container";

// ------------------------------------------------------------------------------------------------

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-300/40 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between  gap-x-6 gap-y-2 md:flex-row text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <div className="flex flex-wrap min-w-40 items-center justify-center gap-x-6 gap-y-1">
                <Link href="#">{t("back-top")}</Link>
              </div>
              <div className="flex flex-wrap flex-1 items-center justify-center">
                <p className="w-full text-center text-zinc-400 mb-2 md:mb-0">
                  Bruno Souza / {new Date().getFullYear()} &copy; {t("copyright")}
                </p>
              </div>
              <div className="flex flex-wrap min-w-40 items-center justify-center gap-x-6 gap-y-1">
                <Link
                  className="hover:text-purple-600 dark:hover:text-purple-500"
                  target="_blank"
                  href="https://github.com/bnsouza">
                  <FontAwesomeIcon icon={faGithub} className="size-5" />
                </Link>
                <Link
                  className="hover:text-pink-600 dark:hover:text-pink-500"
                  target="_blank"
                  href="https://www.instagram.com/bnsouza/">
                  <FontAwesomeIcon icon={faInstagram} className="size-5" />
                </Link>
                <Link
                  className="hover:text-blue-600 dark:hover:text-blue-500"
                  target="_blank"
                  href="https://linkedin.com/in/bnsouza">
                  <FontAwesomeIcon icon={faLinkedin} className="size-5" />
                </Link>
                <Link
                  className="hover:text-emerald-600 dark:hover:text-emerald-500"
                  target="_blank"
                  href="https://wa.me/5511947264149">
                  <FontAwesomeIcon icon={faWhatsapp} className="size-5" />
                </Link>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}

// ------------------------------------------------------------------------------------------------
