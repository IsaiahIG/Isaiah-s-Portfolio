/** @format */

"use client";

import { Icon } from "@iconify/react";

const skills = [
  {
    name: "Python",
    icon: "logos:python",
    hover: "hover:bg-yellow-500/20 hover:ring-yellow-400/40",
  },
  {
    name: "C++",
    icon: "devicon:cplusplus",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "C",
    icon: "arcticons:clanguage",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "Nextjs",
    icon: "devicon:nextjs",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "React",
    icon: "logos:react",
    hover: "hover:bg-yellow-500/20 hover:ring-yellow-400/40",
  },
  {
    name: "Typescript",
    icon: "devicon:typescript",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "HTML",
    icon: "devicon:html5",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "CSS",
    icon: "devicon:css3",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
];

const technologies = [
  {
    name: "VsCode",
    icon: "devicon:vscode",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "Putty",
    icon: "devicon:putty",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "Docker",
    icon: "skill-icons:docker",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "Bruno",
    icon: "devicon:bruno",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "BeeKeeperStudio",
    icon: "simple-icons:beekeeperstudio",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "Github",
    icon: "simple-icons:github",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "WireShark",
    icon: "simple-icons:wireshark",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "Splunk",
    icon: "simple-icons:splunk",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
  {
    name: "Jira",
    icon: "devicon:jira",
    hover: "hover:bg-neutral-800 hover:ring-white/10",
  },
];

export default function About() {
  return (
    <div className="bg-neutral-900 flex-col p-3  lg:min-h-screen   flex">
      <div className="bg-neutral-900  space-y-12">
        <div className="space-y-10">
          <h1 className=" text-4xl leading-relaxed text-fuchsia-700  tracking-widest font-mono ">
            Who Am I?
          </h1>

          <p className=" font-mono  text-gray-300">
            {" "}
            I'm Isaiah Ghansam, a student developer based in West Virginia, USA.
            Passionate about programming and building scalable solutions to to
            solve real world problems.
          </p>

          <p className="pt font-mono   text-gray-300">
            {" "}
            I am currently enrolled in my final semester at a R1 college
            institute known as the University of Maryland Baltimore County. I
            love expanding my knowledge in the field of computer science,
            learning new technologies and turning creative ideas into accessible
            tools.
          </p>
        </div>

        <div className=" flex-col space-y-8 ">
          <h1 className="text-2xl text-fuchsia-700 font-mono pt-10 tracking-widest">
            Technical Skills
          </h1>

          <div className="flex-wrap gap-8 p-2.5 justify-center bg-black/40 rounded-2xl border border-neutral-700 shadow-2xl shadow-neutral-800 flex">
            {skills.map((s) => (
              <span
                key={s.name}
                className={[
                  "inline-flex size-12 items-center justify-center rounded-xl",
                  "bg-neutral-800/50 ring-1 ring-white/10 transition",
                  s.hover,
                ].join(" ")}
                title={s.name}
              >
                <Icon icon={s.icon} className="size-10" />
              </span>
            ))}
          </div>
          <div className="flex-col space-y-8">
            <h1 className="text-2xl text-fuchsia-700 tracking-widest font-mono">
              Tools & Platforms
            </h1>

            <div className="flex-wrap gap-8 p-2.5 justify-center bg-black/40 rounded-2xl border border-neutral-700 shadow-2xl shadow-neutral-800 flex">
              {technologies.map((t) => (
                <span
                  key={t.name}
                  className={[
                    "inline-flex size-12 items-center justify-center rounded-xl bg-neutral-800/50 ring-1 ring-white/10 transition",
                    t.hover,
                  ].join(" ")}
                  title={t.name}
                >
                  <Icon icon={t.icon} className="size-10" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
