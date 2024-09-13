// ------------------------------------------------------------------------------------------------
"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import {Link, usePathname} from "@/i18n/routing";
import Bruno from "@/images/Bruno.jpg";
import {faBars, faCircleHalfStroke, faXmark} from "@awesome.me/kit-69a64c1416/icons/classic/regular";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Popover, PopoverBackdrop, PopoverButton, PopoverPanel} from "@headlessui/react";
import Emoji from "a11y-react-emoji";
import clsx from "clsx";
import {motion} from "framer-motion";
import {useLocale, useTranslations} from "next-intl";
import {useTheme} from "next-themes";

import {Navbar, NavbarItem, NavbarSection} from "@/components/catalyst/navbar";
import {Container} from "@/components/Container";

// ------------------------------------------------------------------------------------------------

function MobileNavItem({href, children}: {href: "/" | "/about" | "/work" | "/contact"; children: React.ReactNode}) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  );
}

// ------------------------------------------------------------------------------------------------

function MobileNavigation(props: React.ComponentPropsWithoutRef<typeof Popover>) {
  const t = useTranslations("Header");

  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        <FontAwesomeIcon
          icon={faBars}
          className="size-5 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
        />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label={t("menu-close")} className="-m-1 p-1">
            <FontAwesomeIcon icon={faXmark} className="size-5 text-zinc-500 dark:text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{t("menu-nav")}</h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            <MobileNavItem href="/">{t("menu-home")}</MobileNavItem>
            <MobileNavItem href="/about">{t("menu-about")}</MobileNavItem>
            <MobileNavItem href="/work">{t("menu-work")}</MobileNavItem>
            <MobileNavItem href="/contact">{t("menu-contact")}</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  );
}

// ------------------------------------------------------------------------------------------------

function NavItem({href, children}: {href: "/" | "/about" | "/work" | "/contact"; children: React.ReactNode}) {
  const isActive = usePathname() === href;
  return (
    <NavbarItem href={href} current={isActive} className="relative block transition">
      {children}
    </NavbarItem>
  );
}

// ------------------------------------------------------------------------------------------------

function DesktopNavigation(props: React.ComponentPropsWithoutRef<"nav">) {
  const t = useTranslations("Header");

  return (
    <nav {...props}>
      <Navbar className="flex px-1 rounded-full bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavbarSection>
          <NavItem href="/">{t("menu-home")}</NavItem>
          <NavItem href="/about">{t("menu-about")}</NavItem>
          <NavItem href="/work">{t("menu-work")}</NavItem>
          <NavItem href="/contact">{t("menu-contact")}</NavItem>
        </NavbarSection>
      </Navbar>
    </nav>
  );
}

// ------------------------------------------------------------------------------------------------

function ThemeToggle() {
  const t = useTranslations("Header");
  const {resolvedTheme, setTheme} = useTheme();
  const otherTheme = resolvedTheme === "dark" ? t("theme-light") : t("theme-dark");
  const setOtherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? otherTheme : t("theme-toggle")}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(setOtherTheme)}>
      <motion.span
        animate={{rotate: setOtherTheme === "dark" ? 180 : 0}}
        transition={{duration: 0.5, ease: "easeInOut"}} // Controla a duração e suavidade da rotação
        className="flex items-center">
        <FontAwesomeIcon
          icon={faCircleHalfStroke}
          className="size-5 text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
        />
      </motion.span>
    </button>
  );
}

// ------------------------------------------------------------------------------------------------

function LocaleToggle() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const [resolvedLocale, setLocale] = useState(locale);
  const otherLocale = resolvedLocale === "br" ? t("locale-en") : t("locale-br");
  const [mounted, setMounted] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link
      href={path}
      locale={resolvedLocale === "br" ? "en" : "br"}
      aria-label={mounted ? otherLocale : t("locale-toggle")}
      className="flex items-center group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setLocale(otherLocale)}>
      {resolvedLocale === "br" ? <Emoji symbol="🇺🇸" label="English" /> : <Emoji symbol="🇧🇷" label="Português" />}
    </Link>
  );
}

// ------------------------------------------------------------------------------------------------

function AvatarContainer({className, ...props}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
      )}
      {...props}
    />
  );
}

// ------------------------------------------------------------------------------------------------

function Avatar({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  large?: boolean;
}) {
  const t = useTranslations("Header");

  return (
    <Link href="/" aria-label={t("menu-home")} className={clsx(className, "pointer-events-auto")} {...props}>
      <div className={clsx("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800", large ? "h-16 w-16" : "h-9 w-9")}>
        {" "}
        <Image
          src={Bruno}
          alt=""
          sizes={large ? "4rem" : "2.25rem"}
          className={clsx("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800", large ? "h-16 w-16" : "h-9 w-9")}
          priority
        />
      </div>
    </Link>
  );
}

// ------------------------------------------------------------------------------------------------

export function Header() {
  return (
    <>
      <header className="pointer-events-none relative z-50 flex flex-none flex-col">
        <div className="h-16 pt-6">
          <Container className="w-full">
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                <AvatarContainer>
                  <Avatar />
                </AvatarContainer>
              </div>

              {/*
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              */}

              <div className="flex items-center justify-end md:flex-1 pointer-events-auto gap-2">
                <LocaleToggle />
                <ThemeToggle />
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}

// ------------------------------------------------------------------------------------------------
