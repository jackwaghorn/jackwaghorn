// List: Change colour on hover
let list = document.querySelectorAll('li');

list.forEach(function (i) {
    i.addEventListener('mouseover', function() { 
        let color = i.id;
        document.querySelector('.diagram').innerHTML = `<img class="diagram" src="img/${color}.png">`
    }
    );
});
// List: Change back when mouse not hover
list.forEach(function (i) {
    i.addEventListener('mouseout', function() { 

        document.querySelector('.diagram').innerHTML = `<img class="diagram" src="img/diagram.png">`
    }
    );
});

// Moodboard overlay display
let moodboard = document.getElementById('moodboard');

document.querySelector('ul').addEventListener('click', function() { 
        moodboard.style.display = "block";
    }
    );


moodboard.addEventListener('click', function() { 
        moodboard.style.display = "none";
    }
    );


