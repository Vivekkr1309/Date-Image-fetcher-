function fetchImage() {
    var selectedDate = document.getElementById("date").value;

    
    var apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=RMGPg7jqpOOagg4fhl53ENWpo6FrsTH4SaXIDdBQ&date=' + selectedDate;
   

    fetch(apodUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var imageContainer = document.getElementById("imageContainer");
            imageContainer.innerHTML = `<img src="${data.url}" alt="Image for ${selectedDate}">`;
        })
        .catch(error => console.error('Error:', error));

    
}







