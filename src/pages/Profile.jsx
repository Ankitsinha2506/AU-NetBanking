import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import auLogo from '../assets/Main homepage/aulogo.png'
import arrowLeftIcon from '../assets/Accountslogo/arrow-left.svg'
import LFooter from '../components/LFooter'
import userProfile from '../core/constants/userProfile'
import SideMenu from '../components/SideMenu'

function Field({ label, value, action }) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <p className="text-[13px] text-gray-400 mb-1">{label}</p>
      <div className="flex items-center justify-between">
        <p className="text-[15px] font-semibold text-gray-900">{value}</p>
        {action && (
          <button className="text-orange-500 text-[13px] font-medium hover:underline">{action}</button>
        )}
      </div>
    </div>
  )
}

function Section({ title, action, children }) {
  return (
    <div className="pt-5">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-[17px] font-bold text-[#5c3d8f]">{title}</h2>
        {action && (
          <button className="text-orange-500 text-[13px] font-medium hover:underline">{action}</button>
        )}
      </div>
      {children}
    </div>
  )
}

const incomeOptions = [
  'Less than 2.5 Lakh',
  '2.5 Lakh - 5 Lakh',
  '5 Lakh - 10 Lakh',
  '10 Lakh - 20 Lakh',
  '20 Lakh - 25 Lakh',
  '25 Lakh - 50 Lakh',
  '50 Lakh - 1 Crore',
  '1 Crore - 5 Crore',
  '5 Crore - 10 Crore',
  '10 Crore - 25 Crore',
  'More than 25 Crore',
]

export default function Profile() {
  const navigate = useNavigate()
  const p = userProfile
  const [income, setIncome] = useState(p.annualIncome)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fdf0f0' }}>
      {menuOpen && <SideMenu onClose={() => setMenuOpen(false)} />}

      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 h-[65px] flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(true)} className="text-gray-500 text-[22px]">☰</button>
          <img src={auLogo} alt="AU Bank" className="h-9" />
        </div>
        <span className="text-[18px] font-semibold text-[#5c3d8f]">Profile</span>
        <div className="flex items-center gap-5">
          <button>
            <svg width="20" height="20" fill="none" stroke="#555" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button onClick={() => navigate('/login')}>
            <svg width="22" height="22" fill="none" stroke="#555" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[820px] mx-auto px-4 py-6">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-orange-500 text-[14px] font-medium mb-6 hover:opacity-75"
        >
          <img src={arrowLeftIcon} alt="back" className="w-4 h-4"
            style={{ filter: 'invert(55%) sepia(90%) saturate(600%) hue-rotate(340deg)' }} />
          Back
        </button>

        {/* Profile avatar with circular progress */}
        <div className="flex flex-col items-center mb-[-52px] relative z-10">
          <div className="relative w-[100px] h-[100px]">
            {/* Circular progress ring */}
            <svg width="100" height="100" style={{ transform: 'rotate(-90deg)' }} className="absolute inset-0">
              {/* Track */}
              <circle cx="50" cy="50" r="46" fill="none" stroke="#e0e0e0" strokeWidth="5"/>
              {/* Orange progress arc */}
              <circle cx="50" cy="50" r="46" fill="none"
                stroke="#e07b3a" strokeWidth="5"
                strokeDasharray={2 * Math.PI * 46}
                strokeDashoffset={2 * Math.PI * 46 - (p.profileComplete / 100) * 2 * Math.PI * 46}
                strokeLinecap="round"/>
            </svg>
            {/* Avatar circle */}
            <div className="absolute inset-[7px] rounded-full overflow-hidden" style={{ backgroundColor: '#b0b0b0' }}>
              {/* Person icon — upper portion (white head + shoulders) */}
              <div className="flex items-center justify-center" style={{ height: '58%', paddingTop: '10px' }}>
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4.5" fill="white"/>
                  <path d="M3 21c0-4 4-7 9-7s9 3 9 7" fill="white"/>
                </svg>
              </div>
              {/* Dark overlay bottom half with Add label */}
              <div
                className="flex items-center justify-center"
                style={{ height: '42%', backgroundColor: 'rgba(60,60,60,0.72)' }}
              >
                <span style={{ color: 'white', fontSize: '13px', fontWeight: '600', letterSpacing: '0.3px' }}>Add</span>
              </div>
            </div>
          </div>
          <p className="text-[13px] text-gray-400 mt-3">{p.profileComplete}% Complete</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm px-8 pt-20 pb-8">

          <Section title="Personal Information">
            <Field label="Name" value={p.name} />
            <Field label="Cust Id" value={p.custId} />
            <Field label="Username" value={p.username} />
            <Field label="Date of Birth" value={p.dob} />
            <Field label="PAN" value={p.pan} />
            <Field label="Aadhar Number" value={p.aadhar} />
            <Field label="CKYC Number" value={p.ckyc} action="View" />
          </Section>

          <div className="border-t border-gray-200 mt-4" />

          <Section title="Contact Details" action="Update/Add">
            <Field label="Mobile Number" value={p.mobile} />
            <Field label="Email ID" value={p.email} action="Verify" />
            <div className="py-4 border-b border-gray-100">
              <p className="text-[13px] text-gray-400 mb-2">Permanent Address</p>
              {[p.permanentAddress.line1, p.permanentAddress.line2, p.permanentAddress.city,
                p.permanentAddress.state, p.permanentAddress.pincode].map((l, i) => (
                <p key={i} className="text-[15px] font-semibold text-gray-900">{l}</p>
              ))}
            </div>
            <div className="py-4">
              <p className="text-[13px] text-gray-400 mb-2">Communication Address</p>
              {[p.communicationAddress.line1, p.communicationAddress.line2, p.communicationAddress.line3,
                p.communicationAddress.city, p.communicationAddress.state, p.communicationAddress.pincode].map((l, i) => (
                <p key={i} className="text-[15px] font-semibold text-gray-900">{l}</p>
              ))}
            </div>
          </Section>

          <div className="border-t border-gray-200 mt-2" />

          <Section title="Employment Details">
            <div className="py-4">
              <p className="text-[13px] text-gray-400 mb-1">Annual Income</p>
              <button
                onClick={() => setDropdownOpen(v => !v)}
                className="flex items-center justify-between border-b border-gray-300 pb-2 w-[280px]"
              >
                <p className="text-[15px] font-semibold text-gray-900">{income}</p>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none"
                  style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                  <path d="M1 1l6 6 6-6" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="w-full border border-gray-200 overflow-y-auto" style={{ maxHeight: '320px' }}>
                  {incomeOptions.map((opt, idx) => (
                    <button
                      key={opt}
                      onClick={() => { setIncome(opt); setDropdownOpen(false) }}
                      className={`w-full text-left px-5 py-[14px] border-b border-gray-200 last:border-0 text-[15px] transition-colors ${
                        opt === income
                          ? 'text-orange-500 font-semibold bg-gray-100'
                          : idx % 2 === 0 ? 'bg-white text-gray-800' : 'bg-gray-50 text-gray-800'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Section>

        </div>
      </main>

      <LFooter />
    </div>
  )
}
