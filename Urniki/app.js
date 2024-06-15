const path = require('path');
const fs = require('fs').promises;
const express = require('express');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes


app.get('/', (req, res) => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to the API</title>
      </head>
      <body>
        <div>
          <h1>Welcome to the API!</h1>
          <ul>
            <li><a href="http://84.247.184.37:3001/Linija1/Koper">http://84.247.184.37:3001/Linija1/Koper</a> -> koperFinal.json</li>
            <li><a href="http://84.247.184.37:3001/Linija1/Kampel">http://84.247.184.37:3001/Linija1/Kampel</a> -> kampelFinal.json</li>
            <li><a href="http://84.247.184.37:3001/Linija2/Koper">http://84.247.184.37:3001/Linija2/Koper</a> -> L2-KoperFinal.json</li>
            <li><a href="http://84.247.184.37:3001/Linija2/Bolnisnica">http://84.247.184.37:3001/Linija2/Bolnisnica</a> -> bolnisnicaFinal.json</li>
            <li><a href="http://84.247.184.37:3001/Linija2A/bolnisnica">http://84.247.184.37:3001/Linija2A/bolnisnica</a> -> L2A-Bolnisnica.json</li>
            <li><a href="http://84.247.184.37:3001/Linija2A/koper">http://84.247.184.37:3001/Linija2A/koper</a> -> L2A-Koper.json</li>
            <li><a href="http://84.247.184.37:3001/Linija3/nadDolinsko">http://84.247.184.37:3001/Linija3/nadDolinsko</a> -> L3-NadDolinsko.json</li>
            <li><a href="http://84.247.184.37:3001/Linija3/bolnisnica">http://84.247.184.37:3001/Linija3/bolnisnica</a> -> L3-Bolnisnica.json</li>
            <li><a href="http://84.247.184.37:3001/Linija4/partizanska">http://84.247.184.37:3001/Linija4/partizanska</a> -> L4.json</li>
            <li><a href="http://84.247.184.37:3001/Linija5/markovec">http://84.247.184.37:3001/Linija5/markovec</a> -> L5-Markovec.json</li>
            <li><a href="http://84.247.184.37:3001/Linija5/trgBrolo">http://84.247.184.37:3001/Linija5/trgBrolo</a> -> L5-TrgBrolo.json</li>
            <li><a href="http://84.247.184.37:3001/Linija6/markovec">http://84.247.184.37:3001/Linija6/markovec</a> -> L6-Markovec.json</li>
            <li><a href="http://84.247.184.37:3001/Linija6/potniskiTerminal">http://84.247.184.37:3001/Linija6/potniskiTerminal</a> -> L6-PotniskiTerminal.json</li>
            <li><a href="http://84.247.184.37:3001/Linija7/potniskiTerminal">http://84.247.184.37:3001/Linija7/potniskiTerminal</a> -> L7.json</li>
            <li><a href="http://84.247.184.37:3001/Linija8/potniskiTerminal">http://84.247.184.37:3001/Linija8/potniskiTerminal</a> -> L8.json</li>
            <li><a href="http://84.247.184.37:3001/Linija9/koper">http://84.247.184.37:3001/Linija9/koper</a> -> L9.json</li>
            <li><a href="http://84.247.184.37:3001/Linija10/srmin">http://84.247.184.37:3001/Linija10/srmin</a> -> L10.json</li>
            <li><a href="http://84.247.184.37:3001/Linija11/banka">http://84.247.184.37:3001/Linija11/banka</a> -> L11-1.json</li>
            <li><a href="http://84.247.184.37:3001/Linija11/cimos">http://84.247.184.37:3001/Linija11/cimos</a> -> L11-2.json</li>
            <li><a href="http://84.247.184.37:3001/Linija12/sonce">http://84.247.184.37:3001/Linija12/sonce</a> -> L12.json</li>
          </ul>
        </div>
      </body>
      </html>
    `;
    res.send(htmlContent);
});

// Linija 1
app.get('/Linija1/kampel', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 1', 'kampelFinal.json');

    try {
        const data = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

app.get('/Linija1/koper', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 1', 'koperFinal.json');

    try {
        const data = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 2

app.get('/Linija2/koper', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 2', 'L2-KoperFinal.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

app.get('/Linija2/bolnisnica', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 2', 'bolnisnicaFinal.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 2A

app.get('/Linija2A/bolnisnica', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 2A', 'L2A-Bolnisnica.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

app.get('/Linija2A/koper', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 2A', 'L2A-Koper.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 3

app.get('/Linija3/nadDolinsko', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 3', 'L3-NadDolinsko.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

app.get('/Linija3/bolnisnica', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 3', 'L3-Bolnisnica.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 4

app.get('/Linija4/partizanska', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 4', 'L4.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 5

app.get('/Linija5/markovec', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 5', 'L5-Markovec.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

app.get('/Linija5/trgBrolo', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 5', 'L5-TrgBrolo.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 6

app.get('/Linija6/markovec', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 6', 'L6-Markovec.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

app.get('/Linija6/potniskiTerminal', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 6', 'L6-PotniskiTerminal.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 7

app.get('/Linija7/potniskiTerminal', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 7', 'L7.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 8

app.get('/Linija8/potniskiTerminal', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 8', 'L8.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 9

app.get('/Linija9/koper', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 9', 'L9.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 10

app.get('/Linija10/srmin', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 10', 'L10.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 11

app.get('/Linija11/banka', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 11', 'L11-1.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

app.get('/Linija11/cimos', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 11', 'L11-2.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});

// Linija 12

app.get('/Linija12/sonce', async (req, res) => {
    const filePath = path.join(__dirname, 'Linija 12', 'L12.json')

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
