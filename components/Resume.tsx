"use client";

import { IoBriefcaseOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";

export default function Resume() {
  return (
    <section className="lg:min-h-screen bg-neutral-900 flex lg:p-5 px-1 overflow-x-hidden py-3">
      <div className="max-w-4xl">
        <div className="mx-auto space-y-12 ">
          <h1 className="lg:text-4xl  font-mono tracking-widest text-xl text-fuchsia-700">
            {" "}
            Career Snapshot
          </h1>

          <div className="flex-col space-y-15 ">
            {/* EXPERIENCE */}
            <div className=" relative grid-cols-2 flex gap-x-6">
              <div className="flex justify-center relative z-10 items-center w-15 h-15 bg-neutral-800 border text-fuchsia-700  border-neutral-900  border-t-neutral-700 border-l-neutral-700 rounded-xl shadow-2xl shadow-fuchsia-400">
                <IoBriefcaseOutline className="w-10 h-10" />
              </div>

              <div className="h-full w-px absolute border-2 border-fuchsia-700 bg-fuchsia-700  left-7.5 top-0  "></div>

              <div className="flex-1 min-w-0  space-y-6 max-w-lg ">
                <div className="w-full px-3 ">
                  <h2 className="text-3xl tracking-widest font-mono  py-3  font-semibold text-fuchsia-700">
                    Experience
                  </h2>
                </div>

                <div className="px-1 ">
                  <ul className="space-y-30">
                    {/* NorthBound (Most recent) */}
                    <li className="relative min-w-0  ">
                      <div className="min-w-0 max-w-full">
                        <div className="relative">
                          <span className="absolute -left-15.5  top-1 h-3 w-3 rounded-full bg-fuchsia-700  shadow-[0_0_12px_rgba(217,70,239,0.8)]" />
                        </div>

                        <div className="px-3">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 min-w-0">
                            <h1 className="text-lg font-semibold text-gray-100 leading-tight min-w-0">
                              Freelance Software Developer
                            </h1>
                            <p className="text-sm font-mono text-fuchsia-700 whitespace-nowrap">
                              Jan 2026 — Present
                            </p>
                          </div>

                          <p className="text-sm text-fuchsia-700">
                            NorthBound LLC
                          </p>

                          <ul className="mt-3 space-y-2 text-sm text-gray-300  list-disc pl-5">
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
                              made updates that were easy for the team to maintain.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>


                      {/* Retriever Proposal Portal */}
                      <li className="relative min-w-0 ">
                      <div className="min-w-0 max-w-full">
                        <div className="relative">
                          <span className="absolute -left-15.5  top-1 h-3 w-3 rounded-full bg-fuchsia-700  shadow-[0_0_12px_rgba(217,70,239,0.8)]" />
                        </div>

                        <div className="px-3">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 min-w-0">
                            <h1 className="text-lg font-semibold text-gray-100 leading-tight min-w-0">
                              Frontend Developer 
                            </h1>
                            <p className="text-sm font-mono text-fuchsia-700 whitespace-nowrap">
                              Aug 2025 — Dec 2026
                            </p>
                          </div>

                          <p className="text-sm text-fuchsia-700">
                            Retriever Proposal Portal 
                          </p>

                          <ul className="mt-3 space-y-2 text-sm text-gray-300  list-disc pl-5">
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
                              made updates that were easy for the team to maintain.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>


                    {/* UMBC Observatory */}
                    <li className="relative min-w-0  ">
                      <div className="min-w-0 max-w-full">
                        <div className="relative">
                          <span className="absolute -left-15.5  top-1 h-3 w-3 rounded-full bg-fuchsia-700  shadow-[0_0_12px_rgba(217,70,239,0.8)]" />
                        </div>

                        <div className="px-3">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 min-w-0">
                            <h1 className="text-lg font-semibold text-gray-100 leading-tight min-w-0">
                              Engineering and Operations Intern
                            </h1>
                            <p className="text-sm font-mono text-fuchsia-700 whitespace-nowrap">
                              Sep 2024 — Oct 2025
                            </p>
                          </div>

                          <p className="text-sm text-fuchsia-700">
                            UMBC Observatory • Baltimore, MD
                          </p>

                          <ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc pl-5">
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

            {/** EDUCATION **/}
            <div className=" relative  grid-cols-2 flex gap-x-6">
              <div className="flex justify-center relative z-10 items-center w-15 h-15 bg-neutral-800 border text-fuchsia-700  border-neutral-900  border-t-neutral-700 border-l-neutral-700 rounded-xl shadow-2xl shadow-fuchsia-400">
                <LuGraduationCap className="w-10 h-10" />
              </div>

              <div className="h-full w-px absolute border-2 border-fuchsia-700 bg-fuchsia-700  left-7.5 top-0  "></div>

              <div className="flex-1 min-w-0  space-y-6 max-w-lg ">
                <div className="w-full px-3 ">
                  <h2 className="text-3xl tracking-widest font-mono  py-3  font-semibold text-fuchsia-700">
                    Education
                  </h2>
                </div>

                <div className="px-1 ">
                  <ul className="space-y-30">
                    {/* UMBC */}
                    <li className="relative min-w-0  ">
                      <div className="min-w-0 max-w-full">
                        <div className="relative">
                          <span className="absolute -left-15.5  top-1 h-3 w-3 rounded-full bg-fuchsia-700  shadow-[0_0_12px_rgba(217,70,239,0.8)]" />
                        </div>

                        <div className="px-3">
                          <div className="flex  items-baseline justify-between gap-x-4 gap-y-1 min-w-0">
                            <h1 className="text-lg font-semibold text-gray-100 leading-tight min-w-0">
                              University of Maryland, Baltimore County
                            </h1>
                            <span><p className="text-sm font-mono text-fuchsia-700 whitespace-nowrap">
                            Aug 2022 — May 2026
                            </p></span>
                          </div>

                          <p className="text-sm text-gray-300 pt-2">
                            B.S. Computer Science • Baltimore, MD
                          </p>

                          <div className="mt-3">
                            <p className="text-sm font-semibold text-gray-200">
                              Relevant Coursework
                            </p>
                            <p className="text-sm text-gray-300 pt-2 leading-relaxed">
                              Data Structures • Algorithms •  OOP • Software engineering • Databases • OS • Computer architechture
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

        
                  
                  </ul>
                </div>
              </div>
            </div>
            {/* END */}
          </div>
        </div>
      </div>
    </section>
  );
}
