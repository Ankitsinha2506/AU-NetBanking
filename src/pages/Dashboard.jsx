import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import auLogo from '../assets/Main homepage/aulogo.png'
import sidebarBg from '../assets/Main homepage/sidebar_bg.5ed99c6e91c433b9.png'
import accountsIcon from '../assets/Main homepage/mxaccountsicon.svg'
import depositsIcon from '../assets/Main homepage/mxdepositsicon.svg'
import transferIcon from '../assets/Main homepage/mxmoneytransfericon.svg'
import billpayIcon from '../assets/Main homepage/mxbillpayicon.svg'
import referIcon from '../assets/Main homepage/mxnewreferpost.svg'
import debitCardIcon from '../assets/Main homepage/mxdebitcardicon.svg'
import ccIcon from '../assets/Main homepage/mxccicon.svg'
import greenFdIcon from '../assets/Main homepage/gfd_dbicon_menu.svg'
import remitIcon from '../assets/Main homepage/db_remitsen.svg'
import investIcon from '../assets/Main homepage/mxinvestmentsicon.svg'
import insuranceIcon from '../assets/Main homepage/dbpl_insurance.svg'
import taxIcon from '../assets/Main homepage/mxtaxicon.svg'
import offersIcon from '../assets/Main homepage/mxoffersicon.svg'
import applyNowIcon from '../assets/Main homepage/mxapplynowicon.svg'
import serviceIcon from '../assets/Main homepage/mxservicesicon.svg'
import settingsIcon from '../assets/Main homepage/mxsettingsicon.svg'
import videoBankIcon from '../assets/Main homepage/mxvideobanking.svg'
import contactIcon from '../assets/Main homepage/mxContactus.svg'
import positivepayIcon from '../assets/Main homepage/settings_fill_icon.a093aaed39c636b2.svg'
import logoutIcon from '../assets/Main homepage/mxlogouticon.svg'
import homeIcon from '../assets/Main homepage/home_icon.1a4eda3b5b14fff4.svg'

const row1 = [
  { label: 'Accounts', icon: accountsIcon },
  { label: 'FD/RD', icon: depositsIcon },
  { label: 'Money Transfer', icon: transferIcon },
  { label: 'Bill Pay', icon: billpayIcon },
  { label: 'AU\nRefer-A-Friend', icon: referIcon },
  { label: 'Debit Card', icon: debitCardIcon },
  { label: 'Credit Card', icon: ccIcon },
]

const row2 = [
  { label: 'Planet First - AU\nGreen FD', icon: greenFdIcon, iconSize: 65 },
  { label: 'Send Money\nAbroad', icon: remitIcon, badge: true },
  { label: 'Investments', icon: investIcon },
  { label: 'Insurance', icon: insuranceIcon },
  { label: 'Tax', icon: taxIcon },
  { label: 'Offers', icon: offersIcon },
  { label: 'Apply Now', icon: applyNowIcon },
]

const row3 = [
  { label: 'Service Request', icon: serviceIcon },
  { label: 'Settings', icon: settingsIcon },
  { label: 'Video Banking', icon: videoBankIcon },
  { label: 'Contact Us', icon: contactIcon },
  { label: 'Positive Pay', icon: positivepayIcon, iconSize: 55 },
]

const menuItems = [
  { label: 'Home', icon: homeIcon },
  { label: 'Accounts', icon: accountsIcon },
  { label: 'FD/RD', icon: depositsIcon },
  { label: 'Money Transfer', icon: transferIcon },
  { label: 'Bill Pay', icon: billpayIcon },
  { label: 'Credit Card', icon: ccIcon },
  { label: 'Debit Card', icon: debitCardIcon },
  { label: 'Investments', icon: investIcon },
  { label: 'Send Money Abroad', icon: remitIcon, badge: true },
  { label: 'AU Refer-A-Friend', icon: referIcon },
  { label: 'Tax', icon: taxIcon },
  { label: 'Insurance', icon: insuranceIcon },
  { label: 'Apply Now', icon: applyNowIcon },
  { label: 'Offers', icon: offersIcon },
  { label: 'Service Request', icon: serviceIcon },
  { label: 'Contact Us', icon: contactIcon },
  { label: 'Video Banking', icon: videoBankIcon },
  { label: 'Settings', icon: settingsIcon },
  { label: 'Logout', icon: logoutIcon },
]

