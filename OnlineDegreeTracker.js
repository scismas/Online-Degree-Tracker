var number = [];
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
var stem = ["CHEM 11", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "PHYS 31", "PHYS 32", "PHYS 33", "AMTH 106", "AMTH 108"];
var rtc1 = ["RSOC 9", "RSOC 10", "RSOC 10H", "RSOC 12", "SCTR 15", "SCTR 19", "TESP 2", "TESP 4"];
var rtc2 = ["CLAS 63", "COMM 175A", "RSOC 27", "RSOC 51", "RSOC 91", "SCTR 33", "SCTR 39", "TESP 46", "TESP 50", "TESP 60", "WGST 47"];
var rtc3 = ["ELEN 160", "RSOC 111", "RSOC 115", "RSOC 134", "RSOC 136", "RSOC 174", "SCTR 128", "SCTR 132", "SCTR 157", "TESP 108", "TESP 109", "TESP 119", "TESP 124", "TESP 131", "TESP 137", "TESP 185R", "WGST 149", "WGST 153"];
var socialScience = ["ANTH 2", "ANTH 3", "ECON 1", "ECON 2", "LBST 100", "POLI 2", "POLI 40", "POLI 99", "PSYC 1", "PSYC 2", "SOCI 1"];

function myFunction()
{
  var x = document.getElementById("box");
  number.push(document.getElementById("input").value);
  x.innerHTML = number.join('<br/>');
}
