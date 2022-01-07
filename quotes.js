var quotes = [
	{
		"quote": "Be the change you wish to see.",
		"author": "Mahatma Gandhi",
	},
	{
		"quote": "Social progress can be measured by the social position of the female sex.",
		"author": "Karl Marx",

	},
	{
		"quote": "I like the religion that teaches liberty, equality and fraternity.",
		"author": "B. R. Ambedkar",
	},
	{
		"quote": "If you tremble with indignation at every injustice then you are a comrade of mine.",
		"author": "Ernesto Che Guevara",
	},
	{
		"quote": "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.",
		"author": "Abdul Kalam",
	}
];
document.getElementById("quotation").innerHTML = quotes[0].quote;
document.getElementById("author").innerHTML =quotes[0].author;

function quotation_change() {
    var i = Math.floor(Math.random()*5);

document.getElementById("quotation").innerHTML = quotes[i].quote;
document.getElementById("author").innerHTML = quotes[i].author;
}
