import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../core/constants/routes.constant'
import auLogo from '../assets/Login Logo/aulogo_new.befc8eb34f4c700d.svg'
import accountsIcon from '../assets/Accountslogo/accounts_fill_icon.3bd345409f8966ec.svg'
import arrowLeftIcon from '../assets/Accountslogo/arrow-left.svg'
import arrowRightIcon from '../assets/Accountslogo/arrow-right.864d48a943e4093e.svg'
import logoutIcon from '../assets/Accountslogo/logout_icon.5d5e9878efc65da8.svg'
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

const fields = [
  { label: 'Name', value: 'Keshav Pralhad Golande', col: 1 },
  { label: 'Branch Name & City', value: 'Wakad Pune - Pune', col: 2 },
  { label: 'Account Number', value: '2601235010788507', col: 1 },
  { label: 'IFSC Code', value: 'AUBL0002630', col: 2 },
  { label: 'Virtual Payment Address', value: 'keshav11428800@aubank', col: 1 },
  { label: 'Swift Code', value: 'AUBLINBBXXX', col: 2 },
]

const singleFields = [
  { label: 'Account Type', value: 'AU Salary Account-Value' },
  { label: 'Customer ID', value: '41701754' },
  { label: 'Nickname', value: null, action: 'Add' },
  { label: 'Status', value: 'Account Open Regular' },
  { label: 'Account Nominee', value: null, action: 'Add Nominee' },
  { label: 'Holding Type', value: 'Sole Owner' },
]

export default function AccountDetails() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fdf0f0' }}>
      {menuOpen && <SideMenu onClose={() => setMenuOpen(false)} />}

      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 h-[60px] flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(true)} className="text-gray-500 text-[22px]">☰</button>
          <img src={auLogo} alt="AU Bank" className="h-9" />
        </div>
        <div className="flex items-center gap-2">
          <img src={accountsIcon} alt="accounts" className="w-6 h-6" />
          <span className="text-[#5c3d8f] font-semibold text-[16px]">View Account Details</span>
        </div>
        <div className="flex items-center gap-5">
          <button><img src={searchIcon} alt="search" className="w-5 h-5 opacity-50" /></button>
          <button><img src={logoutIcon} alt="logout" className="w-6 h-6 opacity-70" /></button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-8 py-7">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-orange-500 text-[14px] font-medium mb-6 hover:opacity-75"
        >
          <img src={arrowLeftIcon} alt="back" className="w-4 h-4" style={{ filter: 'invert(55%) sepia(90%) saturate(600%) hue-rotate(340deg)' }} />
          Back
        </button>

        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Left — Details Card */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6">

              {/* 2-col grid fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 border-b border-gray-100 pb-6 mb-6">
                {fields.map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-gray-400 text-[12px] mb-1">{label}</p>
                    <p className="text-gray-900 text-[15px] font-medium">{value}</p>
                  </div>
                ))}
              </div>

              {/* Single-col fields */}
              <div className="flex flex-col gap-5">
                {singleFields.map(({ label, value, action }) => (
                  <div key={label}>
                    <p className="text-gray-400 text-[12px] mb-1">{label}</p>
                    <div className="flex items-center gap-4">
                      {value && <p className="text-gray-900 text-[15px] font-medium">{value}</p>}
                      {action && (
                        <button className="text-orange-500 text-[13px] font-medium hover:underline">
                          {action}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[370px] flex flex-col gap-3 shrink-0">
            {rightLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  if (link === 'Account Summary') navigate(ROUTES.ACCOUNTS)
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
