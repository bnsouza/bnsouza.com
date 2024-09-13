// ------------------------------------------------------------------------------------------------
"use client";

import {useEffect, useState} from "react";
import {faArrowDown} from "@awesome.me/kit-69a64c1416/icons/classic/regular";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Headless from "@headlessui/react";
import Emoji from "a11y-react-emoji";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

import {Label} from "@/components/catalyst/fieldset";
import {Select} from "@/components/catalyst/select";

// ------------------------------------------------------------------------------------------------

export function Hero() {
  // Translations
  const t = useTranslations("Hero");

  // Tabs & Phrases
  const tabs = t("tabs").split("|");
  const phrases = t("phrases").split("|");

  // States
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-black dark:text-white overflow-hidden -mt-16">
      {/* Hello */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight text-center">
        <p>
          <Emoji symbol="👋" label={t("emoji")} /> {t("hello")}
        </p>
      </h1>

      <div className="relative max-w-4xl w-full z-10">
        {/* Small Screens */}
        <Headless.Field className="flex items-center justify-center gap-2 my-6 md:hidden">
          <Label className="px-3 mt-0.5 text-sm animate-pulse rounded-full border border-zinc-700">{t("choose")}</Label>
          <Select
            name="status"
            className="w-40"
            onChange={(e) => {
              setActiveTab(parseInt(e.target.value));
            }}
            value={activeTab}>
            {tabs.map((tab, index) => (
              <option key={index} value={index}>
                {tab}
              </option>
            ))}
          </Select>
        </Headless.Field>

        {/* Medium & Large Screens */}
        <nav className="my-6 hidden md:block">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-base tracking-tight">
            <li className="px-3 text-sm animate-pulse rounded-full border border-zinc-700">{t("choose")}</li>
            {tabs.map((tab, index) => (
              <li key={tab} className="flex relative items-center justify-center px-4 py-1">
                {activeTab === index && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute w-full h-8 rounded-full bg-zinc-800 dark:bg-zinc-200 z-0"
                  />
                )}
                <button
                  onClick={() => setActiveTab(index)}
                  className={`transition-all relative z-20 ${
                    activeTab === index ? "opacity-100 text-zinc-200 dark:text-zinc-800" : "opacity-50 hover:opacity-75"
                  }`}>
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phrases */}
        <main className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
            {phrases[activeTab]}
          </h1>
        </main>
      </div>

      {/* Arrow */}
      <div
        className={`absolute flex items-center justify-center inset-x-0 bottom-4 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="w-20">
          <div className="flex items-center justify-center rounded-full animate-bounce size-12 bg-black text-white dark:bg-white dark:text-black">
            <FontAwesomeIcon icon={faArrowDown} className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------
