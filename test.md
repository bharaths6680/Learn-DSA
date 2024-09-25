---

### **Slide Title: "Efficient JSON Processing Tool for Large Data Sets"**

---

### **Problem Statement:**
- **Challenge**: Processing and transforming large JSON files (over 100MB) without performance bottlenecks.
- **Common Issues**: Memory overload, slow processing time, difficulty in handling real-time filtering and chunking.

---

### **Solution Overview:**
- **Node.js Tool**: Built to efficiently generate and modify large JSON data using streams to process datasets in chunks.
- **Key Features**:
  - Stream-based approach to avoid memory overload.
  - Custom filtering logic to extract and format relevant data.
  - Automatically splits large JSON data into manageable chunks.

---

### **How It Works:**
1. **File Streaming**: Reads large JSON files in chunks using Node.js streams, avoiding full file loading into memory.
2. **Custom Filtering**: Applies a filter condition to extract key data points (e.g., skills, employment details, location).
3. **Chunking**: Once the data reaches a specified chunk size, it is written to a new JSON file.
4. **Output**: The tool generates multiple smaller, well-structured JSON files, each containing filtered and formatted data.

---

### **Code Workflow:**
1. **File Input & Read**: Uses `fs.createReadStream()` to process large JSON files line by line.
2. **Filtering Logic**: Extracts relevant data (Skills, EmploymentDetails, ProfileLocationDetails) based on specified conditions.
3. **JSON Chunk Creation**: Once the buffer exceeds the chunk size, the data is saved to a new JSON file.
4. **Final Output**: Creates multiple output files with structured data, ensuring efficient memory management.

---

### **Key Code Snippet:**

```javascript
const fs = require('fs');
const readline = require('readline');
const path = require('path');

// Function to handle large files with streams
async function divideLargeJsonStream(inputFilePath, chunkSize, outputDirectory, filterCondition) {
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  const readStream = fs.createReadStream(inputFilePath, { encoding: 'utf8' });
  const rl = readline.createInterface({ input: readStream, crlfDelay: Infinity });

  let buffer = [];
  let fileCounter = 1;

  for await (const line of rl) {
    const jsonArray = JSON.parse(line);
    const filteredArray = filterCondition(jsonArray);
    if (filteredArray?.length) buffer = [...buffer, ...filteredArray];

    if (buffer.length >= chunkSize) {
      const jsonObject = { id: `pdlData_${fileCounter}`, data: buffer };
      const outputFilePath = path.join(outputDirectory, `parsed_pdl_data_${fileCounter}.json`);
      await fs.promises.writeFile(outputFilePath, JSON.stringify(jsonObject, null, 2), 'utf8');
      console.log(`Created: ${outputFilePath}`);
      buffer = [];
      fileCounter++;
    }
  }

  if (buffer.length > 0) {
    const jsonObject = { id: `pdlData_${fileCounter}`, data: buffer };
    const outputFilePath = path.join(outputDirectory, `parsed_pdl_data_${fileCounter}.json`);
    await fs.promises.writeFile(outputFilePath, JSON.stringify(jsonObject, null, 2), 'utf8');
    console.log(`Created: ${outputFilePath}`);
  }

  console.log('All PDL data written successfully.');
}
```

---

### **Results:**
- Successfully processed JSON files larger than 100MB.
- Reduced memory consumption by using streams.
- Improved data management with custom filtering and chunking.

---

### **Conclusion:**
- **Efficiency**: The tool can handle massive JSON files with minimal memory usage.
- **Scalability**: Suitable for real-world applications where large datasets are common.
- **Next Steps**: Potential to integrate this tool into production workflows or expand to support more complex filtering and transformations.
