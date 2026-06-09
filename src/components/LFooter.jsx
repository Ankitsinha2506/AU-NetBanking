import auLogo from '../assets/Login Logo/aulogo_new.befc8eb34f4c700d.svg'
import appStore from '../assets/Login Logo/appstore_new.81578540cd6b5d61.svg'
import playStore from '../assets/Login Logo/playstore_new.ff375bcbec8db772.svg'

export default function LFooter() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-4 px-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <img src={auLogo} alt="AU Bank" className="h-8" />
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 text-[11px] sm:text-[12px] text-gray-500">
          <span className="text-center sm:text-left">© AU Small Finance Bank Limited. All Rights Reserved</span>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <a href="#" className="hover:underline">Disclaimer</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:underline">Security Tips</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="#">
          <img src={appStore} alt="App Store" className="h-6" />
        </a>
        <a href="#">
          <img src={playStore} alt="Play Store" className="h-6" />
        </a>
      </div>
    </footer>
  )
}
