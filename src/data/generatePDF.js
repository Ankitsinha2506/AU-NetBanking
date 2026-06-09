import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { accountInfo } from './transactions'
import pdfLogoUrl from '../assets/pdflogo.svg'

function loadLogoOnPurple(url, targetW, targetH) {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = targetW
      canvas.height = targetH
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#6d276d'
      ctx.fillRect(0, 0, targetW, targetH)
      ctx.drawImage(img, -1, -1, targetW + 2, targetH + 2)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = () => resolve(null)
    img.src = url
  })
}

function addFooter(doc) {
  const W = doc.internal.pageSize.getWidth()
  const H = doc.internal.pageSize.getHeight()
  const pageCount = doc.internal.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)

    // Line 1: auto-generated text + page number
    doc.setFontSize(10)
    doc.setTextColor(50, 50, 50)
    doc.setFont('helvetica', 'normal')
    doc.text('This is an auto generated statement and requires no signature', W / 2, H - 42, { align: 'center' })
    doc.text(`Page ${i} of ${pageCount}`, W - 10, H - 42, { align: 'right' })

    // Purple divider line
    doc.setDrawColor(109, 39, 109)
    doc.setLineWidth(0.5)
    doc.line(0, H - 37, W, H - 37)

    // Purple disclaimer text
    doc.setFontSize(9)
    doc.setTextColor(109, 39, 109)
    doc.setFont('helvetica', 'normal')
    doc.text(
      'Please review the information provided in the statement. In case of any discrepancy, please inform the Bank immediately',
      W / 2, H - 32, { align: 'center' }
    )

    // 5 evenly spaced contact columns
    const cols = [10, 50, 90, 135, 175]
    const labels = ['Call us at', 'Website', 'Email', 'Write to us at', 'Follow us on']
    const values = ['1800 1200 1200', 'www.aubank.in', 'customercare@aubank.in', 'Reg. office address', 'Facebook/Twitter']

    doc.setFontSize(8.5)
    doc.setTextColor(109, 39, 109)
    doc.setFont('helvetica', 'bold')
    cols.forEach((x, idx) => doc.text(labels[idx], x, H - 24))

    doc.setFont('helvetica', 'normal')
    doc.setTextColor(109, 39, 109)
    cols.forEach((x, idx) => doc.text(values[idx], x, H - 18))

    // Purple bottom bar
    doc.setFillColor(109, 39, 109)
    doc.rect(0, H - 13, W, 13, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.text(
      '19A, DHULESHWAR GARDEN, AJMER ROAD, JAIPUR - 302001, RAJASTHAN (INDIA)  Ph.: +91 141 4110060/61,  TOLL-FREE: 1800 1200 1200',
      W / 2, H - 5, { align: 'center' }
    )
  }
}