function Card({ label, icon, badge, iconSize = 120 }) {
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer group" style={{ width: '115px' }}>
      <div className="w-[115px] h-[115px] bg-[#fdf1ee] rounded-2xl flex items-center justify-center relative group-hover:shadow-md transition-shadow shrink-0">
        {badge && (
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4a2070] text-white text-[11px] px-3 py-[2px] rounded font-semibold z-10">
            New
          </span>
        )}
        <img src={icon} alt={label} style={{ width: `${iconSize}px`, height: `${iconSize}px`, objectFit: 'contain', display: 'block' }} />
      </div>
      <span className="text-[15px] font-bold text-[#6b3fa0] text-center leading-snug whitespace-pre-line">{label}</span>
    </div>
  )
}

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(false)
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const lastLogin = new Date().toLocaleString('en-IN', {
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  })

  return (
    <div className="flex min-h-screen relative">

      {/* Slide-out Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="flex-1 bg-black/40" onClick={() => setMenuOpen(false)} />

          {/* Panel */}
          <div className="w-[380px] bg-white h-full flex flex-col shadow-2xl absolute left-0 top-0">
            {/* Header */}
            <div className="flex items-start justify-between px-5 pt-5 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white border border-gray-200">
                  <svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="1.2">
                    <path strokeLinecap="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] text-gray-400">Welcome</p>
                  <p className="text-[16px] font-bold text-gray-800">Keshav</p>
                  <p className="text-[13px] text-[#7b3fa0] font-medium">View Profile</p>
                </div>
              </div>
              <button onClick={() => setMenuOpen(false)} className="text-gray-500 text-[22px] leading-none mt-1">✕</button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto">
              {menuItems.map(({ label, icon, badge }) => (
                <button
                  key={label}
                  onClick={() => { if (label === 'Logout') navigate('/login'); setMenuOpen(false) }}
                  className="flex items-center justify-between w-full px-5 py-4 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <img src={icon} alt={label} className="w-9 h-9 "  style={{ objectFit: 'contain' }} />
                    <span className="text-[15px] text-gray-700">{label}</span>
                    {badge && (
                      <span className="bg-orange-500 text-white text-[10px] px-2 py-[1px] rounded font-semibold">New</span>
                    )}
                  </div>
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M1 1l6 6-6 6" stroke="#e07b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </div>

            {/* Last Login */}
            <div className="px-5 py-4 border-t border-gray-100">
              <p className="text-[13px] font-bold text-gray-600">Last Login: {lastLogin}</p>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className="w-[380px] shrink-0 flex flex-col items-center pt-5 pb-8 min-h-screen"
        style={{ backgroundImage: `url(${sidebarBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="flex items-center justify-between w-full px-5 mb-8">
          <img src={auLogo} alt="AU Bank" className="w-10 h-10 rounded-full" />
          <button onClick={() => setMenuOpen(true)} className="text-gray-600">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <line x1="0" y1="1" x2="20" y2="1" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
              <line x1="0" y1="7" x2="20" y2="7" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
              <line x1="0" y1="13" x2="20" y2="13" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <p className="text-gray-500 text-[13px] mb-1">Welcome</p>
        <p className="text-gray-900 text-[20px] font-semibold mb-6">Keshav</p>

        <div className="bg-white rounded-[18px] shadow-sm px-5 py-4 w-[200px]">
          <p className="text-[11px] text-gray-400 text-center mb-3">Savings Account Balance</p>
          <div className="flex items-center justify-center gap-1">
            <span className="text-[15px] font-semibold text-gray-800">₹</span>
            {showBalance ? (
              <span className="text-[14px] font-semibold text-gray-800">12,345.00</span>
            ) : (
              <span className="flex gap-[5px] items-center mx-1">
                {[0,1,2].map(i => (
                  <span key={i} className="w-[6px] h-[6px] rounded-full bg-gray-700 inline-block" />
                ))}
              </span>
            )}
            <button
              onClick={() => setShowBalance(v => !v)}
              className="ml-1 text-[11px] border border-orange-400 text-orange-500 px-2 py-[2px] rounded-full font-medium"
            >
              {showBalance ? 'Hide' : 'View'}
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-white flex flex-col">
        <div className="flex items-center justify-end px-10 pt-5 pb-2 gap-4">
          <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 gap-2 w-[280px] shadow-sm">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 outline-none text-[14px] bg-transparent text-gray-700 placeholder-gray-400"
            />
            <svg width="16" height="16" fill="none" stroke="#999" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <button onClick={() => navigate('/login')} className="text-gray-500 hover:text-gray-700">
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>

        <div className="flex-1 px-10 py-6 flex flex-col gap-8">
          <div className="flex items-start justify-between pr-4">
            {row1.map(c => <Card key={c.label} {...c} />)}
          </div>
          <div className="flex items-start justify-between pr-4">
            {row2.map(c => <Card key={c.label} {...c} />)}
          </div>
          <div className="flex items-start gap-[52px]">
            {row3.map(c => <Card key={c.label} {...c} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
