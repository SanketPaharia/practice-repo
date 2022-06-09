// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector('#masaiForm').addEventListener("submit",myfunc)

var matarr =JSON.parse(localStorage.getItem("matchesList"))||[];
function myfunc (){
 event.preventDefault();

 arrobj = {

            number : masaiForm.matchNum.value ,
            teama : masaiForm.teamA.value ,
            teamb :  masaiForm.teamB.value ,
            date : masaiForm.date.value ,
            venue :masaiForm.venue.value 

    }

 matarr.push(arrobj);
 localStorage.setItem("matchesList",JSON.stringify(matarr))
 window.location.href="matches.html"


}
