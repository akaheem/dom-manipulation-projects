<script>
    var names = [];
    var movieNames = [];
    var persons = [];

    function displayInfo(event) {
        event.preventDefault(); // Prevent form submission and refresh

        var name = document.getElementById('name').value;
        var movieName = document.getElementById('movieName').value;
        var personCount = document.getElementById('persons').value;

        // Add new values to the arrays
        names.push(name);
        movieNames.push(movieName);
        persons.push(personCount);

        // Display the results
        document.getElementById('nameOutput').innerHTML = "<strong>Name: </strong>" + names.join(', ');
        document.getElementById('movieNameOutput').innerHTML = "<strong>Movie Name: </strong>" + movieNames.join(', ');
        document.getElementById('personsOutput').innerHTML = "<strong>Persons: </strong>" + persons.join(', ');

        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('movieName').value = '';
        document.getElementById('persons').value = '';
    }
    </script>