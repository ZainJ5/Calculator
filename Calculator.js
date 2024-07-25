document.addEventListener("DOMContentLoaded", function () {
    let firstnumber = ""
    let secondnumber = ""
    let operator
    let newHTML
    let check = false
    let result = "";
  
    let one = document.getElementById("one");
    if (one) {
      one.addEventListener("click", () => {
        let num = 1
        if (check) {
          secondnumber += num
          newHTML = num
          }
        else {
          firstnumber += num
          newHTML = num
          }
          if (result != "") {
            cleardisplay()
            }
            else {
          updatedisplay()
        }
      });
    }
    let two = document.getElementById("two");
    if (two) {
      two.addEventListener("click", () => {
        let num = 2
        if (check) {
          secondnumber += num
          newHTML = num
        }
        else {
          firstnumber += num
          newHTML = num
        }
        if (result != "") {
          cleardisplay()
        }
        else {
          updatedisplay()
        }
      });
    }
    let three = document.getElementById("three");
    if (three) {
      three.addEventListener("click", () => {
        let num = 3
        if (check) {
          secondnumber += num
          newHTML = num
        }
        else {
          firstnumber += num
          newHTML = num
        }
        if (result != "") {
          cleardisplay()
        }
        else {
          updatedisplay()
        }
      });
    }
    let four = document.getElementById("four");
    if (four) {
      four.addEventListener("click", () => {
        let num = 4
        if (check) {
          secondnumber += num
          newHTML = num
        }
        else {
          firstnumber += num
          newHTML = num
        }
        if (result != "") {
          cleardisplay()
        }
        else {
          updatedisplay()
        }
      });
    }
    let five = document.getElementById("five");
    if (five) {
      five.addEventListener("click", () => {
        let num = 5
        if (check) {
          secondnumber += num
          newHTML = num
        }
        else {
          firstnumber += num
          newHTML = num
        }
        if (result != "") {
          cleardisplay()
        }
        else {
          updatedisplay()
        }
      });
    }
    let six = document.getElementById("six");
    if (six) {
      six.addEventListener("click", () => {
        let num = 6
        if (check) {
          secondnumber += num
          newHTML = num
        }
        else {
          firstnumber += num
          newHTML = num
        }
        if (result != "") {
          cleardisplay()
        }
        else {
          updatedisplay()
        }
      });
    }
    let seven = document.getElementById("seven");
    if (seven) {
      seven.addEventListener("click", () => {
        let num = 7
        if (check) {
          secondnumber += num
          newHTML = num
        }
        else {
          firstnumber += num
          newHTML = num
        }
        if (result != "") {
          cleardisplay()
        }
        else {
          updatedisplay()
        }
      });
    }
    let eight = document.getElementById("eight");
    if (eight) {
      eight.addEventListener("click", () => {
        let num = 8
        if (check) {
          secondnumber += num
          newHTML = num
        }
        else {
          firstnumber += num
          newHTML = num
        }
        if (result != "") {
          cleardisplay()
        }
        else {
          updatedisplay()
        }
      });
    }
    let nine = document.getElementById("nine");
    if (nine) {
      nine.addEventListener("click", () => {
        let num = 9
        if (check) {
          secondnumber += num
          newHTML = num
        }
        else {
          firstnumber += num
          newHTML = num
        }
        if (result != "") {
          cleardisplay()
        }
        else {
          updatedisplay()
        }
      });
    }
  
    let Euler = document.getElementById("E");
    if (Euler) {
      Euler.addEventListener("click", () => {
        console.log(result)
        let num = Math.E
        console.log("This is value of E " + {num} )
          firstnumber *= num
          newHTML = num
              result = firstnumber
          updatedisplay()
        // }
      });
    }
  
    let pi = document.getElementById("pi");
    if (pi) {
      pi.addEventListener("click", () => {
        console.log(result)
        let num = Math.PI
        console.log("This is value of PI " + {num} )
          firstnumber *= num
          newHTML = num
              result = firstnumber
          updatedisplay()
        // }
      });
    }
  
    let sinButton = document.getElementById("sin");
    if (sinButton) {
      sinButton.addEventListener("click", () => {
        let num = Math.sin(parseFloat(firstnumber));
        console.log("This is value of sin: " + num);
        newHTML = num;
        result = num;
        updatedisplay();
      });
    }
  
    // Degrees to Radians Button Handling
    let degButton = document.getElementById("deg");
    if (degButton) {
      degButton.addEventListener("click", () => {
        let radians = (parseFloat(firstnumber) * Math.PI) / 180;
        console.log("This is value of degrees in radians: " + radians);
        firstnumber = radians.toString();
        newHTML = radians;
        result = firstnumber;
        updatedisplay();
      });
    }
  
    let add = document.getElementById("add")
    if (add) {
      add.addEventListener("click", () => {
        operator = "+"
        newHTML = operator;
        check = true
        result = ""
        updatedisplay()
      });
    }
    let subtract = document.getElementById("subtract");
    subtract.addEventListener("click", () => {
      operator = "-";
      newHTML = operator;
      check = true
      result = ""
      updatedisplay()
    })
  
    let multiply = document.getElementById("multiply");
    multiply.addEventListener("click", () => {
      operator = "*"
      newHTML = operator;
      check = true
      result = ""
      updatedisplay()
    })
  
    let divide = document.getElementById("divide");
    divide.addEventListener("click", () => {
      operator = "/"
      newHTML = operator;
      check = true
      result = ""
      updatedisplay()
    })
  
    let zero = document.getElementById("zero");
    if (zero) {
      zero.addEventListener("click", () => {
        let num = 0
        if (check) {
          secondnumber += num
          newHTML = num
        }
        else {
          firstnumber += num
          newHTML = num
        }
        if (result != "") {
          cleardisplay()
        }
        else {
          updatedisplay()
        }
      });
    }
  
    let cross = document.getElementById("cross");
    cross.addEventListener("click", () => {
    if (cross) {
      string = display.innerHTML
      length = string.length
      newstring = string.slice(0,length-1)
      if (secondnumber.length > 0) {
        secondnumber = secondnumber.slice(0, -1);
      } else if (operator) {
        operator = "";
      } else if (firstnumber.length > 0) {
        firstnumber = firstnumber.slice(0,-1);
        }
      
      console.log(firstnumber)
      console.log(secondnumber)
      console.log(operator)
      display.innerHTML = newstring
    }
    })
  
  
    let equal = document.getElementById("equal")
    equal.addEventListener("click", () => {
      if (secondnumber == "") {
        result = firstnumber;
        updatedisplay();
        return
      }
      if (operator != "") {
        switch (operator) {
          case "+":
            result = parseFloat(firstnumber) + parseFloat(secondnumber)
            break;
          case "*":
            result = parseFloat(firstnumber) * parseFloat(secondnumber)
            break;
          case "/":
            result = parseFloat(firstnumber) / parseFloat(secondnumber)
            break;
          case "-":
            result = parseFloat(firstnumber) - parseFloat(secondnumber)
            break;
        }
        console.log(firstnumber)
        console.log(secondnumber)
        console.log(result)
        updatedisplay();
        }
    })
  
    let AC = document.getElementById("AC")
    AC.addEventListener("click", () => {
      cleardisplay();
    })
  
  
    let point = document.getElementById("point");
    point.addEventListener("click", () => {
      if (check) {
        secondnumber += "."
        newHTML = "."
      }
      else {
        firstnumber += "."
        newHTML = "."
      }
      if (result != "") {
        cleardisplay()
      }
      else {
        updatedisplay()
      }
    })
  
    function updatedisplay() {
      let display = document.getElementById("display")
      if (display) {
        if (result != "") {
          firstnumber = result.toString()
          secondnumber = ""
          operator = ""
          display.innerHTML = result
        }
  
        else {
          display.innerHTML += newHTML
          newHTML = ""
        }
      }
      else {
        alert("NO display function")
      }
    }
  
    function cleardisplay() {
      let display = document.getElementById("display");
      if (display) {
        display.innerHTML = "";
        firstnumber = "";
        secondnumber = "";
        operator = "";
        result = "";
        newHTML = "";
        check = false;
      }
    }
  });