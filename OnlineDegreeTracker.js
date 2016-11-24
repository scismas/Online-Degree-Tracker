var courses = [];
var technicalElectives = [];
var electives = [];

var doubledip = 0;


var CheckSocialScience = 0;
var CheckEthics = 0;
var CheckRtc3 = 0;
var CheckRtc2 = 0;
var CheckElsj = 0;
var CheckDiversity = 0;
var CheckCi3 = 0;
var CheckMath53 = 0;
var CheckAmth108 = 0;
var CheckChem11 = 0;
var CheckAmth106 = 0; 



// double dippers: POLI 2, POLI 3, TESP 45, TESP 159, ANTH 3, COMM 107A, LBST 106, ETHN 160, ETHN 161, PHIL 5A
//		   PHIL 70, POLI 134, POLI 140, POLI 145, PSYC 114EL, RSOC 99, SCTR 128, TESP 43, TESP 46, TESP 64
//		   TESP 65, TESP 133, TESP 157, TESP 183
var CI1 = ["ANTH 11A", "ARTH 11A", "ARTH 11H", "CLAS 11A", "ENGL 11A", "ENVS 11A", "HIST 11A", "HIST 11H", "ITAL 11A", "MUSC 11A", "PHIL 11A", "SOCI 11A", "THTR 11A", "WGST 11A"];
var CI2 = ["ANTH 12A", "ARTH 12A","CLAS 12A","ENGL 12A","ENVS 12A","HIST 12A","HIST 12H","ITAL 12A","MUSC 12A","PHIL 12A","SOCI 12A","THTR 12A","WGST 12A"];
var CI3 = ["TESP 133", "POLI 3", "ANTH 50", "ANTH 152", "ARTH 27", "ARTH 160", "ECON 134", "ENGL 153", "ENGL 156", "FREN 114", "HIST 92", "HIST 116S", "HIST 137", "HIST 142", "HIST 147B", "HIST 150", "MGMT 80", "MUSC 130", "POLI 2", "POLI 50", "POLI 137", "RSOC 136", "SPAN 112", "WGST 104", "WGST 122", "WGST 124", "WGST 126", "ANTH 156", "ANTH 159", "ANTH 172", "ANTH 181", "ANTH 184", "ANTH 185", "ANTH 186", "ANTH 187", "ANTH 188", "ARAB 137", "ARTH 24", "ARTH 25", "ARTH 26", "ARTH 152", "ARTH 161", "ARTH 162", "ARTH 163", "ARTH 164", "ARTH 170", "CLAS 60", "COMM 105A", "COMM 183A", "COMM 184A", "COMM 187A", "COMM 188A", "COMM 189A", "DANC 68", "ENGR 177", "ENGL 56", "ENGL 66", "ENGL 31A", "ENGL 120", "ENGL 157", "FREN 111", "FREN 112", "FREN 113", "FREN 174", "HIST 64", "HIST 91", "HIST 95", "HIST 102S", "HIST 104", "HIST 107", "HIST 112", "HIST 122", "HIST 136", "HIST 140S", "HIST 141", "HIST 143S", "HIST 144S", "HIST 145", "HIST 146A", "HIST 146B", "HIST 147A", "HIST 151", "HIST 152", "HIST 154B", "HIST 157", "HIST 161", "HIST 162", "HIST 163", "HIST 164S", "HIST 166", "MUSC 136", "POLI 126", "POLI 136", "POLI 140", "POLI 145", "POLI 148", "SOCI 134", "SOCI 135", "SOCI 138", "SPAN 137", "SPAN 147", "SPAN 149", "WGST 120", "WGST 123", "WGST 125", "WGST 128", "WGST 172", "WGST 175"];
var coen = ["COEN 10", "COEN 11", "COEN 12", "COEN 19", "COEN 20", "COEN 21", "COEN 70", "COEN 122", "COEN 146", "COEN 171", "COEN 174", "COEN 175", "COEN 177", "COEN 179", "COEN 194", "COEN 195", "COEN 196"];
var ctw1 = ["ENGL 1A", "ENGL 1H"]; 
var ctw2 = ["ENGL 2A", "ENGL 2H", "PHIL 2A", "WGST 2A"]; 
var diversity = ["TESP 64", "ANTH 157", "ARTH 143", "ARTH 185", "COMM 107A", "ENGL 38", "ENGL 67", "ENGL 125H", "ETHN 5", "ETHN 30", "ETHN 40", "ETHN 132", "ETHN 144", "ETHN 153", "ETHN 157", "ETHN 165", "ETHN 178", "HIST 178", "LBST 106", "MUSC 132", "POLI 153", "POLI 154", "PSYC 182", "SOCI 33", "SOCI 153", "WGST 34", "WGST 50", "WGST 115", "WGST 155", "WGST 156", "WGST 163", "ANTH 146", "ANTH 148", "ANTH 149", "ANTH 170", "ARTH 140", "ARTH 146", "COMM 121A", "COMM 164A", "COMM 168A", "DANC 62", "DANC 162", "DANC 66", "DANC 166", "ECON 166", "ENGL 31G", "ENGL 35", "ENGL 35G", "ENGL 36", "ENGL 39", "ENGL 68", "ENGL 69", "ENGL 79G", "ENGL 122", "ENGL 122AW", "ENGL 125", "ENGL 129", "ENGL 132G", "ENGL 135", "ENGL 136", "ENGL 138", "ENGL 152", "ETHN 10", "ETHN 20", "ETHN 35", "ETHN 36", "ETHN 41", "ETHN 50", "ETHN 51", "ETHN 65", "ETHN 70", "ETHN 95", "ETHN 96", "ETHN 120", "ETHN 123", "ETHN 125", "ETHN 130", "ETHN 134", "ETHN 135", "ETHN 139", "ETHN 141", "ETHN 142", "ETHN 145", "ETHN 149", "ETHN 152", "ETHN 154", "ETHN 155", "ETHN 156", "ETHN 160", "ETHN 161", "ETHN 162", "ETHN 163", "HIST 84", "HIST 153", "HIST 156A", "HIST 156B", "HIST 158", "HIST 172", "HIST 174", "HIST 177", "HIST 180", "HIST 181", "HIST 182", "HIST 183", "HIST 185", "HIST 187", "HIST 188S", "ITAL 185", "LEAD 10", "MUSC 20", "MUSC 134", "MUSC 196", "PHIL 70", "PHIL 156", "POLI 134", "POLI 171", "POLI 195DW", "PSYC 156", "PSYC 189", "PSYC 196", "SOCI 150", "SOCI 162", "SOCI 175", "SOCI 180", "SPAN 176", "THTR 65", "THTR 151", "THTR 161", "TESP 65", "WGST 14", "WGST 15", "WGST 51", "WGST 56", "WGST 57", "WGST 101", "WGST 110", "WGST 111", "WGST 112", "WGST 113", "WGST 114", "WGST 116", "WGST 117", "WGST 118", "WGST 134", "WGST 134AW", "WGST 136", "WGST 138", "WGST 144", "WGST 164", "WGST 173", "WGST 174", "WGST 180", "WGST 188"];
var elen = ["ELEN 50", "ELEN 153"];
var elsj = ["TESP 45", "POLI 3", "ANTH 3", "BIOL 188", "BUSN 151B", "BUSN 195EL", "COMM 107A", "COMM 141B", "ELSJ 22", "ELSJ 23", "ELSJ 135", "ENGR 111", "ENVS 131", "LBST 106", "MGMT 8", "PSYC 115EL", "PSYC 185EL", "SCTR 128", "SOCI 30", "SPAN 21EL", "TESP 46", "BUSN 188", "BUSN 189", "COMM 40EL", "DANC 59", "DANC 159", "DANC 69", "DANC 169", "DANC 189", "ENGL 106EL", "ENGL 111", "ENGL 145EL", "ENGL 150EL", "ENGL 176", "ENVS 155", "ETHN 60", "ETHN 160", "ETHN 161", "ELSJ 30", "ELSJ 50", "ELSJ 111", "ELSJ 197", "ELSJ 198", "ELSJ 199", "INTL 139", "INTL 139BF", "LEAD 10", "LEAD 17", "PHIL 5A", "PHIL 70", "POLI 158", "POLI 198EL", "PSYC 113EL", "PSYC 114EL", "PSYC 117EL", "PSYC 190EL", "PSYC 196", "PHSC 31", "PHSC 131", "PHSC 170", "RSOC 99", "RSOC 135", "SOCI 148", "SOCI 165", "SPAN 22EL", "SPAN 23EL", "ARTS 151", "TESP 43", "TESP 129", "TESP 157", "TESP 158", "TESP 183"];
var engr = ["ENGR 1"];
var ethics = ["TESP 159", "ENGR 19", "MGMT 6", "PHIL 5", "PHIL 6", "PHIL 7B", "PHIL 9", "PHIL 10", "WGST 189", "CLAS 149", "PHIL 2", "PHIL 3A", "PHIL 4A", "PHIL 4B", "PHIL 5A", "PHIL 7", "PHIL 8", "PHIL 111", "PHIL 113", "PHIL 115", "PHIL 116", "PHIL 121", "PHIL 122A", "PHIL 122B", "PHIL 123", "PSYC 114EL", "PHSC 7", "WGST 58", "WGST 184"];
var rtc1 = ["RSOC 9", "RSOC 10", "RSOC 10H", "RSOC 12", "SCTR 15", "SCTR 19", "TESP 2", "TESP 4", "RSOC 7", "RSOC 19", "SCTR 11"];
var rtc2 = ["TESP 64", "TESP 45", "TESP 43", "CLAS 63", "COMM 175A", "RSOC 27", "RSOC 51", "RSOC 91", "SCTR 33", "SCTR 39", "TESP 46", "TESP 50", "TESP 60", "WGST 47", "ANTH 150", "ARAB 171", "CLAS 12A", "CLAS 65", "CLAS 67", "CLAS 68", "CLAS 69", "COMM 179A", "ENGL 161", "ENGL 162", "ENGR 143", "ENVS 84", "HIST 16", "HIST 17", "HIST 103", "HIST 117", "HIST 120", "HIST 126", "HIST 129", "HIST 152", "MUSC 189", "PHIL 60", "POLI 139", "PSYC 193", "RSOC 33", "RSOC 38", "RSOC 46", "RSOC 54", "RSOC 64", "RSOC 67", "RSOC 81", "RSOC 85", "RSOC 86", "RSOC 87", "RSOC 88", "RSOC 90", "RSOC 96", "RSOC 99", "SCTR 26", "SCTR 27", "SCTR 28", "SCTR 30", "SCTR 35", "SCTR 45", "SCTR 48", "SCTR 58", "SCTR 65", "TESP 41", "TESP 65", "TESP 71", "TESP 72", "TESP 77", "TESP 79", "TESP 82", "TESP 86", "TESP 88", "WGST 46", "WGST 48"];
var rtc3 = ["TESP 133", "TESP 159", "ELEN 160", "RSOC 111", "RSOC 115", "RSOC 134", "RSOC 136", "RSOC 174", "SCTR 128", "SCTR 132", "SCTR 157", "TESP 108", "TESP 109", "TESP 119", "TESP 124", "TESP 131", "TESP 137", "TESP 185", "WGST 149", "WGST 152", "BIOL 171", "ENVS 152", "ETHN 129", "RSOC 106", "RSOC 119", "RSOC 113", "RSOC 119", "RSOC 121", "RSOC 123", "RSOC 130", "RSOC 131", "RSOC 135", "RSOC 139", "RSOC 140", "RSOC 154", "RSOC 157", "RSOC 159", "RSOC 168", "RSOC 170", "RSOC 182", "RSOC 184", "RSOC 188", "RSOC 190", "RSOC 191", "RSOC 194", "SCTR 100", "SCTR 110", "SCTR 139", "SCTR 158", "SCTR 165R", "SCTR 170", "SCTR 175", "TESP 106", "TESP 118", "TESP 138", "TESP 143", "TESP 153", "TESP 121", "TESP 157", "TESP 163", "TESP 164", "TESP 165", "TESP 175", "TESP 176", "TESP 183", "TESP 184", "TESP 187", "TESP 190", "WGST 145", "WGST 148", "WGST 151"];
var socialScience = ["ANTH 2", "ANTH 3", "ECON 1", "ECON 2", "LBST 100", "POLI 2", "POLI 40", "POLI 99", "PSYC 1", "PSYC 2", "SOCI 1", "ANTH 196", "CLAS 172", "ECON 1E", "ECON 129BF", "HIST 107", "POLI 134", "POLI 140", "POLI 143", "POLI 145"];
var amth106 = ["AMTH 106", "CHEM 12", "BIOL 21", "MATH 101", "MATH 102", "MATH 103", "MATH 105", "MATH 111", "MATH 112", "MATH 113", "MATH 123", "MATH 125", "MATH 133", "MATH 134", "MATH 144", "MATH 153", "MATH 154", "MATH 155", "MATH 165", "MATH 170", "MATH 172", "MATH 174", "MATH 175", "MATH 176", "MATH 177", "MATH 178", "BIOL 18", "CHEM 1", "ENVS 21"];
var chem11 = ["CHEM 1", "BIOL 18", "CHEM 11", "ENVS 21"];
var upperDiv = ["COEN 120", "COEN 123", "COEN 127", "COEN 129", "COEN 145", "COEN 148", "COEN 150", "COEN 152", "COEN 160", "COEN 161", "COEN 162", "COEN 163", "COEN 164", "COEN 165", "COEN 166", "COEN 168", "COEN 169", "COEN 172", "COEN 173", "COEN 178", "COEN 180", "ELEN 115", "ELEN 133", "ELEN 134"];
var math53 = ["MATH 53", "AMTH 118", "MATH 166"];
var amth108 = ["AMTH 108", "MATH 122"];

