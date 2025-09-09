const fs = require('fs');
const path = require('path');

// Read the JSON file
const filePath = path.join(__dirname, '..', 'public', 'imo_farmers_website.json');
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Process the data to remove trailing whitespace from "SIZE OF FARM "
const processedData = jsonData.map(item => {
  if (item['SIZE OF FARM '] !== undefined) {
    item['SIZE OF FARM'] = item['SIZE OF FARM '];
    delete item['SIZE OF FARM '];
  }
  return item;
});

// Write the cleaned data back to the file
fs.writeFileSync(filePath, JSON.stringify(processedData, null, 2));

console.log('Successfully cleaned the JSON file!');
