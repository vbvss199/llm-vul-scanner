// This function is triggered when the page loads to ask for the password
function promptForPassword() {
    var password = prompt("Enter the password to access the page:");

    if (password === "llmscanner") {
        document.getElementById("content").style.display = "block"; // Show content if the password is correct
    } else {
        alert("Incorrect password!");
        window.location.href = "https://www.example.com"; // Redirect to a different page on failure
    }
}

window.onload = promptForPassword; // Trigger password prompt when the page loads

// Expander toggle functionality
document.querySelectorAll('.expander > button').forEach(button => {
    button.addEventListener('click', () => {
      const expander = button.parentElement;
      expander.classList.toggle('active');
    });
});
  
// Risk Score Histogram
const riskHistogram = new Chart(document.getElementById('riskHistogram'), {
  type: 'histogram',
  data: {
    datasets: [{
      label: 'Risk Score',
      data: [
        { x: 2, y: 3 },
        { x: 4, y: 5 },
        { x: 6, y: 7 },
        { x: 8, y: 4 },
        { x: 10, y: 1 }
      ],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      title: { display: true, text: 'Risk Score Distribution' }
    },
    scales: {
      x: { title: { display: true, text: 'Risk Score' }, min: 0, max: 10 },
      y: { title: { display: true, text: 'Count' } }
    }
  }
});

// Attack Type Bar Chart
const attackBarChart = new Chart(document.getElementById('attackBarChart'), {
  type: 'bar',
  data: {
    labels: ['Prompt Injection', 'Jailbreak'],
    datasets: [{
      label: 'Count',
      data: [12, 8],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    plugins: {
      title: { display: true, text: 'Vulnerabilities by Attack Type' }
    },
    scales: {
      x: { title: { display: true, text: 'Count' } }
    }
  }
});
