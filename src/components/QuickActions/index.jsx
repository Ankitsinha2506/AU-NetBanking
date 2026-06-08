import savingsIcon from "../../assets/homepage/savings-account1.svg";
import emiIcon from "../../assets/homepage/group3.svg";
import creditCardIcon from "../../assets/homepage/credit_card6.svg";
import servicesIcon from "../../assets/homepage/stack_star.svg";

const actions = [
  { icon: savingsIcon, label: "Open Savings\nAccount" },
  { icon: emiIcon, label: "Make EMI\nPayments" },
  { icon: creditCardIcon, label: "Get Credit\nCard" },
  { icon: servicesIcon, label: "Explore\nServices" },
];

export default function QuickActions() {
  return (
    <section className="bg-white py-10 pb-20">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-16">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-full bg-[#c0392b] hover:bg-[#a93226] flex items-center justify-center transition-colors shadow-sm">
              <img src={action.icon} alt={action.label} className="w-7 h-7" />
            </div>
            <span className="text-sm text-gray-700 text-center leading-snug whitespace-pre-line group-hover:text-[#c0392b] transition-colors">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
