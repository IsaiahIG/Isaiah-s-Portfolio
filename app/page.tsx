"use client";
import { IoIosMail } from "react-icons/io";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaRegFileAlt } from "react-icons/fa";
import { useState } from "react";

import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<
    "about" | "resume" | "projects" | "certifications" | "contact"
  >("about");

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
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  }

  return (
    <main className="w-full overflow-x-hidden  bg-neutral-950 min-h-screen  ">
      
      {/* Layout wrapper */}
      <div className="mx-auto max-w-7xl 2xl:max-w-7xl px-4 2xl:px-1 lg:px-10 pt-12 pb-14 flex flex-col 2xl:flex-row lg:flex-row gap-10 2xl:space-x-55 lg:gap-5 py-1 2xl:items-stretch lg:items-stretch">


        {/* LEFT PANEL */}
        <aside className="lg:w-69 2xl:w-30 shrink-0  ">
          <div className="lg:fixed 2xl:fixed 2xl:w-80 lg:w-67  bg-neutral-900    border-white/30 border   rounded-3xl lg:h-147 2xl:h-292 ">
            <div className="bg-neutral-900 p-7 rounded-3xl shadow-2xl 2xl:space-y-10 px-5 flex flex-col gap-6 h-full">
              <div className="flex justify-center">
                <img
                  className="rounded-2xl font-w-40 md:w-40 2xl:w-55 lg:w-48  backdrop-opacity-100"
                  src=""
                  alt="a photo of me"
                /> 
              </div>

              <h1 className="text-xl font-bold tracking-widest text-center font-mono">
                Isaiah Ghansam
              </h1>

              <p className="text-md text-center p-2 tracking-widest rounded-2xl shadow-2xl border-2 border-neutral-800 bg-fuchsia-800">
                Software Developer
              </p>



              <div className="bg-neutral-600 h-px w-full "></div>

              <a
                href="mailto:iighansam@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3"
              >
                <span className="grid place-items-center size-10 rounded-sm bg-neutral-900">
                  <IoIosMail className="text-4xl" />
                </span>

                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-widest font-bold text-fuchsia-700">
                    Email
                  </p>
                  <p className="text-sm text-neutral-100">iighansam@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=West%20Virginia%2C%20USA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3"
              >
                <span className="grid place-items-center size-10 rounded-sm bg-neutral-900">
                  <CiLocationOn className="text-4xl" />
                </span>

                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-widest text-fuchsia-700 font-bold">
                    Location
                  </p>
                  <p className="text-sm text-neutral-100">West Virginia, US</p>
                </div>
              </a>

              <div className="h-px w-full bg-neutral-700"></div>

              <footer className="flex  justify-between ">
                <a
                  href="https://www.linkedin.com/in/isaiah-ghansam-5a97832b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-neutral-800"
                >
                  <CiLinkedin className="size-8" />
                </a>

                <a
                  href="https://github.com/IsaiahIG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-neutral-800"
                >
                  <FaGithub className="size-7" />
                </a>

                <a
                  href="Isaiahs_Updated_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 hover:bg-neutral-800"
                >
                  <FaRegFileAlt className="text-2xl" />
                </a>
              </footer>
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <section className="flex-1 min-w-0">
          <div className="relative min-w-0 rounded-3xl border border-white/30 bg-neutral-900 shadow-2xl p-8">
            <nav className="absolute right-0 top-0">
              <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto whitespace-nowrap rounded-bl-3xl rounded-tr-3xl overflow-hidden bg-neutral-700/20 border border-neutral-700 px-5 py-4 text-sm font-semibold">
                <button
                  onClick={() => setCurrentPage("about") }
                  className={`cursor-pointer  hover:text-fuchsia-700 transition ${currentPage == "about" ? " text-fuchsia-700" : " text-gray-100" }`}
                >
                  About
                </button>

                <button
                  onClick={() => setCurrentPage("resume")}
                  className={`cursor-pointer hover:text-fuchsia-700 transition ${currentPage == "resume" ? "text-fuchsia-700 " : "text-gray-100"}`}
                >
                  Resume
                </button>

                <button
                  onClick={() => setCurrentPage("projects")}
                  className={`cursor-pointer hover:text-fuchsia-700 ${currentPage== "projects" ? "text-fuchsia-700" : "text-gray-100"}`}
                >
                  Projects
                </button>

                <button
                  onClick={() => setCurrentPage("certifications")}
                  className={`cursor-pointer hover:text-fuchsia-700 ${currentPage == "certifications" ? "text-fuchsia-700" : "text-gray-100"}`}
                >
                  Certifications
                </button>

                <button
                  onClick={() => setCurrentPage("contact")}
                  className={`cursor-pointer hover:text-fuchsia-700 ${currentPage == "contact" ? "text-fuchsia-700" : "text-gray-100"}`}
                >
                  Passion
                </button>
              </div>
            </nav>

            {/* space for the nav */}
            <div className="pt-5">{renderPage()}</div>
          </div>
        </section>
      </div>

      <footer className="text-center font-mono border-white  tracking-widest text-fuchsia-700 bg-neutral-800/20 py-2">
        &copy; Isaiah Ghansam 2026 | All Rights Reserved.
      </footer>
    </main>
  );
}
