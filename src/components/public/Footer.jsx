const footerColumns = [
  {
    title: 'AU Small\nFinance Bank',
    brand: true,
    links: [],
  },
  {
    title: 'Important Links',
    links: [
      'Media Centre',
      'Bank Auction',
      'Notice Board',
      'Service Fee',
      'Branch Locator',
      'SWIFT/BIC',
      'AU Forms',
      'Terms and Conditions',
      'Digital Lending',
      'Report Unauthorized\nTransactions',
      'Swadesh Banking',
      'Officially Valid Documents for\nKYC',
      'AU SFB x Fincare SFB Merger',
    ],
  },
  {
    title: 'Explore More',
    links: [
      'Careers',
      'Offers',
      'Blogs',
      'Bank Interest Rate',
      'Debit Card Services',
      'Apply Now',
      'Locate Us',
      'Contact Us',
      'Regulatory Disclosures Section',
      'Lodge a Complaint',
      'Know your Customer ID',
    ],
  },
  {
    title: 'Popular Searches',
    links: [
      'High Interest Rate Savings\nAccount',
      'Savings Account Interest Rates',
      'Apply Credit Card',
      'Online FD',
      'FD Interest Rates',
      'Video Banking',
    ],
  },
]

const footerLinkGroups = [
  [
    {
      title: 'AU 0101',
      links: [
        'AU 0101 App',
        'AU 0101 NetBanking',
        'Video Banking',
        'WhatsApp Banking',
        'Missed Call Banking',
        'AU Refer-A-Friend',
        'AU 0101 Business App',
      ],
    },
    {
      title: 'Premium Banking',
      links: [
        'AU Royale',
        'AU Platinum',
        'AU Royale World',
        'AU Royale Salary',
        'AU Royale Business Program',
      ],
    },
    {
      title: 'Personal Banking',
      links: [
        'Savings Account',
        'Salary Account',
        'Current Account',
        'Fixed Deposits',
        'Recurring Deposit',
      ],
    },
    {
      title: 'Cards',
      links: ['Credit Card', 'Debit Card', 'Commercial Credit Cards'],
    },
    {
      title: 'Interest Rates',
      links: [
        'Savings Account Interest Rates',
        'Fixed Deposit Interest Rates',
        'Bulk FD Interest Rates',
        'RD Interest Rates',
        'MCLR',
      ],
    },
  ],
  [
    {
      title: 'Forex',
      links: [
        'Forex Card Rates',
        'Nostro/ Correspondent Bank details for Fund Transfer',
        'Intermediary Bank Charges',
        'Product Disclosure Statement',
        'Forward Contract',
      ],
    },
    {
      title: 'Loans',
      links: [
        'Car Loan',
        'Two Wheeler Loan',
        'Commercial Vehicle Loan',
        'Personal Loan',
        'Tractor Loan',
        'Home Loan',
        'Construction Equipment Loan',
        'Gold Loan',
      ],
    },
    {
      title: 'Payment',
      links: ['BHIM UPI', 'NETC | FASTag'],
    },
    {
      title: 'Business Banking',
      links: [
        'Corporate Net Banking',
        'Corporate Mobile Banking',
        'Current Account',
        'Payment Solutions',
        'Collection / Receivable Solutions',
        'Business Loans',
        'Working Capital Loans',
        'Agri Loans',
        'Government Banking',
      ],
    },
  ],
  [
    {
      title: 'Calculators',
      links: [
        'Home Loan Calculator',
        'Car Loan Calculator',
        'Personal Loan Calculator',
        'Two Wheeler Loan Calculator',
        'Savings Account Calculator',
        'Fixed Deposit Calculator',
        'AMB Calculator',
        'APR Calculator',
      ],
    },
    {
      title: 'Insurance',
      links: [
        'Life Insurance',
        'Health Insurance',
        'Loan Suraksha',
        'Motor Insurance',
        'PMJJBY',
        'PMSBY',
      ],
    },
    {
      title: 'Investments',
      links: [
        'Mutual Funds',
        'National Pension System',
        'Atal Pension Yojana',
        'Note to fixed income investors',
      ],
    },
  ],
  [
    {
      title: 'Other Links',
      links: [
        'About Us',
        'Corporate Social Responsibility (CSR)',
        'DIGCC',
        'Unauthorised Fx transactions',
        'Interest relief Under Ex-Gratia Scheme',
        'Loan E-Mandate Request',
        'Loan E-Mandate Cancellation',
        'AU Small Finance Bank - GST Registration Numbers',
        'AU Positive Pay',
        'FAQ-Tax Deducted at Source (TDS)',
        'Regulatory Disclosures Section',
        'Asset Classification Norms',
        'Loan Related - NOC Signatories',
        'Do Not Call Registry',
        'Safe Banking',
        'MFI Practice Code',
        'Branch Relocation',
        'Glossary',
        'Language Disclaimer',
        'Fincare',
        'Use of Unparliamentary Language by Customers',
        'Deceased Claim Settlement',
        'Grievance Redressal Policy',
      ],
    },
  ],
]