function colorFill(){
	var x = document.getElementsByName("requirement");
	 var arrayLength = x.length;
	for(var i = 0; i < arrayLength; i++){
		x[i].innerHTML ="NO!";
		x[i].style.backgroundColor = "red";
	}

}

function removeThis(){
	var Sanitize2 = document.getElementById("removeMe").value;
	var re = /^[A-Z]{4}\s{1}[A-Z0-9]+/; 
	if(re.test(Sanitize2) == 0){
		alert("Not a Valid Input. Please follow this format: COEN 10");
		document.getElementById("removeMe").innerHTML = "";
		return;
	}

	var y = document.getElementById("removeMe").value;
	var d = courses.indexOf(y);
	if(courses.indexOf(y) >= 0)
	{
		courses.splice(d,1);
		populate();
		reset();
		populate();
	}
	else 
	{
		alert("Cannot Remove");
	}
}

//Would like case insenitive
function addCourse(){
	var Sanitize1 = document.getElementById("input").value;
	var re = /^[A-Z]{4}\s{1}[A-Z0-9]+/; 
	if(re.test(Sanitize1) == 0){
		alert("Not a Valid Input. Please follow this format: COEN 10");
		document.getElementById("input").innerHTML = "";
		return;
	}


	// if input == regex string 
	// alert ()
	if(courses.indexOf(document.getElementById("input").value) != -1){
		alert("This Course has Already Been Entered");
		return;
	}
	courses.push(document.getElementById("input").value);
	populate();
	}


