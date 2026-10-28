const buttons = document.querySelectorAll("button");
const container = document.querySelector(".cont");


const screen = document.createElement("input");

screen.type = "text";
screen.value = "";
screen.readOnly = true;

// screen.style.width = "100%";
// screen.style.height = "70px";
// screen.style.marginBottom = "20px";
// screen.style.fontSize = "30px";
// screen.style.textAlign = "right";
// screen.style.padding = "10px";
// screen.style.border = "none";
// screen.style.outline = "none";
// screen.style.background = "black";
// screen.style.color = "white";

container.prepend(screen);

let result = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText.trim();

    if (value === "AC") {
      result = "";
      screen.value = "";
    }


    else if (value === "DEL") {
      result = result.slice(0, -1);
      screen.value = result;
    }

  
    else if (value === "=") {
      try {
        result = eval(result).toString();
        screen.value = result;
      } catch {
        screen.value = "Error";
      }
    }

   
    else {
      result += value;
      screen.value = result;
    }
  });
});