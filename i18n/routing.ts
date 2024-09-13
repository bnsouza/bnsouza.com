import {createLocalizedPathnamesNavigation} from "next-intl/navigation";
import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "br"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      br: "/sobre",
    },
    "/work": {
      en: "/work",
      br: "/trabalhos",
    },
    "/contact": {
      en: "/contact",
      br: "/contato",
    },
  },
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createLocalizedPathnamesNavigation(routing);
