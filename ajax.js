//JavaScript med Ajax
// Vi ska använda AJAX för att hämta innehållet på en hemsida

// teknik för att hämnta data från url:er
// AJAX - Asynchronous JavaScript and Xml

//Påbörja en hämtning
var request = new XMLHttpRequest();

request.onreadystatechange = function()
{
	
	console.log("Någonting hände!");
    if(request.readyState == 4 && request.status == 200)
    {
    console.log("Svaret (response) är" + request.responseText);
    var dataText = request.responseText;
    document.write(dataText);
    }
}

request.open('GET','http://mardby.se/AJK15G/lorem_text.php');
request.send();