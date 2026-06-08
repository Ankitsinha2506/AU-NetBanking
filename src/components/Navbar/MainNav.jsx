import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auLogo from "../../assets/homepage/AU-Logo_H30px-1.svg";
import searchIcon from "../../assets/homepage/search-icon (1).svg";
import micIcon from "../../assets/homepage/mic-icon.svg";
import arrowDown from "../../assets/homepage/Arrow - Down 1.svg";

const navLinks = [
  { label: "Accounts", dropdown: ["Savings Account", "Salary Account", "Term Deposit", "Current Account", "Trade Account", "Exclusive Offerings"] },
  { label: "AU 0101", dropdown: ["AU 0101 App", "AU 0101 Business App", "AU 0101 NetBanking", "Forex", "Video Banking", "WhatsApp Banking", "Missed Call Banking", "AU Refer-A-Friend"] },
  { label: "Cards", dropdown: ["Debit Card", "Credit Card", "Commercial Credit Card", "Prepaid Card"] },
  { label: "Loans", dropdown: ["Personal Loan", "Home Loan", "Vehicle Loan", "Loan Against Vehicle", "Gold Loan"] },
  { label: "Investments", dropdown: ["Mutual Funds", "3 in 1 Account", "ASBA", "National Pension System", "NPS Vatsalya", "Atal Pension Yojana", "Corporate NPS"] },
  { label: "Insurance", dropdown: ["Life Insurance", "Health Insurance", "Motor Insurance", "Social Security Scheme", "Loan Suraksha", "SME Insurance", "Pocket Insurance"] },
  { label: "Payments", dropdown: ["BHIM UPI", "NRI UPI", "Bill Payments (Bharat Connect)", "Send Money Abroad", "NETC | Fastag", "AU 0101 NetBanking Payment", "Loan EMI & Other Bill Payments"] },
  { label: "Offers" },
  { label: "Support", dropdown: ["Locate us", "Contact us"] },
];

const loginOptions = [
  "AU 0101 NetBanking",
  "Corporate NetBanking",
  "AU 0101 Business NetBanking",
  "Forex Card",
];

export default function MainNav() {
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const loginRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    function handleClick(e) {
      if (loginRef.current && !loginRef.current.contains(e.target)) setLoginOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleLinkEnter(link) {
    if (link.dropdown) {
      const el = linkRefs.current[link.label];
      if (el) setDropdownLeft(el.getBoundingClientRect().left);
      setActiveDropdown(link.label);
    } else {
      setActiveDropdown(null);
    }
  }

  const activeLink = navLinks.find(l => l.label === activeDropdown);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40"
      onMouseLeave={() => setActiveDropdown(null)}>

      {/* Main row */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-6" style={{ height: "68px" }}>

        {/* Logo */}
        <a href="#" className="shrink-0 mr-4 md:mr-8">
          <img src={auLogo} alt="AU Small Finance Bank" className="h-10 md:h-[42px] w-auto" />
        </a>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center flex-1 gap-0 overflow-x-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              ref={el => linkRefs.current[link.label] = el}
              onMouseEnter={() => handleLinkEnter(link)}
              className={`text-[13px] xl:text-[13.5px] font-medium px-2 xl:px-2 py-1 whitespace-nowrap transition-colors ${
                activeDropdown === link.label ? "text-[#4B1A6B]" : "text-gray-700 hover:text-[#4B1A6B]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Search + Login + Hamburger */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0 ml-auto lg:ml-0">

          {/* Search */}
          <div className="hidden sm:flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 gap-2 w-36 md:w-44 lg:w-[220px]">
            <img src={searchIcon} alt="search" className="w-4 h-4 shrink-0 opacity-40" />
            <input type="text" placeholder="Search"
              className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400" />
            <img src={micIcon} alt="mic" className="w-4 h-4 shrink-0 opacity-50 hidden md:block" />
          </div>

          {/* Login */}
          <div className="relative" ref={loginRef}>
            <button onClick={() => setLoginOpen(v => !v)}
              className="flex items-center gap-1.5 text-white text-xs md:text-sm font-semibold px-4 md:px-6 py-2 md:py-[10px] rounded-full whitespace-nowrap transition-colors"
              style={{ backgroundColor: "#E8540A" }}>
              Login
              <img src={arrowDown} alt="arrow" className="w-3 h-3 brightness-0 invert transition-transform duration-200"
                style={{ transform: loginOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {loginOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-[180px] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
                {loginOptions.map((option, i) => (
                  <button key={i}
                    onClick={() => { setLoginOpen(false); navigate(`/login?option=${encodeURIComponent(option)}`); }}
                    className="block w-full text-left px-4 py-3 text-[13px] hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-0"
                    style={{ color: "#1f2937", fontWeight: 600 }}>
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button className="lg:hidden p-2 text-gray-700 hover:text-[#4B1A6B]" onClick={() => setMobileMenuOpen(v => !v)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown — aligned under active label */}
      {activeLink?.dropdown && (
        <div className="absolute w-full bg-white border-t border-gray-100 shadow-xl z-50 py-2" style={{ left: 0 }}>
          <div style={{ paddingLeft: dropdownLeft }}>
            {activeLink.dropdown.map((item) => (
              <a key={item} href="#"
                className="block py-2 text-[15px] text-gray-800 hover:text-[#4B1A6B] transition-colors" style={{ fontWeight: 400 }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3">
          <div className="sm:hidden flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 gap-2 mb-3">
            <img src={searchIcon} alt="search" className="w-4 h-4 opacity-40" />
            <input type="text" placeholder="Search" className="bg-transparent text-sm outline-none w-full placeholder-gray-400" />
          </div>
          {navLinks.map((link) => (
            <a key={link.label} href="#"
              className="block py-3 text-sm font-medium text-gray-800 hover:text-[#4B1A6B] border-b border-gray-50 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
