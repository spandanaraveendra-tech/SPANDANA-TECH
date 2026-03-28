let input = document.getElementById("input");

document.getElementById("one").addEventListener("click", () => {
    input.value += "1";
});

document.getElementById("two").addEventListener("click", () => {
    input.value += "2";
});

document.getElementById("three").addEventListener("click", () => {
    input.value += "3";
});

document.getElementById("four").addEventListener("click", () => {
    input.value += "4";
});

document.getElementById("five").addEventListener("click", () => {
    input.value += "5";
});

document.getElementById("six").addEventListener("click", () => {
    input.value += "6";
});

document.getElementById("seven").addEventListener("click", () => {
    input.value += "7";
});

document.getElementById("eight").addEventListener("click", () => {
    input.value += "8";
});

document.getElementById("nine").addEventListener("click", () => {
    input.value += "9";
});

document.getElementById("z").addEventListener("click", () => {
    input.value += "0";
});

document.getElementById("zs").addEventListener("click", () => {
    input.value += "00";
});

document.getElementById("add").addEventListener("click", () => {
    input.value += "+";
});

document.getElementById("sub").addEventListener("click", () => {
    input.value += "-";
});

document.getElementById("mul").addEventListener("click", () => {
    input.value += "*";
});

document.getElementById("div").addEventListener("click", () => {
    input.value += "/";
});

document.getElementById("dot").addEventListener("click", () => {
    input.value += ".";
});

document.getElementById("clear").addEventListener("click", () => {
    input.value = "";
});

document.getElementById("del").addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
});

document.getElementById("eq").addEventListener("click", () => {
    try {
        input.value = eval(input.value);
    } catch {
        input.value = "Error";
    }
});