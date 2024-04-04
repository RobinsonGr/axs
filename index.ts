// Import necessary modules for TypeScript compilation
declare var require: any;
const fs = require('fs');
const path = require('path');

// Define the HTML content
const htmlContent = `
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Landing Page</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    header {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        text-align: center;
    }
    .container {
        max-width: 1200px;
        margin: 20px auto;
        padding: 0 20px;
    }
    .content {
        margin-top: 20px;
    }
    .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }
    .button:hover {
        background-color: #0056b3;
    }
</style>
</head>
<body>
<header>
    <h1>Welcome to Our Landing Page</h1>
</header>
<div class="container">
    <section class="content">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
        <a href="#" class="button">Learn More</a>
    </section>
</div>
</body>
</html>
`;

// Define the output file path
const outputPath = path.join(__dirname, 'landing_page.html');

// Write the HTML content to the output file
fs.writeFileSync(outputPath, htmlContent);

// Log the success message
console.log('Landing page created successfully.');
