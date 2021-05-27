// Vue


const Demo = {
    data() {
      return {
        show: false
      }
    },
    methods: {

    }

  }

  Vue.createApp(Demo).mount('#demo');

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

let blur = document.getElementById('blur');

document.querySelector('ul').addEventListener('click', function(){
    blur.classList.add('blur');
});

function unBlur() {

    blur.classList.remove('blur');


}




