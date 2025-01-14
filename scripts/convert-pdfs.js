const fs = require('fs');
const path = require('path');
const { fromPath } = require('pdf2pic');
const sharp = require('sharp');

const INPUT_DIR = path.join(process.cwd(), 'public/media/pdfs');
const OUTPUT_DIR = path.join(process.cwd(), 'public/media/pdfs-png');

async function convertPDFToPNG(pdfPath, outputPath) {
  try {
    const options = {
      density: 300,
      saveFilename: path.basename(pdfPath, '.pdf'),
      savePath: OUTPUT_DIR,
      format: "png",
      width: 2048,
      height: 2048
    };

    const convert = fromPath(pdfPath, options);
    await convert(1); // Convert first page only
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