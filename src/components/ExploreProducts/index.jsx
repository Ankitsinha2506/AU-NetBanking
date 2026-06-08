import { useState } from "react";

import ivyBox from "../../assets/homepage/ivy-box_Desktop.webp";
import currentAccount from "../../assets/homepage/current-account-new_Desktop.webp";
import carLoan from "../../assets/homepage/car-loan-2_Desktop.webp";
import auRemit from "../../assets/homepage/au-remit-on-homepage-cardbenefits-1_Desktop.webp";

import airportLounge from "../../assets/homepage/airport_lounge2.svg";
import creditCardGolden from "../../assets/homepage/credit_card_golden.svg";
import spaIcon from "../../assets/homepage/Spa.svg";
import handshake from "../../assets/homepage/handshake.svg";
import benefitsFamily from "../../assets/homepage/benefits-to-family.svg";
import minimalDocs from "../../assets/homepage/Minimal_documents.svg";
import percentIcon from "../../assets/homepage/percent.svg";
import quickDisbursal from "../../assets/homepage/Quick_disbursal1.svg";
import savingsIcon from "../../assets/homepage/savings-account1.svg";
import arrowRight from "../../assets/homepage/arrow_forward_right.svg";
import supportIcon from "../../assets/homepage/support_agent1.svg";

const tabs = ["Popular", "Accounts", "Cards", "Loans", "Investments", "Insurance", "Digital"];

const cards = [
  {
    image: ivyBox,
    imageBg: "#e8e8ed",
    infoBg: "#e6d9cc",
    dark: false,
    title: "AU ivy Savings Account",
    features: [
      { icon: savingsIcon, label: "Zero Cross\nCurrency Mark-up" },
      { icon: airportLounge, label: "Airport Lounge\nAccess" },
      { icon: creditCardGolden, label: "Premium\nCredit Card" },
    ],
    primaryBtn: "Express Interest",
    secondaryBtn: "Learn More",
  },
  {
    image: currentAccount,
    imageBg: "#111",
    infoBg: "#e6d9cc",
    dark: false,
    title: "AU Eternity Business",
    features: [
      { icon: handshake, label: "Nil Charges on Banking\nand Trade Services" },
      { icon: benefitsFamily, label: "Marriott Experience\nCertificate" },
      { icon: benefitsFamily, label: "Group your Business and\nFamily Accounts" },
    ],
    primaryBtn: "Express Interest",
    secondaryBtn: "Learn More",
  },
  {
    image: auRemit,
    imageBg: "#f0ede8",
    infoBg: "#1c2e1c",
    dark: true,
    golden: true,
    title: "Zenith⁺ Credit Card",
    features: [
      { icon: creditCardGolden, label: "Metal Credit\nCard" },
      { icon: spaIcon, label: "Grand\nWelcome" },
      { icon: spaIcon, label: "Taj Epicure\nMembership" },
    ],
    primaryBtn: "Apply Now",
    secondaryBtn: "Learn More",
  },
  {
    image: carLoan,
    imageBg: "#e8e8ed",
    infoBg: "#e6d9cc",
    dark: false,
    title: "Car loan",
    features: [
      { icon: minimalDocs, label: "Minimal\nDocumentation" },
      { icon: percentIcon, label: "Attractive\nInterest Rates" },
      { icon: quickDisbursal, label: "Quick\nDisbursal" },
    ],
    primaryBtn: "Apply Now",
    secondaryBtn: "Learn More",
  },
];

function ProductCard({ card }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      {/* Image section */}
      <div
        className="h-[370px] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: card.imageBg }}
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Info section */}
      <div className="flex flex-col flex-1 px-10 py-8" style={{ backgroundColor: card.infoBg }}>
        {/* Title */}
        <h3
          className="text-[21px] font-semibold text-center mb-6"
          style={{ color: card.dark ? "#c9a84c" : "#1a1a1a" }}
        >
          {card.title}
        </h3>

        {/* Features row */}
        <div className="flex items-start justify-center gap-10 mb-8">
          {card.features.map((f, j) => (
            <div key={j} className="flex flex-col items-center gap-2" style={{ width: "100px" }}>
              <img src={f.icon} alt="" className="w-6 h-6" />
              <span
                className="text-xs text-center leading-snug whitespace-pre-line"
                style={{ color: card.dark ? "#c9a84c" : "#555" }}
              >
                {f.label}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-5 mt-auto">
          <button
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            style={{
              backgroundColor: card.golden ? "#c9a84c" : "#c0392b",
              color: card.golden ? "#1c2e1c" : "#fff",
            }}
          >
            {card.primaryBtn}
          </button>
          <span
            className="flex items-center gap-0.5 text-sm font-semibold cursor-pointer hover:underline"
            style={{ color: card.dark ? "#c9a84c" : "#c0392b" }}
          >
            {card.secondaryBtn}
            <img
              src={arrowRight}
              alt=""
              className="w-4 h-4"
              style={card.dark ? { filter: "brightness(1.4) sepia(1) saturate(3) hue-rotate(-10deg)" } : {}}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ExploreProducts() {
  const [activeTab, setActiveTab] = useState("Popular");

  return (
    <section className="bg-white pt-12 pb-24">
      {/* Heading */}
      <h2 className="text-center text-[32px] font-bold text-gray-900 mb-8">
        Explore all products
      </h2>

      {/* Tabs */}
      <div className="flex items-center justify-start md:justify-center gap-4 md:gap-10 border-b border-gray-200 mb-10 overflow-x-auto px-4 md:px-0">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`pb-3 text-[13px] md:text-[15px] font-medium transition-colors whitespace-nowrap ${activeTab === tab ? "text-[#c0392b] border-b-2 border-[#c0392b]" : "text-gray-700 hover:text-[#c0392b]"}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Card grid — 1 col mobile, 2 col desktop */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <ProductCard key={i} card={card} />
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-8 bg-[#ebebed] rounded-2xl flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-5 md:py-6 gap-4 max-w-[800px] mx-auto">
          <div>
            <h3 className="text-[18px] md:text-[22px] font-semibold text-gray-900 mb-3 leading-snug">Not sure which product is right<br />for you?</h3>
            <div className="flex items-center gap-4 md:gap-6 text-sm text-gray-600 flex-wrap">
              <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Personal assistance</span>
              <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>No spam</span>
            </div>
          </div>
          <div className="bg-white rounded-xl px-4 py-3 shadow-sm" style={{ width: "150px" }}>
            <img src={supportIcon} alt="support" className="w-6 h-6 mb-2" />
            <p className="text-sm font-semibold text-gray-900">Customer support</p>
            <p className="text-xs text-gray-500 mb-2">24x7 help</p>
            <a href="#" className="text-[#c0392b] text-xs font-semibold hover:underline">Get support &rsaquo;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
