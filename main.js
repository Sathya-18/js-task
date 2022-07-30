
let action = document.querySelectorAll(".action");


// action.forEach((btn) => {
//     btn.addEventListener("click", calculate)
// })


action.forEach(button);

function button(btn) {
    btn.addEventListener("click", calculate)
}

function calculate() {
    let x = this.parentNode.parentNode;
    let y = x.querySelector("td .num1")
    let z = y.value;
    let v = this.parentNode.parentNode;
    let u = v.querySelector("td .num2")
    let w = u.value;

    let m = z * w;

    let out = x.querySelector("td p")
    out.innerText = m;
}

