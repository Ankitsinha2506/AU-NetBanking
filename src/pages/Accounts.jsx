import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../core/constants/routes.constant'
import auLogo from '../assets/Login Logo/aulogo_new.befc8eb34f4c700d.svg'
import accountsIcon from '../assets/Accountslogo/accounts_fill_icon.3bd345409f8966ec.svg'
import arrowLeftIcon from '../assets/Accountslogo/arrow-left.svg'
import arrowRightIcon from '../assets/Accountslogo/arrow-right.864d48a943e4093e.svg'
import logoutIcon from '../assets/Accountslogo/logout_icon.5d5e9878efc65da8.svg'
import infoIcon from '../assets/Accountslogo/info_icon.a84139d6528e11f6.svg'
import searchIcon from '../assets/homepage/search-icon.svg'
import LFooter from '../components/LFooter'
import SideMenu from '../components/SideMenu'

const rightLinks = [
  'Account Summary',
  'Transaction Receipt History',
  'Accounts Interest Certificate',
  'View Nominees',
  'Schedule of Charges',
  'View Account Statement',
]

export default function Accounts() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fdf0f0' }}>
      {menuOpen && <SideMenu onClose={() => setMenuOpen(false)} />}

      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 px-10 h-[65px] flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(true)} className="text-gray-500 text-[22px]">☰</button>
          <img src={auLogo} alt="AU Bank" className="h-9" />
        </div>

        <div className="flex items-center gap-2">
          <img src={accountsIcon} alt="accounts" className="w-6 h-6" />
          <span className="text-[#5c3d8f] font-semibold text-[20px]">Accounts</span>
        </div>

        <div className="flex items-center gap-5">
          <button>
            <img src={searchIcon} alt="search" className="w-5 h-5 opacity-90" />
          </button>
          <button>
            <img src={logoutIcon} alt="logout" className="w-6 h-6 opacity-90" />
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto  py-7">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-orange-500 text-[14px] font-medium mb-6 hover:opacity-75"
        >
          <img src={arrowLeftIcon} alt="back" className="w-4 h-4" style={{ filter: 'invert(55%) sepia(90%) saturate(600%) hue-rotate(340deg)' }} />
          Back
        </button>

        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">

            {/* Account card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-7 py-6 flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <p className="text-gray-400 text-[13px] mb-1">Keshav Pralhad Golande</p>
                <p className=" text-gray-900 text-[16px] mb-3">2601235010788507</p>
                <button onClick={() => navigate(ROUTES.ACCOUNT_DETAILS)} className="text-orange-500 text-[13px] font-medium hover:underline">Account Details</button>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1 mb-1">
                  <span className="text-gray-400 text-[13px]">Withdrawable balance</span>
                  <img src={infoIcon} alt="info" className="w-[15px] h-[15px]" />
                </div>
                <p className="font-bold text-gray-900 text-[24px] mb-3">₹0.00</p>
                <button className="text-orange-500 text-[13px] font-medium hover:underline">View Breakup</button>
              </div>
            </div>

            {/* Transactions card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-7 py-5 border-b border-gray-100">
                <p className="text-[#5c3d8f] text-[14px]">No Upcoming Payments for this account</p>
              </div>

              <button className="w-full flex items-center justify-between px-7 py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <span className="text-[#5c3d8f] text-[14px] font-medium">Recent Transactions</span>
                <span className="text-[#5c3d8f] text-[18px]">⌄</span>
              </button>

              <button className="w-full flex items-center justify-between px-7 py-5 hover:bg-gray-50 transition-colors">
                <span className="text-[#5c3d8f] text-[14px] font-medium">Average Balance</span>
                <span className="text-[#5c3d8f] text-[18px]">⌄</span>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[370px] flex flex-col gap-3 shrink-0">
            {rightLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  if (link === 'View Account Statement') navigate(ROUTES.ACCOUNT_STATEMENT)
                }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-center justify-between hover:border-[#5c3d8f] transition-colors"
              >
                <span className="text-gray-700 text-[14px]">{link}</span>
                <img src={arrowRightIcon} alt="" className="w-4 h-4" style={{ filter: 'invert(55%) sepia(90%) saturate(500%) hue-rotate(10deg)' }} />
              </button>
            ))}
          </div>

        </div>
      </main>

      <LFooter />

    </div>
  )
}
