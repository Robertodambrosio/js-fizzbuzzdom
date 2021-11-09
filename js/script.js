//=============== test js 

// alert ("ciaoooooooo")

//============== ins variabili 

const ul = document.querySelector(".list");
let x;

for (let i = 1; i <= 50; i++) {
    if(i % 15 == 0){
          x = 'fizzbuzz';
    } else if (i % 3 == 0){
          x = 'fizz';
    } else if(i % 5 == 0){
          x = 'buzz';
    }else{
        x = i;
    }


ul.innerHTML += `<li class="box box--${i}">${x}</li>`;
console.log(x);
}

