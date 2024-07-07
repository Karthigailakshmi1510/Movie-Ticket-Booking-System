function checkInputs() {
    const movie = document.getElementById('movie').value;
    const tickets = document.getElementById('tickets').value;
    const btnDiv = document.getElementById('btn-div');
    if (movie && tickets) {
        btnDiv.style.display = 'block';
    } else {
        btnDiv.style.display = 'none';
    }
}

function calculateTicketPrice() {
    const movie = document.getElementById('movie').value;
    const tickets = document.getElementById('tickets').value;
    const resultDiv = document.getElementById('result');
    const successMessage = document.getElementById('success-message');

    if (movie && tickets) {
        const price = movie * tickets;
        resultDiv.innerHTML = `<p>Total Price: Rs ${price}</p>`;
        successMessage.style.display = 'block';
    } else {
        resultDiv.innerHTML = '<p>Please select a movie and enter the number of tickets.</p>';
        successMessage.style.display = 'none';
    }
}
