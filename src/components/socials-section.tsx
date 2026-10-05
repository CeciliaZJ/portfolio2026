import Image from "next/image";

const receiptItems = [
  { qty: "01", item: "ART PORTFOLIO", href: "#portfolio" },
  { qty: "02", item: "GITHUB", href: "https://github.com/CeciliaZJ" },
];

const groceries = [
  {
    src: "/cart/basket.png",
    alt: "",
    width: 816,
    height: 570,
    className: "top-[20%] left-[8%] z-0 h-auto w-[80%]",
  },
  {
    src: "/cart/cauliflower.png",
    alt: "",
    width: 595,
    height: 515,
    className: "right-[2%] bottom-[4%] z-10 h-auto w-[36%] rotate-3",
  },
  {
    src: "/cart/broccoli.png",
    alt: "",
    width: 640,
    height: 579,
    className: "top-[6%] left-[0%] z-10 h-auto w-[40%] -rotate-6",
  },
  {
    src: "/cart/sushi.png",
    alt: "",
    width: 276,
    height: 596,
    className: "top-[8%] right-[4%] z-20 h-[48%] w-auto rotate-6",
  },
  {
    src: "/cart/milk.png",
    alt: "",
    width: 348,
    height: 592,
    className: "bottom-[10%] left-[30%] z-20 h-[40%] w-auto",
  },
  {
    src: "/cart/tofu.png",
    alt: "",
    width: 844,
    height: 535,
    className: "bottom-[2%] left-[1%] z-30 h-auto w-[44%] -rotate-3",
  },
  {
    src: "/cart/fish-sauce.png",
    alt: "",
    width: 244,
    height: 879,
    className: "top-[7%] left-[16%] z-40 h-[62%] w-auto -rotate-6",
  },
];

export function SocialsSection() {
  return (
    <section id="socials" className="scroll-mt-36 bg-cart px-4 py-16 sm:px-6 sm:py-24">
      <div className="relative mx-auto max-w-4xl">
        <div
          className="relative mx-auto h-[32rem] w-full max-w-xl sm:h-[38rem] md:mx-0 md:h-[34rem] md:w-[72%]"
          role="img"
          aria-label="Red shopping basket filled with broccoli, cauliflower, tofu, milk, fish sauce, and sushi"
        >
          {groceries.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className={`pointer-events-none absolute max-w-none drop-shadow-md ${item.className}`}
            />
          ))}
        </div>
        <article className="relative z-50 mx-auto -mt-24 w-full max-w-sm rotate-[-4deg] bg-white px-6 py-7 text-receipt shadow-receipt sm:px-8 sm:py-8 md:absolute md:top-8 md:right-0 md:mt-0 md:w-[46%] md:rotate-[-7deg]">
          <p className="text-center font-receipt text-sm tracking-[0.2em]">* * RECEIPT * *</p>
          <h2 className="mt-2 text-center font-display text-4xl font-semibold tracking-wide sm:text-5xl">
            OTHER LINKS
          </h2>
          <div className="mt-5 space-y-1 font-receipt text-xs leading-relaxed sm:text-sm">
            <p>ORDER #001 FOR CECILIA</p>
            <p>SATURDAY, JULY 18, 2026</p>
            <div className="mt-4 flex justify-between font-sans text-[11px] font-bold tracking-wide">
              <span>QTY</span>
              <span>ITEM</span>
            </div>
            <ul className="mt-1 space-y-1">
              {receiptItems.map((entry) => (
                <li key={entry.qty} className="flex justify-between gap-4">
                  <span>{entry.qty}</span>
                  <a
                    href={entry.href}
                    className="hover:underline"
                    {...(entry.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {entry.item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between">
              <span>TOTAL</span>
              <span>X.XX</span>
            </div>
            <div className="flex justify-between">
              <span>DATE</span>
              <span>XX.XX.XXXX</span>
            </div>
          </div>
          <p className="mt-8 text-center font-display text-3xl font-semibold tracking-wide">
            THANK YOU
          </p>
        </article>
      </div>
    </section>
  );
}
