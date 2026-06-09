// ─────────────────────────────────────────────
// Central Transaction Data Store
// Edit this file to manage all transactions
// shown in the Account Statement page
// ─────────────────────────────────────────────
import userProfile from '../core/constants/userProfile'

export const accountInfo = {
  accountNumber: userProfile.accountNumber,
  accountHolder: userProfile.name,
  accountType: userProfile.accountType,
  customerType: userProfile.customerType,
  branch: userProfile.branch,
  ifsc: userProfile.ifsc,
  nominee: userProfile.nominee,
  customerId: userProfile.username,
  address: `${userProfile.communicationAddress.line1}, ${userProfile.communicationAddress.line2}, Near Hdfc Bank\n${userProfile.communicationAddress.city} - ${userProfile.communicationAddress.pincode}, ${userProfile.communicationAddress.state} - India`,
}

// Add / edit / remove transactions here
// type: 'credit' → green amount (+), 'debit' → red amount (-)
export const transactions = [
  // ── 1 Year Salary Credits ──────────────────────────────────
  {
    id: 101,
    date: '2025-06-01',
    displayDate: '1 Jun 2025',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - JUN 2025 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202506' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Jun 2025',
    runningBalance: '₹45,000.00',
  },
  {
    id: 102,
    date: '2025-07-01',
    displayDate: '1 Jul 2025',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - JUL 2025 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202507' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Jul 2025',
    runningBalance: '₹90,000.00',
  },
  {
    id: 103,
    date: '2025-08-01',
    displayDate: '1 Aug 2025',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - AUG 2025 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202508' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Aug 2025',
    runningBalance: '₹1,35,000.00',
  },
  {
    id: 104,
    date: '2025-09-01',
    displayDate: '1 Sep 2025',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - SEP 2025 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202509' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Sep 2025',
    runningBalance: '₹1,80,000.00',
  },
  {
    id: 105,
    date: '2025-10-01',
    displayDate: '1 Oct 2025',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - OCT 2025 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202510' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Oct 2025',
    runningBalance: '₹2,25,000.00',
  },
  {
    id: 106,
    date: '2025-11-01',
    displayDate: '1 Nov 2025',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - NOV 2025 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202511' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Nov 2025',
    runningBalance: '₹2,70,000.00',
  },
  {
    id: 107,
    date: '2025-12-01',
    displayDate: '1 Dec 2025',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - DEC 2025 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202512' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Dec 2025',
    runningBalance: '₹3,15,000.00',
  },
  {
    id: 108,
    date: '2026-01-01',
    displayDate: '1 Jan 2026',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - JAN 2026 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202601' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Jan 2026',
    runningBalance: '₹3,60,000.00',
  },
  {
    id: 109,
    date: '2026-02-01',
    displayDate: '1 Feb 2026',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - FEB 2026 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202602' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Feb 2026',
    runningBalance: '₹4,05,000.00',
  },
  {
    id: 110,
    date: '2026-03-01',
    displayDate: '1 Mar 2026',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - MAR 2026 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202603' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Mar 2026',
    runningBalance: '₹4,50,000.00',
  },
  {
    id: 111,
    date: '2026-04-01',
    displayDate: '1 Apr 2026',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - APR 2026 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202604' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 Apr 2026',
    runningBalance: '₹4,95,000.00',
  },
  {
    id: 112,
    date: '2026-05-01',
    displayDate: '1 May 2026',
    amount: '₹45,000.00',
    type: 'credit',
    narration: 'SALARY CREDIT - MAY 2026 - AU SMALL FINANCE BANK LTD/PAYROLL/KESHAV PRALHAD GOLANDE',
    chequeRef: 'SAL202605' + accountInfo.accountNumber.slice(-4),
    valueDate: '1 May 2026',
    runningBalance: '₹5,40,000.00',
  },

  // ── Money Transfer transactions ────────────────────────────
  {
    id: 1,
    date: '2026-05-21',
    displayDate: '21 May 2026',
    amount: '₹10,400.00',
    type: 'debit',
    narration: 'MONEY TRANSFER DR - 26012630110 88661 - SANDIP GAJANAN UTLWAR',
    chequeRef: 'TXN8845612',
    valueDate: '21 May 2026',
    runningBalance: '₹5,29,600.00',
  },
  {
    id: 2,
    date: '2026-05-21',
    displayDate: '21 May 2026',
    amount: '₹10,400.00',
    type: 'credit',
    narration: 'MONEY TRANSFER CR - 2601235010 788487 - SADANAND RAJARAM BELOTE - AU BANK',
    chequeRef: 'TXN8845613',
    valueDate: '21 May 2026',
    runningBalance: '₹5,40,000.00',
  },
  {
    id: 3,
    date: '2026-05-21',
    displayDate: '21 May 2026',
    amount: '₹10,400.00',
    type: 'debit',
    narration: 'MONEY TRANSFER DR - 2601235010 788487 - SADANAND RAJARAM BELOTE',
    chequeRef: 'TXN8845614',
    valueDate: '21 May 2026',
    runningBalance: '₹5,29,600.00',
  },
  {
    id: 4,
    date: '2026-05-21',
    displayDate: '21 May 2026',
    amount: '₹10,400.00',
    type: 'credit',
    narration: 'UPI/CR/513510332960/MR KESHAV PRALHAD GOLANDE/CBIN/00000 03620735326/PAYMENT FROM PHONEPE AU JAGATPURA',
    chequeRef: 'TXN8845615',
    valueDate: '21 May 2026',
    runningBalance: '₹5,40,000.00',
  },

  // ── 20 Additional Transactions ─────────────────────────────
  { id: 5,  date: '2026-05-05', displayDate: '5 May 2026',  amount: '₹1,299.00',  type: 'debit',  narration: 'UPI/DR/613009253290/AMAZON SELLER SERVICES/HDFC/PAY@AMAZON/ONLINE SHOPPING', chequeRef: 'UPI613009253290', valueDate: '5 May 2026',  runningBalance: '₹5,38,701.00' },
  { id: 6,  date: '2026-05-07', displayDate: '7 May 2026',  amount: '₹850.00',   type: 'debit',  narration: 'UPI/DR/615042155149/ONE PUNE NCMC CARD TOM/HDFC/502000765881/PAYMENT AU JAGATPURA', chequeRef: 'UPI615042155149', valueDate: '7 May 2026',  runningBalance: '₹5,37,851.00' },
  { id: 7,  date: '2026-05-10', displayDate: '10 May 2026', amount: '₹2,100.00',  type: 'debit',  narration: 'UPI/DR/615078046792/PUNE METRO CCA DR WA/HDFC/502000725555 83/UPI AU JAGATPURA', chequeRef: 'UPI615078046792', valueDate: '10 May 2026', runningBalance: '₹5,35,751.00' },
  { id: 8,  date: '2026-05-12', displayDate: '12 May 2026', amount: '₹500.00',   type: 'debit',  narration: 'UPI/DR/615130420710 42/GOPAL SHRIRAM SURLUSHE/YESB/000 25110 0000025/UPI AU JAGATPURA', chequeRef: 'UPI615130420710', valueDate: '12 May 2026', runningBalance: '₹5,35,251.00' },
  { id: 9,  date: '2026-05-14', displayDate: '14 May 2026', amount: '₹12,000.00', type: 'debit',  narration: 'NEFT/HOUSING LOAN EMI/HDFC BANK/LN0045678901/KESHAV PRALHAD GOLANDE', chequeRef: 'NEFT00145678', valueDate: '14 May 2026', runningBalance: '₹5,23,251.00' },
  { id: 10, date: '2026-05-15', displayDate: '15 May 2026', amount: '₹3,500.00',  type: 'debit',  narration: 'UPI/DR/SWIGGY ORDER/513510332960/SWIGGY/ICIC/FOOD DELIVERY AU JAGATPURA', chequeRef: 'UPI513510332960', valueDate: '15 May 2026', runningBalance: '₹5,19,751.00' },
  { id: 11, date: '2026-05-16', displayDate: '16 May 2026', amount: '₹5,000.00',  type: 'credit', narration: 'UPI/CR/516342109876/RAHUL KUMAR SHARMA/SBI/00000 01234567890/PAYMENT FROM PHONEPE', chequeRef: 'UPI516342109876', valueDate: '16 May 2026', runningBalance: '₹5,24,751.00' },
  { id: 12, date: '2026-05-17', displayDate: '17 May 2026', amount: '₹799.00',   type: 'debit',  narration: 'UPI/DR/NETFLIX SUBSCRIPTION/AXIS BANK/NETFLIX.COM/MONTHLY PLAN', chequeRef: 'UPI517000799001', valueDate: '17 May 2026', runningBalance: '₹5,23,952.00' },
  { id: 13, date: '2026-05-18', displayDate: '18 May 2026', amount: '₹2,400.00',  type: 'debit',  narration: 'UPI/DR/518040024501/MSEDCL ELECTRICITY BILL/BOI/00000 02345678901/BILL PAYMENT', chequeRef: 'UPI518040024501', valueDate: '18 May 2026', runningBalance: '₹5,21,552.00' },
  { id: 14, date: '2026-05-19', displayDate: '19 May 2026', amount: '₹1,500.00',  type: 'debit',  narration: 'UPI/DR/519000015001/AIRTEL RECHARGE/AIRTEL PAYMENTS BANK/PREPAID RECHARGE', chequeRef: 'UPI519000015001', valueDate: '19 May 2026', runningBalance: '₹5,20,052.00' },
  { id: 15, date: '2026-04-05', displayDate: '5 Apr 2026',  amount: '₹8,500.00',  type: 'debit',  narration: 'NEFT/RENT PAYMENT/KOTAK MAHINDRA BANK/MR DINESH PATIL/HOUSE RENT APR 2026', chequeRef: 'NEFT00245679', valueDate: '5 Apr 2026',  runningBalance: '₹4,86,500.00' },
  { id: 16, date: '2026-04-10', displayDate: '10 Apr 2026', amount: '₹4,200.00',  type: 'debit',  narration: 'UPI/DR/610042155200/ONE PUNE NCMC CARD TOM/HDFC/UPI AU JAGATPURA MONTHLY PASS', chequeRef: 'UPI610042155200', valueDate: '10 Apr 2026', runningBalance: '₹4,82,300.00' },
  { id: 17, date: '2026-04-15', displayDate: '15 Apr 2026', amount: '₹10,000.00', type: 'credit', narration: 'IMPS/CR/416001234567/PRIYA GOLANDE/HDFC BANK/FAMILY TRANSFER/FESTIVAL GIFT', chequeRef: 'IMPS416001234567', valueDate: '15 Apr 2026', runningBalance: '₹4,92,300.00' },
  { id: 18, date: '2026-04-20', displayDate: '20 Apr 2026', amount: '₹6,750.00',  type: 'debit',  narration: 'UPI/DR/620400067501/FLIPKART INTERNET PVT LTD/AXIS BANK/ONLINE SHOPPING EMI', chequeRef: 'UPI620400067501', valueDate: '20 Apr 2026', runningBalance: '₹4,85,550.00' },
  { id: 19, date: '2026-03-05', displayDate: '5 Mar 2026',  amount: '₹8,500.00',  type: 'debit',  narration: 'NEFT/RENT PAYMENT/KOTAK MAHINDRA BANK/MR DINESH PATIL/HOUSE RENT MAR 2026', chequeRef: 'NEFT00345680', valueDate: '5 Mar 2026',  runningBalance: '₹4,41,500.00' },
  { id: 20, date: '2026-03-10', displayDate: '10 Mar 2026', amount: '₹12,000.00', type: 'debit',  narration: 'NEFT/HOUSING LOAN EMI/HDFC BANK/LN0045678901/KESHAV PRALHAD GOLANDE MAR', chequeRef: 'NEFT00345681', valueDate: '10 Mar 2026', runningBalance: '₹4,29,500.00' },
  { id: 21, date: '2026-03-15', displayDate: '15 Mar 2026', amount: '₹2,000.00',  type: 'credit', narration: 'UPI/CR/315001200001/CASHBACK/PHONEPE REWARDS/REFERRAL BONUS KESHAV GOLANDE', chequeRef: 'UPI315001200001', valueDate: '15 Mar 2026', runningBalance: '₹4,31,500.00' },
  { id: 22, date: '2026-03-22', displayDate: '22 Mar 2026', amount: '₹5,600.00',  type: 'debit',  narration: 'UPI/DR/322056001234/RELIANCE FRESH/ICICI BANK/GROCERY PAYMENT AU PUNE', chequeRef: 'UPI322056001234', valueDate: '22 Mar 2026', runningBalance: '₹4,25,900.00' },
  { id: 23, date: '2026-02-10', displayDate: '10 Feb 2026', amount: '₹12,000.00', type: 'debit',  narration: 'NEFT/HOUSING LOAN EMI/HDFC BANK/LN0045678901/KESHAV PRALHAD GOLANDE FEB', chequeRef: 'NEFT00245682', valueDate: '10 Feb 2026', runningBalance: '₹3,93,000.00' },
  { id: 24, date: '2026-02-14', displayDate: '14 Feb 2026', amount: '₹3,200.00',  type: 'debit',  narration: 'UPI/DR/614021430001/TANISHQ JEWELLERY/HDFC/PUNE CAMP STORE/GIFT PURCHASE', chequeRef: 'UPI614021430001', valueDate: '14 Feb 2026', runningBalance: '₹3,89,800.00' },
]

// Returns transactions filtered by the selected period tab
export function getTransactionsByPeriod(period, customFrom = null, customTo = null) {
  if (!transactions.length) return []

  const now = new Date()

  return transactions.filter(({ date }) => {
    const d = new Date(date)
    if (period === 'Current Month') {
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    }
    if (period === 'Last Month') {
      const lm = new Date(now.getFullYear(), now.getMonth() - 1, 1)
      return d.getMonth() === lm.getMonth() && d.getFullYear() === lm.getFullYear()
    }
    if (period === 'Last 3 Month') {
      const from = new Date(now.getFullYear(), now.getMonth() - 3, 1)
      return d >= from && d <= now
    }
    if (period === 'Custom period' && customFrom && customTo) {
      return d >= new Date(customFrom) && d <= new Date(customTo)
    }
    return true
  })
}
