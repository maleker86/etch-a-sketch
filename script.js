const container = document.getElementById("container");
let gridNumber = 16;

for (i = 0; i < gridNumber * gridNumber; i++) {
    container.style.cssText = `background-color: pink; max-width: calc(${gridNumber} * 10)px`;
    let pixel = document.createElement('div');
    pixel.style.cssText = 'width: 8px; height: 8px; border: 1px solid black;';
    container.append(pixel);
//    console.log(i);
}