function reset(){
	CheckSocialScience = 0;
	CheckEthics = 0;
	CheckRtc2 = 0;
	CheckRtc3 = 0;
	CheckElsj = 0;
	CheckDiversity = 0;
	CheckCi3 = 0;
	CheckAmth108 = 0;
	CheckMath53 = 0;
	CheckAmth106 = 0;
	CheckChem11 = 0;
	doubledip=0;
	
	
	var x = document.getElementsByName("requirement");
	 var arrayLength = x.length;
	for(var i = 0; i < arrayLength; i++){
		x[i].innerHTML ="NO!";
		x[i].style.backgroundColor = "red";
	}
	technicalElectives = [];
 
	
}
function populate()
{
	technicalElectives = [];
	CheckSocialScience = 0;
	CheckEthics = 0;
	CheckRtc2 = 0;
	CheckRtc3 = 0;
	CheckElsj = 0;
	CheckDiversity = 0;
	CheckCi3 = 0;
	CheckAmth108 = 0;
	CheckMath53 = 0;
	CheckAmth106 = 0;
	CheckChem11 = 0;
	doubledip=0;
	var t = electives.length;
	for(var j = 0; j < t; j++)
	{
		//document.getElementById("electiveTable").deleteRow(0);
		document.getElementById("electiveRow").deleteCell(0);
	}
	electives = [];
	//var x = document.getElementById("box"); <div id="box" style="border:1px solid black;width:150px;height:100px;overflow:auto"> 
	//</div>
	var arrayLength = courses.length;
	//x.innerHTML = "";
	for (var i = 0; i < arrayLength; i++) {
		//x.innerHTML += courses[i] + "<br>";
		generate(courses[i]);
	}
	createCookie("cookieCourse", courses, 365);
}

