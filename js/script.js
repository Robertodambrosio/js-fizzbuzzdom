//=============== test js 

// alert ("ciaoooooooo")

//============== ins variabili soluzione 1

const ul = document.querySelector(".list");
let x;

for (let i = 1; i <= 50; i++) {
    if(i % 15 == 0){
        x = 'fizzbuzz';        
    }else if(i % 3 == 0){
        x = 'fizz';
    }else if(i % 5 == 0){
        x = 'buzz';
    }else{
        x = i;
    }

// =============output 
ul.innerHTML += `<li class="box ${x}">${x}</li>`;
console.log(x);
}

//============== ins variabili soluzione 2 

// const ul = document.querySelector(".list");
// let li;
// let x;

// for (let i = 1; i <= 50; i++) {
//     li = document.createElement("li");
//     li.className = 'box';
//     ul.append(li);
//     if(i % 15 == 0){
//         x = 'fizzbuzz'; 
//         li.classList.add(x)      
//     }else if(i % 3 == 0){
//         x = 'fizz';
//         li.classList.add(x)
//     }else if(i % 5 == 0){
//         x = 'buzz';
//         li.classList.add(x)
//     }else{
//         x = i;
//     }

//     li.innerHTML = x;
    
// // =============output 
// // ul.innerHTML += `<li class="box ${x}">${x}</li>`;


// console.log(x);
// }

