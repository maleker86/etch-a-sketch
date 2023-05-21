const container = document.getElementById("container");
let gridNumber = 85;

// container.style.width = ((gridNumber * 10) / (gridNumber / (gridNumber / 2))) + "px";
container.style.width = (gridNumber * 10) + "px";

for (i = 0; i < gridNumber * gridNumber; i++) {
  let pixel = document.createElement("div");
  pixel.style.cssText = "height: 8px; width: 8px; border: 1px solid black;";
  container.append(pixel);
  console.log(i);
}
