import { useState, useEffect, useCallback } from "react";
import savingsIcon from "../../assets/homepage/savings-account1.svg";
import emiIcon from "../../assets/homepage/group3.svg";
import creditCardIcon from "../../assets/homepage/credit_card6.svg";
import servicesIcon from "../../assets/homepage/stack_star.svg";

const quickActions = [
  { icon: savingsIcon, label: "Open Savings\nAccount" },
  { icon: emiIcon, label: "Make EMI\nPayments" },
  { icon: creditCardIcon, label: "Get Credit\nCard" },
  { icon: servicesIcon, label: "Explore\nServices" },
];

import first from "../../assets/homepage/first.webp";
import second from "../../assets/homepage/second.webp";
import third from "../../assets/homepage/third.webp";
import fourth from "../../assets/homepage/fourth.webp";
import fifth from "../../assets/homepage/fifth.webp";
import six from "../../assets/homepage/six.webp";
import seven from "../../assets/homepage/seven.webp";
import eight from "../../assets/homepage/eight.webp";

const slides = [
  {
    image: fifth,
    title: "Forever Banking",
    desc: "Know more about AU's journey",
    buttons: [{ label: "Click Here", primary: true }],
    banner: "Up to 6.75%* p.a. interest on your Savings Account",
  },
  {
    image: eight,
    title: "International Transfers",
    desc: "0 Markup & 0 Charges on all retail remittances*",
    buttons: [
      { label: "Transfer Abroad", primary: true },
      { label: "SWIFT Details", primary: false },
    ],
    banner: "Monthly interest payment on Savings Account",
  },
  {
    image: third,
    title: "AU Savings Account",
    desc: "Earn up to 6.75%* interest p.a.",
    buttons: [{ label: "Apply Now", primary: true }],
    banner: "Monthly interest payment on Savings Account",
  },
  {
    image: fourth,
    title: "AU Fixed Deposit",
    desc: "Earn assured returns of up to 7.75%* p.a.",
    buttons: [
      { label: "Book Now", primary: true },
      { label: "Learn More", primary: false },
    ],
    banner: "Monthly interest payment on Savings Account",
  },
  {
    image: first,
    title: "AU Car Loan",
    desc: "Get a car loan that fits you, fast and flexible",
    buttons: [
      { label: "Apply Now", primary: true },
      { label: "Know More", primary: false },
    ],
    banner: "Monthly interest payment on Savings Account",
  },
  {
    image: six,
    title: "AU Current Account",
    desc: "Higher transaction limits across variants",
    buttons: [{ label: "Know More", primary: true }],
    banner: "Monthly interest payment on Savings Account",
  },
  {
    image: seven,
    title: 'A call. A threat. A "digital arrest."',
    desc: "Fraudsters are impersonating authorities to scam you. Watch RBI's awareness films to know the signs.",
    buttons: [{ label: "Watch now", primary: true }],
    banner: "Monthly interest payment on Savings Account",
  },
  {
    image: eight,
    title: "AU Credit Cards",
    desc: "Access a world of privileges, rewards, savings & benefits curated for your lifestyle",
    buttons: [
      { label: "Apply Now", primary: true },
      { label: "Learn More", primary: false },
    ],
    banner: "Monthly interest payment on Savings Account",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev2, setPrev2] = useState(null);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx, dir) => {
    if (animating) return;
    setPrev2(current);
    setDirection(dir);
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => { setPrev2(null); setAnimating(false); }, 500);
  }, [animating, current]);

  const next = useCallback(() => goTo((current + 1) % slides.length, "next"), [goTo, current]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length, "prev"), [goTo, current]);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="bg-white pt-6 md:pt-10 pb-6">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8 px-4">
        <h1 className="font-bold leading-tight text-3xl md:text-4xl lg:text-[55px]" style={{ color: "#9a4141" }}>
          Welcome to AU:
        </h1>
        <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-[55px]" style={{ color: "#a35151" }}>
          your full-service bank
        </h2>
      </div>

      {/* Slider outer */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 pb-0 relative">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 md:left-1 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:bg-gray-50"
          style={{ top: "calc(240px)", transform: "translateY(-50%)", fontSize: "24px" }}
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 md:right-1 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:bg-gray-50"
          style={{ top: "calc(240px)", transform: "translateY(-50%)", fontSize: "24px" }}
        >
          ›
        </button>

        {/* Slide container */}
        <div className="relative rounded-2xl overflow-hidden" style={{ height: "clamp(220px, 40vw, 480px)" }}>
          {/* Outgoing slide */}
          {prev2 !== null && (
            <img
              src={slides[prev2].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ animation: `slideOut${direction === "next" ? "Left" : "Right"} 0.5s ease forwards` }}
            />
          )}
          {/* Incoming slide */}
          <img
            key={current}
            src={slides[current].image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              animation: animating
                ? `slideIn${direction === "next" ? "Right" : "Left"} 0.5s ease forwards`
                : "none",
            }}
          />

          {/* Info Card */}
          <div
            className="hidden sm:block absolute left-4 md:left-8 bg-white rounded-2xl shadow-xl z-10"
            style={{ bottom: "48px", width: "clamp(220px, 28vw, 340px)", padding: "16px 20px" }}
          >
            <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: "18px" }}>
              {slide.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4 leading-snug">{slide.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {slide.buttons.map((btn) =>
                btn.primary ? (
                  <button
                    key={btn.label}
                    className="text-white text-sm font-semibold px-5 py-2 rounded-full"
                    style={{ backgroundColor: "#c0392b" }}
                  >
                    {btn.label}
                  </button>
                ) : (
                  <button
                    key={btn.label}
                    className="text-sm font-semibold px-5 py-2 rounded-full"
                    style={{ color: "#c0392b", backgroundColor: "#fce8e4" }}
                  >
                    {btn.label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "next" : "prev")}
                className="rounded-full transition-all"
                style={{
                  width: i === current ? "22px" : "8px",
                  height: "8px",
                  backgroundColor: i === current ? "white" : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16 py-8 md:py-10 px-4 flex-wrap">
        {quickActions.map((action) => (
          <button key={action.label} className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#c0392b" }}>
              <img src={action.icon} alt={action.label} className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert" />
            </div>
            <span className="text-xs md:text-sm text-gray-700 text-center leading-snug whitespace-pre-line">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Fixed Bottom Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <div className="flex items-center justify-between px-4 md:px-8 py-3 rounded-xl pointer-events-auto w-full md:w-auto"
          style={{ backgroundColor: "#4B1A6B", minWidth: "280px", maxWidth: "860px" }}>
          <p className="text-white text-xs md:text-sm font-medium">{slide.banner}</p>
          <button className="text-white text-xs md:text-sm font-semibold px-4 md:px-6 py-2 rounded-full whitespace-nowrap ml-4 md:ml-6"
            style={{ backgroundColor: "#E8540A" }}>Open Account</button>
        </div>
      </div>

      {/* Floating side buttons */}
      <div className="hidden md:flex fixed right-4 bottom-8 flex-col gap-3 z-50">
        <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl text-white font-bold text-lg"
          style={{ backgroundColor: "#4B1A6B" }}>⚡</button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl text-white font-bold text-lg"
          style={{ backgroundColor: "#4B1A6B" }}>%</button>
      </div>
    </section>
  );
}
