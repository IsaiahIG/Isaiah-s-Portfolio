"use client";

import { useState } from "react";
import { IoIosMail, IoIosArrowDown } from "react-icons/io";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaRegFileAlt } from "react-icons/fa";

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
    <main className="w-full min-h-screen overflow-x-hidden bg-neutral-950 pb-24 xl:pb-0">
      {/* CHANGED: switched desktop layout from lg to xl */}
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-14 flex flex-col items-center gap-10 xl:max-w-322 xl:flex-row xl:items-start xl:gap-7 xl:px-8 2xl:max-w-350 2xl:gap-8 2xl:px-1">
        {/* CHANGED: explicit desktop width so the sidebar space is reserved correctly */}
        <aside className="w-full xl:w-67 xl:min-w-67 xl:shrink-0 2xl:w-[320px] 2xl:min-w-[320px]">
          {/* MOBILE SIDEBAR */}
          <div className="w-full overflow-hidden rounded-3xl border border-white/30 bg-neutral-900 xl:hidden">
            <div className="relative px-4 py-3">
              <div className="flex items-center gap-3 pr-12">
                <img
                  className="size-12 rounded-2xl border border-neutral-700 object-cover"
                  src="Profilepic.jpg"
                  alt="a photo of me"
                />
                <div className="min-w-0">
                  <p className="truncate font-mono font-bold tracking-widest text-gray-200">
                    Isaiah Ghansam
                  </p>
                  <span className="inline-flex mt-1 rounded-full border border-neutral-700 bg-neutral-800/70 px-3 py-1 text-xs tracking-widest text-gray-200">
                    Software Developer
                  </span>
                </div>
              </div>

              <button
                type="button"
                aria-controls="mobile-profile"
                aria-expanded={mobileProfileOpen}
                onClick={() => setMobileProfileOpen((v) => !v)}
                className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-neutral-700 bg-neutral-800/70"
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
              className={`${mobileProfileOpen ? "block" : "hidden"} xl:hidden`}
            >
              <div className="bg-neutral-900 p-7 rounded-3xl px-5 flex flex-col gap-6">
                <div className="h-px w-full bg-neutral-700"></div>

                <a
                  href="mailto:iighansam@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3"
                >
                  <span className="grid place-items-center size-9 rounded-lg hover:bg-neutral-800 transition-all hover:shadow-2xl hover:-translate-y-1 hover:shadow-neutral-800">
                    <IoIosMail className="w-6 h-6 text-gray-100 shrink-0" />
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
                  <span className="grid place-items-center size-9 rounded-lg hover:bg-neutral-800 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-800">
                    <CiLocationOn className="w-6 h-6 text-gray-100 shrink-0" />
                  </span>

                  <div className="leading-tight min-w-0">
                    <p className="text-xs uppercase tracking-widest text-fuchsia-700 font-bold">
                      Location
                    </p>
                    <p className="text-sm text-gray-200 tracking-widest">
                      West Virginia, US
                    </p>
                  </div>
                </a>

                <div className="h-px w-full bg-neutral-700"></div>

                <footer className="flex justify-between mt-auto">
                  <a
                    href="https://www.linkedin.com/in/isaiah-ghansam-5a97832b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-neutral-800 hover:shadow-2xl hover:shadow-neutral-800 hover:-translate-y-1 transition-all"
                  >
                    <CiLinkedin className="w-6 h-6 text-gray-100 shrink-0" />
                  </a>

                  <a
                    href="https://github.com/IsaiahIG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-neutral-800 hover:shadow-2xl hover:shadow-neutral-800 transition-all hover:-translate-y-1"
                  >
                    <FaGithub className="w-6 h-6 text-gray-100 shrink-0" />
                  </a>

                  <a
                    href="IIGRESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 hover:bg-neutral-800 hover:shadow-2xl hover:-translate-y-1 hover:shadow-neutral-800 transition-all"
                  >
                    <FaRegFileAlt className="w-6 h-6 text-gray-100 shrink-0" />
                  </a>
                </footer>
              </div>
            </div>
          </div>

          {/* CHANGED: invisible desktop placeholder
              This stays in normal layout flow and reserves the sidebar's REAL height.
              That prevents Firefox from pushing the footer up differently than Edge. */}
          <div
            aria-hidden="true"
            className="hidden xl:block invisible pointer-events-none"
          >
            <div className="w-full overflow-hidden rounded-3xl border border-white/30 bg-neutral-900">
              <div className="bg-neutral-900 p-7 rounded-3xl px-5 flex flex-col gap-6 2xl:p-8">
                <div className="flex justify-center">
                  <img
                    className="rounded-2xl w-40 xl:w-48 object-cover"
                    src="Profilepic.jpg"
                    alt="a photo of me"
                  />
                </div>

                <h1 className="text-xl text-gray-200 font-bold tracking-widest text-center font-mono leading-tight">
                  Isaiah Ghansam
                </h1>

                <p className="text-md text-gray-200 text-center p-2 tracking-widest rounded-2xl shadow-2xl border-2 border-neutral-800 bg-fuchsia-800 leading-tight">
                  Software Developer
                </p>

                <div className="bg-neutral-600 h-px w-full"></div>

                <a
                  href="mailto:iighansam@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3"
                >
                  <span className="grid place-items-center size-11 rounded-lg hover:bg-neutral-800 transition-all hover:shadow-2xl hover:-translate-y-1 hover:shadow-neutral-800">
                    <IoIosMail className="w-8 h-8 text-gray-100 shrink-0" />
                  </span>

                  <div className="leading-tight min-w-0">
                    <p className="text-xs uppercase tracking-widest font-bold text-fuchsia-700">
                      Email
                    </p>
                    <p className="text-sm text-gray-200 tracking-widest break-all leading-tight">
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
                  <span className="grid place-items-center size-11 rounded-lg hover:bg-neutral-800 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-800">
                    <CiLocationOn className="w-8 h-8 text-gray-100 shrink-0" />
                  </span>

                  <div className="leading-tight min-w-0">
                    <p className="text-xs uppercase tracking-widest text-fuchsia-700 font-bold">
                      Location
                    </p>
                    <p className="text-sm text-gray-200 tracking-widest leading-tight">
                      West Virginia, US
                    </p>
                  </div>
                </a>

                <div className="h-px w-full bg-neutral-700"></div>

                <footer className="flex justify-between mt-auto pt-2">
                  <a
                    href="https://www.linkedin.com/in/isaiah-ghansam-5a97832b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-neutral-800 hover:shadow-2xl hover:shadow-neutral-800 hover:-translate-y-1 transition-all"
                  >
                    <CiLinkedin className="w-9 h-9 text-gray-100 shrink-0" />
                  </a>

                  <a
                    href="https://github.com/IsaiahIG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-neutral-800 hover:shadow-2xl hover:shadow-neutral-800 transition-all hover:-translate-y-1"
                  >
                    <FaGithub className="w-8 h-8 text-gray-100 shrink-0" />
                  </a>

                  <a
                    href="IIGRESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 hover:bg-neutral-800 hover:shadow-2xl hover:-translate-y-1 hover:shadow-neutral-800 transition-all"
                  >
                    <FaRegFileAlt className="w-7 h-7 text-gray-100 shrink-0" />
                  </a>
                </footer>
              </div>
            </div>
          </div>

          {/* CHANGED: real desktop fixed sidebar
              This is the visible one the user actually sees. */}
          <div className="hidden xl:block xl:fixed xl:top-12 xl:w-67 2xl:w-[320px]">
            <div className="w-full overflow-hidden rounded-3xl border border-white/30 bg-neutral-900">
              <div className="bg-neutral-900 p-7 rounded-3xl px-5 flex flex-col gap-6 2xl:p-8">
                <div className="flex justify-center">
                  <img
                    className="rounded-2xl w-40 xl:w-48 object-cover"
                    src="Profilepic.jpg"
                    alt="a photo of me"
                  />
                </div>

                <h1 className="text-xl text-gray-200 font-bold tracking-widest text-center font-mono leading-tight">
                  Isaiah Ghansam
                </h1>

                <p className="text-md text-gray-200 text-center p-2 tracking-widest rounded-2xl shadow-2xl border-2 border-neutral-800 bg-fuchsia-800 leading-tight">
                  Software Developer
                </p>

                <div className="bg-neutral-600 h-px w-full"></div>

                <a
                  href="mailto:iighansam@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3"
                >
                  <span className="grid place-items-center size-11 rounded-lg hover:bg-neutral-800 transition-all hover:shadow-2xl hover:-translate-y-1 hover:shadow-neutral-800">
                    <IoIosMail className="w-8 h-8 text-gray-100 shrink-0" />
                  </span>

                  <div className="leading-tight min-w-0">
                    <p className="text-xs uppercase tracking-widest font-bold text-fuchsia-700">
                      Email
                    </p>
                    <p className="text-sm text-gray-200 tracking-widest break-all leading-tight">
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
                  <span className="grid place-items-center size-11 rounded-lg hover:bg-neutral-800 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-800">
                    <CiLocationOn className="w-8 h-8 text-gray-100 shrink-0" />
                  </span>

                  <div className="leading-tight min-w-0">
                    <p className="text-xs uppercase tracking-widest text-fuchsia-700 font-bold">
                      Location
                    </p>
                    <p className="text-sm text-gray-200 tracking-widest leading-tight">
                      West Virginia, US
                    </p>
                  </div>
                </a>

                <div className="h-px w-full bg-neutral-700"></div>

                <footer className="flex justify-between mt-auto pt-2">
                  <a
                    href="https://www.linkedin.com/in/isaiah-ghansam-5a97832b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-neutral-800 hover:shadow-2xl hover:shadow-neutral-800 hover:-translate-y-1 transition-all"
                  >
                    <CiLinkedin className="w-9 h-9 text-gray-100 shrink-0" />
                  </a>

                  <a
                    href="https://github.com/IsaiahIG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-neutral-800 hover:shadow-2xl hover:shadow-neutral-800 transition-all hover:-translate-y-1"
                  >
                    <FaGithub className="w-8 h-8 text-gray-100 shrink-0" />
                  </a>

                  <a
                    href="IIGRESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 hover:bg-neutral-800 hover:shadow-2xl hover:-translate-y-1 hover:shadow-neutral-800 transition-all"
                  >
                    <FaRegFileAlt className="w-7 h-7 text-gray-100 shrink-0" />
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </aside>

        <section className="w-full flex-1 min-w-0">
          <div className="relative min-w-0 rounded-3xl border border-white/30 bg-neutral-900 shadow-2xl p-8 pb-28 xl:pb-8">
            {/* CHANGED: desktop nav also switched from lg to xl */}
            <nav className="absolute right-0 top-0 hidden xl:block">
              <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto whitespace-nowrap rounded-bl-3xl rounded-tr-3xl overflow-hidden bg-neutral-700/20 border border-neutral-700 px-5 py-4 text-sm font-semibold">
                <button
                  onClick={() => setCurrentPage("about")}
                  className={`cursor-pointer hover:text-fuchsia-700 transition ${
                    currentPage === "about"
                      ? "text-fuchsia-700"
                      : "text-gray-200"
                  }`}
                >
                  About
                </button>

                <button
                  onClick={() => setCurrentPage("resume")}
                  className={`cursor-pointer hover:text-fuchsia-700 transition ${
                    currentPage === "resume"
                      ? "text-fuchsia-700"
                      : "text-gray-200"
                  }`}
                >
                  Experience
                </button>

                <button
                  onClick={() => setCurrentPage("projects")}
                  className={`cursor-pointer hover:text-fuchsia-700 transition ${
                    currentPage === "projects"
                      ? "text-fuchsia-700"
                      : "text-gray-200"
                  }`}
                >
                  Projects
                </button>

                <button
                  onClick={() => setCurrentPage("certifications")}
                  className={`cursor-pointer hover:text-fuchsia-700 transition ${
                    currentPage === "certifications"
                      ? "text-fuchsia-700"
                      : "text-gray-200"
                  }`}
                >
                  Certifications
                </button>

                <button
                  onClick={() => setCurrentPage("extracirriculars")}
                  className={`cursor-pointer hover:text-fuchsia-700 transition ${
                    currentPage === "extracirriculars"
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

      {/* CHANGED: mobile bottom nav hidden at xl instead of lg */}
      <nav className="xl:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
        <div className="mx-auto max-w-7xl rounded-3xl bg-neutral-700/20 border border-neutral-700 backdrop-blur px-4 py-3 text-sm font-semibold">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => setCurrentPage("about")}
              className={`cursor-pointer hover:text-fuchsia-700 transition ${
                currentPage === "about" ? "text-fuchsia-700" : "text-gray-100"
              }`}
            >
              About
            </button>

            <button
              onClick={() => setCurrentPage("resume")}
              className={`cursor-pointer hover:text-fuchsia-700 transition ${
                currentPage === "resume" ? "text-fuchsia-700" : "text-gray-100"
              }`}
            >
              Experience
            </button>

            <button
              onClick={() => setCurrentPage("projects")}
              className={`cursor-pointer hover:text-fuchsia-700 transition ${
                currentPage === "projects" ? "text-fuchsia-700" : "text-gray-100"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setCurrentPage("certifications")}
              className={`cursor-pointer hover:text-fuchsia-700 transition ${
                currentPage === "certifications"
                  ? "text-fuchsia-700"
                  : "text-gray-100"
              }`}
            >
              Certs
            </button>

            <button
              onClick={() => setCurrentPage("extracirriculars")}
              className={`cursor-pointer hover:text-fuchsia-700 transition ${
                currentPage === "extracirriculars"
                  ? "text-fuchsia-700"
                  : "text-gray-100"
              }`}
            >
              Extra
            </button>
          </div>
        </div>
      </nav>

      {/* CHANGED: desktop footer hidden at xl instead of lg */}
      <footer className="hidden xl:block text-center font-mono tracking-widest text-fuchsia-700 bg-neutral-800/20 py-2">
        &copy; Isaiah Ghansam 2026 | All Rights Reserved.
      </footer>
    </main>
  );
}