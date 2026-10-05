const links = [
  { href: "#about", label: "about" },
  { href: "#portfolio", label: "projects" },
  { href: "#socials", label: "socials" },
];

const stripeCount = 28;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-awning-dark">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="font-pixel text-[10px] leading-none text-cream sm:text-xs"
          >
            cece&apos;s cafe
          </a>
          <nav aria-label="Page sections" className="flex items-center gap-3 sm:gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-pixel text-[8px] leading-none text-cream transition-colors hover:text-title sm:text-[11px]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex" aria-hidden="true">
        {Array.from({ length: stripeCount }, (_, index) => {
          const light = index % 2 === 0;
          return (
            <div key={index} className="min-w-0 flex-1">
              <div className={light ? "h-8 bg-awning-light sm:h-10" : "h-8 bg-awning sm:h-10"} />
              <div
                className={
                  light
                    ? "h-3 rounded-b-full bg-awning-light sm:h-4"
                    : "h-3 rounded-b-full bg-awning sm:h-4"
                }
              />
            </div>
          );
        })}
      </div>
    </header>
  );
}
