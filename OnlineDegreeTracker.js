var courses = [];
var advancedWriting = ["ENGL 181"];
var CI1 = ["ANTH 11A", "ARTH 11A", "ARTH 11H", "CLAS 11A", "ENGL 11A", "ENVS 11A", "HIST 11A", "HIST 11H", "ITAL 11A", "MUSC 11A", "PHIL 11A", "SOCI 11A", "THTR 11A", "WGST 11A"];
var CI2 = ["ANTH 12A", "ARTH 12A","CLAS 12A","ENGL 12A","ENVS 12A","HIST 12A","HIST 12H","ITAL 12A","MUSC 12A","PHIL 12A","SOCI 12A","THTR 12A","WGST 12A"];
var CI3 = ["ANTH 50", "ANTH 152", "ANTH 153", "ARTH 27", "ARTH 160", "ECON 134", "ENGL 153", "ENGL 156", "ENVS 50", "FREN 114", "HIST 92", "HIST 116S", "HIST 137", "HIST 142", "HIST 147B", "HIST 150", "MGMT 80", "MUSC 130", "POLI 2", "POLI 50", "POLI 137", "RSOC 136", "SPAN 112", "WGST 104", "WGST 122", "WGST 124", "WGST 126"];
var coen = ["COEN 10", "COEN 11", "COEN 12", "COEN 19", "COEN 20", "COEN 21", "COEN 70", "COEN 122", "COEN 146", "COEN 171", "COEN 174", "COEN 175", "COEN 177", "COEN 179", "COEN 194", "COEN 195", "COEN 196"];
var ctw = ["ENGL 1A", "ENGL 1H", "ENGL 2A", "ENGL 2H"];
var diversity = ["ANTH 157", "ARTH 143", "ARTH 185", "COMM 107A", "ENGL 38", "ENGL 67", "ENGL 125H", "ETHN 5", "ETHN 30", "ETHN 40", "ETHN 132", "ETHN 144", "ETHN 153", "ETHN 157", "ETHN 165", "ETHN 178", "HIST 178", "LBST 106", "MUSC 132", "POLI 153", "POLI 154", "PSYC 182", "SOCI 33", "ESOCI 153", "WGST 34", "WGST 50", "WGST 115", "WGST 155", "WGST 156", "WGST 163"];
var elen = ["ELEN 50", "ELEN 153"];
var elsj = ["ANTH 3", "BIOL 188", "BUSN 151B", "BUSN 195EL", "COMM 107A", "COMM 141B", "ELSJ 22", "ELSJ 23", "ELSJ 135", "ENGR 111", "ENVS 131", "LBST 106", "MGMT 8", "PSYC 115EL", "PSYC 185EL", "SCTR 128", "SOCI 30", "SPAN 21EL", "TESP 46"];
var engr = ["ENGR 1"];
var ethics = ["ENGR 19", "MGMT 6", "PHIL 5", "PHIL 6", "PHIL 7A", "PHIL 9", "PHIL 10", "WGST 189"];
var stem = ["CHEM 11", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "PHYS 31", "PHYS 32", "PHYS 33", "AMTH 108"];
var rtc1 = ["RSOC 9", "RSOC 10", "RSOC 10H", "RSOC 12", "SCTR 15", "SCTR 19", "TESP 2", "TESP 4"];
var rtc2 = ["CLAS 63", "COMM 175A", "RSOC 27", "RSOC 51", "RSOC 91", "SCTR 33", "SCTR 39", "TESP 46", "TESP 50", "TESP 60", "WGST 47"];
var rtc3 = ["ELEN 160", "RSOC 111", "RSOC 115", "RSOC 134", "RSOC 136", "RSOC 174", "SCTR 128", "SCTR 132", "SCTR 157", "TESP 108", "TESP 109", "TESP 119", "TESP 124", "TESP 131", "TESP 137", "TESP 185R", "WGST 149", "WGST 153"];
var socialScience = ["ANTH 2", "ANTH 3", "ECON 1", "ECON 2", "LBST 100", "POLI 2", "POLI 40", "POLI 99", "PSYC 1", "PSYC 2", "SOCI 1"];
var amth106 = ["AMTH 106", "CHEM 12", "BIOL 21", "MATH 101", "MATH 102", "MATH 103", "MATH 105", "MATH 111", "MATH 112", "MATH 113", "MATH 122", "MATH 123", "MATH 125", "MATH 133", "MATH 134", "MATH 144", "MATH 153", "MATH 154", "MATH 155", "MATH 165", "MATH 166", "MATH 170", "MATH 172", "MATH 174", "MATH 175", "MATH 176", "MATH 177", "MATH 178", "BIOL 18", "CHEM 1", "ENVS 21", "PHYS 34"];
var chem11 = ["BIOL 18", "CHEM 1", "ENVS 21", "PHYS 34"];
var upperDiv = ["COEN 120", "COEN 123", "COEN 127", "COEN 129", "COEN 145", "COEN 148", "COEN 150", "COEN 152", "COEN 160", "COEN 161", "COEN 162", "COEN 163", "COEN 164", "COEN 165", "COEN 166", "COEN 168", "COEN 169", "COEN 172", "COEN 173", "COEN 178", "COEN 180", "ELEN 115", "ELEN 133", "ELEN 134"];


