let inp = document.getElementById("inp");
let list1dot = document.getElementById("list1dot");
let list2dot = document.getElementById("list2dot");
let list3dot = document.getElementById("list3dot");
let list4dot = document.getElementById("list4dot");
let list5dot = document.getElementById("list5dot");
let eye = document.querySelector('img');

console.log(eye);


// eye functioning 

eye.addEventListener('click', function(){
   if(inp.type === "text"){
    inp.type = "password";
    eye.src = "icon/view.png";
   }else {
    inp.type = "text";
    eye.src = "icon/hide.png";
   }
});


// eye.addEventListener('click', function(){
//    if(inp.type === "text"){
//     inp.type = "password";
//     eyeLine.style.display = "none";
//    }else {
//     inp.type = "text";
//     eyeLine.style.display = "block";
//    }
// });


setInterval(() => {

// has number 

    function hasNumber(string){
        string = inp.value;
        return /\d/.test(string);
    }
    
    if(hasNumber() === true){
        list2dot.classList.replace('fa-circle', 'fa-circle-check');
    } else if(hasNumber() === false) {
        list2dot.classList.replace('fa-circle-check', 'fa-circle');
    }

// has special character 

    function hasCharacter(string){
        string = inp.value;
        const specialCharacter = /[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialCharacter.test(string);
    }


    if(hasCharacter() === true) {
        list4dot.classList.replace('fa-circle', 'fa-circle-check');
    }else if (hasCharacter() === false){
        list4dot.classList.replace('fa-circle-check', 'fa-circle');
    }

// has upper case characters 

function hasUpperCase(string){
    string = inp.value;
    const upperCase = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
    return upperCase.test(string)
}

if (hasUpperCase() === true){
    list5dot.classList.replace('fa-circle', 'fa-circle-check');
}else if (hasUpperCase() === false){
    list5dot.classList.replace('fa-circle-check', 'fa-circle');
}

// has lower case characters 

function hasLowerCase(string){
    string = inp.value;
    const lowerCase = /[abcdefghijklmnopqrstuvwxyz]/;
    return lowerCase.test(string)
}

if (hasLowerCase() === true){
    list3dot.classList.replace('fa-circle', 'fa-circle-check');
}else if (hasLowerCase() === false){
    list3dot.classList.replace('fa-circle-check', 'fa-circle');
}

// has at least 8 characters

if(inp.value.length > 8) {
    list1dot.classList.replace('fa-circle', 'fa-circle-check');
}else if(inp.value.length < 8)
    list1dot.classList.replace('fa-circle-check', 'fa-circle');
}

, 100 );

