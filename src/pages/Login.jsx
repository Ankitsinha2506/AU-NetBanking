import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import LoginImg from '../assets/LoginImg.jpeg'
import applyNowIcon from '../assets/Login Logo/applynow_iconib.9dfddd585271a3c7.svg'
import offersIcon from '../assets/Login Logo/offers-icon.5986cb1f80414c7f.svg'
import videosIcon from '../assets/Login Logo/ico-video.76d6e6127c47fc23.svg'
import fastagIcon from '../assets/Login Logo/FASTag-01.48ffaea58fd142f1.svg'
import videoBankIcon from '../assets/Login Logo/video-bank.81edc19bb399c8c5.svg'
import atmIcon from '../assets/Login Logo/atm-branch-icon.e14b03f172dedcf5.svg'
import captchaAudioIcon from '../assets/Login Logo/captcha_audio.60c383e116a4ddcd.svg'
import virtualKeyboardIcon from '../assets/Login Logo/virtualkeyboard.33bbf7db7bba143f.svg'
import LFooter from '../components/LFooter'

const quickLinks = [
  { label: 'Apply Now', icon: applyNowIcon },
  { label: 'Offers', icon: offersIcon },
  { label: 'Videos', icon: videosIcon },
  { label: 'FASTag', icon: fastagIcon },
  { label: 'Video Banking', icon: videoBankIcon },
  { label: 'ATM/Branch', icon: atmIcon },
]