function generate(x){
	var elective = 0;
 	var one = 0;
	var two = 0;
	var three = 0;
	var four = 0;
	var five = 0;
	var six = 0;
	var seven = 0;
	
	if(x == "ENGL 181"){ 
		document.getElementById("ENGL 181").innerHTML = "YES!"; 
		document.getElementById("ENGL 181").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "ENGR 1"){
		document.getElementById("ENGR 1").innerHTML = "YES!";
		document.getElementById("ENGL 1").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 10"){ 
		document.getElementById("COEN 10").innerHTML = "YES!";
		document.getElementById("COEN 10").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 11"){ 
		document.getElementById("COEN 11").innerHTML = "YES!";
		document.getElementById("COEN 11").style.backgroundColor = "rgb(66, 244, 146)";
	 	elective = 1;}
	else if(x == "COEN 12"){ 
		document.getElementById("COEN 12").innerHTML = "YES!";
		document.getElementById("COEN 12").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 19"){
		document.getElementById("COEN 19").innerHTML = "YES!";
		document.getElementById("COEN 19").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 20"){
		document.getElementById("COEN 20").innerHTML = "YES!";
		document.getElementById("COEN 20").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 21"){
		document.getElementById("COEN 21").innerHTML = "YES!";
		document.getElementById("COEN 21").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 70"){
		document.getElementById("COEN 70").innerHTML = "YES!";
		document.getElementById("COEN 70").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 122"){
		document.getElementById("COEN 122").innerHTML = "YES!"; 
		document.getElementById("COEN 122").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "COEN 146"){
		document.getElementById("COEN 146").innerHTML = "YES!"; 
		document.getElementById("COEN 146").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "COEN 171"){
		document.getElementById("COEN 171").innerHTML = "YES!";
		document.getElementById("COEN 171").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 174"){
		document.getElementById("COEN 174").innerHTML = "YES!";
		document.getElementById("COEN 174").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 175"){
		document.getElementById("COEN 175").innerHTML = "YES!";
		document.getElementById("COEN 175").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 177"){
		document.getElementById("COEN 177").innerHTML = "YES!";
		document.getElementById("COEN 177").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "COEN 179"){
		document.getElementById("COEN 179").innerHTML = "YES!";
		document.getElementById("COEN 179").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "COEN 194"){
		document.getElementById("COEN 194").innerHTML = "YES!"; 
		document.getElementById("COEN 194").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "COEN 195"){
		document.getElementById("COEN 195").innerHTML = "YES!"; 
		document.getElementById("COEN 195").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "COEN 196"){
		document.getElementById("COEN 196").innerHTML = "YES!"; 
		document.getElementById("COEN 196").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "MATH 11"){
		document.getElementById("MATH 11").innerHTML = "YES!"; 
		document.getElementById("MATH 11").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "MATH 12"){
		document.getElementById("MATH 12").innerHTML = "YES!"; 
		document.getElementById("MATH 12").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "MATH 13"){
		document.getElementById("MATH 13").innerHTML = "YES!";
		document.getElementById("MATH 13").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "MATH 14"){
		document.getElementById("MATH 14").innerHTML = "YES!";
		document.getElementById("MATH 14").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	
	//Can be fulfilled with 
	
	else if(x == "PHYS 31"){
		document.getElementById("PHYS 31").innerHTML = "YES!";
		document.getElementById("PHYS 31").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1;}
	else if(x == "PHYS 32"){
		document.getElementById("PHYS 32").innerHTML = "YES!"; 
		document.getElementById("PHYS 32").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "PHYS 33"){
		document.getElementById("PHYS 33").innerHTML = "YES!"; 
		document.getElementById("PHYS 33").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "ELEN 50"){
		document.getElementById("ELEN 50").innerHTML = "YES!"; 
		document.getElementById("ELEN 50").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(x == "ELEN 153"){
		document.getElementById("ELEN 153").innerHTML = "YES!"; 
		document.getElementById("ELEN 153").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	
	else if(math53.indexOf(x) != -1 && CheckMath53 == 0){
		document.getElementById("MATH 53").innerHTML = x;
		document.getElementById("MATH 53").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1; 
		CheckMath53 = 1;}
	else if(amth108.indexOf(x) != -1 && CheckAmth108 == 0){
		document.getElementById("AMTH 108").innerHTML = x; 
		document.getElementById("AMTH 108").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1; 
		CheckAmth108 = 1;}
	
	else if(rtc1.indexOf(x) != -1){
		document.getElementById("RTC I").innerHTML= x; 
		document.getElementById("RTC I").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(chem11.indexOf(x) != -1 && CheckChem11 == 0){
		document.getElementById("CHEM 11").innerHTML= x;
		document.getElementById("CHEM 11").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1; 
		CheckChem11 = 1;}
	else if(ctw1.indexOf(x) != -1){
		document.getElementById("CTW I").innerHTML= x; 
		document.getElementById("CTW I").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(ctw2.indexOf(x) != -1){
		document.getElementById("CTW II").innerHTML= x; 
		document.getElementById("CTW II").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(CI1.indexOf(x) != -1){
		document.getElementById("CandI I").innerHTML= x; 
		document.getElementById("CandI I").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(CI2.indexOf(x) != -1){
		document.getElementById("CandI II").innerHTML= x; 
		document.getElementById("CandI II").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;}
	else if(amth106.indexOf(x) != -1 && CheckAmth106 == 0){
		document.getElementById("AMTH 106").innerHTML = x; 
		document.getElementById("AMTH 106").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1; 
		CheckAmth106 = 1;}
	
	//Testing for double dips
	
	if(CI3.indexOf(x) != -1 && CheckCi3 == 0){
		document.getElementById("CandI III").innerHTML= x;
		document.getElementById("CandI III").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1;
		CheckCi3 = 1; 
		one = 1;
	}
	if(diversity.indexOf(x) != -1 && CheckDiversity == 0){
		document.getElementById("DIVERSITY").innerHTML= x;
		document.getElementById("DIVERSITY").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1; 
		CheckDiversity = 1; 
		two = 1;
		}
	if(elsj.indexOf(x) != -1 && CheckElsj == 0){
		document.getElementById("ELSJ").innerHTML= x;
		document.getElementById("ELSJ").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1; 
		CheckElsj = 1; 
		three = 1;
		}
	if(rtc2.indexOf(x) != -1 && CheckRtc2 == 0){
		document.getElementById("RTC II").innerHTML= x; 
		document.getElementById("RTC II").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1; 
		CheckRtc2 = 1; 
		four = 1;
		}
	if(rtc3.indexOf(x) != -1 && CheckRtc3 == 0){
		document.getElementById("RTC III").innerHTML= x; 
		document.getElementById("RTC III").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1; 
		CheckRtc3 = 1; 
		five = 1;
		}
	if(ethics.indexOf(x) != -1 && CheckEthics == 0){
		document.getElementById("ETHICS").innerHTML= x;
		document.getElementById("ETHICS").style.backgroundColor = "rgb(66, 244, 146)"; 
		elective = 1; 
		CheckEthics = 1; 
		six = 1;
		}
	if(socialScience.indexOf(x) != -1 && CheckSocialScience == 0){
		document.getElementById("SOC SCI").innerHTML= x; 
		document.getElementById("SOC SCI").style.backgroundColor = "rgb(66, 244, 146)";
		elective = 1; 
		CheckSocialScience = 1; 
		seven = 1;
		}
	
	if((one + two + three + four + five + six + seven) >= 2)
		{
			if(one == 1)
			{
				document.getElementById("CandI III").style.backgroundColor = "rgb(0,255,255)";
			}
			if(two == 1)
			{
				document.getElementById("DIVERSITY").style.backgroundColor = "rgb(0,255,255)";
			}
			if(three == 1)
			{
				document.getElementById("ELSJ").style.backgroundColor = "rgb(0,255,255)";
			}
			if(four == 1)
			{
				document.getElementById("RTC II").style.backgroundColor = "rgb(0,255,255)";
			}
			if(five == 1)
			{
				document.getElementById("RTC III").style.backgroundColor = "rgb(0,255,255)";
			}
			if(six == 1)
			{
				document.getElementById("ETHICS").style.backgroundColor = "rgb(0,255,255)";
			}
			if(seven == 1)
			{
				document.getElementById("SOC SCI").style.backgroundColor = "rgb(0,255,255)";
			}
		}
	if(upperDiv.indexOf(x)!= -1){
		technicalElectives.push(x);
		var techLength = technicalElectives.length;
		elective = 1;
		if (techLength == 1){
			document.getElementById("T.E. I").innerHTML= technicalElectives[0];
			document.getElementById("T.E. I").style.backgroundColor = "rgb(66, 244, 146)";
			
		}
		else if (techLength == 2){
			document.getElementById("T.E. I").innerHTML= technicalElectives[0];
			document.getElementById("T.E. I").style.backgroundColor = "rgb(66, 244, 146)";
			document.getElementById("T.E. II").innerHTML= technicalElectives[1];
			document.getElementById("T.E. II").style.backgroundColor = "rgb(66, 244, 146)";
			
		}
		else if (techLength == 3){
			document.getElementById("T.E. I").innerHTML= technicalElectives[0];
			document.getElementById("T.E. I").style.backgroundColor = "rgb(66, 244, 146)";
			document.getElementById("T.E. II").innerHTML= technicalElectives[1];
			document.getElementById("T.E. II").style.backgroundColor = "rgb(66, 244, 146)";
			document.getElementById("T.E. III").innerHTML= technicalElectives[2];
			document.getElementById("T.E. III").style.backgroundColor = "rgb(66, 244, 146)";
			
		}
		else {
			document.getElementById("T.E. I").innerHTML= technicalElectives[0];
			document.getElementById("T.E. I").style.backgroundColor = "rgb(66, 244, 146)";
			document.getElementById("T.E. II").innerHTML= technicalElectives[1];
			document.getElementById("T.E. II").style.backgroundColor = "rgb(66, 244, 146)";
			document.getElementById("T.E. III").innerHTML= technicalElectives[2];
			document.getElementById("T.E. III").style.backgroundColor = "rgb(66, 244, 146)";
			elective = 0;

		}
	}

	if(elective == 0 )
	{
		fillTable(x);
	}
}
function fillTable(x){
	
	electives.push(x);
	var row = document.getElementById("electiveRow");
	var cell1 =row.insertCell(0);
	//var table = document.getElementById("electiveTable");
	//var row = table.insertRow(0);
	//var cell1 = row.insertCell(0);
	//var table = document.getElementById("electiveRow");
	//var row = table.insertRow(0);
	//var cell1 = table.insertCell(0);
	//var cell1 = document.getElementById("electiveRow").insertCell(0);
	cell1.innerHTML = x;
	cell1.style.backgroundColor = "rgb(66, 244, 146)";
}

var createCookie = function(name, value, days) {
		var expires;
		var string = JSON.stringify(value);
		if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "expires=" + date.toGMTString();
		}
		else {
				expires = "";
		}
		document.cookie = name + "=" + string + ";" + expires + ";path=/";


		
}

function getCookie(c_name) {
		if (document.cookie.length > 0) {
				c_start = document.cookie.indexOf(c_name + "=");
				if (c_start != -1) {
						c_start = c_start + c_name.length + 1;
						c_end = document.cookie.indexOf(";", c_start);
						if (c_end == -1) {
								c_end = document.cookie.length;
						}
						return unescape(document.cookie.substring(c_start, c_end));
				}
		}
		return "";
}

function loadCookieArray()
{
	if (document.cookie.length > 0)
	{
		courses = JSON.parse(getCookie("cookieCourse"));
		reset();
		populate();
	}
	return "";

}

function buttonPressAdd(e)
{
	if (e.keyCode == 13)
	{
		addCourse();
	}
}
function buttonPressRemove(e)
{
	if (e.keyCode == 13)
	{
		removeThis();
	}
}
