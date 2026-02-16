"use client";

import { useEffect, useState } from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiGameControllerFill } from "react-icons/pi";
import { GiBoxingGloveSurprise, GiWeightLiftingUp } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";

type ModalContent = {
  title: string;
  notes: string;
};

export default function Extracirriculars() {
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setActive(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActive(null);
  };

  useEffect(() => {
    if (!modalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <div className="bg-neutral-900 min-h-screen px-5">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <div className="py-6 space-y-10">
          <h1 className="text-3xl sm:text-4xl font-mono text-fuchsia-700 tracking-widest">
            Outside Of Work
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 2xl:gap-12">
            <button
              type="button"
              onClick={() =>
                openModal({
                  title: "Movies",
                  notes:
                    "I enjoy watching movies with friends. I occasionally organize and host  movie nights for all of my friends. My all time favorite movie is Pirates of the Caribbean ",
                })
              }
              className="cursor-pointer shadow-2xl border-2 border-fuchsia-700 rounded-2xl transition-all hover:-translate-y-1 hover:bg-neutral-800 p-8 text-left focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
            >
              <div className="aspect-square flex flex-col items-center justify-center gap-6">
                <BiSolidCameraMovie className="w-24 h-24 text-fuchsia-700" />
                <h2 className="font-mono text-gray-200 tracking-widest text-xl">
                  Movies
                </h2>
              </div>
            </button>

            <button
              type="button"
              onClick={() =>
                openModal({
                  title: "Gaming",
                  notes:
                    "When I have time, I would play videos games. Recently I've been playing Nintendo 3DS games to relive my childhood. Currently I'm  playing Pokemon Ultra Sun  on my 3DS.",
                })
              }
              className="cursor-pointer shadow-2xl border-2 border-fuchsia-700 rounded-2xl transition-all hover:-translate-y-1 hover:bg-neutral-800 p-8 text-left focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
            >
              <div className="aspect-square flex flex-col items-center justify-center gap-6">
                <PiGameControllerFill className="w-24 h-24 text-fuchsia-700" />
                <h2 className="font-mono text-gray-200 tracking-widest text-xl">
                  Gaming
                </h2>
              </div>
            </button>

            <button
              type="button"
              onClick={() =>
                openModal({
                  title: "Fitness",
                  notes:
                    "To ensure my physicaly health is well I  workout a minimum of  four  times a week. I started my fitness journey in freshman year of college and ever since I've  beeen consistently going.  ",
                })
              }
              className="cursor-pointer shadow-2xl border-2 border-fuchsia-700 rounded-2xl transition-all hover:-translate-y-1 hover:bg-neutral-800 p-8 text-left focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
            >
              <div className="aspect-square flex flex-col items-center justify-center gap-6">
                <GiWeightLiftingUp className="w-24 h-24 text-fuchsia-700" />
                <h2 className="font-mono text-gray-200 tracking-widest text-xl">
                  Fitness
                </h2>
              </div>
            </button>

            <button
              type="button"
              onClick={() =>
                openModal({
                  title: "Boxing",
                  notes:
                    "Its been a year since I found my passion in boxing. I am currently an orthodox boxer meaning left hand is my jab. At my current skill level I'm able to teach others and have weekly meetups",
                })
              }
              className="cursor-pointer shadow-2xl border-2 border-fuchsia-700 rounded-2xl transition-all hover:-translate-y-1 hover:bg-neutral-800 p-8 text-left focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
            >
              <div className="aspect-square flex flex-col items-center justify-center gap-6">
                <GiBoxingGloveSurprise className="w-24 h-24 text-fuchsia-700" />
                <h2 className="font-mono text-gray-200 tracking-widest text-xl">
                  Boxing
                </h2>
              </div>
            </button>

            <button
              type="button"
              onClick={() =>
                openModal({
                  title: "Clubs",
                  notes:
                    "I was the treasurer of the Caribbean Student Union at UMBC from Aug - December 2024. I then transistioned to Public Relations Role from Jan - May 2025. During my term as treasuerer I hosted fundraisers, attended weekly meetings and calculated fundings and budget requirements for events. During my term as public relations I attended weekly meeting  and reached out to different organizations for collabarations and the promotions of events while getting student feedback.",
                })
              }
              className="cursor-pointer shadow-2xl border-2 border-fuchsia-700 rounded-2xl transition-all hover:-translate-y-1 hover:bg-neutral-800 p-8 text-left focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
            >
              <div className="aspect-square flex flex-col items-center justify-center gap-6">
                <MdGroups2 className="w-24 h-24 text-fuchsia-700" />
                <h2 className="font-mono text-gray-200 tracking-widest text-xl">
                  Clubs
                </h2>
              </div>
            </button>
          </div>
        </div>
      </div>

      {modalOpen && active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-6"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/90" />

          <div
            className="relative z-10 w-[92vw] sm:w-[85vw] md:w-[70vw] lg:w-[55vw] xl:w-[45vw] 2xl:w-[38vw] max-w-4xl xl:max-w-5xl 2xl:max-w-6xl max-h-[80vh] lg:max-h-[78vh] xl:max-h-[76vh] 2xl:max-h-[74vh] rounded-2xl border-2 border-fuchsia-700 bg-black text-white shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-mono tracking-widest text-fuchsia-600">
                {active.title}
              </h2>

              <button
                type="button"
                onClick={closeModal}
                className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
              <div className="rounded-xl bg-neutral-950 p-4 sm:p-6 border border-white/10">
                <p className="font-mono text-white/80 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {active.notes}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
