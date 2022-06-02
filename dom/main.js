// document.body.style.backgroundColor = "blue"

// setTimeout(()=>{
//     document.body.style.backgroundColor = "red"

// },3000)

const table1 = document.getElementById("table1");

const cell1 = table1.rows[0].cells[0];

const three = table1.rows[1].cells[0];
three.style.color = "blue";

function changeThreeColor(el, color) {
  el.style.color = color;
}




changeThreeColor(three,"pink")