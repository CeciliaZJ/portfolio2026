import { CafeDoors } from "@/components/cafe-doors";

function CoffeeMark() {
  return (
    <svg viewBox="0 0 64 48" className="mx-auto mb-1 h-12 w-16" aria-hidden="true">
      <path
        d="M10 16h32v16a12 12 0 0 1-12 12H22A12 12 0 0 1 10 32V16Z"
        fill="#f4e1cc"
      />
      <path d="M42 20h6a8 8 0 0 1 0 16h-6" fill="none" stroke="#f4e1cc" strokeWidth="4" />
      <path d="M8 14h36" stroke="#f4e1cc" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M22 8c0 4-4 4-4 8M32 6c0 4-4 4-4 8"
        fill="none"
        stroke="#f4e1cc"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AboutCard({ title, children }: { title: string; children: string }) {
  return (
    <article className="bg-white px-4 py-4 text-ink shadow-card sm:px-5 sm:py-5">
      <h2 className="text-base font-extrabold sm:text-lg">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed sm:text-[15px]">{children}</p>
    </article>
  );
}

export function CafeHero() {
  return (
    <section id="top" className="bg-wall">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_auto] lg:items-end lg:gap-6 lg:py-12">
        <div className="mx-auto w-full max-w-xs lg:mx-0">
          <div className="gingham p-3 shadow-card">
            <div className="bg-white px-4 py-6 text-center">
              <h1 className="font-script text-5xl leading-[0.85] text-ink sm:text-6xl">
                Hi, I&apos;m
                <br />
                Cece!
              </h1>
              <div className="mx-auto mt-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-dashed border-ink">
                <span className="text-center font-pixel text-[7px] leading-tight text-ink">
                  CECE
                  <br />
                  NYC
                </span>
              </div>
            </div>
          </div>
          <div className="relative z-10 mx-auto -mt-6 w-40 rounded-md bg-ink-deep px-3 py-3 text-center text-cream shadow-card sm:w-44">
            <CoffeeMark />
            <p className="font-script text-2xl leading-none">a bit about me...</p>
          </div>
        </div>

        <div id="about" className="flex scroll-mt-36 flex-col gap-4">
          <AboutCard title="About Me">
            I&apos;m a designer and software engineer in New York who&apos;s studying computer
            science at Barnard College. I love connecting with others through art, anime, food
            and cats.
          </AboutCard>
          <AboutCard title="Stuff I've Worked On">
            I&apos;m focused on building accessible implementations and features. I&apos;ve worked
            with nonprofits to bring websites to life and built educational tools for learning
            new hobbies.
          </AboutCard>
        </div>

        <CafeDoors />
      </div>

      <div className="relative h-8 bg-trim sm:h-10">
        <div className="absolute right-6 bottom-2 flex flex-col items-end gap-1" aria-hidden="true">
          <span className="h-1.5 w-16 rounded-sm bg-neutral-200/90" />
          <span className="h-1.5 w-12 rounded-sm bg-neutral-300/90" />
          <span className="h-1.5 w-8 rounded-sm bg-neutral-400/80" />
        </div>
      </div>
    </section>
  );
}
