const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const twitterBtn = document.getElementById('twitter');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

//Show Quote
//pick a random quote fro apiQuotes array
function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];    
  //check if the author is blank
  if(!quote.author) {
    authorText.textContent = 'Unknown';
  }else{
    authorText.textContent = quote.author;
  }
  //check quote length
  console.log(quote);
  console.log(quote.author);
  console.log(quote.text);
  console.log(quote.text.length);

  if(quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
  }

  
  quoteText.textContent = quote.text;
}

//Get Quotes from API
async function getQuotes() {
    const apiUrl="https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    //console.log(apiQuotes[12]); esta es para seleccionra una específica
    }catch(error){
        //Catch Error Here
        // alert("Something worked wrong");
    }
}

// On Load
getQuotes();