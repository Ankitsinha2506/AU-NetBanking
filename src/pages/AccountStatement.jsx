import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../core/constants/routes.constant'
import { accountInfo, formatDateLabel, getTransactionsByPeriod } from '../data/transactions'
import { downloadStatementPDF } from '../data/generatePDF'
import auLogo from '../assets/Login Logo/aulogo_new.befc8eb34f4c700d.svg'
import accountsIcon from '../assets/Accountslogo/accounts_fill_icon.3bd345409f8966ec.svg'
import arrowLeftIcon from '../assets/Accountslogo/arrow-left.svg'
import arrowRightIcon from '../assets/Accountslogo/arrow-right.864d48a943e4093e.svg'
import logoutIcon from '../assets/Accountslogo/logout_icon.5d5e9878efc65da8.svg'
import searchIcon from '../assets/homepage/search-icon.svg'
import LFooter from '../components/LFooter'
import SideMenu from '../components/SideMenu'

const tabs = ['Current Month', 'Last Month', 'Last 3 Month', 'Custom period']

const rightLinks = [
  'Account Summary',
  'Transaction Receipt History',
  'Accounts Interest Certificate',
  'View Nominees',
  'Schedule of Charges',
  'View Account Statement',
]

function resolvePeriodLabel(period) {
  const fmt = d => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  const now = new Date()
  if (period === 'Current Month') {
    const from = new Date(now.getFullYear(), now.getMonth(), 1)
    const to = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    return `${fmt(from)} to ${fmt(to)}`
  }
  if (period === 'Last Month') {
    const from = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    const to = new Date(now.getFullYear(), now.getMonth(), 0)
    return `${fmt(from)} to ${fmt(to)}`
  }
  if (period === 'Last 3 Month') {
    const from = new Date(now.getFullYear(), now.getMonth() - 3, 1)
    const to = new Date(now.getFullYear(), now.getMonth(), 0)
    return `${fmt(from)} to ${fmt(to)}`
  }
  return period
}