function test(){
  var x = document.getElementById("remove").value;
  var i = 0;
  var size = courses.length;
 // alert(x);
 // alert(size);
/* while(size > 0)
    if (x === courses[i]) {
      }
    i++;
    }
  
}
*/
}
/*
function removeCourse() {
  alert(Called);
  var x = document.getElementById("remove").value);
  var i = courses.indexOf(x);
  
  if (i > -1) {
    courses.splice(i, 1);
  }
}

*/
//Would like case insenitive
function addCourse(){
  var x = document.getElementById("box");
  courses.push(document.getElementById("input").value);
 // x.innerHTML = courses.join('<br/>');
 // document.getElementById('COEN10').style.display='none'
  //document.getElementById('COEN10').style.display='text'
  var arrayLength = courses.length;
  x.innerHTML = "";
  for (var i = 0; i < arrayLength; i++) {
    x.innerHTML += courses[i] + "<br>";
    generate(courses[i]);
  }
}

function generate(x){
  
  if(x == "ENGL 181"){ document.getElementById("ENGL 181").innerHTML = "YES!";}
  else if(x == "COEN 10"){ document.getElementById("COEN 10").innerHTML = "YES!";}
  else if(x == "COEN 11"){ document.getElementById("COEN 11").innerHTML = "YES!";}
  else if(x == "COEN 12"){ document.getElementById("COEN 12").innerHTML = "YES!";}
  else if(x == "COEN 19"){document.getElementById("COEN 19").innerHTML = "YES!";}
  else if(x == "COEN 20"){document.getElementById("COEN 20").innerHTML = "YES!";}
  else if(x == "COEN 21"){document.getElementById("COEN 21").innerHTML = "YES!";}
  else if(x == "COEN 12"){document.getElementById("COEN 12").innerHTML = "YES!";}
  else if(x == "COEN 70"){document.getElementById("COEN 122").innerHTML = "YES!";}
  else if(x == "COEN 146"){document.getElementById("COEN 146").innerHTML = "YES!";}
  else if(x == "COEN 171"){document.getElementById("COEN 171").innerHTML = "YES!";}
  else if(x == "COEN 174"){document.getElementById("COEN 174").innerHTML = "YES!";}
  else if(x == "COEN 175"){document.getElementById("COEN 175").innerHTML = "YES!";}
  else if(x == "COEN 177"){document.getElementById("COEN 177").innerHTML = "YES!";}
  else if(x == "COEN 179"){document.getElementById("COEN 179").innerHTML = "YES!";}
  else if(x == "COEN 194"){document.getElementById("COEN 194").innerHTML = "YES!";}
  else if(x == "COEN 195"){document.getElementById("COEN 195").innerHTML = "YES!";}
  else if(x == "COEN 196"){document.getElementById("COEN 196").innerHTML = "YES!";}
  else if(x == "MATH 11"){document.getElementById("MATH 11").innerHTML = "YES!";}
  else if(x == "MATH 12"){document.getElementById("MATH 12").innerHTML = "YES!";}
  else if(x == "MATH 13"){document.getElementById("MATH 13").innerHTML = "YES!";}
  else if(x == "MATH 14"){document.getElementById("MATH 14").innerHTML = "YES!";}
  else if(x == "MATH 53"){document.getElementById("MATH 53").innerHTML = "YES!";}
  else if(x == "MATH 106"){document.getElementById("MATH 106").innerHTML = "YES!";}//Can be fulfilled with 
  else if(x == "MATH 108"){document.getElementById("MATH 108").innerHTML = "YES!";}
  else if(x == "PHYS 31"){document.getElementById("PHYS 31").innerHTML = "YES!";}
  else if(x == "PHYS 32"){document.getElementById("PHYS 32").innerHTML = "YES!";}
  else if(x == "PHYS 33"){document.getElementById("PHYS 33").innerHTML = "YES!";}
  else if(x == "ELEN 50"){document.getElementById("ELEN 50").innerHTML = "YES!";}
  else if(x == "ELEN 153"){document.getElementById("ELEN 153").innerHTML = "YES!";}
 
}
  

