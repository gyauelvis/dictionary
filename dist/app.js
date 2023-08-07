let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('#search-bar');
let word;

let renderData = (data)=>{
	document.getElementById("word").innerHTML = data[0].word;
	document.getElementById("inscription").innerHTML = data[0].phonetic;
	document.getElementById("def1").innerHTML = data[0].meanings[0].definitions[0].definition;
	document.getElementById("partOfSpeech1").innerHTML = data[0].meanings[0].partOfSpeech;
	document.getElementById("def2").innerHTML = data[0].meanings[1].definitions[1].definition;
	document.getElementById("partOfSpeech2").innerHTML = data[0].meanings[1].partOfSpeech;
};


searchBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	word = searchBar.value;
	let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
	fetch(url)
	.then(response=>{
		return response.json()
	})
	.then(data => renderData(data))
	.catch(error=>alert(error));
});








































// const params={
//     "client":"firefox",
//     "query":"ind",
//     "hl":"en"
// };

// async function getSuggestions(){

//     let response = await fetch("https://cloudsearch.googleapis.com/v1/query/suggest",params);
//     let data = await response.json();
//     console.log(data)

// }

// const url = 'https://omrivolk-autocomplete-v1.p.rapidapi.com/complete?s=un';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f76b024124mshfbed8453639bb1ap16307ajsnda85ec6158e6',
// 		'X-RapidAPI-Host': 'omrivolk-autocomplete-v1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