export default function AccountStatement() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Current Month')
  const [customFrom, setCustomFrom] = useState('')
  const [customTo, setCustomTo] = useState('')
  const [txFilter, setTxFilter] = useState('All')
  const [showCustomTable, setShowCustomTable] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const [slideDir, setSlideDir] = useState('right')

  function handleTabChange(tab) {
    const oldIdx = tabs.indexOf(activeTab)
    const newIdx = tabs.indexOf(tab)
    setSlideDir(newIdx > oldIdx ? 'right' : 'left')
    setAnimKey(k => k + 1)
    setActiveTab(tab)
    setShowCustomTable(false)
  }

  const filteredAsc = getTransactionsByPeriod(activeTab, customFrom, customTo)
    .filter(tx => {
      if (txFilter === 'All') return true
      return tx.type === txFilter.toLowerCase()
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  const filtered = [...filteredAsc].reverse()

  function calcBalances(txList) {
    let bal = 0
    const balMap = {}
    txList.forEach(tx => {
      const amt = parseFloat(tx.amount.replace(/[₹,]/g, ''))
      bal = tx.type === 'credit' ? bal + amt : bal - amt
      balMap[tx.id] = bal
    })
    return balMap
  }
  const balances = calcBalances(filteredAsc)

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
          <span className="text-[#5c3d8f] font-semibold text-[16px]">Account Statement</span>
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

          {/* Left */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-7 py-6" style={{ overflow: 'hidden' }}>

              {/* Account number */}
              <div className="mb-5">
                <p className="text-gray-400 text-[12px] mb-1">Account</p>
                <p className="font-semibold text-gray-900 text-[15px] border-b border-gray-300 pb-2">
                  {accountInfo.accountNumber}
                </p>
              </div>

              {/* Tabs */}
              <div className="flex gap-6 border-b border-gray-200 mb-6">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`pb-3 text-[14px] font-medium whitespace-nowrap transition-colors ${activeTab === tab
                        ? 'border-b-2 border-orange-500 text-orange-500'
                        : 'text-gray-400 hover:text-gray-600'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Action on account statement — shown for non-custom tabs */}
              {activeTab !== 'Custom period' && (
                <div className="border border-gray-200 rounded-xl px-6 py-5 mb-6">
                  <p className="text-gray-400 text-[13px] mb-4">Action on account statement</p>
                  <div className="flex items-center gap-10">
                    <button onClick={() => downloadStatementPDF(filtered, resolvePeriodLabel(activeTab), balances)} className="flex items-center gap-2 text-orange-500 text-[14px] font-semibold hover:opacity-80">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#E8540A" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      Download
                    </button>
                    <button className="flex items-center gap-2 text-orange-500 text-[14px] font-semibold hover:opacity-80">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#E8540A" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <polyline points="2,4 12,13 22,4" />
                      </svg>
                      Email
                    </button>
                  </div>
                </div>
              )}

              {/* Custom period UI */}
              {activeTab === 'Custom period' && (
                <div className="mb-6">
                  <p className="text-gray-500 text-[13px] mb-4">Select date range for Statement</p>

                  {/* Date range row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex-1 relative">
                      <label className="text-gray-400 text-[11px] block mb-1">Start Date</label>
                      <div className="flex items-center border-b border-gray-300 pb-1">
                        <input type="date" value={customFrom} onChange={e => { setCustomFrom(e.target.value); setShowCustomTable(false) }}
                          className="flex-1 outline-none text-[14px] text-gray-700 bg-transparent" />
                      </div>
                    </div>
                    <span className="text-gray-400 text-[16px] mt-4">—</span>
                    <div className="flex-1 relative">
                      <label className="text-gray-400 text-[11px] block mb-1">End Date</label>
                      <div className="flex items-center border-b border-gray-300 pb-1">
                        <input type="date" value={customTo} onChange={e => { setCustomTo(e.target.value); setShowCustomTable(false) }}
                          className="flex-1 outline-none text-[14px] text-gray-700 bg-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* OR divider */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-[1px] bg-gray-200" />
                    <span className="text-gray-400 text-[13px]">OR</span>
                    <div className="flex-1 h-[1px] bg-gray-200" />
                  </div>

                  {/* FY buttons */}
                  <p className="text-gray-500 text-[13px] mb-3">View/ download/ email statement for</p>
                  <div className="flex gap-3 mb-6">
                    {['F.Y 25-26', 'F.Y 24-25'].map(fy => (
                      <button key={fy}
                        onClick={() => {
                          if (fy === 'F.Y 25-26') { setCustomFrom('2025-04-01'); setCustomTo('2026-03-31') }
                          if (fy === 'F.Y 24-25') { setCustomFrom('2024-04-01'); setCustomTo('2025-03-31') }
                        }}
                        className="border border-gray-300 rounded-lg px-5 py-2 text-[13px] text-gray-700 hover:border-orange-400 hover:text-orange-500 transition-colors"
                      >
                        {fy}
                      </button>
                    ))}
                  </div>

                  {/* Select Transactions + Actions box */}
                  <div className="border border-gray-200 rounded-xl px-6 py-5">
                    <p className="text-gray-500 text-[13px] mb-4">Select Transactions to view</p>
                    <div className="flex items-center gap-8 mb-5">
                      {['All', 'Credit', 'Debit'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="txFilter" value={opt}
                            checked={txFilter === opt}
                            onChange={() => setTxFilter(opt)}
                            className="accent-orange-500 w-4 h-4"
                          />
                          <span className="text-[14px] text-gray-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-400 text-[13px] mb-3">Action on account statement</p>
                      <div className="flex items-center gap-10">
                        <button onClick={() => setShowCustomTable(true)} className="flex items-center gap-2 text-orange-500 text-[14px] font-semibold hover:opacity-80">
                          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#E8540A" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                          View
                        </button>
                        <button className="flex items-center gap-2 text-orange-500 text-[14px] font-semibold hover:opacity-80">
                          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#E8540A" strokeWidth="2">
                            <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
                          </svg>
                          Email
                        </button>
                        <button onClick={() => downloadStatementPDF(
                          filtered,
                          `${formatDateLabel(customFrom)} to ${formatDateLabel(customTo)}`,
                          balances
                        )} className="flex items-center gap-2 text-orange-500 text-[14px] font-semibold hover:opacity-80">
                          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#E8540A" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="mt-5 bg-gray-100 rounded-xl px-5 py-3">
                    <p className="text-gray-500 text-[12px] leading-5">
                      Note: You will be able to view and download a maximum of 999 transactions at one time.
                      In case the number of transactions exceed 999, you will have to download it in parts
                      by adjusting the date range or visit your nearest AU bank branch.
                    </p>
                  </div>
                </div>
              )}

              {(activeTab !== 'Custom period' || showCustomTable) && (
                <div key={animKey} style={{ animation: `${slideDir === 'right' ? 'slideFromRight' : 'slideFromLeft'} 0.3s ease` }}>
                  {/* Table Header */}
                  <div className="grid grid-cols-[1fr_1.2fr_1.8fr_1fr_1.2fr_0.5fr] gap-2 pb-3 border-b border-gray-200 text-gray-400 text-[13px] px-2">
                    <span>Date</span>
                    <span>Transaction Amount</span>
                    <span>Narration</span>
                    <span>Value Date</span>
                    <span>Running Balance</span>
                    <span>Action</span>
                  </div>
                  {/* Rows */}
                  {filtered.length === 0 ? (
                    <div className="grid grid-cols-[1fr_1.2fr_1.8fr_1fr_1.2fr_0.5fr] gap-2 py-5 border-b border-gray-100 text-[13px] items-start px-2">
                      <span className="text-gray-700">8 Jun 2026</span>
                      <span></span>
                      <span className="text-gray-500">No transactions found for the selected period</span>
                      <span className="text-gray-700">8 Jun 2026</span>
                      <span></span>
                      <span><img src={arrowRightIcon} alt="" className="w-4 h-4" style={{ filter: 'invert(55%) sepia(90%) saturate(500%) hue-rotate(10deg)' }} /></span>
                    </div>
                  ) : (
                    filtered.map((tx, idx) => (
                      <div key={tx.id}
                        className="grid grid-cols-[1fr_1.2fr_1.8fr_1fr_1.2fr_0.5fr] gap-2 py-6 border-b border-gray-100 items-center px-2 bg-white"
                      >
                        <span className="text-gray-600 text-[14px]">{tx.displayDate}</span>
                        <span style={{ color: tx.type === 'credit' ? '#60bb81' : '#343333', fontWeight: '700', fontSize: '15px' }}>
                          {tx.type === 'credit' ? '+ ₹' : '- ₹'}{tx.amount.replace('₹', '')}
                        </span>
                        <span className="text-gray-500 text-[13px] leading-snug">{tx.narration}</span>
                        <span className="text-gray-600 text-[14px]">{tx.valueDate}</span>
                        <span className="text-gray-700 text-[14px]">₹{balances[tx.id]?.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                        <span><img src={arrowRightIcon} alt="" className="w-4 h-4" style={{ filter: 'invert(55%) sepia(90%) saturate(500%) hue-rotate(10deg)' }} /></span>
                      </div>
                    ))
                  )}
                  {/* Note */}
                  <div className="mt-6 bg-gray-100 rounded-xl px-5 py-3">
                    <p className="text-gray-500 text-[12px] leading-5">
                      Note: You will be able to view and download a maximum of 999 transactions at one time.
                      In case the number of transactions exceed 999, you will have to download it in parts
                      by adjusting the date range or visit your nearest AU bank branch.
                    </p>
                  </div>
                </div>
              )}

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
