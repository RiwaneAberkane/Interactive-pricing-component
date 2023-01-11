let slider = document.querySelector('#price-slider');
let output = document.querySelector('.output');
var i = 1;

values = ["0.00", "9.99", "16.00", "32.00", "57.00"]

slider.oninput = function() {
    var price = Number(this.value);
    document.querySelector(".output").innerHTML = values[price - 1];
    output.innerHTML = values[price];
    console.log(values[price]);
    var value = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #0DD5C2 0%, #0DD5C2 ' + value + '%, #EAEEFB ' + value + '%, #EAEEFB 100%)'
}

