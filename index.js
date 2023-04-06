const body = document.querySelector('body')
body.addEventListener('DOMContentLoaded', () => {

});

// Unsplash API authentication key
const accessKey = 'AF4Ld6qkMDBIh2RixfCUufgf9TX3SHZggBjPOdk_1YE';

//Grabs elements from HTML 
const img1 = document.getElementById('img1');
const form = document.getElementById('form');
const userInput = document.getElementById('userInput');


// Event listeners for submit button not to reload page
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const query = userInput.value; // Extract user input from form
  
  // Fetch user input data from API
  fetch(`https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}&orientation=landscape`)
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      img1.src = data.results[randomIndex].urls.regular;
      img1.alt = data.results[randomIndex].alt_description;
    })
    .catch(error => console.log(error));
});

// Prevents the page from reloading when submitted
const commentBtn = document.getElementById('submittBtn');
commentBtn.addEventListener('submit', (event) => {
  event.preventDefault();
})

// Prevents the page from reloading when submitted
const link = document.querySelector('.links1');
link.addEventListener('click', (event) => {
  event.preventDefault();
})









        