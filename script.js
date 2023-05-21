const container = document.getElementById("container");
let gridNumber = 10;

let containerWidth = gridNumber * 10;
console.log(containerWidth);

container.style.width = containerWidth + "px";

for (i = 0; i < gridNumber * gridNumber; i++) {
  let pixel = document.createElement("div");
  pixel.style.cssText = "width: 8px; height: 8px; border: 1px solid black;";
  container.append(pixel);
  //    console.log(i);
}
