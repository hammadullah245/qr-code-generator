let input = document.getElementById('inp');
let imp = document.getElementById('img');


function myfunction() {
    let value = input.value;

    if (value) {
        img.style.border = "1px solid silver";
        img.style.padding = "5px";
        img.style.height = "30%";
        img.style.width = "30%";
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}';
    }
}