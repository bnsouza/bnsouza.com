// ------------------------------------------------------------------------------------------------
"use client";

import {useEffect, useRef, useState} from "react";
import {
  faBallotCheck,
  faCode,
  faDatabase,
  faGearCode,
  faPenNib,
  faPersonCane,
  faPhotoFilmMusic,
  faSitemap,
  faSparkles,
  faSquareTerminal,
} from "@awesome.me/kit-69a64c1416/icons/classic/regular";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

import {Badge} from "../catalyst/badge";

// ------------------------------------------------------------------------------------------------

interface TextGradientProps {
  text: string;
  from?: string;
  via?: string;
  to?: string;
}

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: any;
  colorBtn: string;
  colorTxt: string;
  skills: Skill[];
}
// ------------------------------------------------------------------------------------------------

const skills: Record<string, SkillCategory> = {
  frontend: {
    icon: faCode,
    colorBtn: "bg-red-500 dark:bg-red-400 text-red-50 dark:text-red-950",
    colorTxt: "text-red-500 dark:text-red-400",
    skills: [
      {name: "Angular", level: 3},
      {name: "CSS", level: 5},
      {name: "Framer Motion", level: 4},
      {name: "HTML", level: 5},
      {name: "Ionic", level: 4},
      {name: "Next.js", level: 5},
      {name: "React", level: 4},
      {name: "Tailwind CSS", level: 5},
    ],
  },
  backend: {
    icon: faSquareTerminal,
    colorBtn: "bg-orange-500 dark:bg-orange-400 text-orange-50 dark:text-orange-950",
    colorTxt: "text-orange-500 dark:text-orange-400",
    skills: [
      {name: "Django", level: 3},
      {name: "Express", level: 4},
      {name: "FastAPI", level: 4},
      {name: "Laravel", level: 3},
      {name: "Node.js", level: 5},
    ],
  },
  architecture: {
    icon: faSitemap,
    colorBtn: "bg-yellow-500 dark:bg-yellow-400 text-yellow-50 dark:text-yellow-950",
    colorTxt: "text-yellow-500 dark:text-yellow-400",
    skills: [
      {name: "Event-Driven Architecture", level: 4},
      {name: "Edge Computing", level: 4},
      {name: "GraphQL", level: 3},
      {name: "Micro Frontends", level: 3},
      {name: "Microservices", level: 4},
      {name: "REST API", level: 5},
      {name: "Serverless", level: 5},
      {name: "Vercel", level: 5},
    ],
  },
  database: {
    icon: faDatabase,
    colorBtn: "bg-lime-500 dark:bg-lime-400 text-lime-50 dark:text-lime-950",
    colorTxt: "text-lime-500 dark:text-lime-400",
    skills: [
      {name: "DynamoDB", level: 4},
      {name: "MongoDB", level: 4},
      {name: "MySQL", level: 5},
      {name: "PostgreSQL", level: 5},
      {name: "Redis", level: 3},
    ],
  },
  devops: {
    icon: faGearCode,
    colorBtn: "bg-emerald-500 dark:bg-emerald-400 text-emerald-50 dark:text-emerald-950",
    colorTxt: "text-emerald-500 dark:text-emerald-400",
    skills: [
      {name: "AWS", level: 5},
      {name: "Bref (PHP)", level: 4},
      {name: "CI/CD", level: 5},
      {name: "CloudFormation", level: 5},
      {name: "Docker", level: 4},
      {name: "Git", level: 5},
      {name: "GitHub Actions", level: 4},
      {name: "Grafana", level: 1},
      {name: "Jenkins", level: 2},
      {name: "Kubernetes", level: 3},
      {name: "Prometheus", level: 1},
      {name: "Terraform", level: 3},
    ],
  },
  ia: {
    icon: faSparkles,
    colorBtn: "bg-teal-500 dark:bg-teal-400 text-teal-50 dark:text-teal-950",
    colorTxt: "text-teal-500 dark:text-teal-400",
    skills: [
      {name: "AutoGen", level: 4},
      {name: "AWS SageMaker", level: 2},
      {name: "ChatGPT", level: 5},
      {name: "LangChain", level: 3},
      {name: "Llama", level: 2},
    ],
  },
  tests: {
    icon: faBallotCheck,
    colorBtn: "bg-blue-500 dark:bg-blue-400 text-blue-50 dark:text-blue-950",
    colorTxt: "text-blue-500 dark:text-blue-400",
    skills: [
      {name: "Codecov", level: 3},
      {name: "Datadog", level: 3},
      {name: "Jest", level: 3},
      {name: "New Relic", level: 4},
      {name: "pytest", level: 3},
      {name: "Sentry", level: 3},
      {name: "Unit Testing", level: 4},
    ],
  },
  design: {
    icon: faPenNib,
    colorBtn: "bg-indigo-500 dark:bg-indigo-400 text-indigo-50 dark:text-indigo-950",
    colorTxt: "text-indigo-500 dark:text-indigo-400",
    skills: [
      {name: "Figma", level: 4},
      {name: "Photoshop", level: 4},
      {name: "Sketch", level: 2},
      {name: "UI/UX", level: 4},
    ],
  },
  animation: {
    icon: faPhotoFilmMusic,
    colorBtn: "bg-fuchsia-500 dark:bg-fuchsia-400 text-fuchsia-50 dark:text-fuchsia-950",
    colorTxt: "text-fuchsia-500 dark:text-fuchsia-400",
    skills: [
      {name: "After Effects", level: 3},
      {name: "Premiere", level: 4},
      {name: "Remotion", level: 4},
    ],
  },
  legacy: {
    icon: faPersonCane,
    colorBtn: "bg-pink-500 dark:bg-pink-400 text-pink-50 dark:text-pink-950",
    colorTxt: "text-pink-500 dark:text-pink-400",
    skills: [{name: "COBOL", level: 3}],
  },
};