export async function downloadStatementPDF(transactions, period, balances = {}) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = doc.internal.pageSize.getWidth()

  // ── 1. Purple header ──────────────────────────────────────────
  const headerH = 20  
  doc.setFillColor(109, 39, 109)
  doc.rect(0, 0, W, headerH, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.text('ACCOUNT STATEMENT', 12, 12)

  const logoH = 12
  const logoW = parseFloat((logoH * (68.27 / 30.1)).toFixed(1))
  const logoBase64 = await loadLogoOnPurple(pdfLogoUrl, Math.round(logoW * 10), Math.round(logoH * 10))
  if (logoBase64) {
    doc.addImage(logoBase64, 'PNG', W - logoW - 12, (headerH - logoH) / 2, logoW, logoH)
  }

  // ── 2. Info grid ──────────────────────────────────────────────
  const lx = 12, lv = 52, rx = 118, rv = 158
  const FS = 9
  const ROW = 8

  function lbl(text, x, y) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(FS)
    doc.setTextColor(130, 130, 130)
    doc.text(text, x, y)
  }
  function v(text, x, y, maxW = 50) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(FS)
    doc.setTextColor(25, 25, 25)
    const lines = doc.splitTextToSize(String(text), maxW)
    doc.text(lines, x, y)
    return lines.length
  }
  function col(x, y) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(FS)
    doc.setTextColor(130, 130, 130)
    doc.text(':', x - 5, y)
  }

  let y = headerH + 12

  // Row 1: Name | Account Number
  lbl('Name', lx, y); col(lv, y)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(FS)
  doc.setTextColor(25, 25, 25)
  doc.text(accountInfo.accountHolder, lv, y)
  lbl('Account Number', rx, y); col(rv, y); v(accountInfo.accountNumber, rv, y)
  y += ROW

  // Row 2: Customer ID | Account Type
  lbl('Customer ID', lx, y);  col(lv, y); v('41701754', lv, y)
  lbl('Account Type', rx, y); col(rv, y); v('AU Salary Account-Value', rv, y)
  y += ROW

  // Row 3: Customer Type | Branch
  lbl('Customer Type', lx, y); col(lv, y); v('Individual - Full KYC', lv, y)
  lbl('Branch', rx, y); col(rv, y); v('Wakad Pune', rv, y)
  y += ROW

  // Row 4: Address | IFSC + Nominee
  const addrY = y
  lbl('Address', lx, addrY); col(lv, addrY)
  const addrLineCount = v(
    'E 102, Lakshadeep Palace, Near Hdfc Bank\nPune City - 411027, Maharashtra - India',
    lv, addrY, 52
  )
  lbl('IFSC',    rx, addrY);       col(rv, addrY);       v('AUBL0002630', rv, addrY)
  lbl('Nominee', rx, addrY + ROW); col(rv, addrY + ROW); v('Not Registered', rv, addrY + ROW)

  const addrBottom = addrY + addrLineCount * 5
  const rightBottom = addrY + ROW * 2 + 6
  y = Math.max(addrBottom, rightBottom) + 1

  // Statement Date | Opening Balance
  const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  lbl('Statement Date', lx, y);   col(lv, y); v(today, lv, y)
  lbl('Opening Balance', rx, y);  col(rv, y); v('0.00', rv, y)
  y += ROW

  // Statement Period | Closing Balance
  lbl('Statement Period', lx, y); col(lv, y)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(FS)
  doc.setTextColor(25, 25, 25)
  doc.text(period, lv, y)
  lbl('Closing Balance', rx, y); col(rv, y)
  const closing = transactions.length > 0
    ? (balances[transactions[transactions.length - 1].id] || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })
    : '0.00'
  doc.setTextColor(25, 25, 25)
  v(closing, rv, y)
  y += 8

  // ── 3. Transaction table ──────────────────────────────────────
  const rows = transactions.map(tx => [
    tx.displayDate,
    tx.valueDate,
    tx.narration,
    tx.chequeRef || '-',
    tx.type === 'debit'  ? tx.amount.replace('\u20b9', '') : '-',
    tx.type === 'credit' ? tx.amount.replace('\u20b9', '') : '-',
    tx.runningBalance ? tx.runningBalance.replace('\u20b9', '') : (balances[tx.id] ? balances[tx.id].toLocaleString('en-IN', { minimumFractionDigits: 2 }) : '-'),
  ])

  autoTable(doc, {
    startY: y,
    head: [['Transaction\nDate', 'Value Date', 'Description/Narration', 'Cheque/\nReference No.', 'Debit', 'Credit', 'Balance']],
    body: rows,
    styles: {
      fontSize: 9,
      font: 'helvetica',
      cellPadding: { top: 1, bottom: 1, left: 1, right: 0.5 },
      textColor: [40, 40, 40],
      lineColor: [200, 200, 200],
      lineWidth: 0.25,
      valign: 'top',
    },
    headStyles: {
      fillColor: [235, 235, 235],
      textColor: [30, 30, 30],
      font: 'helvetica',
      fontStyle: 'bold',
      fontSize: 8,
      lineColor: [200, 200, 200],
      lineWidth: 0.3,
      halign: 'center',
      valign: 'middle',
      cellPadding: { top: 2.5, bottom: 2.5, left: 3, right: 3 },
    },
    alternateRowStyles: { fillColor: [255, 255, 255] },
    columnStyles: {
      0: { cellWidth: 22, halign: 'center' },
      1: { cellWidth: 22, halign: 'center' },
      2: { cellWidth: 45 },
      3: { cellWidth: 40 },
      4: { cellWidth: 22, halign: 'right', valign: 'top', cellPadding: { top: 3, bottom: 1.5, left: 2, right: 2 } },
      5: { cellWidth: 22, halign: 'right', valign: 'top', cellPadding: { top: 3, bottom: 1.5, left: 2, right: 2 } },
      6: { cellWidth: 22, halign: 'right', valign: 'top', cellPadding: { top: 3, bottom: 1.5, left: 2, right: 2 } },
    },
    margin: { left: 7, right: 7, top: headerH + 4, bottom: 55 },
    tableWidth: 'fixed',
  })

  // ── 4. Header on every page ───────────────────────────────────
  const totalPages = doc.internal.getNumberOfPages()
  for (let i = 2; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFillColor(109, 39, 109)
    doc.rect(0, 0, W, headerH, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('ACCOUNT STATEMENT', 12, 12)
    if (logoBase64) {
      doc.addImage(logoBase64, 'PNG', W - logoW - 12, (headerH - logoH) / 2, logoW, logoH)
    }
  }
  doc.setPage(1)

  addFooter(doc)

  doc.save(`Account_Statement_${accountInfo.accountNumber}.pdf`)
}
