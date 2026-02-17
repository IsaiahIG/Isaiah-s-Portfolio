"use client";
import { IoIosMail, IoIosArrowDown } from "react-icons/io";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaRegFileAlt } from "react-icons/fa";

import { useState } from "react";

import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Extracirriculars from "@/components/Extracirriculars";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<
    "about" | "resume" | "projects" | "certifications" | "extracirriculars"
  >("about");

  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

  function renderPage() {
    switch (currentPage) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "certifications":
        return <Certifications />;
      case "extracirriculars":
        return <Extracirriculars />;
      default:
        return null;
    }
  }

  return (
    <main className="w-full overflow-x-hidden bg-neutral-950 min-h-screen pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl 2xl:max-w-7xl px-4 2xl:px-1 lg:px-10 pt-12 pb-14 flex flex-col 2xl:flex-row lg:flex-row gap-10 2xl:space-x-55 lg:gap-5 py-1 2xl:items-stretch lg:items-stretch">
        <aside className="lg:w-69 2xl:w-30 shrink-0">
          <div className="lg:fixed 2xl:fixed 2xl:w-80 lg:w-67 bg-neutral-900 border-white/30 border rounded-3xl lg:h-147 2xl:h-292 overflow-hidden">
            <div className="lg:hidden relative px-4 py-3">
              <div className="flex items-center gap-3 pr-12">
                <img
                  className="size-12 rounded-2xl object-cover border border-neutral-700"
                  src="Profilepic.jpg"
                  alt="a photo of me"
                />
                <div className="min-w-0">
                  <p className="font-mono font-bold tracking-widest text-gray-200 truncate">
                    Isaiah Ghansam
                  </p>
                  <span className="inline-flex mt-1 px-3 py-1 text-xs tracking-widest rounded-full bg-neutral-800/70 border border-neutral-700 text-gray-200">
                    Software Developer
                  </span>
                </div>
              </div>

              <button
                type="button"
                aria-controls="mobile-profile"
                aria-expanded={mobileProfileOpen}
                onClick={() => setMobileProfileOpen((v) => !v)}
                className="absolute right-3 top-3 size-9 rounded-full grid place-items-center bg-neutral-800/70 border border-neutral-700"
              >
                <IoIosArrowDown
                  className={`text-xl text-fuchsia-700 transition-transform ${
                    mobileProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <div
              id="mobile-profile"
              className={`${mobileProfileOpen ? "block" : "hidden"} lg:block`}
            >
              <div className="bg-neutral-900 p-7 rounded-3xl shadow-2xl 2xl:space-y-10 px-5 flex flex-col gap-6 h-full">
                <div className="hidden lg:flex justify-center">
                  <img
                    className="rounded-2xl font-w-40 md:w-40 2xl:w-55 lg:w-48 backdrop-opacity-100"
                    src="Profilepic.jpg"
                    alt="a photo of me"
                  />
                </div>

                <h1 className="hidden lg:block text-xl text-gray-200 font-bold tracking-widest text-center font-mono">
                  Isaiah Ghansam
                </h1>

                <p className="hidden lg:block text-md  text-gray-200 text-center p-2 tracking-widest rounded-2xl shadow-2xl border-2 border-neutral-800 bg-fuchsia-800">
                  Software Developer
                </p>

                <div className="hidden lg:block bg-neutral-600 h-px w-full"></div>
                <div className="lg:hidden h-px w-full bg-neutral-700"></div>

                <a
                  href="mailto:iighansam@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3"
                >
                  <span className="grid place-items-center size-9 lg:size-11 rounded-lg hover:bg-neutral-800  transition-all hover:shadow-2xl hover:-translate-y-1 hover:shadow-neutral-800 ">
                    <IoIosMail className="text-2xl lg:text-4xl " />
                  </span>

                  <div className="leading-tight min-w-0">
                    <p className="text-xs uppercase tracking-widest font-bold text-fuchsia-700">
                      Email
                    </p>
                    <p className="text-sm text-gray-200 tracking-widest break-all">
                      iighansam@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=West%20Virginia%2C%20USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3"
                >
                  <span className="grid place-items-center  size-9 lg:size-11 rounded-lg hover:bg-neutral-800   transistion-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-800">
                    <CiLocationOn className="text-2xl   lg:text-4xl" />
                  </span>

                  <div className="leading-tight min-w-0">
                    <p className="text-xs uppercase tracking-widest text-fuchsia-700 font-bold">
                      Location
                    </p>
                    <p className="text-sm text-gray-200 tracking-widest">West Virginia, US</p>
                  </div>
                </a>

                <div className="h-px w-full bg-neutral-700"></div>

                <footer className="flex justify-between">
                  <a
                    href="https://www.linkedin.com/in/isaiah-ghansam-5a97832b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-neutral-800 hover:shadow-2xl hover:shadow-neutral-800 hover:-translate-y-1 transition-all"
                  >
                    <CiLinkedin className="size-7 lg:size-8" />
                  </a>

                  <a
                    href="https://github.com/IsaiahIG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-neutral-800 hover:bg-neutral hover:shadow-2xl hover:shadow-neutral-800 transition-all hover:-translate-y-1"
                  >
                    <FaGithub className="size-6 lg:size-7" />
                  </a>

                  <a
                    href="Isaiahs_Updated_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 hover:bg-neutral-800 hover:shadow-2xl hover:-translate-y-1   hover:shadow-neutral-800 transition-all"
                  >
                    <FaRegFileAlt className="text-xl lg:text-2xl" />
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <div className="relative min-w-0 rounded-3xl border border-white/30 bg-neutral-900 shadow-2xl p-8 pb-28 lg:pb-8">
            <nav className="absolute right-0 top-0 hidden lg:block">
              <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto whitespace-nowrap rounded-bl-3xl rounded-tr-3xl overflow-hidden bg-neutral-700/20 border border-neutral-700 px-5 py-4 text-sm font-semibold">
                <button
                  onClick={() => setCurrentPage("about")}
                  className={`cursor-pointer hover:text-fuchsia-700 transition ${
                    currentPage == "about"
                      ? " text-fuchsia-700"
                      : " text-gray-200"
                  }`}
                >
                  About
                </button>

                <button
                  onClick={() => setCurrentPage("resume")}
                  className={`cursor-pointer hover:text-fuchsia-700 transition ${
                    currentPage == "resume"
                      ? "text-fuchsia-700 "
                      : "text-gray-200"
                  }`}
                >
                  Resume
                </button>

                <button
                  onClick={() => setCurrentPage("projects")}
                  className={`cursor-pointer hover:text-fuchsia-700 ${
                    currentPage == "projects"
                      ? "text-fuchsia-700"
                      : "text-gray-200"
                  }`}
                >
                  Projects
                </button>

                <button
                  onClick={() => setCurrentPage("certifications")}
                  className={`cursor-pointer hover:text-fuchsia-700 ${
                    currentPage == "certifications"
                      ? "text-fuchsia-700"
                      : "text-gray-200"
                  }`}
                >
                  Certifications
                </button>

                <button
                  onClick={() => setCurrentPage("extracirriculars")}
                  className={`cursor-pointer hover:text-fuchsia-700 ${
                    currentPage == "extracirriculars"
                      ? "text-fuchsia-700"
                      : "text-gray-200"
                  }`}
                >
                  Extracirriculars
                </button>
              </div>
            </nav>

            <div className="pt-5">{renderPage()}</div>
          </div>
        </section>
      </div>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
        <div className="mx-auto max-w-7xl rounded-3xl bg-neutral-700/20 border border-neutral-700 backdrop-blur px-4 py-3 text-sm font-semibold">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => setCurrentPage("about")}
              className={`cursor-pointer hover:text-fuchsia-700 transition ${
                currentPage == "about" ? "text-fuchsia-700" : "text-gray-100"
              }`}
            >
              About
            </button>

            <button
              onClick={() => setCurrentPage("resume")}
              className={`cursor-pointer hover:text-fuchsia-700 transition ${
                currentPage == "resume" ? "text-fuchsia-700" : "text-gray-100"
              }`}
            >
              Resume
            </button>

            <button
              onClick={() => setCurrentPage("projects")}
              className={`cursor-pointer hover:text-fuchsia-700 transition ${
                currentPage == "projects" ? "text-fuchsia-700" : "text-gray-100"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setCurrentPage("certifications")}
              className={`cursor-pointer hover:text-fuchsia-700 transition ${
                currentPage == "certifications"
                  ? "text-fuchsia-700"
                  : "text-gray-100"
              }`}
            >
              Certs
            </button>

            <button
              onClick={() => setCurrentPage("extracirriculars")}
              className={`cursor-pointer hover:text-fuchsia-700 transition ${
                currentPage == "extracirriculars"
                  ? "text-fuchsia-700"
                  : "text-gray-100"
              }`}
            >
              Extra
            </button>
          </div>
        </div>
      </nav>

      <footer className="hidden lg:block text-center font-mono border-white tracking-widest text-fuchsia-700 bg-neutral-800/20 py-2">
        &copy; Isaiah Ghansam 2026 | All Rights Reserved.
      </footer>
    </main>
  );
}
