import jsPDF from 'jspdf';

interface ReportData {
  propertyType: string;
  area: number;
  irrigationMonths: number;
  gallonsPerSqFtPerWeek: number;
  annualWaterGallons: number;
  annualWaterThousands: number;
  waterRate: number;
  sewerRate: number;
  maintenanceCost: number;
  waterCost: number;
  sewerCost: number;
  maintenanceAnnual: number;
  mowingFrequency: number;
  mowingCost: number;
  fertilizerApps: number;
  fertilizerCost: number;
  totalNaturalGrassCost: number;
  turfInstallCost: number;
  paybackYears: number;
}

export function generatePDFReport(data: ReportData) {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;
  let yPosition = 20;
  const lineHeight = 7;
  const margin = 20;
  const maxWidth = pageWidth - (margin * 2);
  
  // Helper function to check and add new page if needed
  const checkNewPage = (neededSpace = 30) => {
    if (yPosition + neededSpace > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
    }
  };
  
  // Format date
  const reportDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // Header with branding
  doc.setFillColor(0, 51, 102); // Deep blue
  doc.rect(0, 0, pageWidth, 40, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('WATER SAVINGS ANALYSIS REPORT', pageWidth / 2, 20, { align: 'center' });
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Permian Turf - Permian Basin\'s Water-Saving Solution', pageWidth / 2, 30, { align: 'center' });
  
  yPosition = 50;
  doc.setTextColor(0, 0, 0);
  
  // Report date
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated: ${reportDate}`, margin, yPosition);
  yPosition += 15;
  
  // Property Information Section
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPosition - 5, maxWidth, 10, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('PROPERTY INFORMATION', margin, yPosition);
  yPosition += 12;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(`Property Type: ${data.propertyType === 'commercial' ? 'Commercial' : 'Residential'}`, margin, yPosition);
  yPosition += lineHeight;
  doc.text(`Turf Area: ${data.area.toLocaleString()} sq ft`, margin, yPosition);
  yPosition += lineHeight;
  doc.text('Location: Permian Basin, Texas', margin, yPosition);
  yPosition += 15;
  
  // Water Usage Analysis
  checkNewPage();
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPosition - 5, maxWidth, 10, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('WATER USAGE ANALYSIS', margin, yPosition);
  yPosition += 12;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(`Weekly water per sq ft: ${data.gallonsPerSqFtPerWeek} gallons`, margin, yPosition);
  yPosition += lineHeight;
  doc.text(`Irrigation months per year: ${data.irrigationMonths} months`, margin, yPosition);
  yPosition += lineHeight;
  doc.text(`Annual water consumption: ${Math.round(data.annualWaterGallons).toLocaleString()} gallons`, margin, yPosition);
  yPosition += lineHeight;
  doc.text(`Water rate: $${data.waterRate.toFixed(2)} per 1,000 gallons`, margin, yPosition);
  yPosition += lineHeight;
  doc.text(`Sewer rate: $${data.sewerRate.toFixed(2)} per 1,000 gallons`, margin, yPosition);
  yPosition += 15;
  
  // Annual Cost Breakdown
  checkNewPage(60);
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPosition - 5, maxWidth, 10, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('ANNUAL COST BREAKDOWN (Natural Grass)', margin, yPosition);
  yPosition += 12;
  
  // Cost table
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  const costs = [
    ['Water Cost:', `$${data.waterCost.toFixed(2)}`],
    ['Sewer Cost:', `$${data.sewerCost.toFixed(2)}`],
    ['Maintenance Cost:', `$${data.maintenanceAnnual.toFixed(2)}`],
    [`Mowing (${data.mowingFrequency}x/year):`, `$${data.mowingCost.toFixed(2)}`],
    [`Fertilizer (${data.fertilizerApps}x/year):`, `$${data.fertilizerCost.toFixed(2)}`]
  ];
  
  costs.forEach(([label, value]) => {
    doc.text(label, margin, yPosition);
    doc.text(value, pageWidth - margin - 30, yPosition);
    yPosition += lineHeight;
  });
  
  // Total line
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition - 2, pageWidth - margin, yPosition - 2);
  yPosition += 2;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('TOTAL ANNUAL COST:', margin, yPosition);
  doc.text(`$${data.totalNaturalGrassCost.toFixed(2)}`, pageWidth - margin - 30, yPosition);
  yPosition += 15;
  
  // Investment & ROI Section
  checkNewPage(80);
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPosition - 5, maxWidth, 10, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('ARTIFICIAL TURF INVESTMENT', margin, yPosition);
  yPosition += 12;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(`Installation Cost: $${data.turfInstallCost.toFixed(2).toLocaleString()}`, margin, yPosition);
  yPosition += lineHeight;
  doc.text(`Cost per sq ft: $${(data.propertyType === 'commercial' ? 7 : 8).toFixed(2)}`, margin, yPosition);
  yPosition += lineHeight;
  
  // Highlight payback period
  doc.setFillColor(255, 235, 0);
  doc.rect(margin - 2, yPosition - 6, maxWidth + 4, 10, 'F');
  doc.setFont('helvetica', 'bold');
  doc.text(`Payback Period: ${data.paybackYears.toFixed(1)} years`, margin, yPosition);
  yPosition += lineHeight;
  doc.setFont('helvetica', 'normal');
  doc.text('15-Year Warranty Included', margin, yPosition);
  yPosition += 15;
  
  // Long-term Projections
  checkNewPage(80);
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPosition - 5, maxWidth, 10, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('LONG-TERM SAVINGS PROJECTIONS', margin, yPosition);
  yPosition += 12;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  const projections = [
    ['5-Year Savings:', `$${(data.totalNaturalGrassCost * 5).toFixed(2).toLocaleString()}`],
    ['10-Year Savings:', `$${(data.totalNaturalGrassCost * 10).toFixed(2).toLocaleString()}`],
    ['15-Year Savings:', `$${(data.totalNaturalGrassCost * 15).toFixed(2).toLocaleString()}`]
  ];
  
  projections.forEach(([label, value]) => {
    doc.text(label, margin, yPosition);
    doc.text(value, pageWidth - margin - 30, yPosition);
    yPosition += lineHeight;
  });
  
  yPosition += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('NET SAVINGS (After Installation):', margin, yPosition);
  yPosition += lineHeight;
  doc.setFont('helvetica', 'normal');
  
  const netSavings = [
    ['5 Years:', `$${((data.totalNaturalGrassCost * 5) - data.turfInstallCost).toFixed(2).toLocaleString()}`],
    ['10 Years:', `$${((data.totalNaturalGrassCost * 10) - data.turfInstallCost).toFixed(2).toLocaleString()}`],
    ['15 Years:', `$${((data.totalNaturalGrassCost * 15) - data.turfInstallCost).toFixed(2).toLocaleString()}`]
  ];
  
  netSavings.forEach(([label, value]) => {
    doc.text(label, margin + 10, yPosition);
    doc.text(value, pageWidth - margin - 30, yPosition);
    yPosition += lineHeight;
  });
  yPosition += 15;
  
  // Environmental Impact
  checkNewPage(60);
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPosition - 5, maxWidth, 10, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('ENVIRONMENTAL IMPACT', margin, yPosition);
  yPosition += 12;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(`Annual Water Saved: ${Math.round(data.annualWaterGallons).toLocaleString()} gallons`, margin, yPosition);
  yPosition += lineHeight;
  doc.text('Equivalent to:', margin, yPosition);
  yPosition += lineHeight;
  doc.text(`• ${Math.round(data.annualWaterGallons / 20000)} average swimming pools`, margin + 5, yPosition);
  yPosition += lineHeight;
  doc.text(`• ${Math.round(data.annualWaterGallons / 60)} days of household water use`, margin + 5, yPosition);
  yPosition += lineHeight;
  doc.text('• Zero fertilizer runoff & pesticide use', margin + 5, yPosition);
  yPosition += 15;
  
  // Contact Information
  checkNewPage(40);
  doc.setFillColor(0, 51, 102);
  doc.rect(margin, yPosition, maxWidth, 35, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  yPosition += 10;
  doc.text('READY TO START SAVING?', pageWidth / 2, yPosition, { align: 'center' });
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  yPosition += 8;
  doc.text('Call: (432) 555-0100', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 6;
  doc.text('Email: info@permianturf.com', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 6;
  doc.text('Visit: www.permianturf.com', pageWidth / 2, yPosition, { align: 'center' });
  
  // Save the PDF
  doc.save(`Permian_Turf_Water_Savings_Report_${data.area}sqft_${new Date().toISOString().split('T')[0]}.pdf`);
}
