function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.textContent;

        if (value == "AC")
            display.textContent = "";
        else if (value == "ERS")
            display.textContent = display.textContent.slice(0, -1);
        else if (value == "-M" || value == "+M")
            display.textContent += value[0];
        else if (value == "=") {
            let i = display.textContent.indexOf(" ");
            let x = Number(display.textContent.slice(0, i));
            let y = Number(display.textContent.slice(i + 3,));

            switch (display.textContent.slice(i + 1, i + 2)) {
                case "+": value = addition(x, y); break;
                case "-": value = subtraction(x, y); break;
                case "X": value = multiplication(x, y); break;
                case "/": value = division(x, y); break;
                default: value = "error";
            }
            display.textContent = (value.toString().length > 11)? value.toPrecision(5):value;
        }
        else {

            if (display.textContent.length > 11){
                display.textContent = "Out of range"
                setTimeout(() => display.textContent = "", 1500)
            }
            else
                display.textContent += value;
        }
    });
});