// ------------------------------------------------------------------------------------------------

function TextGradient(props: TextGradientProps) {
  const from = props.from || "from-red-600 dark:from-red-200";
  const via = props.via || "via-emerald-600 dark:via-emerald-200";
  const to = props.to || "to-violet-600 dark:to-violet-200";

  return (
    <span
      className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text font-bold bg-300% animate-gradient`}>
      {props.text}
    </span>
  );
}

// ------------------------------------------------------------------------------------------------

const SkillBar = ({name, level, colorBtn}: {name: string; level: number; colorBtn: string}) => {
  const maxLevel = 5;
  return (
    <div className="mb-2">
      <div className="flex flex-1 items-center justify-between text-base mb-1 tracking-tight">
        {level === maxLevel ? <TextGradient text={name} /> : <span className="font-medium">{name}</span>}
        <div className="flex items-center gap-3">
          <Badge className="rounded-full">
            {level}/{maxLevel}
          </Badge>
          <div className="flex space-x-1">
            {Array.from({length: maxLevel}, (_, index) => (
              <motion.div
                key={index}
                className={`w-4 h-4 rounded-full ${index < level ? colorBtn : "bg-zinc-200 dark:bg-zinc-700"}`}
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------------------------------------

export default function SkillSheet() {
  // Translations
  const t = useTranslations("Skills");

  // States
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(skills)[0]);
  const [divHeight, setDivHeight] = useState<number | string>("auto");

  // Refs
  const contentRef = useRef<HTMLDivElement>(null);

  // Effects (Update div height)
  useEffect(() => {
    if (contentRef.current) {
      setDivHeight(contentRef.current.offsetHeight);
    }
  }, [selectedCategory]);

  return (
    <div className="flex flex-col justify-center">
      <div className="relative sm:max-w-xl">
        <div className="relative px-4 py-10 bg-zinc-50 dark:bg-zinc-800 shadow-lg sm:rounded-3xl sm:p-12">
          <motion.div
            initial={{height: divHeight}}
            animate={{height: divHeight}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            style={{overflow: "hidden"}}>
            <div ref={contentRef}>
              <div>
                <h1 className="text-2xl font-semibold text-center text-zinc-900 dark:text-white tracking-tight animate-pulse">
                  {t("title")}
                </h1>
              </div>
              <div className="pt-8 text-base leading-6 px-2 space-y-4 text-zinc-700 dark:text-zinc-200 sm:text-lg sm:leading-7">
                <div className="grid grid-rows-2 grid-cols-5 gap-2 mb-4">
                  {Object.entries(skills).map(([category, {icon, colorBtn}]) => (
                    <motion.button
                      key={category}
                      className={`flex size-12 items-center justify-center rounded-full ${
                        selectedCategory === category
                          ? colorBtn
                          : "bg-zinc-800 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-700"
                      }`}
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.95}}
                      onClick={() => setSelectedCategory(category)}>
                      <FontAwesomeIcon icon={icon} className="size-6" />
                    </motion.button>
                  ))}
                </div>
                <motion.h2
                  key={selectedCategory}
                  initial={{opacity: 0, y: 10}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 10}}
                  transition={{duration: 0.3, ease: "easeOut"}}
                  className={`${skills[selectedCategory].colorTxt} flex items-center justify-center text-center w-full text-xl font-semibold mb-2 tracking-tight h-16`}>
                  {t(selectedCategory as any)}
                </motion.h2>
                {skills[selectedCategory].skills.map((skill: any, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 10}}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}>
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      colorBtn={skills[selectedCategory].colorBtn}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------
