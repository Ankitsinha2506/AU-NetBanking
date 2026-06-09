import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../core/constants/routes.constant'
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
import userProfile from '../core/constants/userProfile'
import SideMenu from '../components/SideMenu'

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

function Card({ label, icon, badge, iconSize = 120, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center gap-3 cursor-pointer group" style={{ width: '115px' }}>
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

  return (
    <div className="flex min-h-screen relative">

      {menuOpen && <SideMenu onClose={() => setMenuOpen(false)} />}

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
        <p className="text-gray-900 text-[20px] font-semibold mb-6">{userProfile.firstName}</p>

        <div className="rounded-[28px] px-6 py-5 w-[290px]" style={{ backgroundColor: 'rgba(255,255,255,0.55)' }}>
          <p className="text-[13px] text-gray-600 text-center mb-3 font-medium">Savings Account Balance</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[17px] font-semibold text-gray-800">₹</span>
            {showBalance ? (
              <span className="text-[16px] font-semibold text-gray-800">{userProfile.savingsBalance}</span>
            ) : (
              <span className="flex gap-[6px] items-center">
                {[0,1,2].map(i => (
                  <span key={i} className="w-[7px] h-[7px] rounded-full bg-gray-700 inline-block" />
                ))}
              </span>
            )}
            <button
              onClick={() => setShowBalance(v => !v)}
              className="text-[13px] border border-orange-400 text-orange-500 px-4 py-[3px] rounded-full font-medium ml-1"
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
            {row1.map(c => (
              <Card key={c.label} {...c}
                onClick={c.label === 'Accounts' ? () => navigate(ROUTES.ACCOUNTS) : undefined}
              />
            ))}
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