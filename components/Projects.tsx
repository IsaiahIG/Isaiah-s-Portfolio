"use client";

export default function Projects() {
  return (
    <section className="min-h-screen bg-neutral-900 lg:p-5 px-1">
      <div className=" flex-col space-y-10 max-w-6xl ">
        <div className="  gap-y-10">
          <h1 className="text-4xl  tracking-widest  font-mono  text-fuchsia-700 ">Projects</h1>
        </div>

        <div className="flex flex-wrap gap-8">
          <div className="w-full md:w-[calc(50%-16px)] overflow-hidden rounded-2xl border border-white/10 bg-neutral-800/40 shadow-lg transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-fuchsia-700">
            <div className="aspect-video bg-neutral-900">
              <img src="Portfolio.png" alt="Portfolio Website" className="h-full w-full object-cover" /> 
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs tracking-wide text-neutral-400">URL: yoursite.com</p>

              <h3 className="pt-2 text-3xl font-bold font-mono text-fuchsia-700">
                Isaiah's Portfolio
              </h3>

              <p className="mt-3 text-lg leading-relaxed text-neutral-300">
                My personal portfolio showcasing my work, skills, and experience.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://isaiahig.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-5 py-3 text-sm font-extrabold text-fuchsia-700 transition font-mono hover:bg-white/15"
                >
                  Live site
                </a>

                <a
                  href="https://github.com/IsaiahIG/Isaiah-s-portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-5 py-3 text-sm font-bold text-fuchsia-700 transition font-mono  hover:bg-white/15"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>


          <div className="w-full md:w-[calc(50%-16px)] overflow-hidden rounded-2xl border border-white/10 bg-neutral-800/40 shadow-lg transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-fuchsia-700">
            <div className="aspect-video bg-neutral-900">
               <img src="rpp.png" alt="Portfolio Website" className="h-full w-full object-fill " /> 
            </div>

            <div className="p-6">
              <p className="text-xs tracking-wide text-neutral-400">URL: yoursite.com</p>

              <h3 className="pt-2 text-3xl font-bold font-mono text-fuchsia-700">
                Retriever Proposal Portal
              </h3>

              <p className="pt-3 text-md leading-relaxed text-neutral-300">
                 UMBC stakeholders  reach out to students via this portal and post their software  requests. simulating software engineering students can now form groups under a selected scrum master and work on said request .
              </p>

              <div className="pt-6 flex items-center gap-4">
                <a
                  href="https://drive.google.com/file/d/16I6GV69U-dsn0tulfODAi9CJkxWhGGB9/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-5 py-3 text-sm font-bold text-fuchsia-700 transition font-mono hover:bg-white/15"
                >
                  Demo
                </a>

                <a
                  href="https://github.com/Niraj-Dhakall/4-4-7-proj"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-5 py-3 text-sm font-bold text-fuchsia-700 transition font-mono  hover:bg-white/15"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>



          <div className="w-full md:w-[calc(50%-16px)] overflow-hidden rounded-2xl border border-white/10 bg-neutral-800/40 shadow-lg transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-fuchsia-700">
            {/* Image area */}
            <div className="aspect-video bg-neutral-900">
              <img src="/tradelog.png" alt="Portfolio Website" className="h-full w-full object-cover" /> 
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs tracking-wide text-neutral-400">URL: yoursite.com</p>

              <h3 className="pt-2 text-3xl font-bold font-mono text-fuchsia-700">
                TradeLog
              </h3>

              <p className="pt-3 text-md leading-relaxed text-neutral-300">
                 A application designed to save user Market Trades for future use.
              </p>

              <div className="pt-6 flex items-center gap-4">
                <a
                  href="https://yoursite.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-5 py-3 text-sm font-bold text-fuchsia-700 transition font-mono hover:bg-white/15"
                >
                    Comming Soon
                </a>

                <a
                  href="https://github.com/yourname/yourrepo"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-5 py-3 text-sm font-bold text-fuchsia-700 transition font-mono  hover:bg-white/15"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>


          <div className="w-full md:w-[calc(50%-16px)] overflow-hidden rounded-2xl border border-white/10 bg-neutral-800/40 shadow-lg transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-fuchsia-700">
            {/* Image area */}
            <div className="aspect-video bg-neutral-900">
              {/* Replace this placeholder with an image if you want */}
              {/* <img src="/your-image.png" alt="Portfolio Website" className="h-full w-full object-cover" /> */}
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs tracking-wide text-neutral-400">URL: yoursite.com</p>

              <h3 className="pt-2 text-3xl font-bold font-mono text-fuchsia-700">
                Adrian's Portfolio 
              </h3>

              <p className="pt-3 text-md leading-relaxed text-neutral-300">
                 Freelance Portfolio website for a Friend
              </p>

              <div className="pt-6 flex items-center gap-4">
                <a
                  href="https://yoursite.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-5 py-3 text-sm font-bold text-fuchsia-700 transition font-mono hover:bg-white/15"
                >
                  Comming Soon
                </a>

                <a
                  href="https://github.com/yourname/yourrepo"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-5 py-3 text-sm font-bold text-fuchsia-700 transition font-mono  hover:bg-white/15"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>


          

          {/* Paste another card div here */}
        </div>
      </div>
    </section>
  );
}
