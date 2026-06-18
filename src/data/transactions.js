import userProfile from "../core/constants/userProfile"

export const accountInfo = {
  accountNumber: userProfile.accountNumber,
  accountHolder: userProfile.name,
  accountType: userProfile.accountType,
  customerType: userProfile.customerType,
  branch: userProfile.branch,
  ifsc: userProfile.ifsc,
  nominee: userProfile.nominee,
  customerId: userProfile.username,
  // address: `${userProfile.communicationAddress.line1}, ${userProfile.communicationAddress.line2}, Near Hdfc Bank\n${userProfile.communicationAddress.city} - ${userProfile.communicationAddress.pincode}, ${userProfile.communicationAddress.state} - India`,
  address: `${userProfile.communicationAddress.line1}, ${userProfile.communicationAddress.line2}, \n${userProfile.communicationAddress.city} - ${userProfile.communicationAddress.pincode}, ${userProfile.communicationAddress.state} - India`,

}

export const transactions = [
  {
    id: 1,
    date: '2021-05-31',
    displayDate: '31 May 2021',
    amount: '₹38,634.00',
    type: 'credit',
    narration: 'NEFT 621458793264 QUICK MANAGEMENT SERVICES PUNE',
    chequeRef: 'SAL2021053264',
    valueDate: '31 May 2021'
  },
  {
    id: 2,
    date: '2021-06-30',
    displayDate: '30 Jun 2021',
    amount: '₹38,634.00',
    type: 'credit',
    narration: 'NEFT 621569804375 QUICK MANAGEMENT SERVICES PUNE',
    chequeRef: 'SAL2021064375',
    valueDate: '30 Jun 2021'
  },
  {
    id: 3,
    date: '2021-07-30',
    displayDate: '30 Jul 2021',
    amount: '₹38,634.00',
    type: 'credit',
    narration: 'NEFT 621670915486 QUICK MANAGEMENT SERVICES PUNE',
    chequeRef: 'SAL2021075486',
    valueDate: '30 Jul 2021'
  },
  {
    id: 4,
    date: '2021-08-31',
    displayDate: '31 Aug 2021',
    amount: '₹38,634.00',
    type: 'credit',
    narration: 'NEFT 621781026597 QUICK MANAGEMENT SERVICES PUNE',
    chequeRef: 'SAL2021086597',
    valueDate: '31 Aug 2021'
  },
  {
    id: 5,
    date: '2021-09-30',
    displayDate: '30 Sep 2021',
    amount: '₹38,634.00',
    type: 'credit',
    narration: 'NEFT 621892137608 QUICK MANAGEMENT SERVICES PUNE',
    chequeRef: 'SAL2021097608',
    valueDate: '30 Sep 2021'
  },
  {
    id: 6,
    date: '2021-10-29',
    displayDate: '29 Oct 2021',
    amount: '₹38,634.00',
    type: 'credit',
    narration: 'NEFT 622003248719 QUICK MANAGEMENT SERVICES PUNE',
    chequeRef: 'SAL2021108719',
    valueDate: '29 Oct 2021'
  },
  {
    id: 7,
    date: '2021-05-03',
    displayDate: '03 May 2021',
    amount: '₹1,250.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI210503001',
    valueDate: '03 May 2021'
  },
  {
    id: 8,
    date: '2021-05-05',
    displayDate: '05 May 2021',
    amount: '₹4,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI210505002',
    valueDate: '05 May 2021'
  },
  {
    id: 9,
    date: '2021-05-08',
    displayDate: '08 May 2021',
    amount: '₹799.00',
    type: 'debit',
    narration: 'UPI/DR/SPOTIFY INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI210508003',
    valueDate: '08 May 2021'
  },
  {
    id: 10,
    date: '2021-05-11',
    displayDate: '11 May 2021',
    amount: '₹4,450.00',
    type: 'credit',
    narration: 'UPI/CR/RAHUL SHARMA/HDFC BANK/FUND RECEIVED',
    chequeRef: 'UPI210511004',
    valueDate: '11 May 2021'
  },
  {
    id: 11,
    date: '2021-05-14',
    displayDate: '14 May 2021',
    amount: '₹2,250.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI210514005',
    valueDate: '14 May 2021'
  },
  {
    id: 12,
    date: '2021-05-17',
    displayDate: '17 May 2021',
    amount: '₹500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF ACCOUNT TRANSFER/AXIS BANK/FUND TRANSFER',
    chequeRef: 'UPI210517006',
    valueDate: '17 May 2021'
  },
  {
    id: 13,
    date: '2021-05-20',
    displayDate: '20 May 2021',
    amount: '₹650.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI210520007',
    valueDate: '20 May 2021'
  },

  {
    id: 15,
    date: '2021-05-27',
    displayDate: '27 May 2021',
    amount: '₹2,180.00',
    type: 'credit',
    narration: 'UPI/CR/RAHUL SHARMA/HDFCBANK/FUND RECEIVED',
    chequeRef: 'UPI210527009',
    valueDate: '27 May 2021'
  },
  {
    id: 16,
    date: '2021-05-28',
    displayDate: '28 May 2021',
    amount: '₹2,800.00',
    type: 'debit',
    narration: 'UPI/DR/JIO MART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI210528010',
    valueDate: '28 May 2021'
  },
  {
    id: 17,
    date: '2021-06-03',
    displayDate: '03 Jun 2021',
    amount: '₹1,350.00',
    type: 'debit',
    narration: 'UPI/DR/BOOKMYSHOW/HDFC BANK/MOVIE TICKETS',
    chequeRef: 'UPI210603011',
    valueDate: '03 Jun 2021'
  },
  {
    id: 18,
    date: '2021-06-05',
    displayDate: '05 Jun 2021',
    amount: '₹4,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI210605012',
    valueDate: '05 Jun 2021'
  },
  {
    id: 19,
    date: '2021-06-08',
    displayDate: '08 Jun 2021',
    amount: '₹899.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI210608013',
    valueDate: '08 Jun 2021'
  },
  {
    id: 20,
    date: '2021-06-10',
    displayDate: '10 Jun 2021',
    amount: '₹1,550.00',
    type: 'debit',
    narration: 'UPI/DR/BPCL PETROL PUMP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI210610014',
    valueDate: '10 Jun 2021'
  },
  {
    id: 21,
    date: '2021-06-14',
    displayDate: '14 Jun 2021',
    amount: '₹2,450.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI210614015',
    valueDate: '14 Jun 2021'
  },
  {
    id: 22,
    date: '2021-06-17',
    displayDate: '17 Jun 2021',
    amount: '₹3,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF ACCOUNT TRANSFER/AXIS BANK/FUND TRANSFER',
    chequeRef: 'UPI210617016',
    valueDate: '17 Jun 2021'
  },
  {
    id: 23,
    date: '2021-06-21',
    displayDate: '21 Jun 2021',
    amount: '₹720.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI210621017',
    valueDate: '21 Jun 2021'
  },
  {
    id: 24,
    date: '2021-06-24',
    displayDate: '24 Jun 2021',
    amount: '₹5,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/HDFC BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI210624018',
    valueDate: '24 Jun 2021'
  },
  {
    id: 25,
    date: '2021-06-28',
    displayDate: '28 Jun 2021',
    amount: '₹1,250.00',
    type: 'credit',
    narration: 'UPI/CR/SELF TRANSFER/ICICI BANK/FUND RECEIVED',
    chequeRef: 'UPI210628019',
    valueDate: '28 Jun 2021'
  },
  {
    id: 26,
    date: '2021-06-29',
    displayDate: '29 Jun 2021',
    amount: '₹2,950.00',
    type: 'debit',
    narration: 'UPI/DR/RELIANCE SMART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI210629020',
    valueDate: '29 Jun 2021'
  },
  {
    id: 27,
    date: '2021-07-02',
    displayDate: '02 Jul 2021',
    amount: '₹1,450.00',
    type: 'debit',
    narration: 'UPI/DR/APOLLO PHARMACY/HDFC BANK/MEDICINE PURCHASE',
    chequeRef: 'UPI210702021',
    valueDate: '02 Jul 2021'
  },
  {
    id: 28,
    date: '2021-07-05',
    displayDate: '05 Jul 2021',
    amount: '₹4,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI210705022',
    valueDate: '05 Jul 2021'
  },
  {
    id: 29,
    date: '2021-07-08',
    displayDate: '08 Jul 2021',
    amount: '₹999.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI210708023',
    valueDate: '08 Jul 2021'
  },
  {
    id: 30,
    date: '2021-07-10',
    displayDate: '10 Jul 2021',
    amount: '₹1,680.00',
    type: 'debit',
    narration: 'UPI/DR/INDIAN OIL CORP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI210710024',
    valueDate: '10 Jul 2021'
  },
  {
    id: 31,
    date: '2021-07-13',
    displayDate: '13 Jul 2021',
    amount: '₹2,850.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI210713025',
    valueDate: '13 Jul 2021'
  },
  {
    id: 32,
    date: '2021-07-16',
    displayDate: '16 Jul 2021',
    amount: '₹3,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF ACCOUNT TRANSFER/AXIS BANK/FUND TRANSFER',
    chequeRef: 'UPI210716026',
    valueDate: '16 Jul 2021'
  },
  {
    id: 33,
    date: '2021-07-20',
    displayDate: '20 Jul 2021',
    amount: '₹780.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI210720027',
    valueDate: '20 Jul 2021'
  },
  {
    id: 34,
    date: '2021-07-23',
    displayDate: '23 Jul 2021',
    amount: '₹5,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/HDFC BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI210723028',
    valueDate: '23 Jul 2021'
  },
  {
    id: 35,
    date: '2021-07-27',
    displayDate: '27 Jul 2021',
    amount: '₹1,320.00',
    type: 'debit',
    narration: 'UPI/DR/MSEDCL BILL PAYMENT/HDFC BANK/ELECTRICITY BILL',
    chequeRef: 'UPI210727029',
    valueDate: '27 Jul 2021'
  },
  {
    id: 36,
    date: '2021-07-29',
    displayDate: '29 Jul 2021',
    amount: '₹2,650.00',
    type: 'debit',
    narration: 'UPI/DR/STAR BAZAAR/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI210729030',
    valueDate: '29 Jul 2021'
  },

  {
    id: 37,
    date: '2021-08-03',
    displayDate: '03 Aug 2021',
    amount: '₹1,520.00',
    type: 'debit',
    narration: 'UPI/DR/FLIPKART INTERNET/HDFC BANK/ONLINE PURCHASE',
    chequeRef: 'UPI210803031',
    valueDate: '03 Aug 2021'
  },
  {
    id: 38,
    date: '2021-08-05',
    displayDate: '05 Aug 2021',
    amount: '₹4,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI210805032',
    valueDate: '05 Aug 2021'
  },
  {
    id: 39,
    date: '2021-08-09',
    displayDate: '09 Aug 2021',
    amount: '₹999.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI210809033',
    valueDate: '09 Aug 2021'
  },
  {
    id: 40,
    date: '2021-08-11',
    displayDate: '11 Aug 2021',
    amount: '₹1,750.00',
    type: 'debit',
    narration: 'UPI/DR/BPCL PETROL PUMP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI210811034',
    valueDate: '11 Aug 2021'
  },
  {
    id: 41,
    date: '2021-08-13',
    displayDate: '13 Aug 2021',
    amount: '₹2,950.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI210813035',
    valueDate: '13 Aug 2021'
  },
  {
    id: 42,
    date: '2021-08-17',
    displayDate: '17 Aug 2021',
    amount: '₹3,800.00',
    type: 'debit',
    narration: 'UPI/DR/SELF ACCOUNT TRANSFER/AXIS BANK/FUND TRANSFER',
    chequeRef: 'UPI210817036',
    valueDate: '17 Aug 2021'
  },
  {
    id: 43,
    date: '2021-08-20',
    displayDate: '20 Aug 2021',
    amount: '₹820.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI210820037',
    valueDate: '20 Aug 2021'
  },
  {
    id: 44,
    date: '2021-08-24',
    displayDate: '24 Aug 2021',
    amount: '₹5,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/HDFC BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI210824038',
    valueDate: '24 Aug 2021'
  },
  {
    id: 45,
    date: '2021-08-27',
    displayDate: '27 Aug 2021',
    amount: '₹1,280.00',
    type: 'debit',
    narration: 'UPI/DR/MSEDCL BILL PAYMENT/HDFC BANK/ELECTRICITY BILL',
    chequeRef: 'UPI210827039',
    valueDate: '27 Aug 2021'
  },
  {
    id: 46,
    date: '2021-08-30',
    displayDate: '30 Aug 2021',
    amount: '₹2,780.00',
    type: 'debit',
    narration: 'UPI/DR/SPENCERS RETAIL/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI210830040',
    valueDate: '30 Aug 2021'
  },

  {
    id: 47,
    date: '2021-09-03',
    displayDate: '03 Sep 2021',
    amount: '₹1,450.00',
    type: 'debit',
    narration: 'UPI/DR/APOLLO PHARMACY/HDFC BANK/MEDICINE PURCHASE',
    chequeRef: 'UPI210903041',
    valueDate: '03 Sep 2021'
  },
  {
    id: 48,
    date: '2021-09-06',
    displayDate: '06 Sep 2021',
    amount: '₹4,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI210906042',
    valueDate: '06 Sep 2021'
  },
  {
    id: 49,
    date: '2021-09-08',
    displayDate: '08 Sep 2021',
    amount: '₹999.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI210908043',
    valueDate: '08 Sep 2021'
  },
  {
    id: 50,
    date: '2021-09-10',
    displayDate: '10 Sep 2021',
    amount: '₹1,620.00',
    type: 'debit',
    narration: 'UPI/DR/INDIAN OIL CORP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI210910044',
    valueDate: '10 Sep 2021'
  },
  {
    id: 51,
    date: '2021-09-14',
    displayDate: '14 Sep 2021',
    amount: '₹2,850.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI210914045',
    valueDate: '14 Sep 2021'
  },
  {
    id: 52,
    date: '2021-09-17',
    displayDate: '17 Sep 2021',
    amount: '₹3,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF ACCOUNT TRANSFER/AXIS BANK/FUND TRANSFER',
    chequeRef: 'UPI210917046',
    valueDate: '17 Sep 2021'
  },
  {
    id: 53,
    date: '2021-09-21',
    displayDate: '21 Sep 2021',
    amount: '₹780.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI210921047',
    valueDate: '21 Sep 2021'
  },
  {
    id: 54,
    date: '2021-09-24',
    displayDate: '24 Sep 2021',
    amount: '₹5,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/HDFC BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI210924048',
    valueDate: '24 Sep 2021'
  },
  {
    id: 55,
    date: '2021-09-27',
    displayDate: '27 Sep 2021',
    amount: '₹1,250.00',
    type: 'debit',
    narration: 'UPI/DR/MSEDCL BILL PAYMENT/HDFC BANK/ELECTRICITY BILL',
    chequeRef: 'UPI210927049',
    valueDate: '27 Sep 2021'
  },
  {
    id: 56,
    date: '2021-09-29',
    displayDate: '29 Sep 2021',
    amount: '₹2,950.00',
    type: 'debit',
    narration: 'UPI/DR/BLINKIT/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI210929050',
    valueDate: '29 Sep 2021'
  },

  {
    id: 57,
    date: '2021-10-04',
    displayDate: '04 Oct 2021',
    amount: '₹1,580.00',
    type: 'debit',
    narration: 'UPI/DR/FLIPKART INTERNET/HDFC BANK/ONLINE PURCHASE',
    chequeRef: 'UPI211004051',
    valueDate: '04 Oct 2021'
  },
  {
    id: 58,
    date: '2021-10-06',
    displayDate: '06 Oct 2021',
    amount: '₹4,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI211006052',
    valueDate: '06 Oct 2021'
  },
  {
    id: 59,
    date: '2021-10-08',
    displayDate: '08 Oct 2021',
    amount: '₹999.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI211008053',
    valueDate: '08 Oct 2021'
  },
  {
    id: 60,
    date: '2021-10-12',
    displayDate: '12 Oct 2021',
    amount: '₹1,750.00',
    type: 'debit',
    narration: 'UPI/DR/BPCL PETROL PUMP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI211012054',
    valueDate: '12 Oct 2021'
  },
  {
    id: 61,
    date: '2021-10-15',
    displayDate: '15 Oct 2021',
    amount: '₹3,250.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/FESTIVAL SHOPPING',
    chequeRef: 'UPI211015055',
    valueDate: '15 Oct 2021'
  },
  {
    id: 62,
    date: '2021-10-18',
    displayDate: '18 Oct 2021',
    amount: '₹3,800.00',
    type: 'debit',
    narration: 'UPI/DR/SELF ACCOUNT TRANSFER/AXIS BANK/FUND TRANSFER',
    chequeRef: 'UPI211018056',
    valueDate: '18 Oct 2021'
  },
  {
    id: 63,
    date: '2021-10-21',
    displayDate: '21 Oct 2021',
    amount: '₹850.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI211021057',
    valueDate: '21 Oct 2021'
  },
  {
    id: 64,
    date: '2021-10-25',
    displayDate: '25 Oct 2021',
    amount: '₹5,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/HDFC BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI211025058',
    valueDate: '25 Oct 2021'
  },
  {
    id: 65,
    date: '2021-10-27',
    displayDate: '27 Oct 2021',
    amount: '₹1,320.00',
    type: 'debit',
    narration: 'UPI/DR/MSEDCL BILL PAYMENT/HDFC BANK/ELECTRICITY BILL',
    chequeRef: 'UPI211027059',
    valueDate: '27 Oct 2021'
  },
  {
    id: 66,
    date: '2021-10-28',
    displayDate: '28 Oct 2021',
    amount: '₹2,780.00',
    type: 'debit',
    narration: 'UPI/DR/DUNZO DAILY/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI211028060',
    valueDate: '28 Oct 2021'
  },

  {
    id: 68,
    date: '2021-11-03',
    displayDate: '03 Nov 2021',
    amount: '₹15,000.00',
    type: 'debit',
    narration: 'UPI/DR/SBI MUTUAL FUND/SBI BANK/LUMPSUM INVESTMENT',
    chequeRef: 'UPI211103061',
    valueDate: '03 Nov 2021'
  },
  {
    id: 69,
    date: '2021-11-08',
    displayDate: '08 Nov 2021',
    amount: '₹5,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI211108062',
    valueDate: '08 Nov 2021'
  },
  {
    id: 70,
    date: '2021-11-15',
    displayDate: '15 Nov 2021',
    amount: '₹2,850.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI211115063',
    valueDate: '15 Nov 2021'
  }
]

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

export function formatDateLabel(value) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}