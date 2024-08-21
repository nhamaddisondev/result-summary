// Function to populate the summary
function populateSummary(data) {
    const summaryContainer = document.querySelector('.options');
    // Clear existing entries
    summaryContainer.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.id = item.category.toLowerCase();
        div.innerHTML = `
        <div class="icon">
          <img src="${item.icon}" alt="${item.category} Icon">
          <p id="${item.category.toLowerCase()}-title">${item.category}</p>
        </div>
        <p class="sub-score"><span>${item.score}</span> / 100</p>
      `;
        summaryContainer.appendChild(div);
    });
}
// Fetch the JSON data
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        populateSummary(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
