//  theme chaneging //
let button = document.getElementsByClassName("sliderButton");
let btn = document.getElementsByClassName("btn");
let backChange = document.getElementsByClassName("backChange");
let delRes = document.getElementsByClassName("delRes");
let equal = document.getElementsByClassName("equal");
let text = document.getElementsByClassName("text");
let arr = [...button];
arr.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    elem.style.opacity = "1";

    if (index == 0) {
      // Body BackGround //
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(222, 26%, 31%)";
      // sliderButton //
      // Buttons //
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.backgroundColor = "hsl(0, 0%, 90%)";
        btn[i].style.color = "black";
        btn[i].style.boxShadow = "5px 6px 5px hsl(224, 28%, 35%)";
      }
      // Div Background //
      for (let i = 0; i < backChange.length; i++) {
        backChange[i].style.backgroundColor = "hsl(224, 36%, 15%)";
      }
      // Delete & Reset  buttons //
      for (let i = 0; i < delRes.length; i++) {
        delRes[i].style.backgroundColor = "hsl(225, 21%, 49%)";
        delRes[i].style.boxShadow = "5px 6px 5px hsl(224, 28%, 35%)";
      }
      //equal buttons //
      for (let i = 0; i < equal.length; i++) {
        equal[i].style.backgroundColor = "hsl(6, 70%, 34%)";
        equal[i].style.boxShadow = "5px 6px 5px  hsl(6, 63%, 50%)";
        equal[i].style.color = "white";
      }
      //text colors //
      for (let i = 0; i < text.length; i++) {
        text[i].style.color = "white";
      }
    } else if (index == 1) {
      // Body BackGround //
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(0, 0%, 90%)";
      // Buttons //
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.backgroundColor = "hsl(0, 0%, 90%)";
        btn[i].style.boxShadow = "5px 6px 5px hsl(35, 11%, 61%)";
        btn[i].style.color = "black";
      }
      // Div Background //
      for (let i = 0; i < backChange.length; i++) {
        backChange[i].style.backgroundColor = "hsl(0, 5%, 81%)";
      }
      // Delete & Reset  buttons //
      for (let i = 0; i < delRes.length; i++) {
        delRes[i].style.backgroundColor = "hsl(185, 42%, 37%)";
        delRes[i].style.boxShadow = "5px 6px 5px hsl(185, 58%, 25%)";
      }
      //equal buttons //
      for (let i = 0; i < equal.length; i++) {
        equal[i].style.backgroundColor = "hsl(25, 99%, 27%)";
        equal[i].style.boxShadow = "5px 6px 5px hsl(25, 99%, 27%)";
        equal[i].style.color = "white";
      }
      //text colors //
      for (let i = 0; i < text.length; i++) {
        text[i].style.color = "black";
      }
      // box-shadows //on
    } else {
      // Body BackGround //
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(268, 75%, 9%)";
      // Buttons //
      for (let i = 0; i < backChange.length; i++) {
        backChange[i].style.backgroundColor = "hsl(268, 71%, 12%)";
      }
      // Div Background //
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.backgroundColor = "hsl(281, 89%, 26%)";
        btn[i].style.color = "hsl(52, 100%, 62%)";
        btn[i].style.boxShadow = "5px 6px 5px hsl(285, 91%, 52%)";
      }
      // Delete & Reset  buttons //
      for (let i = 0; i < delRes.length; i++) {
        delRes[i].style.backgroundColor = "hsl(285, 91%, 52%)";
        delRes[i].style.boxShadow = "5px 6px 5px  hsl(290, 70%, 36%)";
      }
      //equal buttons //
      for (let i = 0; i < equal.length; i++) {
        equal[i].style.backgroundColor = "hsl(176, 100%, 44%)";
        equal[i].style.color = "black";
        equal[i].style.boxShadow = "5px 6px 5px  hsl(177, 92%, 70%)";
      }
      //text colors //
      for (let i = 0; i < text.length; i++) {
        text[i].style.color = "hsl(52, 100%, 62%)";
      }
    }
    arr
      .filter(function (items) {
        return items != elem;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
function re() {
  console.log("e");
}
// funcnality //
let display = document.querySelector(".display");
let click = true;
let buttons = Array.from(document.getElementsByClassName("buttons"));
buttons.map((buttons) => {
  buttons.addEventListener("click", (e) => {
    let val = e.target.value;
    switch (val) {
      case `C`:
        display.innerText = "";
        break;
      case `D`:
        display.innerText = display.innerText.slice(0, -1);
        break;
      case `=`:
        try {
          display.innerText = eval(display.innerText);
        } catch (error) {
          display.innerText = "Error";
          if (display.innerText === "Error") {
            alert("Invalid Values");
            display.innerText = " ";
          }
        }
        if (display.innerText === "undefined") {
          alert("Nothing to calculate");
          display.innerText = "";
        } 
        break;
      default:
        display.innerText += val;
    }
  });
});
