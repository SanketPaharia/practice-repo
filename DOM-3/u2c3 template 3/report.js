// write code here, dont change anything in HTML and css files
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", myFunction);

function myFunction() {
  event.preventDefault();
  var avatar = document.querySelector("#image").value;

  var name = document.querySelector("#name").value;

  var batch = document.querySelector("#batch").value;

  var dsa = document.querySelector("#dsa").value;

  var skillathon = document.querySelector("#cs").value;

  var coding = document.querySelector("#coding").value;

  console.log(avatar, name, batch, dsa, skillathon, coding);

  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  var student_avatar = document.createElement("img");
  student_avatar.setAttribute("src", avatar);
  td1.append(student_avatar);

  var td2 = document.createElement("td");
  td2.innerText = name;

  var td3 = document.createElement("td");
  td3.innerText = batch;

  var td4 = document.createElement("td");
  td4.innerText = dsa;

  var td5 = document.createElement("td");
  td5.innerText = skillathon;

  var td6 = document.createElement("td");
  td6.innerText = coding;

  var obtainedMarks = Number(dsa) + Number(skillathon) + Number(coding);
  var percent = (obtainedMarks / 30) * 100;
  console.log(percent);

  var td7 = document.createElement("td");
  td7.innerText = percent;

  var td8 = document.createElement("td");
  if (percent < 50) {
    td8.innerText = "Async";
    td8.style.backgroundColor = "red";
  } else {
    td8.innerText = "Regular";
    td8.style.backgroundColor = "green";
  }

  var td9 = document.createElement("td");
  td9.innerText = "Delete";
  td9.style.backgroundColor = "red";
  td9.style.cursor = "pointer";
  td9.addEventListener("click", deleteRow);

  tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);

  document.querySelector("tbody").append(tr);
}

function deleteRow() {
  event.target.parentNode.remove();

  event.target.parentNode.innerHTML = "";
}


<script>
  document.querySelector("#form").addEventListener("submit", myFunction);

  function myFunction() {
    event.preventDefault();

    var div = document.createElement('div');
    var name = document.querySelector("#name").value;
    var h1 = document.createElement("h1");
    h1.innerText = name;

    var batch = document.querySelector("#batch").value;
    var p1 = document.createElement("p");
    p1.innerText = batch;

    var type = document.querySelector("#type").value;
    var p2 = document.createElement("p");
    p2.innerText = type;

    var code = document.querySelector("#stuent_code").value;
    var p3 = document.createElement("p");
    p3.innerText = code;

    var unit = document.querySelector("#unit").value;
    var p4 = document.createElement("p");
    p4.innerText = unit;

    var sprint = document.querySelector("#sprint").value;
    var p5 = document.createElement("p");
    p5.innerText = sprint;

    var score = document.querySelector("#score").value;
    var p6 = document.createElement("p");
    p6.innerText = score;
    var h3 = document.createElement('h3');
    if (Number(score) <= 3) {
      h3.innerText = "Learning";
      h3.style.color = "red";
    } else if (Number(score) >= 4 && Number(score) <= 7) {
      h3.innerText = "Achieving";
      h3.style.color = "orange";
    } else {
      h3.innerText = "Mastery";
      h3.style.color = "green";
    }

    var button = document.createElement("button");
    button.innerText = "Delete";
    button.style.cursor = "pointer";

    button.addEventListener("click", deletediv);

    div.append(h1, p1, p2, p3, p4, p5, p6,h3,button);
    console.log();
    document.querySelector("#reports").append(div);
  }

  function deletediv() {
    event.target.parentNode.remove();
    event.target.parentNode.innerHTML = "";
  }
</script>