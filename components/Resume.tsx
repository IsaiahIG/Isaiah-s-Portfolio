"use client";

import { IoBriefcaseOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";

export default function Resume() {
  return (
    <section className="lg:min-h-screen bg-neutral-900 flex lg:p-5 px-1 overflow-x-hidden py-3">
      <div className="w-full mx-auto max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <div className="mx-auto space-y-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-mono tracking-widest text-fuchsia-700">
            Career Snapshot
          </h1>

          <div className="flex-col space-y-15">
            <div className="relative grid-cols-2 flex gap-x-6">
              <div className="flex justify-center relative z-10 items-center w-15 h-15 bg-neutral-800 border text-fuchsia-700 border-neutral-900 border-t-neutral-700 border-l-neutral-700 rounded-xl lg:shadow-2xl shadow-fuchsia-400">
                <IoBriefcaseOutline className="w-10 h-10" />
              </div>

              <div className="h-full w-px absolute border-2 border-fuchsia-700 bg-fuchsia-700 left-7.5 top-0"></div>

              <div className="flex-1 min-w-0 space-y-6 w-full max-w-full lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl">
                <div className="w-full px-3">
                  <h2 className="text-2xl sm:text-3xl xl:text-3xl tracking-widest font-mono py-3 font-semibold text-fuchsia-700">
                    Experience
                  </h2>
                </div>

                <div className="px-1">
                  <ul className="space-y-20">
                    <li className="relative min-w-0">
                      <div className="min-w-0 max-w-full">
                        <div className="relative">
                          <span className="absolute -left-15.5 top-1 h-3 w-3 rounded-full bg-fuchsia-700 shadow-[0_0_12px_rgba(217,70,239,0.8)]" />
                        </div>

                        <div className="px-3 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-x-4 gap-y-1 min-w-0">
                            <h1 className="text-base sm:text-lg xl:text-xl font-semibold text-gray-100 leading-tight min-w-0 wrap-break-word">
                              Freelance Software Developer
                            </h1>
                            <p className="text-xs sm:text-sm xl:text-base font-mono text-fuchsia-700 whitespace-nowrap shrink-0">
                              Jan 2026 — Present
                            </p>
                          </div>

                          <p className="text-xs sm:text-sm xl:text-base text-fuchsia-700 wrap-break-word">
                            NorthBound LLC
                          </p>

                          <ul className="mt-3 space-y-2 text-sm xl:text-base text-gray-300 list-disc pl-5 leading-relaxed wrap-break-word">
                            <li>
                              Helped fix front-end UI issues and bugs across
                              pages to keep the site polished and consistent.
                            </li>
                            <li>
                              Implemented automatic light/dark mode based on the
                              user’s system preference.
                            </li>
                            <li>
                              Worked in a React + TypeScript + Tailwind setup and
                              made updates that were easy for the team to
                              maintain.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="relative min-w-0">
                      <div className="min-w-0 max-w-full">
                        <div className="relative">
                          <span className="absolute -left-15.5 top-1 h-3 w-3 rounded-full bg-fuchsia-700 shadow-[0_0_12px_rgba(217,70,239,0.8)]" />
                        </div>

                        <div className="px-3 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-x-4 gap-y-1 min-w-0">
                            <h1 className="text-base sm:text-lg xl:text-xl font-semibold text-gray-100 leading-tight min-w-0 wrap-break-word">
                              Frontend Developer
                            </h1>
                            <p className="text-xs sm:text-sm xl:text-base font-mono text-fuchsia-700 whitespace-nowrap shrink-0">
                              Aug 2025 — Dec 2026
                            </p>
                          </div>

                          <p className="text-xs sm:text-sm xl:text-base text-fuchsia-700 wrap-break-word">
                            Retriever Proposal Portal
                          </p>

                          <ul className="mt-3 space-y-2 text-sm xl:text-base text-gray-300 list-disc pl-5 leading-relaxed wrap-break-word">
                            <li>
                              Developed the core frontend experience for a portal
                              connecting UMBC students with stakeholder-led
                              project opportunities
                            </li>
                            <li>
                              Integrated the UI with backend APIs, adding error
                              handling, and smooth loading states for a reliable
                              user experience.
                            </li>
                            <li>
                              Built reusable UI components and responsive layouts
                              using react, tailwind, typescript and nextjs setup,
                              achieving consistent interface.
                            </li>
                            <li>
                              Created project’s MVP write-up, defining scope,
                              user stories, success criteria, and a phased
                              feature roadmap to align the team and guide sprint
                              execution
                            </li>
                            <li>
                              Collaborated in Agile sprints, working closely
                              with teammates and faculty stakeholders to iterate
                              on requirements and deliver demo-ready features.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="relative min-w-0">
                      <div className="min-w-0 max-w-full">
                        <div className="relative">
                          <span className="absolute -left-15.5 top-1 h-3 w-3 rounded-full bg-fuchsia-700 shadow-[0_0_12px_rgba(217,70,239,0.8)]" />
                        </div>

                        <div className="px-3 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-x-4 gap-y-1 min-w-0">
                            <h1 className="text-base sm:text-lg xl:text-xl font-semibold text-gray-100 leading-tight min-w-0 wrap-break-word">
                              Engineering and Operations Intern
                            </h1>
                            <p className="text-xs sm:text-sm xl:text-base font-mono text-fuchsia-700 whitespace-nowrap shrink-0">
                              Sep 2024 — Oct 2025
                            </p>
                          </div>

                          <p className="text-xs sm:text-sm xl:text-base text-fuchsia-700 wrap-break-word">
                            UMBC Observatory • Baltimore, MD
                          </p>

                          <ul className="mt-3 space-y-2 text-sm xl:text-base text-gray-300 list-disc pl-5 leading-relaxed wrap-break-word">
                            <li>
                              Operated a DFM telescope through data and control
                              computers.
                            </li>
                            <li>
                              Used Stellarium to explore and analyze celestial
                              objects and better visualize the night sky.
                            </li>
                            <li>
                              Supported troubleshooting of equipment connectivity
                              issues to improve operational efficiency.
                            </li>
                            <li>
                              Collaborated in staff meetings to plan and execute
                              projects, supporting both operations and software
                              development.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative grid-cols-2 flex gap-x-6">
              <div className="flex justify-center relative z-10 items-center w-15 h-15 bg-neutral-800 border text-fuchsia-700 border-neutral-900 border-t-neutral-700 border-l-neutral-700 rounded-xl  lg:shadow-2xl shadow-fuchsia-400">
                <LuGraduationCap className="w-10 h-10" />
              </div>

              <div className="h-full w-px absolute border-2 border-fuchsia-700 bg-fuchsia-700 left-7.5 top-0"></div>

              <div className="flex-1 min-w-0 space-y-6 w-full max-w-full lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl">
                <div className="w-full px-3">
                  <h2 className="text-2xl sm:text-3xl xl:text-3xl tracking-widest font-mono py-3 font-semibold text-fuchsia-700">
                    Education
                  </h2>
                </div>

                <div className="px-1">
                  <ul className="space-y-30">
                    <li className="relative min-w-0">
                      <div className="min-w-0 max-w-full">
                        <div className="relative">
                          <span className="absolute -left-15.5 top-1 h-3 w-3 rounded-full bg-fuchsia-700 shadow-[0_0_12px_rgba(217,70,239,0.8)]" />
                        </div>

                        <div className="px-3 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-x-4 gap-y-1 min-w-0">
                            <h1 className="text-base sm:text-lg xl:text-xl font-semibold text-gray-100 leading-tight min-w-0 wrap-break-word">
                              University of Maryland, Baltimore County
                            </h1>
                            <p className="text-xs sm:text-sm xl:text-base font-mono text-fuchsia-700 whitespace-nowrap shrink-0">
                              Aug 2022 — May 2026
                            </p>
                          </div>

                          <p className="text-sm xl:text-base text-gray-300 pt-2 wrap-break-word">
                            B.S. Computer Science • Baltimore, MD
                          </p>

                          <div className="mt-3 min-w-0">
                            <p className="text-sm xl:text-base font-semibold text-gray-200">
                              Relevant Coursework
                            </p>
                            <p className="text-sm xl:text-base text-gray-300 pt-2 leading-relaxed wrap-break-word">
                              Data Structures • Algorithms • OOP • Software
                              engineering • Databases • OS • Computer
                              architechture
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
