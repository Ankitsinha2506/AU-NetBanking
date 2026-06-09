import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../core/constants/routes.constant'
import userProfile from '../core/constants/userProfile'
import accountsIcon from '../assets/Main homepage/mxaccountsicon.svg'
import depositsIcon from '../assets/Main homepage/mxdepositsicon.svg'
import transferIcon from '../assets/Main homepage/mxmoneytransfericon.svg'
import billpayIcon from '../assets/Main homepage/mxbillpayicon.svg'
import referIcon from '../assets/Main homepage/mxnewreferpost.svg'
import debitCardIcon from '../assets/Main homepage/mxdebitcardicon.svg'
import ccIcon from '../assets/Main homepage/mxccicon.svg'
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
  { label: 'Positive Pay', icon: positivepayIcon },
  { label: 'Logout', icon: logoutIcon },
]

export default function SideMenu({ onClose }) {
  const navigate = useNavigate()
  const lastLogin = new Date().toLocaleString('en-IN', {
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
  })

  function handleItem(label) {
    if (label === 'Logout') navigate(ROUTES.LOGIN)
    else if (label === 'Home') navigate(ROUTES.DASHBOARD)
    else if (label === 'Accounts') navigate(ROUTES.ACCOUNTS)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/40" onClick={onClose} />
      <div className="w-[380px] bg-white h-full flex flex-col shadow-2xl absolute left-0 top-0">
        <div className="flex items-start justify-between px-5 pt-5 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#f3eaf9] border border-[#c9a8e8]">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#7b3fa0" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <p className="text-[12px] text-gray-400">Welcome</p>
              <p className="text-[16px] font-bold text-gray-800">{userProfile.firstName}</p>
              <p
                className="text-[13px] text-[#7b3fa0] font-medium cursor-pointer"
                onClick={() => { navigate(ROUTES.PROFILE); onClose() }}
              >
                View Profile
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 text-[22px] leading-none mt-1">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {menuItems.map(({ label, icon, badge }) => (
            <button
              key={label}
              onClick={() => handleItem(label)}
              className="flex items-center justify-between w-full px-5 py-4 border-b border-gray-100 hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <img src={icon} alt={label} className="w-9 h-9" style={{ objectFit: 'contain' }} />
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

        <div className="px-5 py-4 border-t border-gray-100">
          <p className="text-[13px] font-bold text-gray-600">Last Login: {lastLogin}</p>
        </div>
      </div>
    </div>
  )
}
