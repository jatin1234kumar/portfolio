// var canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth - 22;
// canvas.height = window.innerHeight;

// var c = canvas.getContext('2d');

// var mousePosition = {
//     x: undefined,
//     y: undefined
// }

// var maxRadius = 35;
// var minRadius = 2;
// var colorArray = [
//     '#003865', '#EF5B0C', '#3AB4F2', '#3CCF4E', '#ABC9FF'
// ];

// window.addEventListener('mousemove', function (event) {
//     mousePosition.x = event.x;
//     mousePosition.y = event.y;
// });

// window.addEventListener('resize', function () {
//     canvas.width = window.innerWidth - 22;

//     init();
// });

// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;
//     this.minRadius = radius;
//     this.color = colorArray[Math.floor(Math.random() * colorArray.length) + 1];

//     this.draw = function () {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.fillStyle = this.color;
//         c.fill();
//     }

//     this.update = function () {
//         if (this.x + radius > innerWidth || this.x - radius < 0) {
//             this.dx = -this.dx;
//         }
//         if (this.y + radius > innerHeight || this.y - radius < 0) {
//             this.dy = -this.dy;
//         }
//         this.x += this.dx;
//         this.y += this.dy;

//         //activity

//         if (mousePosition.x - this.x < 50 && mousePosition.x - this.x > -50 && mousePosition.y - this.y < 50 && mousePosition.y - this.y > -50) {

//             if (this.radius < maxRadius) {
//                 this.radius += 1;
//             }

//         } else if (this.radius > this.minRadius) {
//             this.radius -= 1;
//         }

//         this.draw();
//     }
// }

// var circle = new Circle();

// var circleArray = [];

// init();

// function init() {

//     circleArray = [];

//     for (var i = 0; i < 800; i++) {
//         var x = Math.random() * (innerWidth - radius * 2) + radius;
//         var y = Math.random() * (innerHeight - radius * 2) + radius;
//         var dy = Math.random() * 1;
//         var dx = Math.random() * 1;
//         var radius = Math.random() * 3 + 1;
//         circleArray.push(new Circle(x, y, dx, dy, radius))
//     }
// };

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     circle.draw();

//     for (var i = 0; i < circleArray.length; i++) {
//         circleArray[i].update();
//     }

// }

// animate();


// new function starts



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function closeNavbar(){
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
}
