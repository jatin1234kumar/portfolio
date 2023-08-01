const opt1 = document.getElementById('option1');
const opt2 = document.getElementById('option2');
const opt3 = document.getElementById('option3');
const timePera = document.getElementById('time');
const setBtn = document.getElementById('setBtn');
const clearBtn = document.getElementById('clearBtn');
const notify = document.getElementById('notify');


// made time pera starts

let pera2text = `Alarm has not been set yet!`;
notify.innerHTML = pera2text;

var audio = new Audio("music/1.mp3");

let watchTime;
let setTime;


setInterval(() => {
    let ampm = "";
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let second = today.getSeconds();

    if (hour <= 12) {
        ampm = "AM"
    } else {
        ampm = "PM"
    }

    if (hour > 12) {
        hour = hour - 12;
    }

    let zero1 = hour < 10 ? "0" : "";
    let zero2 = min < 10 ? "0" : "";
    let zero3 = second < 10 ? "0" : "";

    hour = zero1 + hour;
    min = zero2 + min;
    second = zero3 + second;

    let time = `${hour}:${min}:${second} ${ampm}`

    watchTime = timePera.innerHTML = `${time}`;

    if (watchTime == setTime) {
        if (typeof audio.loop == 'boolean') {
            audio.loop = true;
        } else {
            myAudio.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
        }
        audio.play();
    }

}, 1000);

// made time pera ends


// made options start

let arr1 = [`<option value="Hour" selected hidden>Hour</option>`, ];
let arr2 = [`<option value="Minutes" selected hidden>Minutes</option>`, ];
let arr3 = [`<option value="AM/PM" selected hidden>AM/PM</option>`, `<option>AM</option>`, `<option>PM</option>`];

for (let i = 1; i < 13; i++) {
    let zero = i < 10 ? "0" : "";
    let opt1 = `<option class="subOption">${zero + i}</option>`;
    arr1.push(opt1);
}

for (let i = 01; i < 61; i++) {
    let zero2 = i < 10 ? "0" : "";
    let opt2 = `<option class="subOption">${zero2 + i}</option>`;
    arr2.push(opt2);
}

opt1.innerHTML = arr1;
opt2.innerHTML = arr2;
opt3.innerHTML = arr3;

// made options ends

// set alarm 

setBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setTime = `${opt1.value}:${opt2.value}:00 ${opt3.value}`;
    notify.innerHTML = `Your Alarm has been set for<br> <b>${setTime}</b>`;
    clearBtn.classList.remove('hidden');
    setBtn.classList.add('hidden');



    let defautTime = `Hour:Minutes:00 AM/PM`;
    if (setTime === defautTime) {
        alert(`Are You a Some kind of chutyia jo bina time set kre Alarm bjana chata h 😂😂😂😂`);
        notify.innerHTML = pera2text;
        clearBtn.classList.add('hidden');
        setTime = "";
        setBtn.classList.remove('hidden');
    }
})

clearBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setTime = "";
    notify.innerHTML = pera2text;
    clearBtn.classList.add('hidden');
    setBtn.classList.remove('hidden');
    audio.pause();
    opt1.innerHTML = arr1;
    opt2.innerHTML = arr2;
    opt3.innerHTML = arr3;
})
