let apiQuotes = [];

//Show Quote
//pick a random quote fro apiQuotes array
function newQuote() {
  const Quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];    
  console.log(Quote);
}

//Get Quotes from API
async function getQuotes() {
    const apiUrl="https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQote();
        //console.log(apiQuotes[12]); esta es para seleccionra una específica
    }catch(error){
        //Catch Error Here
        // alert("Something worked wrong");
    }
}

// On Load
getQuotes();