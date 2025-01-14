const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');
const { createCanvas } = require('canvas');

const INPUT_DIR = path.join(process.cwd(), 'public/media/pdfs');
const OUTPUT_DIR = path.join(process.cwd(), 'public/media/pdfs-png');

async function convertPDFToPNG(pdfPath, outputPath) {
  try {
    // Read the PDF file
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const page = await pdfDoc.getPage(0);

    // Get page dimensions
    const { width, height } = page.getSize();
    const scale = 2; // Increase resolution

    // Create canvas with the same dimensions
    const canvas = createCanvas(width * scale, height * scale);
    const ctx = canvas.getContext('2d');

    // Draw white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width * scale, height * scale);

    // Convert to PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);

    console.log(`Converted ${path.basename(pdfPath)} to PNG`);
  } catch (error) {
    console.error(`Error converting ${path.basename(pdfPath)}:`, error);
  }
}

async function main() {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Get all PDF files
  const files = fs.readdirSync(INPUT_DIR).filter(file => file.endsWith('.pdf'));

  // Convert each PDF
  for (const file of files) {
    const pdfPath = path.join(INPUT_DIR, file);
    const pngPath = path.join(OUTPUT_DIR, file.replace('.pdf', '.png'));
    await convertPDFToPNG(pdfPath, pngPath);
  }
}

main().catch(console.error); 