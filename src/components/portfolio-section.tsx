const projects = [
  {
    id: "animatic",
    title: "ANIMATIC",
    body: "Are you a beginner who wants to learn how to animate? ANIMATIC is an animation learning tool for beginners. Create your first animation in 10 minutes with step-by-step guidance from our teaching assistant, Pip!",
    visual: "animatic" as const,
  },
  {
    id: "byep",
    title: "Big Youth Sky Empowerment (BYEP) Website",
    body: "BYEP is an adventure-based group mentoring program for vulnerable 7th–12th graders, offering 360+ hours of programming per year including skiing, snowboarding, rock climbing, white water rafting, workshops, tutoring, and community service.",
    visual: "byep" as const,
  },
];

function AnimaticMock() {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow-card">
      <div className="flex items-center gap-4 border-b border-neutral-200 px-4 py-2 text-[10px] font-semibold tracking-wide text-neutral-500">
        <span>About</span>
        <span>Learn</span>
        <span className="text-link">ANIMATIC</span>
        <span>Review</span>
        <span>Projects</span>
      </div>
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#eef4ff] to-[#d9e6ff] px-6">
        <p className="font-display text-3xl tracking-wide text-[#2f5fa8]">ANIMATIC</p>
        <div className="h-24 w-40 rounded-sm bg-[#3d7dff] shadow-md sm:h-28 sm:w-48" />
        <p className="max-w-xs text-center text-xs text-neutral-600">
          Create your first animation and share with others.
        </p>
      </div>
    </div>
  );
}

function ByepMock() {
  return (
    <div className="overflow-hidden rounded-md bg-[#102218] text-white shadow-card">
      <div className="flex items-center justify-between px-4 py-2 text-[10px] font-semibold tracking-wide text-white/80">
        <span>BYEP</span>
        <span className="flex gap-3">
          <span>Programs</span>
          <span>Mentors</span>
          <span>Join</span>
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-gradient-to-b from-[#7ec8c3] via-[#3d7a62] to-[#1d3a28]">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#163022] to-transparent" />
        <div className="absolute top-6 right-0 left-0 px-5">
          <p className="max-w-[16rem] font-display text-lg leading-tight sm:text-2xl">
            Adventure-based mentoring, outdoors.
          </p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-[#1f8a78] px-3 py-1 text-[10px] font-bold">JOIN BYEP</span>
            <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold">LEARN MORE</span>
          </div>
        </div>
        <div className="absolute right-6 bottom-5 left-6 flex items-end gap-2">
          <div className="h-10 flex-1 rounded-t-full bg-[#2f6a45]" />
          <div className="h-16 flex-1 rounded-t-full bg-[#245636]" />
          <div className="h-8 flex-1 rounded-t-full bg-[#3d7a4e]" />
          <div className="h-14 w-8 rounded-t-lg bg-[#d7e7c8]" />
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-36">
      <div className="bg-folio px-4 py-8 text-center sm:py-10">
        <h2 className="font-display text-5xl font-semibold tracking-wide text-title sm:text-7xl">
          Portfolio
        </h2>
      </div>
      <div className="bg-paper px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 sm:gap-20">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="grid items-center gap-6 scroll-mt-36 md:grid-cols-2 md:gap-12"
            >
              <div>
                <h3 className="text-lg font-extrabold tracking-tight sm:text-xl">{project.title}</h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-neutral-800 sm:text-base">
                  {project.body}
                </p>
                <p className="mt-4 text-right">
                  <a
                    href={`#${project.id}`}
                    className="text-sm font-semibold text-link hover:underline"
                  >
                    view case study +
                  </a>
                </p>
              </div>
              {project.visual === "animatic" ? <AnimaticMock /> : <ByepMock />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
