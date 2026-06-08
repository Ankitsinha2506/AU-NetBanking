import brandIcon from "../../assets/homepage/brand_awareness.svg";
import arrowRight from "../../assets/homepage/arrow_forward_right.svg";

const blogs = [
  {
    title: "Zero Markup & Zero Charges on International Money Transfers with AU Small Finance Bank",
    read: "2 min read",
    date: "Jun 21, 2026",
  },
  {
    title: "How to Make the Most of an Airport Layover with Your Credit Card",
    read: "2 min read",
    date: "Jun 03, 2026",
  },
  {
    title: "RuPay Credit Card UPI Transaction Limit: What You Need to Know",
    read: "2 min read",
    date: "Jun 03, 2026",
  },
];

const mediaItems = [
  {
    title: "AU Small Finance Bank Supports Home-Based Palliative Care Programme for Cancer Patients in Sundargarh, Odisha",
    date: "May 25, 2026",
  },
  {
    title: "AU Ignite has skilled 12,000+ youth across Jaipur, achieving over 77% placements in seven years",
    date: "May 19, 2026",
  },
  {
    title: "AU Small Finance Bank adopts Intellect's Purple Fabric to accelerate its AI-First Banking journey",
    date: "May 19, 2026",
  },
];

export default function BlogMedia() {
  return (
    <section className="bg-white py-12 pb-28">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {/* Left — Blog */}
          <div className="border border-gray-200 rounded-2xl p-7 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Blog</h3>
            <div className="flex flex-col flex-1 divide-y divide-gray-100">
              {blogs.map((blog, i) => (
                <div key={i} className="py-4">
                  <p className="text-sm font-medium text-gray-800 leading-snug mb-2 cursor-pointer hover:text-[#c0392b]">
                    {blog.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    {blog.read} &bull; {blog.date}
                  </p>
                </div>
              ))}
            </div>
            <a href="#" className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#c0392b] hover:underline">
              See all blogs
              <img src={arrowRight} alt="" className="w-4 h-4" />
            </a>
          </div>

          {/* Middle — Latest Announcement */}
          <div className="bg-[#3d1152] rounded-2xl p-8 flex flex-col justify-between">
            {/* Speaker icon */}
            <div>
              <img src={brandIcon} alt="announcement" className="w-10 h-10 mb-16 brightness-0 invert opacity-80" />
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-3 uppercase tracking-wide">Latest announcement</p>
              <p className="text-white text-lg font-medium leading-snug mb-6">
                Elevated financial programs, smart money solutions, and lifestyle privileges, designed exclusively for women, brought to you by 'M' circle
              </p>
              <button className="bg-[#c0392b] hover:bg-[#a93226] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors">
                Know more
              </button>
            </div>
          </div>

          {/* Right — Media Centre */}
          <div className="border border-gray-200 rounded-2xl p-7 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Media centre</h3>
            <div className="flex flex-col flex-1 divide-y divide-gray-100">
              {mediaItems.map((item, i) => (
                <div key={i} className="py-4">
                  <p className="text-sm font-medium text-gray-800 leading-snug mb-2 cursor-pointer hover:text-[#c0392b]">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              ))}
            </div>
            <a href="#" className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#c0392b] hover:underline">
              Visit media centre
              <img src={arrowRight} alt="" className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
