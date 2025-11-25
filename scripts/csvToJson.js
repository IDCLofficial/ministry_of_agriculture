const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Directories
const dataDir = path.join(__dirname, '..', 'data');
const outputDir = path.join(__dirname, '..', 'public');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

/**
 * Convert CSV file to JSON
 * @param {string} csvFilePath - Path to the CSV file
 * @param {string} outputFilePath - Path to save the JSON file
 */
function convertCsvToJson(csvFilePath, outputFilePath) {
  const results = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv({
        mapHeaders: ({ header }) => header.trim(), // Trim whitespace from headers
        skipEmptyLines: true
      }))
      .on('data', (data) => {
        // Clean up the data object
        const cleanedData = {};
        for (const [key, value] of Object.entries(data)) {
          // Trim values and convert empty strings to null
          cleanedData[key] = value.trim() === '' ? null : value.trim();
        }
        results.push(cleanedData);
      })
      .on('end', () => {
        // Write JSON file
        fs.writeFileSync(
          outputFilePath,
          JSON.stringify(results, null, 2),
          'utf-8'
        );
        console.log(`✓ Converted: ${path.basename(csvFilePath)} -> ${path.basename(outputFilePath)}`);
        console.log(`  Records: ${results.length}`);
        resolve(results);
      })
      .on('error', (error) => {
        console.error(`✗ Error converting ${csvFilePath}:`, error.message);
        reject(error);
      });
  });
}

/**
 * Process all CSV files in the data directory
 */
async function processAllCsvFiles() {
  try {
    // Check if data directory exists
    if (!fs.existsSync(dataDir)) {
      console.error(`Error: Data directory not found at ${dataDir}`);
      process.exit(1);
    }

    // Get all CSV files
    const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.csv'));

    if (files.length === 0) {
      console.log('No CSV files found in the data directory.');
      return;
    }

    console.log(`Found ${files.length} CSV file(s) to process:\n`);

    // Process each CSV file
    for (const file of files) {
      const csvFilePath = path.join(dataDir, file);
      const jsonFileName = file.replace('.csv', '.json');
      const outputFilePath = path.join(outputDir, jsonFileName);

      await convertCsvToJson(csvFilePath, outputFilePath);
    }

    console.log('\n✓ All CSV files converted successfully!');
  } catch (error) {
    console.error('Error processing CSV files:', error.message);
    process.exit(1);
  }
}

// Run the script
processAllCsvFiles();