function newFunction() {  
    document.getElementById('input').value = "";
}

window.onload = function() {

var buttons = document.querySelectorAll(".numbers")

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('input').value += button.value;
    });
});
    
};

function equals() {
    try {
        document.getElementById('input').value = eval(input.value);
    } catch {
        document.getElementById('input').value = "u do math bad"
    }

}

// function changeText() {
//     document.getElementById('input').value += seven.value;
// }

// function changeText2() {
//     document.getElementById('input').value += eight.value;
// }



// document.getElementByClassName("nine").addEventListener("click", function(){
//     document.getElementById("input").value = this.value;
//   });