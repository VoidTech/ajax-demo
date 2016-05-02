//JavaScript med Ajax
// Vi ska använda AJAX för att hämta innehållet på en hemsida

// teknik för att hämnta data från url:er
// AJAX - Asynchronous JavaScript and Xml

//Påbörja en hämtning
var request = new XMLHttpRequest();

request.onreadystatechange = function()
{
	console.log("Någonting hände!");
}

request.open('GET',"http://www.google.com");
request.send();