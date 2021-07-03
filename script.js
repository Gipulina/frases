const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const twitterBtn = document.getElementById('twitter');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

//show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
//hide loading 
function complete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

//Show Quote
//pick a random quote fro apiQuotes array
function newQuote() {
   loading();
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
  //Set Quote, hidden loader
  complete();
}

//Get Quotes from API
async function getQuotes() {
    loading();
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
//to tweet a quote
 function tweetQuote(){
     const twitterUrl = `https://twitter.com/intent/tweet?text="${quoteText.textContent}" frase de ${authorText.textContent}. Para más frases inspiradoras click aquí https://gipulina.github.io/frases/`;
     window.open(twitterUrl, '_blank');
 }

 //Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// On Load
getQuotes();