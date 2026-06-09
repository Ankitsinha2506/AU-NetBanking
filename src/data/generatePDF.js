import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { accountInfo } from './transactions'
import pdfLogoUrl from '../assets/pdflogo.svg'

function loadImageAsBase64(url, targetW, targetH) {
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
      ctx.drawImage(img, 0, 0, targetW, targetH)
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

    doc.setFontSize(7.5)
    doc.setTextColor(60, 60, 60)
    doc.setFont('helvetica', 'italic')
    doc.text('This is an auto generated statement and requires no signature', W / 2, H - 34, { align: 'center' })
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    doc.text(`Page ${i} of ${pageCount}`, W - 10, H - 34, { align: 'right' })

    doc.setDrawColor(210, 200, 200)
    doc.line(7, H - 30, W - 7, H - 30)

    doc.setFontSize(7)
    doc.setTextColor(80, 80, 80)
    doc.setFont('helvetica', 'bold')
    doc.text('Call us at',      10, H - 24)
    doc.text('Website',         52, H - 24)
    doc.text('Email',           95, H - 24)
    doc.text('Write to us at', 148, H - 24)
    doc.text('Follow us on',   190, H - 24)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(6.5)
    doc.text('1800 1200 1200',         10, H - 19)
    doc.text('www.aubank.in',           52, H - 19)
    doc.text('customercare@aubank.in',  95, H - 19)
    doc.text('Reg. office address',    148, H - 19)
    doc.text('Facebook/Twitter',       190, H - 19)

    doc.setFillColor(255, 228, 228)
    doc.rect(0, H - 14, W, 7, 'F')
    doc.setTextColor(100, 40, 40)
    doc.setFontSize(6.5)
    doc.setFont('helvetica', 'normal')
    doc.text(
      'Please review the information provided in the statement. In case of any discrepancy, please inform the Bank immediately',
      W / 2, H - 9.5, { align: 'center' }
    )

    doc.setFillColor(109, 39, 109)
    doc.rect(0, H - 7, W, 7, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(5.8)
    doc.text(
      '19A, DHULESHWAR GARDEN, AJMER ROAD, JAIPUR - 302001, RAJASTHAN (INDIA)  Ph.: +91 141 4110060/61,  TOLL-FREE: 1800 1200 1200',
      W / 2, H - 2.5, { align: 'center' }
    )
  }
}

