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
    date: '2025-07-31',
    displayDate: '31 Jul 2025',
    amount: '₹52,384.00',
    type: 'credit',
    narration: 'SALARY CREDIT - JUL 2025 - NIMBJA SECURITY SOLUTIONS/PAYROLL',
    chequeRef: 'SAL2025075238',
    valueDate: '31 Jul 2025'
  },
  {
    id: 2,
    date: '2025-08-29',
    displayDate: '29 Aug 2025',
    amount: '₹52,384.00',
    type: 'credit',
    narration: 'SALARY CREDIT - AUG 2025 - NIMBJA SECURITY SOLUTIONS/PAYROLL',
    chequeRef: 'SAL2025085238',
    valueDate: '29 Aug 2025'
  },
  {
    id: 3,
    date: '2025-09-30',
    displayDate: '30 Sep 2025',
    amount: '₹52,384.00',
    type: 'credit',
    narration: 'SALARY CREDIT - SEP 2025 - NIMBJA SECURITY SOLUTIONS/PAYROLL',
    chequeRef: 'SAL2025095238',
    valueDate: '30 Sep 2025'
  },
  {
    id: 4,
    date: '2025-10-31',
    displayDate: '31 Oct 2025',
    amount: '₹52,384.00',
    type: 'credit',
    narration: 'SALARY CREDIT - OCT 2025 - NIMBJA SECURITY SOLUTIONS/PAYROLL',
    chequeRef: 'SAL2025105238',
    valueDate: '31 Oct 2025'
  },
  {
    id: 5,
    date: '2025-11-28',
    displayDate: '28 Nov 2025',
    amount: '₹52,384.00',
    type: 'credit',
    narration: 'SALARY CREDIT - NOV 2025 - NIMBJA SECURITY SOLUTIONS/PAYROLL',
    chequeRef: 'SAL2025115238',
    valueDate: '28 Nov 2025'
  },
  {
    id: 6,
    date: '2025-12-31',
    displayDate: '31 Dec 2025',
    amount: '₹52,384.00',
    type: 'credit',
    narration: 'SALARY CREDIT - DEC 2025 - NIMBJA SECURITY SOLUTIONS/PAYROLL',
    chequeRef: 'SAL2025125238',
    valueDate: '31 Dec 2025'
  },
  {
    id: 7,
    date: '2026-01-30',
    displayDate: '30 Jan 2026',
    amount: '₹52,384.00',
    type: 'credit',
    narration: 'SALARY CREDIT - JAN 2026 - NIMBJA SECURITY SOLUTIONS/PAYROLL',
    chequeRef: 'SAL2026015238',
    valueDate: '30 Jan 2026'
  },
  {
    id: 8,
    date: '2026-02-27',
    displayDate: '27 Feb 2026',
    amount: '₹52,284.00',
    type: 'credit',
    narration: 'SALARY CREDIT - FEB 2026 - NIMBJA SECURITY SOLUTIONS/PAYROLL',
    chequeRef: 'SAL2026025238',
    valueDate: '27 Feb 2026'
  },
  {
    id: 9,
    date: '2026-03-31',
    displayDate: '31 Mar 2026',
    amount: '₹52,384.00',
    type: 'credit',
    narration: 'SALARY CREDIT - MAR 2026 - NIMBJA SECURITY SOLUTIONS/PAYROLL',
    chequeRef: 'SAL2026035238',
    valueDate: '31 Mar 2026'
  },
  {
    id: 10,
    date: '2026-04-30',
    displayDate: '30 Apr 2026',
    amount: '₹52,384.00',
    type: 'credit',
    narration: 'SALARY CREDIT - APR 2026 - NIMBJA SECURITY SOLUTIONS/PAYROLL',
    chequeRef: 'SAL2026045238',
    valueDate: '30 Apr 2026'
  },


  {
    id: 108,
    date: '2026-02-10',
    displayDate: '10 Feb 2026',
    amount: '₹1,500.00',
    type: 'credit',
    narration: 'UPI/CR/523598214763/HDFCXXXX1234/HDFCBANK',
    chequeRef: '523598214763',
    valueDate: '10 Feb 2026'
  },
  {
    id: 109,
    date: '2026-03-06',
    displayDate: '06 Mar 2026',
    amount: '₹19,000.00',
    type: 'credit',
    narration: 'UPI/ 523714896325/ HDFCXXXX1234/ HDFCBANK',
    chequeRef: '523714896325',
    valueDate: '06 Mar 2026'
  },
  {
    id: 110,
    date: '2026-04-08',
    displayDate: '08 Apr 2026',
    amount: '₹17,500.00',
    type: 'credit',
    narration: 'UPI/CR/ 523896471258/ HDFCXXXX1234/HDFCBANK',
    chequeRef: '523896471258',
    valueDate: '08 Apr 2026'
  },

  {
    id: 111,
    date: '2026-03-17',
    displayDate: '17 Mar 2026',
    amount: '₹1.00',
    type: 'credit',
    narration: 'UPI/CR/084662424226/ANKIT LAL SINHA/BKID/2302201148087871/ UPILITE PAYMENT FROM PHONEPE',
    chequeRef: '084662424226',
    valueDate: '17 Mar 2026'
  },
  {
    id: 112,
    date: '2026-04-01',
    displayDate: '01 Apr 2026',
    amount: '₹15000.00',
    type: 'debit',
    narration: 'UPI/DR/609132918800/ AISHWARYA HIRASKAR23 @OKAXIS /BKID /070018210009266',
    chequeRef: '609132918800',
    valueDate: '01 Apr 2026'
  },
  {
    id: 113,
    date: '2026-03-09',
    displayDate: '09 Mar 2026',
    amount: '₹200.00',
    type: 'credit',
    narration: 'UPI/CR/440934624204 /ANKIT LAL SINHA/BKID /579610110000986 / PAYMENT FROM PHONEPE',
    chequeRef: '440934624204',
    valueDate: '09 Mar 2026'
  },
  {
    id: 114,
    date: '2026-03-10',
    displayDate: '10 Mar 2026',
    amount: '₹1050.00',
    type: 'debit',
    narration: 'UPI/DR/613009253289/RAMESH DASHRATH MISAL/BARB/80050100008661',
    chequeRef: '613009253289',
    valueDate: '10 Mar 2026'
  },
  {
    id: 115,
    date: '2026-03-10',
    displayDate: '10 Mar 2026',
    amount: '₹21.00',
    type: 'debit',
    narration: 'UPI/DR/613042153149/ONE PUNE NCMC CARD TOM/HDFC/50200076588797',
    chequeRef: '613042153149',
    valueDate: '10 Mar 2026'
  },
  {
    id: 116,
    date: '2026-03-10',
    displayDate: '10 Mar 2026',
    amount: '₹21.00',
    type: 'debit',
    narration: 'UPI/DR/613078046792/PUNE METRO CCA DRWA/HDFC/50200072555583',
    chequeRef: '613078046792',
    valueDate: '10 Mar 2026'
  },
  {
    id: 117,
    date: '2026-03-10',
    displayDate: '10 Mar 2026',
    amount: '₹20.00',
    type: 'debit',
    narration: 'UPI/DR/613042071042/GOPAL SHRIRAM SURUSHE/YESB/002261100000025',
    chequeRef: '613042071042',
    valueDate: '10 Mar 2026'
  },
  {
    id: 118,
    date: '2026-03-10',
    displayDate: '10 Mar 2026',
    amount: '₹21.00',
    type: 'credit',
    narration: 'UPI/CR/103275192570/ONE PUNE NCMC CARD TOM/HDFC/50200076588797/PUNE METRO TICKET REFUND',
    chequeRef: '103275192570',
    valueDate: '10 Mar 2026'
  },
  {
    id: 119,
    date: '2026-03-11',
    displayDate: '11 Mar 2026',
    amount: '₹12.00',
    type: 'debit',
    narration: 'UPI/DR/649776073564 /SHRADHA NAVNATH KHODAVE/YESB /001425000000051',
    chequeRef: '649776073564',
    valueDate: '11 Mar 2026'
  },
  {
    id: 120,
    date: '2026-03-12',
    displayDate: '12 Mar 2026',
    amount: '₹60.00',
    type: 'debit',
    narration: 'UPI/DR/613226200980/RATHOD MANGALJI SONAJI/YESB/001425000000051',
    chequeRef: '613226200980',
    valueDate: '12 Mar 2026'
  },
  {
    id: 121,
    date: '2026-03-12',
    displayDate: '12 Mar 2026',
    amount: '₹30.00',
    type: 'debit',
    narration: 'UPI/DR/613218508742/ MAHALAXMI ENTERPRISE /YESB/ 002261100000025',
    chequeRef: '613218508742',
    valueDate: '12 Mar 2026'
  },
  {
    id: 122,
    date: '2026-03-12',
    displayDate: '12 Mar 2026',
    amount: '₹40.00',
    type: 'debit',
    narration: 'UPI/DR/613273031587/RAJALAXMI FRESH MART/UTIB/918020110872063',
    chequeRef: '613273031587',
    valueDate: '12 Mar 2026'
  },
  {
    id: 123,
    date: '2026-03-20',
    displayDate: '20 Mar 2026',
    amount: '₹10,100.00',
    type: 'credit',
    narration: 'UPI/CR/339403372800/ANKIT LAL SINHA/ BKID /579610110000986 /PAYMENT FROM PHONEPE',
    chequeRef: '339403372800',
    valueDate: '20 Mar 2026'
  },
  {
    id: 124,
    date: '2026-03-20',
    displayDate: '20 Mar 2026',
    amount: '₹10,010.00',
    type: 'debit',
    narration: 'MONEY TRANSFER DR - 2601235010788937 - GUDIYA PATIRAM GAUTAM',
    chequeRef: '2601235010788937',
    valueDate: '20 Mar 2026'
  },
  {
    id: 125,
    date: '2026-03-20',
    displayDate: '20 Mar 2026',
    amount: '₹10,010.00',
    type: 'credit',
    narration: 'MONEY TRANSFER CR - 2601235010796153 - ABHIJEET SHIVAJIRAO TALEGAONKAR',
    chequeRef: '2601235010796153',
    valueDate: '20 Mar 2026'
  },
  {
    id: 126,
    date: '2026-03-20',
    displayDate: '20 Mar 2026',
    amount: '₹10,005.00',
    type: 'debit',
    narration: 'MONEY TRANSFER DR - 2601235010788547 - ANCHAL MADHAV GUTTE',
    chequeRef: '2601235010788547',
    valueDate: '20 Mar 2026'
  },
  {
    id: 127,
    date: '2026-03-20',
    displayDate: '20 Mar 2026',
    amount: '₹10,004.00',
    type: 'credit',
    narration: 'UPI/CR/324211800775/ALTAF HUSAIN /AUBL/ 2601263011079392/ PAYMENT FROM PHONEPE',
    chequeRef: '324211800775',
    valueDate: '20 Mar 2026'
  },
  {
    id: 128,
    date: '2026-03-20',
    displayDate: '20 Mar 2026',
    amount: '₹10,004.00',
    type: 'debit',
    narration: 'UPI/DR/650626049357/KAPIL RAVINDRA MULE/SBIN/00000040777554865',
    chequeRef: '650626049357',
    valueDate: '20 Mar 2026'
  },
  {
    id: 129,
    date: '2026-03-20',
    displayDate: '20 Mar 2026',
    amount: '₹12.00',
    type: 'debit',
    narration: 'UPI/DR/650651996543 /NAVANTH  C KHODAVE MRS SHRADHA KHODAVE/ YESB/002261100000025',
    chequeRef: '650651996543',
    valueDate: '20 Mar 2026'
  },
  {
    id: 130,
    date: '2026-03-20',
    displayDate: '20 Mar 2026',
    amount: '₹9.00',
    type: 'debit',
    narration: 'UPI/DR/614032900028/RATHOD MANGALJI SONAJI/YESB/001425000000051',
    chequeRef: '614032900028',
    valueDate: '20 Mar 2026'
  },
  {
    id: 131,
    date: '2026-03-21',
    displayDate: '21 Mar 2026',
    amount: '₹30.00',
    type: 'debit',
    narration: 'UPI/DR/614192906330/GOPAL SHRIRAM SURUSHE/YESB/002261100000025',
    chequeRef: '614192906330',
    valueDate: '21 Mar 2026'
  },
  {
    id: 132,
    date: '2026-03-21',
    displayDate: '21 Mar 2026',
    amount: '₹50.00',
    type: 'debit',
    narration: 'UPI/DR/614103939995/MR MOHAMMAD MORSALI/YESB/002261100000025',
    chequeRef: '614103939995',
    valueDate: '21 Mar 2026'
  },
  {
    id: 133,
    date: '2026-03-28',
    displayDate: '28 Mar 2026',
    amount: '₹5.00',
    type: 'credit',
    narration: 'UPI/CR/797162927784/ ANKIT LAL SINHA/BKID/ 579610110000986/ PAYMENT FROM PHONEPE',
    chequeRef: '797162927784',
    valueDate: '28 Mar 2026'
  },
  {
    id: 134,
    date: '2026-03-31',
    displayDate: '31 Mar 2026',
    amount: '₹30,002.00',
    type: 'debit',
    narration: 'UPI/DR/795568156686/ANKIT LAL SINHA / BKID/ 579610110000986 /PAYMENT FROM PHONEPE',
    chequeRef: '795568156686',
    valueDate: '31 Mar 2026'
  },
  {
    id: 135,
    date: '2026-03-31',
    displayDate: '31 Mar 2026',
    amount: '₹10,001.00',
    type: 'debit',
    narration: 'MONEY TRANSFER DR - 2601235010788527 - SATISH VILAS JAWLEKAR',
    chequeRef: '2601235010788527',
    valueDate: '31 Mar 2026'
  },
  {
    id: 136,
    date: '2026-03-31',
    displayDate: '31 Mar 2026',
    amount: '₹2.00',
    type: 'debit',
    narration: 'MONEY TRANSFER DR - 2601235010788547 - ANCHAL MADHAV GUTTE',
    chequeRef: '2601235010788547',
    valueDate: '31 Mar 2026'
  },

  {
    id: 144,
    date: '2026-05-01',
    displayDate: '01 May 2026',
    amount: '₹450.00',
    type: 'debit',
    narration: 'UPI/DR/TEA TIME/HDFC BANK/FOOD PURCHASE',
    chequeRef: 'UPI260501131',
    valueDate: '01 May 2026'
  },
  {
    id: 145,
    date: '2026-05-04',
    displayDate: '04 May 2026',
    amount: '₹2,850.00',
    type: 'debit',
    narration: 'UPI/DR/DMART READY/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260504132',
    valueDate: '04 May 2026'
  },
  {
    id: 146,
    date: '2026-05-05',
    displayDate: '05 May 2026',
    amount: '₹650.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI260505133',
    valueDate: '05 May 2026'
  },
  {
    id: 147,
    date: '2026-05-06',
    displayDate: '06 May 2026',
    amount: '₹10,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI260506134',
    valueDate: '06 May 2026'
  },
  {
    id: 148,
    date: '2026-05-07',
    displayDate: '07 May 2026',
    amount: '₹1,250.00',
    type: 'debit',
    narration: 'UPI/DR/INDIAN OIL CORP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI260507135',
    valueDate: '07 May 2026'
  },
  {
    id: 149,
    date: '2026-05-08',
    displayDate: '08 May 2026',
    amount: '₹850.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI260508136',
    valueDate: '08 May 2026'
  },
  {
    id: 150,
    date: '2026-05-11',
    displayDate: '11 May 2026',
    amount: '₹2,450.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI260511137',
    valueDate: '11 May 2026'
  },
  {
    id: 151,
    date: '2026-05-12',
    displayDate: '12 May 2026',
    amount: '₹500.00',
    type: 'debit',
    narration: 'UPI/DR/CCD COFFEE DAY/HDFC BANK/FOOD PURCHASE',
    chequeRef: 'UPI260512138',
    valueDate: '12 May 2026'
  },
  {
    id: 152,
    date: '2026-05-13',
    displayDate: '13 May 2026',
    amount: '₹15,000.00',
    type: 'debit',
    narration: 'UPI/DR/HDFC MUTUAL FUND/HDFC BANK/LUMPSUM INVESTMENT',
    chequeRef: 'UPI260513139',
    valueDate: '13 May 2026'
  },
  {
    id: 153,
    date: '2026-05-14',
    displayDate: '14 May 2026',
    amount: '₹1,150.00',
    type: 'debit',
    narration: 'UPI/DR/BPCL PETROL PUMP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI260514140',
    valueDate: '14 May 2026'
  },
  {
    id: 154,
    date: '2026-05-15',
    displayDate: '15 May 2026',
    amount: '₹750.00',
    type: 'debit',
    narration: 'UPI/DR/SWIGGY/HDFC BANK/FOOD ORDER',
    chequeRef: 'UPI260515141',
    valueDate: '15 May 2026'
  },
  {
    id: 155,
    date: '2026-05-18',
    displayDate: '18 May 2026',
    amount: '₹3,250.00',
    type: 'debit',
    narration: 'UPI/DR/RELIANCE SMART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260518142',
    valueDate: '18 May 2026'
  },
  {
    id: 156,
    date: '2026-05-19',
    displayDate: '19 May 2026',
    amount: '₹20,000.00',
    type: 'debit',
    narration: 'UPI/DR/SBI MUTUAL FUND/SBI BANK/LUMPSUM INVESTMENT',
    chequeRef: 'UPI260519143',
    valueDate: '19 May 2026'
  },
  {
    id: 157,
    date: '2026-05-20',
    displayDate: '20 May 2026',
    amount: '₹950.00',
    type: 'debit',
    narration: 'UPI/DR/APOLLO PHARMACY/HDFC BANK/MEDICAL PURCHASE',
    chequeRef: 'UPI260520144',
    valueDate: '20 May 2026'
  },
  {
    id: 158,
    date: '2026-05-21',
    displayDate: '21 May 2026',
    amount: '₹8,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF ACCOUNT TRANSFER/AXIS BANK/FUND TRANSFER',
    chequeRef: 'UPI260521145',
    valueDate: '21 May 2026'
  },
  {
    id: 159,
    date: '2026-05-22',
    displayDate: '22 May 2026',
    amount: '₹1,350.00',
    type: 'debit',
    narration: 'UPI/DR/MSEDCL BILL PAYMENT/HDFC BANK/ELECTRICITY BILL',
    chequeRef: 'UPI260522146',
    valueDate: '22 May 2026'
  },
  {
    id: 160,
    date: '2026-05-25',
    displayDate: '25 May 2026',
    amount: '₹2,150.00',
    type: 'debit',
    narration: 'UPI/DR/JIO MART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260525147',
    valueDate: '25 May 2026'
  },
  {
    id: 161,
    date: '2026-05-26',
    displayDate: '26 May 2026',
    amount: '₹650.00',
    type: 'debit',
    narration: 'UPI/DR/BOOKMYSHOW/HDFC BANK/MOVIE TICKETS',
    chequeRef: 'UPI260526148',
    valueDate: '26 May 2026'
  },
  {
    id: 162,
    date: '2026-05-27',
    displayDate: '27 May 2026',
    amount: '₹12,000.00',
    type: 'credit',
    narration: 'UPI/CR/ICICI PRUDENTIAL MF/REDEMPTION PROCEEDS',
    chequeRef: 'UPI260527149',
    valueDate: '27 May 2026'
  },
  {
    id: 163,
    date: '2026-05-28',
    displayDate: '28 May 2026',
    amount: '₹1,850.00',
    type: 'debit',
    narration: 'UPI/DR/BLINKIT/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260528150',
    valueDate: '28 May 2026'
  },
  {
    id: 164,
    date: '2026-04-02',
    displayDate: '02 Apr 2026',
    amount: '₹550.00',
    type: 'debit',
    narration: 'UPI/DR/TEA TIME/HDFC BANK/FOOD PURCHASE',
    chequeRef: 'UPI260402151',
    valueDate: '02 Apr 2026'
  },
  {
    id: 165,
    date: '2026-04-03',
    displayDate: '03 Apr 2026',
    amount: '₹2,950.00',
    type: 'debit',
    narration: 'UPI/DR/DMART READY/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260403152',
    valueDate: '03 Apr 2026'
  },
  {
    id: 166,
    date: '2026-04-06',
    displayDate: '06 Apr 2026',
    amount: '₹750.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI260406153',
    valueDate: '06 Apr 2026'
  },
  {
    id: 167,
    date: '2026-04-07',
    displayDate: '07 Apr 2026',
    amount: '₹8,000.00',
    type: 'credit',
    narration: 'UPI/CR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI260407154',
    valueDate: '07 Apr 2026'
  },
  {
    id: 168,
    date: '2026-04-08',
    displayDate: '08 Apr 2026',
    amount: '₹1,450.00',
    type: 'debit',
    narration: 'UPI/DR/INDIAN OIL CORP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI260408155',
    valueDate: '08 Apr 2026'
  },
  {
    id: 169,
    date: '2026-04-10',
    displayDate: '10 Apr 2026',
    amount: '₹999.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI260410156',
    valueDate: '10 Apr 2026'
  },
  {
    id: 170,
    date: '2026-04-13',
    displayDate: '13 Apr 2026',
    amount: '₹2,650.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI260413157',
    valueDate: '13 Apr 2026'
  },
  {
    id: 171,
    date: '2026-04-15',
    displayDate: '15 Apr 2026',
    amount: '₹18,000.00',
    type: 'debit',
    narration: 'UPI/DR/HDFC MUTUAL FUND/HDFC BANK/LUMPSUM INVESTMENT',
    chequeRef: 'UPI260415158',
    valueDate: '15 Apr 2026'
  },
  {
    id: 172,
    date: '2026-04-17',
    displayDate: '17 Apr 2026',
    amount: '₹850.00',
    type: 'debit',
    narration: 'UPI/DR/SWIGGY/HDFC BANK/FOOD ORDER',
    chequeRef: 'UPI260417159',
    valueDate: '17 Apr 2026'
  },
  {
    id: 173,
    date: '2026-04-20',
    displayDate: '20 Apr 2026',
    amount: '₹3,450.00',
    type: 'debit',
    narration: 'UPI/DR/RELIANCE SMART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260420160',
    valueDate: '20 Apr 2026'
  },
  {
    id: 174,
    date: '2026-04-21',
    displayDate: '21 Apr 2026',
    amount: '₹25,000.00',
    type: 'debit',
    narration: 'UPI/DR/SBI MUTUAL FUND/SBI BANK/LUMPSUM INVESTMENT',
    chequeRef: 'UPI260421161',
    valueDate: '21 Apr 2026'
  },
  {
    id: 175,
    date: '2026-04-22',
    displayDate: '22 Apr 2026',
    amount: '₹1,150.00',
    type: 'debit',
    narration: 'UPI/DR/APOLLO PHARMACY/HDFC BANK/MEDICAL PURCHASE',
    chequeRef: 'UPI260422162',
    valueDate: '22 Apr 2026'
  },
  {
    id: 176,
    date: '2026-04-24',
    displayDate: '24 Apr 2026',
    amount: '₹6,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF ACCOUNT TRANSFER/AXIS BANK/FUND TRANSFER',
    chequeRef: 'UPI260424163',
    valueDate: '24 Apr 2026'
  },
  {
    id: 177,
    date: '2026-04-27',
    displayDate: '27 Apr 2026',
    amount: '₹1,550.00',
    type: 'debit',
    narration: 'UPI/DR/MSEDCL BILL PAYMENT/HDFC BANK/ELECTRICITY BILL',
    chequeRef: 'UPI260427164',
    valueDate: '27 Apr 2026'
  },
  {
    id: 178,
    date: '2026-04-28',
    displayDate: '28 Apr 2026',
    amount: '₹2,350.00',
    type: 'debit',
    narration: 'UPI/DR/JIO MART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260428165',
    valueDate: '28 Apr 2026'
  },
  {
    id: 179,
    date: '2026-04-29',
    displayDate: '29 Apr 2026',
    amount: '₹750.00',
    type: 'debit',
    narration: 'UPI/DR/BOOKMYSHOW/HDFC BANK/MOVIE TICKETS',
    chequeRef: 'UPI260429166',
    valueDate: '29 Apr 2026'
  },
  {
    id: 195,
    date: '2025-12-01',
    displayDate: '01 Dec 2025',
    amount: '₹5,000.00',
    type: 'credit',
    narration: 'UPI/CR/SELF TRANSFER/ICICI BANK/FUND RECEIVED',
    chequeRef: 'UPI251201196',
    valueDate: '01 Dec 2025'
  },
  {
    id: 196,
    date: '2025-12-04',
    displayDate: '04 Dec 2025',
    amount: '₹2,500.00',
    type: 'credit',
    narration: 'UPI/CR/RAHUL SHARMA/HDFC BANK/FUND RECEIVED',
    chequeRef: 'UPI251204197',
    valueDate: '04 Dec 2025'
  },
  {
    id: 197,
    date: '2025-12-08',
    displayDate: '08 Dec 2025',
    amount: '₹1,250.00',
    type: 'credit',
    narration: 'UPI/CR/AMAZON PAY INDIA/HDFC BANK/REFUND RECEIVED',
    chequeRef: 'UPI251208198',
    valueDate: '08 Dec 2025'
  },
  {
    id: 198,
    date: '2025-12-10',
    displayDate: '10 Dec 2025',
    amount: '₹7,500.00',
    type: 'credit',
    narration: 'UPI/CR/SELF TRANSFER/SBI BANK/FUND RECEIVED',
    chequeRef: 'UPI251210199',
    valueDate: '10 Dec 2025'
  },
  {
    id: 199,
    date: '2025-12-12',
    displayDate: '12 Dec 2025',
    amount: '₹3,000.00',
    type: 'credit',
    narration: 'UPI/CR/PRIYA PATIL/AXIS BANK/FUND RECEIVED',
    chequeRef: 'UPI251212200',
    valueDate: '12 Dec 2025'
  },
  {
    id: 200,
    date: '2025-12-16',
    displayDate: '16 Dec 2025',
    amount: '₹15,000.00',
    type: 'credit',
    narration: 'NEFT 784512369874 SBI MUTUAL FUND REDEMPTION CREDIT',
    chequeRef: 'MF202512201',
    valueDate: '16 Dec 2025'
  },
  {
    id: 201,
    date: '2025-12-18',
    displayDate: '18 Dec 2025',
    amount: '₹2,800.00',
    type: 'credit',
    narration: 'UPI/CR/AKASH PATIL/HDFC BANK/FUND RECEIVED',
    chequeRef: 'UPI251218202',
    valueDate: '18 Dec 2025'
  },
  {
    id: 202,
    date: '2025-12-23',
    displayDate: '23 Dec 2025',
    amount: '₹1,850.00',
    type: 'credit',
    narration: 'UPI/CR/FLIPKART INTERNET PVT LTD/HDFC BANK/REFUND RECEIVED',
    chequeRef: 'UPI251223203',
    valueDate: '23 Dec 2025'
  },
  {
    id: 203,
    date: '2025-12-26',
    displayDate: '26 Dec 2025',
    amount: '₹4,500.00',
    type: 'credit',
    narration: 'UPI/CR/SELF TRANSFER/AXIS BANK/FUND RECEIVED',
    chequeRef: 'UPI251226204',
    valueDate: '26 Dec 2025'
  },
  {
    id: 204,
    date: '2025-12-30',
    displayDate: '30 Dec 2025',
    amount: '₹6,000.00',
    type: 'credit',
    narration: 'UPI/CR/CASHBACK CREDIT/HDFC BANK/REWARD BENEFIT',
    chequeRef: 'UPI251230205',
    valueDate: '30 Dec 2025'
  },
  {
    id: 180,
    date: '2025-12-02',
    displayDate: '02 Dec 2025',
    amount: '₹2,450.00',
    type: 'debit',
    narration: 'UPI/DR/DMART READY/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI251202181',
    valueDate: '02 Dec 2025'
  },
  {
    id: 181,
    date: '2025-12-03',
    displayDate: '03 Dec 2025',
    amount: '₹650.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI251203182',
    valueDate: '03 Dec 2025'
  },
  {
    id: 182,
    date: '2025-12-05',
    displayDate: '05 Dec 2025',
    amount: '₹1,350.00',
    type: 'debit',
    narration: 'UPI/DR/INDIAN OIL CORP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI251205183',
    valueDate: '05 Dec 2025'
  },
  {
    id: 183,
    date: '2025-12-09',
    displayDate: '09 Dec 2025',
    amount: '₹3,250.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI251209184',
    valueDate: '09 Dec 2025'
  },
  {
    id: 184,
    date: '2025-12-12',
    displayDate: '12 Dec 2025',
    amount: '₹850.00',
    type: 'debit',
    narration: 'UPI/DR/SWIGGY/HDFC BANK/FOOD ORDER',
    chequeRef: 'UPI251212185',
    valueDate: '12 Dec 2025'
  },
  {
    id: 185,
    date: '2025-12-15',
    displayDate: '15 Dec 2025',
    amount: '₹2,950.00',
    type: 'debit',
    narration: 'UPI/DR/RELIANCE SMART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI251215186',
    valueDate: '15 Dec 2025'
  },
  {
    id: 186,
    date: '2025-12-18',
    displayDate: '18 Dec 2025',
    amount: '₹1,150.00',
    type: 'debit',
    narration: 'UPI/DR/APOLLO PHARMACY/HDFC BANK/MEDICAL PURCHASE',
    chequeRef: 'UPI251218187',
    valueDate: '18 Dec 2025'
  },
  {
    id: 187,
    date: '2025-12-22',
    displayDate: '22 Dec 2025',
    amount: '₹1,450.00',
    type: 'debit',
    narration: 'UPI/DR/MSEDCL BILL PAYMENT/HDFC BANK/ELECTRICITY BILL',
    chequeRef: 'UPI251222188',
    valueDate: '22 Dec 2025'
  },
  {
    id: 188,
    date: '2025-12-24',
    displayDate: '24 Dec 2025',
    amount: '₹2,250.00',
    type: 'debit',
    narration: 'UPI/DR/JIO MART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI251224189',
    valueDate: '24 Dec 2025'
  },
  {
    id: 189,
    date: '2025-12-29',
    displayDate: '29 Dec 2025',
    amount: '₹12,000.00',
    type: 'debit',
    narration: 'UPI/DR/ICICI PRUDENTIAL MF/HDFC BANK/SIP INVESTMENT',
    chequeRef: 'UPI251229190',
    valueDate: '29 Dec 2025'
  },
  {
    id: 195,
    date: '2026-01-02',
    displayDate: '02 Jan 2026',
    amount: '₹2,650.00',
    type: 'debit',
    narration: 'UPI/DR/DMART READY/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260102196',
    valueDate: '02 Jan 2026'
  },
  {
    id: 196,
    date: '2026-01-05',
    displayDate: '05 Jan 2026',
    amount: '₹750.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI260105197',
    valueDate: '05 Jan 2026'
  },
  {
    id: 197,
    date: '2026-01-06',
    displayDate: '06 Jan 2026',
    amount: '₹10,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI260106198',
    valueDate: '06 Jan 2026'
  },
  {
    id: 198,
    date: '2026-01-07',
    displayDate: '07 Jan 2026',
    amount: '₹1,450.00',
    type: 'debit',
    narration: 'UPI/DR/INDIAN OIL CORP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI260107199',
    valueDate: '07 Jan 2026'
  },
  {
    id: 199,
    date: '2026-01-09',
    displayDate: '09 Jan 2026',
    amount: '₹999.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI260109200',
    valueDate: '09 Jan 2026'
  },
  {
    id: 200,
    date: '2026-01-12',
    displayDate: '12 Jan 2026',
    amount: '₹3,450.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI260112201',
    valueDate: '12 Jan 2026'
  },
  {
    id: 201,
    date: '2026-01-14',
    displayDate: '14 Jan 2026',
    amount: '₹18,000.00',
    type: 'debit',
    narration: 'UPI/DR/HDFC MUTUAL FUND/HDFC BANK/LUMPSUM INVESTMENT',
    chequeRef: 'UPI260114202',
    valueDate: '14 Jan 2026'
  },
  {
    id: 202,
    date: '2026-01-16',
    displayDate: '16 Jan 2026',
    amount: '₹850.00',
    type: 'debit',
    narration: 'UPI/DR/SWIGGY/HDFC BANK/FOOD ORDER',
    chequeRef: 'UPI260116203',
    valueDate: '16 Jan 2026'
  },
  {
    id: 203,
    date: '2026-01-19',
    displayDate: '19 Jan 2026',
    amount: '₹3,150.00',
    type: 'debit',
    narration: 'UPI/DR/RELIANCE SMART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260119204',
    valueDate: '19 Jan 2026'
  },
  {
    id: 204,
    date: '2026-01-21',
    displayDate: '21 Jan 2026',
    amount: '₹25,000.00',
    type: 'credit',
    narration: 'NEFT 784512369874 SBI MUTUAL FUND REDEMPTION CREDIT',
    chequeRef: 'MF202601205',
    valueDate: '21 Jan 2026'
  },
  {
    id: 205,
    date: '2026-01-22',
    displayDate: '22 Jan 2026',
    amount: '₹1,250.00',
    type: 'debit',
    narration: 'UPI/DR/APOLLO PHARMACY/HDFC BANK/MEDICAL PURCHASE',
    chequeRef: 'UPI260122206',
    valueDate: '22 Jan 2026'
  },
  {
    id: 206,
    date: '2026-01-23',
    displayDate: '23 Jan 2026',
    amount: '₹7,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF ACCOUNT TRANSFER/AXIS BANK/FUND TRANSFER',
    chequeRef: 'UPI260123207',
    valueDate: '23 Jan 2026'
  },
  {
    id: 207,
    date: '2026-01-26',
    displayDate: '26 Jan 2026',
    amount: '₹1,550.00',
    type: 'debit',
    narration: 'UPI/DR/MSEDCL BILL PAYMENT/HDFC BANK/ELECTRICITY BILL',
    chequeRef: 'UPI260126208',
    valueDate: '26 Jan 2026'
  },
  {
    id: 208,
    date: '2026-01-28',
    displayDate: '28 Jan 2026',
    amount: '₹2,450.00',
    type: 'debit',
    narration: 'UPI/DR/JIO MART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260128209',
    valueDate: '28 Jan 2026'
  },
  {
    id: 209,
    date: '2026-01-29',
    displayDate: '29 Jan 2026',
    amount: '₹12,000.00',
    type: 'debit',
    narration: 'UPI/DR/ICICI PRUDENTIAL MF/HDFC BANK/SIP INVESTMENT',
    chequeRef: 'UPI260129210',
    valueDate: '29 Jan 2026'
  },

  {
    id: 210,
    date: '2026-02-02',
    displayDate: '02 Feb 2026',
    amount: '₹2,850.00',
    type: 'debit',
    narration: 'UPI/DR/DMART READY/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260202211',
    valueDate: '02 Feb 2026'
  },
  {
    id: 211,
    date: '2026-02-03',
    displayDate: '03 Feb 2026',
    amount: '₹650.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI260203212',
    valueDate: '03 Feb 2026'
  },
  {
    id: 212,
    date: '2026-02-05',
    displayDate: '05 Feb 2026',
    amount: '₹8,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI260205213',
    valueDate: '05 Feb 2026'
  },
  {
    id: 213,
    date: '2026-02-06',
    displayDate: '06 Feb 2026',
    amount: '₹1,350.00',
    type: 'debit',
    narration: 'UPI/DR/INDIAN OIL CORP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI260206214',
    valueDate: '06 Feb 2026'
  },
  {
    id: 214,
    date: '2026-02-09',
    displayDate: '09 Feb 2026',
    amount: '₹999.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI260209215',
    valueDate: '09 Feb 2026'
  },
  {
    id: 215,
    date: '2026-02-10',
    displayDate: '10 Feb 2026',
    amount: '₹2,950.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI260210216',
    valueDate: '10 Feb 2026'
  },
  {
    id: 216,
    date: '2026-02-12',
    displayDate: '12 Feb 2026',
    amount: '₹15,000.00',
    type: 'debit',
    narration: 'UPI/DR/HDFC MUTUAL FUND/HDFC BANK/LUMPSUM INVESTMENT',
    chequeRef: 'UPI260212217',
    valueDate: '12 Feb 2026'
  },
  {
    id: 217,
    date: '2026-02-13',
    displayDate: '13 Feb 2026',
    amount: '₹850.00',
    type: 'debit',
    narration: 'UPI/DR/SWIGGY/HDFC BANK/FOOD ORDER',
    chequeRef: 'UPI260213218',
    valueDate: '13 Feb 2026'
  },
  {
    id: 218,
    date: '2026-02-16',
    displayDate: '16 Feb 2026',
    amount: '₹3,250.00',
    type: 'debit',
    narration: 'UPI/DR/RELIANCE SMART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260216219',
    valueDate: '16 Feb 2026'
  },
  {
    id: 219,
    date: '2026-02-18',
    displayDate: '18 Feb 2026',
    amount: '₹20,000.00',
    type: 'debit',
    narration: 'UPI/DR/SBI MUTUAL FUND/SBI BANK/LUMPSUM INVESTMENT',
    chequeRef: 'UPI260218220',
    valueDate: '18 Feb 2026'
  },
  {
    id: 220,
    date: '2026-02-19',
    displayDate: '19 Feb 2026',
    amount: '₹1,150.00',
    type: 'debit',
    narration: 'UPI/DR/APOLLO PHARMACY/HDFC BANK/MEDICAL PURCHASE',
    chequeRef: 'UPI260219221',
    valueDate: '19 Feb 2026'
  },
  {
    id: 221,
    date: '2026-02-20',
    displayDate: '20 Feb 2026',
    amount: '₹6,500.00',
    type: 'debit',
    narration: 'UPI/DR/SELF ACCOUNT TRANSFER/AXIS BANK/FUND TRANSFER',
    chequeRef: 'UPI260220222',
    valueDate: '20 Feb 2026'
  },
  {
    id: 222,
    date: '2026-02-24',
    displayDate: '24 Feb 2026',
    amount: '₹1,450.00',
    type: 'debit',
    narration: 'UPI/DR/MSEDCL BILL PAYMENT/HDFC BANK/ELECTRICITY BILL',
    chequeRef: 'UPI260224223',
    valueDate: '24 Feb 2026'
  },
  {
    id: 223,
    date: '2026-02-25',
    displayDate: '25 Feb 2026',
    amount: '₹2,250.00',
    type: 'debit',
    narration: 'UPI/DR/JIO MART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260225224',
    valueDate: '25 Feb 2026'
  },
  {
    id: 224,
    date: '2026-02-26',
    displayDate: '26 Feb 2026',
    amount: '₹10,000.00',
    type: 'debit',
    narration: 'UPI/DR/ICICI PRUDENTIAL MF/HDFC BANK/SIP INVESTMENT',
    chequeRef: 'UPI260226225',
    valueDate: '26 Feb 2026'
  },

  {
    id: 240,
    date: '2026-06-01',
    displayDate: '01 Jun 2026',
    amount: '₹2,650.00',
    type: 'debit',
    narration: 'UPI/DR/DMART READY/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260601241',
    valueDate: '01 Jun 2026'
  },
  {
    id: 241,
    date: '2026-06-02',
    displayDate: '02 Jun 2026',
    amount: '₹750.00',
    type: 'debit',
    narration: 'UPI/DR/ZOMATO LIMITED/ICICI BANK/FOOD ORDER',
    chequeRef: 'UPI260602242',
    valueDate: '02 Jun 2026'
  },
  {
    id: 242,
    date: '2026-06-03',
    displayDate: '03 Jun 2026',
    amount: '₹5,000.00',
    type: 'debit',
    narration: 'UPI/DR/SELF TRANSFER/ICICI BANK/SAVINGS ACCOUNT',
    chequeRef: 'UPI260603243',
    valueDate: '03 Jun 2026'
  },
  {
    id: 243,
    date: '2026-06-04',
    displayDate: '04 Jun 2026',
    amount: '₹1,450.00',
    type: 'debit',
    narration: 'UPI/DR/INDIAN OIL CORP/HDFC BANK/FUEL PAYMENT',
    chequeRef: 'UPI260604244',
    valueDate: '04 Jun 2026'
  },
  {
    id: 244,
    date: '2026-06-05',
    displayDate: '05 Jun 2026',
    amount: '₹999.00',
    type: 'debit',
    narration: 'UPI/DR/NETFLIX INDIA/HDFC BANK/SUBSCRIPTION',
    chequeRef: 'UPI260605245',
    valueDate: '05 Jun 2026'
  },
  {
    id: 245,
    date: '2026-06-08',
    displayDate: '08 Jun 2026',
    amount: '₹3,250.00',
    type: 'debit',
    narration: 'UPI/DR/AMAZON PAY INDIA/HDFC BANK/ONLINE SHOPPING',
    chequeRef: 'UPI260608246',
    valueDate: '08 Jun 2026'
  },
  {
    id: 246,
    date: '2026-06-09',
    displayDate: '09 Jun 2026',
    amount: '₹850.00',
    type: 'debit',
    narration: 'UPI/DR/SWIGGY/HDFC BANK/FOOD ORDER',
    chequeRef: 'UPI260609247',
    valueDate: '09 Jun 2026'
  },
  {
    id: 247,
    date: '2026-06-10',
    displayDate: '10 Jun 2026',
    amount: '₹2,950.00',
    type: 'debit',
    narration: 'UPI/DR/RELIANCE SMART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260610248',
    valueDate: '10 Jun 2026'
  },
  {
    id: 248,
    date: '2026-06-11',
    displayDate: '11 Jun 2026',
    amount: '₹1,250.00',
    type: 'debit',
    narration: 'UPI/DR/APOLLO PHARMACY/HDFC BANK/MEDICAL PURCHASE',
    chequeRef: 'UPI260611249',
    valueDate: '11 Jun 2026'
  },
  {
  id: 249,
  date: '2026-06-12',
  displayDate: '12 Jun 2026',
  amount: '₹16,000.00',
  type: 'credit',
  narration: 'UPI/CR/SELF TRANSFER/AXIS BANK/FUND RECEIVED',
  chequeRef: 'UPI260612250',
  valueDate: '12 Jun 2026'
},
  {
    id: 250,
    date: '2026-06-13',
    displayDate: '13 Jun 2026',
    amount: '₹550.00',
    type: 'debit',
    narration: 'UPI/DR/CCD COFFEE DAY/HDFC BANK/FOOD PURCHASE',
    chequeRef: 'UPI260613251',
    valueDate: '13 Jun 2026'
  },
  {
    id: 251,
    date: '2026-06-15',
    displayDate: '15 Jun 2026',
    amount: '₹1,650.00',
    type: 'debit',
    narration: 'UPI/DR/MSEDCL BILL PAYMENT/HDFC BANK/ELECTRICITY BILL',
    chequeRef: 'UPI260615252',
    valueDate: '15 Jun 2026'
  },
  {
    id: 252,
    date: '2026-06-16',
    displayDate: '16 Jun 2026',
    amount: '₹2,350.00',
    type: 'debit',
    narration: 'UPI/DR/JIO MART/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260616253',
    valueDate: '16 Jun 2026'
  },
  {
    id: 253,
    date: '2026-06-16',
    displayDate: '16 Jun 2026',
    amount: '₹750.00',
    type: 'debit',
    narration: 'UPI/DR/BOOKMYSHOW/HDFC BANK/MOVIE TICKETS',
    chequeRef: 'UPI260616254',
    valueDate: '16 Jun 2026'
  },
  {
    id: 254,
    date: '2026-06-16',
    displayDate: '16 Jun 2026',
    amount: '₹4,500.00',
    type: 'debit',
    narration: 'UPI/DR/BLINKIT/HDFC BANK/GROCERY PURCHASE',
    chequeRef: 'UPI260616255',
    valueDate: '16 Jun 2026'
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