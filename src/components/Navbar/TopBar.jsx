import { useState } from "react";
import personActive from "../../assets/homepage/person_active.svg";
import personDeactive from "../../assets/homepage/person_deactivate.svg";
import businessActive from "../../assets/homepage/business_active.svg";
import businessDeactive from "../../assets/homepage/business_deactive.svg";
import nriActive from "../../assets/homepage/nri_active.svg";
import nriDeactive from "../../assets/homepage/nri_deactive.svg";
import premiumActive from "../../assets/homepage/premium_active.svg";
import premiumDeactive from "../../assets/homepage/premium_deactive.svg";
import researchIcon from "../../assets/homepage/lab_profile.svg";
import investorsIcon from "../../assets/homepage/investors_deactive.svg";
import aboutUsIcon from "../../assets/homepage/aboutUs_decactive.svg";
import languageIcon from "../../assets/homepage/language.svg";
import arrowDown from "../../assets/homepage/Arrow - Down 1.svg";
import accessibilityBtn from "../../assets/homepage/accessibility-button.svg";

const leftLinks = [
  { label: "Personal", activeIcon: personActive, inactiveIcon: personDeactive, active: true },
  { label: "Business", activeIcon: businessActive, inactiveIcon: businessDeactive },
  { label: "NRI", activeIcon: nriActive, inactiveIcon: nriDeactive },
  { label: "Premium", activeIcon: premiumActive, inactiveIcon: premiumDeactive },
];

const rightLinks = [
  { label: "Research", icon: researchIcon },
  { label: "Investor", icon: investorsIcon },
  { label: "About us", icon: aboutUsIcon },
];

export default function TopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full text-white text-sm" style={{ backgroundColor: "#4B1A6B" }}>
      <div className="max-w-[1200px] mx-auto flex items-stretch justify-between" style={{ height: "32px" }}>

        {/* Left tabs */}
        <div className="flex items-stretch">
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`flex items-center gap-1.5 px-4 md:px-6 text-xs font-medium whitespace-nowrap transition-colors ${
                link.active ? "bg-white text-[#4B1A6B] font-semibold" : "text-white hover:bg-[#3a0f55]"
              }`}
            >
              <img src={link.active ? link.activeIcon : link.inactiveIcon} alt={link.label} className="w-4 h-4 shrink-0" />
              {link.label}
            </a>
          ))}
        </div>

        {/* Right — hidden on mobile */}
        <div className="hidden md:flex items-stretch pr-2">
          {rightLinks.map((link) => (
            <a key={link.label} href="#" className="flex items-center gap-1.5 px-3 lg:px-4 text-white text-sm hover:bg-[#3a0f55] transition-colors whitespace-nowrap">
              <img src={link.icon} alt={link.label} className="w-4 h-4 brightness-0 invert opacity-90" />
              {link.label}
            </a>
          ))}
          <a href="#" className="hidden lg:flex items-center gap-1.5 px-4 text-white text-sm hover:bg-[#3a0f55] transition-colors">
            <img src={languageIcon} alt="Language" className="w-4 h-4 brightness-0 invert opacity-90" />
            Language
            <img src={arrowDown} alt="arrow" className="w-3 h-3 brightness-0 invert ml-1" />
          </a>
          <button className="px-3 flex items-center hover:opacity-80 transition-opacity">
            <img src={accessibilityBtn} alt="Accessibility" className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden px-4 flex items-center text-white" onClick={() => setMobileOpen(v => !v)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#3a0f55] px-4 py-3 flex flex-col gap-3">
          {rightLinks.map((link) => (
            <a key={link.label} href="#" className="flex items-center gap-2 text-white text-sm py-1">
              <img src={link.icon} alt={link.label} className="w-4 h-4 brightness-0 invert" />
              {link.label}
            </a>
          ))}
          <a href="#" className="flex items-center gap-2 text-white text-sm py-1">
            <img src={languageIcon} alt="Language" className="w-4 h-4 brightness-0 invert" />
            Language
          </a>
        </div>
      )}
    </div>
  );
}
