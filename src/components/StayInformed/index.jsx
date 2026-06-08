import kycBanner from "../../assets/homepage/RBI-FLW-KYC-POSM-Webbanner_593x182 (1).webp";
import moneyMuleBanner from "../../assets/homepage/RBI-FLW-Money-Mule-POSM-Webbanner_593x182 (1).webp";

export default function StayInformed() {
  return (
    <section className="bg-white py-12 pb-28 ">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Stay informed, stay safe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-2xl overflow-hidden">
            <img src={kycBanner} alt="KYC Banner" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={moneyMuleBanner} alt="Money Mule Banner" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