export async function downloadStatementPDF(transactions, period) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = doc.internal.pageSize.getWidth()

  // 1. Purple header - taller to match screenshot
  const headerH = 18
  doc.setFillColor(109, 39, 109)
  doc.rect(0, 0, W, headerH, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('ACCOUNT STATEMENT', 8, headerH / 2 + 3)

  // Logo from asset - SVG ratio 68.27:30.1 = 2.268
  // Fit logo height = headerH, width proportional
  const logoH = headerH
  const logoW = parseFloat((logoH * (68.27 / 30.1)).toFixed(1))
  const logoBase64 = await loadImageAsBase64(pdfLogoUrl, Math.round(logoW * 12), Math.round(logoH * 12))
  if (logoBase64) {
    doc.addImage(logoBase64, 'PNG', W - logoW, 0, logoW, logoH)
  }

  // 2. Info grid
  const lx = 10, lv = 38, rx = 110, rv = 145

  function label(text, x, y) {
    doc.setTextColor(120, 120, 120)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    doc.text(text, x, y)
  }
  function val(text, x, y, maxW = 55) {
    doc.setTextColor(30, 30, 30)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    const lines = doc.splitTextToSize(String(text), maxW)
    doc.text(lines, x, y)
    return lines.length
  }
  function colon(x, y) {
    doc.setTextColor(80, 80, 80)
    doc.setFontSize(8.5)
    doc.text(':', x - 4, y)
  }

  let y = headerH + 8
  label('Name', lx, y);          colon(lv, y); val(accountInfo.accountHolder, lv, y)
  label('Account Number', rx, y); colon(rv, y); val(accountInfo.accountNumber, rv, y)
  y += 6
  label('Customer ID', lx, y);   colon(lv, y); val('41701754', lv, y)
  label('Account Type', rx, y);  colon(rv, y); val('AU Salary Account-Value', rv, y)
  y += 6
  label('Customer Type', lx, y); colon(lv, y); val('Individual - Full KYC', lv, y)
  label('Branch', rx, y);        colon(rv, y); val('Wakad Pune', rv, y)
  y += 6
  label('Address', lx, y); colon(lv, y)
  const addrLines = val('E 102, Lakshadeep Palace, Near Hdfc Bank\nPune City - 411027, Maharashtra - India', lv, y, 55)
  label('IFSC', rx, y);    colon(rv, y); val('AUBL0002630', rv, y)
  y += 5
  label('Nominee', rx, y); colon(rv, y); val('Not Registered', rv, y)
  y += addrLines > 2 ? 8 : 6

  doc.setDrawColor(210, 210, 210)
  doc.line(lx, y, W - 10, y)
  y += 5

  const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  label('Statement Date', lx, y);       colon(lv, y); val(today, lv, y)
  label('Opening Balance(\u20b9)', rx, y); colon(rv, y); val('0.00', rv, y)
  y += 6
  label('Statement Period', lx, y); colon(lv, y)
  doc.setTextColor(232, 84, 10)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8.5)
  doc.text(period, lv, y)
  label('Closing Balance(\u20b9)', rx, y); colon(rv, y)
  const closing = transactions.length > 0
    ? (transactions[transactions.length - 1].runningBalance || '0.00').replace('\u20b9', '')
    : '0.00'
  val(closing, rv, y)
  y += 10

  // 3. Transaction table
  const rows = transactions.map(tx => [
    tx.displayDate,
    tx.valueDate,
    tx.narration,
    tx.chequeRef || '-',
    tx.type === 'debit'  ? tx.amount.replace('\u20b9', '') : '-',
    tx.type === 'credit' ? tx.amount.replace('\u20b9', '') : '-',
    tx.runningBalance ? tx.runningBalance.replace('\u20b9', '') : '-',
  ])

  autoTable(doc, {
    startY: y,
    head: [['Transaction\nDate', 'Value Date', 'Narration', 'Cheque/\nReference No.', 'Debit (\u20b9)', 'Credit (\u20b9)', 'Balance (\u20b9)']],
    body: rows,
    styles: {
      fontSize: 7,
      cellPadding: { top: 3, bottom: 3, left: 2, right: 2 },
      textColor: [40, 40, 40],
      lineColor: [220, 220, 220],
      lineWidth: 0.2,
      valign: 'top',
    },
    headStyles: {
      fillColor: [255, 255, 255],
      textColor: [40, 40, 40],
      fontStyle: 'bold',
      fontSize: 7.5,
      lineColor: [180, 180, 180],
      lineWidth: 0.3,
    },
    alternateRowStyles: { fillColor: [253, 245, 245] },
    columnStyles: {
      0: { cellWidth: 20 },
      1: { cellWidth: 20 },
      2: { cellWidth: 58 },
      3: { cellWidth: 35 },
      4: { cellWidth: 18, halign: 'right' },
      5: { cellWidth: 18, halign: 'right' },
      6: { cellWidth: 18, halign: 'right' },
    },
    margin: { left: 7, right: 7, bottom: 40 },
    didParseCell(data) {
      if (data.section === 'body') {
        if (data.column.index === 4 && data.cell.raw !== '-') data.cell.styles.textColor = [180, 0, 0]
        if (data.column.index === 5 && data.cell.raw !== '-') data.cell.styles.textColor = [0, 140, 0]
      }
    },
  })

  // 4. Footer on every page
  addFooter(doc)

  doc.save(`Account_Statement_${accountInfo.accountNumber}.pdf`)
}
