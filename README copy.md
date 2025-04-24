LLM Vulnerability Scanner Prototype
This is a static prototype of the LLM Vulnerability Scanner, a tool designed to test Large Language Models for security vulnerabilities. The prototype showcases the user interface and key features of the original Streamlit application, including configuration settings, template viewer, and mock scan results with visualizations.
Live Demo
Visit the prototype at: https://.github.io/llm-vulnerability-scanner
Features

Sidebar Configuration: Select provider, model, API key, and attack categories.
Scan Configuration: View selected settings in a structured layout.
Template Viewer: Display sample attack templates.
Mock Results: Show sample scan results with metrics and a detailed table.
Visualizations: Risk score histogram and attack type bar chart using Chart.js.
About Section: Information about the tool and its usage.

Project Structure
llm-vulnerability-scanner/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
├── README.md

How to Run Locally

Clone the repository:git clone https://github.com/<your-username>/llm-vulnerability-scanner.git
cd llm-vulnerability-scanner


Open index.html in a browser or use a local server:npm install -g http-server
http-server


Visit http://localhost:8080 to view the prototype.

Hosting on GitHub Pages
This prototype is hosted on GitHub Pages. To host it yourself:

Create a GitHub repository (e.g., llm-vulnerability-scanner).
Add the project files and push to the main branch.
Enable GitHub Pages in the repository settings under "Pages" > "Deploy from a branch" > Select main branch and / (root) folder.
Access the site at https://<your-username>.github.io/llm-vulnerability-scanner.

Notes

This is a static prototype and does not include the backend functionality of the original Streamlit app.
For the full application, refer to the Python-based Streamlit code (not included here).
Use this prototype for demonstration and UI preview purposes only.

Authors

Avinash Polireddy
Gnana Vardhan Siddu Paruvada
Kiran Varma
Sahithi kantu
Veeraswamy Gattupalli
Sai Kumar Tummeti
Likith Kagita
Bhaskara Vijaya Sai Swamy Vanacharla