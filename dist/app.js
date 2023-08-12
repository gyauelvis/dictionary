let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('#search-bar');
let word;

let loading = ()=>{
	document.getElementById("tainer").innerHTML = `
		<span class="material-symbols-outlined animate-spin text-gray-200 text-3xl">
			progress_activity
		</span>
	`
}

let page404 = ()=>{
	document.getElementById("tainer").innerHTML  = `
		<div class="bg-slate-600 w-11/12 md:w-8/12 lg:w-5/12  rounded-lg h-[50vh] flex justify-center items-center flex-col font-poppins">
			<span class="text-9xl text-gray-200">404</span>
			<span class="text-gray-200 pt-3 text-2xl">Word not Found</span>
		</div>
	`
}

let renderData = (data)=>{
	document.getElementById("tainer").innerHTML  =
	`<div class="definition-container bg-slate-600 w-11/12 md:w-8/12 lg:w-5/12 h-[25rem] rounded-lg">
		
		<div class="phonetics_word">
			<div class="flex flex-col justify-center px-5 text-gray-300">

				<div class="flex flex-row items-center pt-5">
					<span id="word" class="font-poppins text-gray-200 text-2xl">${data[0].word}</span>
				</div>
				
				<div class="flex flex-col justify-center py-2 text-base font-poppins">
					<div class="flex flex-row items-center py-1">
						<span id="inscription" class="italic">
							${data[0].phonetic}
						</span>
						<a href="#" id="pronounce" class="material-symbols-outlined pl-1 text-3xl">
							volume_up
						</a>
					</div>
				
				</div>
				
			</div>
		</div>
		<div>
			<span class="def py-2 pl-5 font-poppins text-gray-200 text-xl">
				definition
			</span>

			<div id="" class="px-5 font-poppins">
				<div class="pt-2 pb-1  text-gray-300">
					<span class="text-lg">1.</span>
					<span id="partOfSpeech1" class="inscription italic px-1 font-bold">
						${data[0].meanings[0].partOfSpeech}
					</span>
					<span id="def1">${data[0].meanings[0].definitions[0].definition}</span>
				</div>
				<div class="pt-2 pb-1  text-gray-300">
					<span class="text-lg">2.</span>
					<span id="partOfSpeech2" class="inscription italic px-1 font-bold">
						${data[0].meanings[0].partOfSpeech}
					</span>
					<span id="def2">${data[0].meanings[0].definitions[1].definition}</span>
				</div>
			</div>

		</div>
	</div>`
};

let fetData = (e) =>{
	loading();
	e.preventDefault();
	word = searchBar.value;
	let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
	fetch(url)
	.then(response=>{
		return response.json()
	})
	.then(data => renderData(data))
	.catch(error=>{
		console.log(error);
		page404();
	});
}

searchBtn.addEventListener('click', fetData);
searchBar.addEventListener('keydown',(e)=>{
	if(e.key=='Enter'){
		fetData(e);
	}
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
