var pokemonRepository = (function () { //wrapped repository Array inside IIFE
	var repository = [
		{
			name: 'Bulbasaur',
			height: 2.4,
			types: ['grass', 'poison']
		},
		{
			name: 'Charmander',
			height: 2.0,
			types: ['fire']
		},
		{
			name: 'Charizard',
			height: 5.7,
			types: ['fire', 'flying']
		},
	];
	function add (pokemon) {
		repository.push (pokemon)
	}

	function getall() {
		return repository;
	}

	function addListItem(pokemon) {
		let $ul = document.querySelector('.pokemon-list');
		// $ul = document.createElement('ul');
		// $ul.classList.add('pokemon-list');
		// document.body.appendChild($ul);

		const $li = document.createElement('li');
		const $button = document.createElement('button');
		$button.setAttribute('id', `${pokemon.name}`);
		$button.innerText = `${pokemon.name}`;
		$button.classList.add(`${pokemon.name}`);


		$li.appendChild($button);
		$ul.appendChild($li);
		// document.write(`${$button.outerHTML} <br><br>`);
		//document.body.appendChild(script);
		// $li.addEventListener('click', this.showDetails(pokemon));

	}

	function showDetails(pokemon) {
		console.log(`${pokemon.name}`);
	}


	return {
		add: add,
		getall: getall,
		addListItem: addListItem,
		showDetails: showDetails
	};
})();

/*for (var i = 0; i < repository.length; i++) {
	document.write ('<br>' + repository[i].name, ':'+'&nbsp &nbsp ' + ' Height:  ', repository[i].height);
if (repository[i].height > 5) {
	document.write ( ' -  Wow, that is Big! ');
	}
 }*/

document.write ('<h3> Pokemon Names</h3>');

pokemonRepository.add ({
	name: 'peche',
	height: 1.7,
	types: ['fire', 'peche']
});


pokemonRepository.getall().forEach(function(pokemon) {
	document.write(pokemon.name + '<br>' + 'Height:' + pokemon.height + '<br>' + ' Type: ' + pokemon.types + '');

	pokemonRepository.addListItem(pokemon);
	var $button = document.querySelector(`.${pokemon.name}`);
	// $button.addEventListener('click', pokemonRepository.showDetails(pokemon));


	$button.addEventListener('click', function(event) {
		pokemonRepository.showDetails((pokemon));
	});
	// $li.addEventListener('click', this.showDetails(pokemon));


	// const button = document.createElement('button');
	//
	// button.setAttribute('id', `${pokemon.name}`);
	// button.innerText = `Click Me ${pokemon.name}`;
	// document.write(`${button.outerHTML} <br><br>`);
	// //document.body.appendChild(script);
	// console.log(button.getAttribute('id'));
	// // document.write(`<button id="${pokemon.name}" onclick="showDetails()">Click Me ${pokemon.name}</button><br><br>`);
});

var $button = document.querySelector('button');
$button.addEventListener('click', function (event) {
	console.log(event);
});

// --------------
// ;var $ul = document.createElement('ul');
// $ul.classList.add('pokemon-list');
// document.body.appendChild($ul)
