function loadHTML(elementId, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch');
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load header and footer
loadHTML('header', 'bvb-it.github.io/bakkerij-galileo/html/header.html');
loadHTML('footer', 'footer.html');
