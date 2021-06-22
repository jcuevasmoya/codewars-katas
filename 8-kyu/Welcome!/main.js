// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
// The Task

//     Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
//     Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

// The Database

// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',

function greet(language) {
	return language == 'czech' ? 'Vitejte'
  :language == 'danish' ? 'Velkomst'
  :language == 'dutch' ? 'Welkom'
  :language == 'estonian' ? 'Tere tulemast'
  :language == 'finnish' ? 'Tervetuloa'
  :language == 'flemish' ? 'Welgekomen'
  :language == 'french' ? 'Bienvenue'
  :language == 'german' ? 'Willkommen'
  :language == 'irish' ? 'Failte'
  :language == 'italian' ? 'Benvenuto'
  :language == 'latvian' ? 'Gaidits'
  :language == 'lithuanian' ? 'Laukiamas'
  :language == 'polish' ? 'Witamy'
  :language == 'spanish' ? 'Bienvenido'
  :language == 'swedish' ? 'Valkommen'
  :language == 'welsh' ? 'Croeso'
  : 'Welcome'

}

console.log(greet('english'));
console.log(greet('dutch'));
console.log(greet('IP_ADDRESS_INVALID'));