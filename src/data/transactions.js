// ─────────────────────────────────────────────
// Central Transaction Data Store
// Edit this file to manage all transactions
// shown in the Account Statement page
// ─────────────────────────────────────────────

export const accountInfo = {
  accountNumber: '2601235010788507',
  accountHolder: 'Keshav Pralhad Golande',
}

// Add / edit / remove transactions here
// type: 'credit' → green amount (+), 'debit' → red amount (-)
export const transactions = [
  {
    id: 1,
    date: '2026-05-21',
    displayDate: '21 May 2026',
    amount: '₹10,400.00',
    type: 'debit',
    narration: 'MONEY TRANSFER DR - 26012630110 88661 - SANDIP GAJANAN UTLWAR',
    valueDate: '21 May 2026',
    runningBalance: '',
  },
  {
    id: 2,
    date: '2026-05-21',
    displayDate: '21 May 2026',
    amount: '₹10,400.00',
    type: 'credit',
    narration: 'MONEY TRANSFER CR - 2601235010 788487 - SADANAND RAJARAM BELOTE - AU BANK',
    valueDate: '21 May 2026',
    runningBalance: '₹10,400.00',
  },
  {
    id: 3,
    date: '2026-05-21',
    displayDate: '21 May 2026',
    amount: '₹10,400.00',
    type: 'debit',
    narration: 'MONEY TRANSFER DR - 2601235010 788487 - SADANAND RAJARAM BELOTE',
    valueDate: '21 May 2026',
    runningBalance: '',
  },
  {
    id: 4,
    date: '2026-05-21',
    displayDate: '21 May 2026',
    amount: '₹10,400.00',
    type: 'credit',
    narration: 'UPI/CR/513510332960/MR KESHAV PRALHAD GOLANDE/CBIN/00000 03620735326/PAYMENT FROM PHONEPE AU JAGATPURA',
    valueDate: '21 May 2026',
    runningBalance: '₹10,400.00',
  },
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