const storeBadges = ['App Store', 'Google Play']
const socialLinks = ['fb', 'ig', 'in', 'x', 'yt']

const Footer = () => {
  return (
    <footer className="bg-[#101019] px-6 py-10 text-white sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-[1390px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.05fr_1fr_1fr_1fr] lg:gap-20 xl:gap-28">
        {footerColumns.map((column) => (
          <section key={column.title} className="min-w-0">
            <h2
              className={
                column.brand
                  ? 'whitespace-pre-line text-[40px] font-bold leading-[1.28] tracking-normal sm:text-[42px]'
                  : 'mb-5 text-[14px] font-bold leading-tight tracking-normal text-white'
              }
            >
              {column.title}
            </h2>

            {column.links.length > 0 && (
              <nav aria-label={column.title}>
                <ul className="space-y-[15px]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="block whitespace-pre-line text-[13px] leading-[1.42] tracking-normal text-[#b9c6d8] transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#101019]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </section>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-[1390px] border-t border-[#5a6170]/70 pt-10">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16 xl:gap-24">
          {footerLinkGroups.map((column, index) => (
            <div key={index} className="space-y-7">
              {column.map((group) => (
                <nav key={group.title} aria-label={group.title}>
                  <h3 className="mb-3 text-[14px] font-bold leading-tight text-white">
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="block text-[13px] leading-[1.45] text-[#b9c6d8] transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#101019]"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1390px] border-t border-[#3a4050] py-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <section>
            <h3 className="mb-3 text-[13px] font-bold text-white">
              Download AU 0101 - Digital Banking app
            </h3>
            <div className="flex flex-wrap gap-2">
              {storeBadges.map((store) => (
                <a
                  key={store}
                  href="#"
                  className="inline-flex h-8 min-w-[92px] items-center justify-center rounded-[4px] bg-white px-3 text-[10px] font-semibold text-[#101019] transition-opacity hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#101019]"
                >
                  {store}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-[13px] font-bold text-white">
              PCI DSS Security Compliant
            </h3>
            <div className="inline-flex h-12 w-24 items-center justify-center rounded-[4px] bg-white text-[13px] font-bold text-[#506c7b]">
              pci dss
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-[13px] font-bold text-white">
              Registered with DICGC
            </h3>
            <div className="inline-flex h-12 w-24 items-center justify-center rounded-[4px] bg-white text-[13px] font-bold text-[#2a8f74]">
              DICGC
            </div>
          </section>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1390px] flex-col gap-5 border-t border-[#3a4050] pt-5 text-[12px] text-[#b9c6d8] md:flex-row md:items-center md:justify-between">
        <p>© Copyright AU Small Finance Bank Limited</p>

        <nav aria-label="Legal links" className="flex flex-wrap gap-6">
          <a href="#" className="transition-colors hover:text-white">
            Disclaimer
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
        </nav>

        <nav aria-label="Social links" className="flex flex-wrap gap-3">
          {socialLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="flex h-5 w-5 items-center justify-center rounded-full border border-[#6c7280] text-[9px] uppercase leading-none text-[#b9c6d8] transition-colors hover:border-white hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
