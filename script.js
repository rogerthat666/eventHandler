const mybutton = document.getElementById('mybutton');
mybutton.addEventListener("click", function(){

    alert('button clicked');

});

// const button2 = document.body
// button2.addEventListener("click", function(){

//     button2.classList.add('red-background')

// });

const button2 = document.body
button2.addEventListener("click", function(){

    button2.classList.toggle('red-background')

});
