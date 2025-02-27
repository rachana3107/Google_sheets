const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the Zeotap directory
app.use(express.static(__dirname));

app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running!' });
});

app.post('/api/saveSpreadsheet', (req, res) => {
    const spreadsheetData = req.body.data; // Expecting data to be sent in the request body
    // Logic to save the spreadsheet data (e.g., to a database or file)
    // For now, we will just log it to the console
    console.log("Spreadsheet data received:", spreadsheetData);
    res.json({ message: 'Spreadsheet data saved successfully!' });
});

// Endpoint to load spreadsheet data
app.get('/api/loadSpreadsheet', (req, res) => {
    // Logic to load the spreadsheet data (e.g., from a database or file)
    const sampleData = ["", "", "", "", "", "", "", "", "", ""]; // Sample empty data for now
    res.json({ data: sampleData });
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
