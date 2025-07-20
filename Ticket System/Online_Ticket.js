let names = [];
let movieNames = [];
let personz = [];

function displayInfo(event) {
event.preventDefault(); 

    let name = document.getElementById('name').value;
    let movieName = document.getElementById('movieName').value;
    let persons = document.getElementById('persons').value;
    names.push(name);
    movieNames.push(movieName);
    personz.push(persons);

    // array show
    document.getElementById('nameOutput').innerHTML = "<strong>Name:</strong>" + names.join(', ');
    document.getElementById('movieNameOutput').innerHTML = "<strong>Movie Name:</strong>" + movieNames.join(', ');
    document.getElementById('personsOutput').innerHTML = "<strong>Persons:</strong>" + personz.join(', ');

    //form values reset
    document.getElementById('name').value = '';
    document.getElementById('movieName').value = '';
    document.getElementById('persons').value = '';
}