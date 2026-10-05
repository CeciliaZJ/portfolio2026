import Image from "next/image";
import { CafeDoors } from "@/components/cafe-doors";

function AppleMark() {
  return (
    <svg viewBox="0 0 120 88" className="mx-auto h-16 w-24" aria-hidden="true">
      <circle cx="60" cy="40" r="34" fill="#f4ddb8" />
      <path d="M58 16c8-10 18-8 18 2-8 2-14 0-18-2z" fill="#6d8f34" />
      <path d="M34 28c8-10 22-12 26 2v28c-16 6-30-4-26-30z" fill="#d23a32" />
      <path d="M60 30c10-8 24-4 26 10 2 16-8 26-26 22V30z" fill="#b92422" />
      <ellipse cx="48" cy="44" rx="9" ry="12" fill="#f7e7c4" />
      <ellipse cx="74" cy="46" rx="8" ry="11" fill="#f3d7a6" />
      <circle cx="46" cy="42" r="1.2" fill="#6a3b22" />
      <circle cx="51" cy="48" r="1.1" fill="#6a3b22" />
      <circle cx="72" cy="44" r="1.1" fill="#6a3b22" />
      <circle cx="76" cy="50" r="1.2" fill="#6a3b22" />
    </svg>
  );
}

function Poster({ title, children }: { title: string; children: string }) {
  return (
    <article className="bg-white/95 px-4 py-4 text-ink shadow-[0_8px_18px_rgba(40,20,20,0.12)] sm:px-5">
      <h2 className="text-base font-extrabold sm:text-lg">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed">{children}</p>
    </article>
  );
}

export function CafeHero() {
  return (
    <section id="top" className="bg-[#f3e4d2]">
      <div className="mx-auto grid max-w-6xl items-stretch gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-6 lg:py-7">
        <div className="relative min-h-[32rem] overflow-hidden shadow-[0_10px_24px_rgba(60,30,20,0.08)]">
          <Image
            src="/cafe-interior.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="cafe-blur object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/10" />

          <div className="relative z-10 grid gap-5 p-4 sm:p-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-8">
            <div className="mx-auto flex w-full max-w-[15rem] flex-col gap-4 lg:mx-0">
              <div className="gingham p-2.5 shadow-card">
                <div className="relative aspect-[3/4] bg-white">
                  <h1 className="absolute top-1 left-0 z-10 origin-top-left -rotate-12 font-script text-3xl leading-[0.8] text-ink sm:text-4xl">
                    Hi, I&apos;m
                    <br />
                    Cece!
                  </h1>
                  <div className="absolute bottom-3 left-1/2 flex h-14 w-[4.6rem] -translate-x-1/2 items-center justify-center rounded-full border-2 border-ink bg-white">
                    <span className="text-center font-sans text-[7px] leading-tight font-extrabold tracking-wide text-ink">
                      RED
                      <br />
                      GRAPEFRUIT
                      <br />
                      #4280
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-40 bg-ink-deep px-3 pt-2 pb-3 text-center text-cream shadow-card">
                <AppleMark />
                <p className="relative -mt-2 -rotate-6 font-script text-2xl leading-none">
                  A bit about me...
                </p>
              </div>
            </div>

            <div id="about" className="flex scroll-mt-36 flex-col gap-4">
              <Poster title="About Me">
                I&apos;m a designer and software engineer in New York whose studying computer
                science at Barnard College. I love connecting with others through art, anime, food
                and cats.
              </Poster>
              <Poster title="Stuff I've Worked On">
                I&apos;m focused on building accessible implementations and features. I&apos;ve worked
                with nonprofits to bring websites to life and built educational tools for learning
                new hobbies.
              </Poster>
            </div>
          </div>
        </div>

        <div className="flex items-end lg:h-full">
          <CafeDoors />
        </div>
      </div>

      <div className="bg-trim">
        <div className="mx-auto flex max-w-6xl justify-end px-6 py-4 sm:px-10">
          <div className="flex flex-col items-end gap-2" aria-hidden="true">
            <span className="h-3 w-24 bg-[#e7e7e7] sm:w-28" />
            <span className="h-3 w-32 bg-[#dedede] sm:w-40" />
            <span className="h-3 w-40 bg-[#d3d3d3] sm:w-52" />
          </div>
        </div>
      </div>
    </section>
  );
}