export default function Login() {
  const [tab, setTab] = useState('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [importantOpen, setImportantOpen] = useState(false)
  const [directTo, setDirectTo] = useState('Dashboard')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [showOTP, setShowOTP] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(180)
  const [customerId, setCustomerId] = useState('')
  const [captcha, setCaptcha] = useState('')
  const timerRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const option = params.get('option')
    if (option) setDirectTo(decodeURIComponent(option))
  }, [])

  useEffect(() => {
    if (showOTP) {
      navigate(location.pathname + '?otp=true', { replace: false })
      const handlePop = () => setShowOTP(false)
      window.addEventListener('popstate', handlePop)
      return () => window.removeEventListener('popstate', handlePop)
    }
  }, [showOTP])

  useEffect(() => {
    if (showOTP) {
      setTimeLeft(180)
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) { clearInterval(timerRef.current); return 0 }
          return t - 1
        })
      }, 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [showOTP])

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const secs = String(timeLeft % 60).padStart(2, '0')
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const progress = (timeLeft / 180) * circumference

  const CAPTCHAS = ['3w94yp', 'k7m2nx', 'p5t8qr', 'b3z6wy', 'x9j4lv']
  const [currentCaptcha, setCurrentCaptcha] = useState('3w94yp')
  const directToOptions = ['Dashboard', 'Accounts', 'Offers', 'Service Request', 'Money Transfer', 'FD/RD']

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed flex flex-col"
      style={{ backgroundImage: `url(${LoginImg})` }}
    >
      <div className="flex-1 flex items-center justify-center py-15 px-8">
        {/* Card */}
        <div className="bg-white rounded-lg shadow-xl w-full max-w-[1080px] flex flex-col lg:flex-row gap-0 overflow-hidden">

          {/* Left: Form Area */}
          <div className="flex-1 px-4 sm:px-6 lg:px-20 py-8 overflow-hidden">

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-7">
              {['login', 'register'].map((t) => (
                <button
                  key={t}
                  onClick={() => { if (!showOTP) setTab(t) }}
                  className={`flex-1 text-center py-4 text-[15px] font-medium border-b-2 transition-colors ${
                    tab === t
                      ? 'border-orange-500 text-orange-500'
                      : showOTP ? 'border-transparent text-gray-300 cursor-not-allowed' : 'border-transparent text-gray-400'
                  }`}
                >
                  {t === 'login' ? 'Login' : 'Register'}
                </button>
              ))}
            </div>

            {/* OTP View — full width overlay */}
            {showOTP ? (
              <div className="py-4 max-w-md mx-auto px-4">
                <h2 className="text-center text-[20px] sm:text-[22px] font-semibold text-[#5c3d8f] mb-2">Verification</h2>
                <p className="text-center text-[12px] sm:text-[14px] font-bold text-gray-700 mb-6 sm:mb-8 whitespace-nowrap">
                  One-time password (OTP) has been sent to your mobile number <span>*******1055</span>
                </p>
                <h3 className="text-center text-[18px] sm:text-[20px] font-semibold text-[#5c3d8f] mb-6 sm:mb-8">Enter OTP</h3>
                <div className="flex justify-center gap-3 sm:gap-6 mb-2">
                  {otp.map((v, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      value={v}
                      onChange={e => {
                        const val = e.target.value.slice(-1)
                        const isNum = val >= '0' && val <= '9'
                        const next = [...otp]; next[i] = isNum ? val : ''; setOtp(next)
                        if (isNum && e.target.nextSibling) e.target.nextSibling.focus()
                      }}
                      className="w-8 sm:w-10 border-b-2 border-gray-300 text-center text-[18px] sm:text-[20px] outline-none focus:border-[#5c3d8f] pb-1"
                    />
                  ))}
                </div>
                <p className="text-center text-[13px] text-gray-400 mb-8">Resend OTP</p>
                <div className="flex flex-col items-center mb-4">
                  <div className="relative w-[120px] h-[120px]">
                    <svg className="w-full h-full" viewBox="0 0 120 120" style={{transform: 'rotate(-90deg)', transformOrigin: 'center'}}>
                      <circle cx="60" cy="60" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="6" />
                      <circle
                        cx="60" cy="60" r={radius} fill="none"
                        stroke="#22c55e" strokeWidth="6"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (timeLeft / 180) * circumference}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-orange-500 text-[22px] font-semibold">
                      {mins}:{secs}
                    </div>
                  </div>
                  <button onClick={() => setShowOTP(false)} className="text-[13px] text-gray-400 mt-3">Cancel</button>
                </div>
              </div>
            ) : (
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: tab === 'login' ? 'translateX(0%)' : 'translateX(-50%)', width: '200%' }}
              >
                {/* ── LOGIN PANEL ── */}
                <div className="w-1/2 pr-6">
                  <>
                      <div className="mb-7">
                        <input
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={e => setUsername(e.target.value)}
                          className="w-full border-b border-gray-400 pb-2 text-[14px] outline-none placeholder-gray-400 focus:border-orange-400"
                        />
                      </div>
                      <div className="mb-5">
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          maxLength={15}
                          onChange={e => setPassword(e.target.value)}
                          className="w-full border-b border-gray-400 pb-2 text-[14px] outline-none placeholder-gray-400 focus:border-orange-400"
                        />
                        <div className="flex justify-end mt-1">
                          <span className={`text-[11px] ${password.length > 0 ? 'text-orange-500' : 'text-gray-400'}`}>{password.length} / 15</span>
                        </div>
                      </div>
                      <div className="mb-5 relative">
                        <div className="flex justify-end mb-1">
                          {/* <span className="text-[11px] text-gray-400">0 / 15</span> */}
                        </div>
                        <p className="text-[12px] text-gray-400 mb-1">Take me directly to</p>
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className={`flex items-center justify-between w-full border-b pb-2 ${dropdownOpen ? 'border-orange-400' : 'border-gray-300'}`}
                        >
                          <span className="text-[14px] font-semibold text-gray-700">{directTo}</span>
                          <span className={`text-lg ${dropdownOpen ? 'text-orange-500' : 'text-gray-400'}`}>&#8964;</span>
                        </button>
                        {dropdownOpen && (
                          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 overflow-hidden">
                            <div className="border-t-2 border-orange-500">
                              {directToOptions.map(option => (
                                <button
                                  key={option}
                                  onClick={() => { setDirectTo(option); setDropdownOpen(false) }}
                                  className={`w-full text-left px-4 py-2 text-[14px] border-b border-gray-200 ${
                                    option === directTo ? 'text-orange-500 bg-gray-100' : 'text-gray-700 hover:bg-gray-50'
                                  }`}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center mb-3">
                          <div className="flex border border-gray-300 rounded overflow-hidden w-full">
                            <div className="flex-1 px-3 sm:px-5 py-3 text-[18px] sm:text-[22px] font-bold tracking-widest line-through select-none bg-white flex items-center">
                              {currentCaptcha}
                            </div>
                            <div className="border-l border-gray-300 w-[48px] flex items-center justify-center bg-white">
                              <img src={captchaAudioIcon} alt="audio" className="w-6 h-6" />
                            </div>
                          </div>
                          <button onClick={() => { const next = CAPTCHAS.filter(c => c !== currentCaptcha); setCurrentCaptcha(next[Math.floor(Math.random() * next.length)]); setCaptcha('') }} className="text-orange-500 text-[14px] font-medium ml-4">Refresh</button>
                        </div>
                        <input
                          type="text"
                          placeholder="Enter Captcha Code"
                          value={captcha}
                          onChange={e => setCaptcha(e.target.value)}
                          className="w-full border-b border-gray-300 pb-2 text-[14px] outline-none placeholder-gray-400 focus:border-orange-400"
                        />
                      </div>
                      <div className="flex justify-center my-4">
                        <button className="text-[13px] text-[#7b5ea7] flex items-center gap-2">
                          <img src={virtualKeyboardIcon} alt="virtual keypad" className="w-5 h-5" />
                          Use Virtual Keypad
                        </button>
                      </div>
                      <div className="flex justify-center mb-4">
                        <button
                          onClick={() => { if (username && password && captcha === currentCaptcha) setShowOTP(true) }}
                          className={`py-2 px-16 rounded text-[15px] font-medium transition-colors ${
                            username && password && captcha === currentCaptcha
                              ? 'bg-orange-500 text-white cursor-pointer hover:bg-orange-600'
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          Login
                        </button>
                      </div>
                      <div className="flex justify-center items-center gap-3 text-[10px] text-orange-500 mb-6">
                        <a href="#" className="hover:underline">Forgot Username</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="hover:underline">Forgot / Unlock Password</a>
                      </div>
                    </>
                </div>

                {/* ── REGISTER PANEL ── */}
                <div className="w-1/2 pl-6">
                  {/* Step indicator */}
                  <div className="flex items-center mb-8">
                    {[1, 2, 3, 4].map((step, i) => (
                      <div key={step} className="flex items-center flex-1 last:flex-none">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-medium border-2 shrink-0 ${
                          step === 1
                            ? 'bg-[#5c3d8f] border-[#5c3d8f] text-white'
                            : 'bg-white border-gray-300 text-gray-400'
                        }`}>
                          {step}
                        </div>
                        {i < 3 && <div className="flex-1 h-[1px] bg-gray-300 mx-1" />}
                      </div>
                    ))}
                  </div>

                  <h2 className="text-center text-[20px] font-semibold text-[#5c3d8f] mb-10">Enter Customer ID</h2>

                  <div className="mb-10">
                    <input
                      type="text"
                      placeholder="Customer ID"
                      value={customerId}
                      onChange={e => setCustomerId(e.target.value)}
                      className="w-full border-b border-gray-400 pb-2 text-[14px] outline-none placeholder-gray-400 focus:border-orange-400"
                    />
                  </div>

                  <div className="flex justify-center mb-8">
                    <button
                      className={`py-2 px-16 rounded text-[15px] font-medium transition-colors ${
                        customerId
                          ? 'bg-orange-500 text-white cursor-pointer hover:bg-orange-600'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )}

            {/* Important notice — shared below both panels */}
            <div className="border border-gray-200 rounded-sm bg-gray-50 text-[12px] text-gray-600 mt-4">
              <div className="flex justify-between items-start px-4 pt-3 pb-2">
                <div className="flex-1 pr-2">
                  <p className="font-bold text-gray-800 text-[14px] mb-1">Important</p>
                  {!importantOpen && (
                    <p className="text-[12px] leading-5">
                      <span className="font-bold">Existing AU NetBanking customer:</span> kindly{' '}
                      <span className="font-bold">Login</span> using your Username and Password. You will be then
                      requested to generate a new password.
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setImportantOpen(!importantOpen)}
                  className="text-orange-500 text-[18px] leading-none mt-0.5"
                >
                  {importantOpen ? '\u2227' : '\u2228'}
                </button>
              </div>
              {importantOpen && (
                <div className="px-4 pb-4 space-y-2 text-[12px] leading-5">
                  <p>
                    <span className="font-bold">Existing AU NetBanking customer:</span> kindly{' '}
                    <span className="font-bold">Login</span> using your Username and Password. You will
                    be then requested to generate a new password.
                  </p>
                  <p>
                    <span className="font-bold">New to AU NetBanking:</span> kindly{' '}
                    <span className="font-bold">Register</span> to get started.
                  </p>
                  <p className="underline">Note:</p>
                  <p>
                    (1) For safe Netbanking experience, do not share your Customer ID, Username,
                    Password, MPIN and OTP with anyone.
                  </p>
                  <p>
                    (2) To get <span className="font-bold">Complete access</span> of your account,
                    register using <span className="font-bold">Debit Card Details.</span> You can only
                    get <span className="font-bold">view Access</span> of your account by registering
                    with your <span className="font-bold">Account Details.</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Quick Links */}
          <div className="w-full lg:w-[320px] xl:w-[380px] flex flex-col gap-2 py-6 lg:pt-20 px-4 sm:px-6 lg:px-8 border-t lg:border-t-0 lg:border-l border-gray-100">
            {quickLinks.map(({ label, icon }) => (
              <button
                key={label}
                className="flex items-center gap-3 bg-gray-100 rounded px-4 py-3 text-[14px] text-gray-700 w-full"
              >
                <img src={icon} alt={label} className="w-7 h-7" />
                <span className="text-[#7b5ea7]">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <LFooter />
    </div>
  )
}
