
var iceCream = ['Moose Tracks', 'Half Baked', 'Cookie Dough',
'Cookies and Cream'];

var presidents = [{
	firstName: 'Barack',
	lastName: 'Obama',
	termLength: '8 years',
	party: 'Democratic',
	yearsOfPresidency: '2009-2016'
}, {
	firstName: 'George W.',
	lastName: 'Bush',
	termLength: '8 years',
	party: 'Republican',
	yearsOfPresidency: '2001-2009'
}, {
	firstName: 'Bill',
	lastName: 'Clinton',
	termLength: '8 years',
	party: 'Democratic',
	yearsOfPresidency: '1993-2001'
}, {
	firstName: 'George H. W.',
	lastName: 'Bush',
	termLength: '4 years',
	party: 'Republican',
	yearsOfPresidency: '1989-1993'
}, {
	firstName: 'Ronald',
	lastName: 'Reagan',
	termLength: '8 years',
	party: 'Republican',
	yearsOfPresidency: '1981-1989'
}];

console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

function howdy() {
	return 'Olivia Mack-Solden says hello!';
}

console.log(howdy());

var numba = function (string) {
	if (string.length < 7) {
		console.log('What a short little word!');
	} else if (string.length > 7) {
		console.log('I’m sorry, but that’s too many to count.');
	} else {
		console.log('7, what a perfect choice!');
	}
};

numba('7');
numba('seventy');
numba('university');

function inception(display,favMovie) {
	display(favMovie);
}

var display = display(favMovie);

favMovie = 'Zootopia';

var movie = inception('is an amazing movie.', 'Zootopia');
console.log(movie);


// var title = inception('is a fantastic movie.', 'Zootopia');
//
// console.log(title);
//
//
// function display(favMovie) {
// 	return favMovie + ' is a fantastic movie.';
// }
//
// var message = display('Zootopia');
// console.log(message);
