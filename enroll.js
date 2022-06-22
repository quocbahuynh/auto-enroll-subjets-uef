var subjectsX = [
	["BUS1104E", 7],
	["ECO1104", 7],
	["MGT1108", 2],
	["MGT1128E", 8],
	["MKT1102E", 1]
];


var inputX = document.querySelector("#txtMaMH1");
var buttonX = document.querySelector("#btnLocTheoMaMH1");
var submitX = document.querySelector("#btnLuu");

function inputFormX(i) {
	return new Promise((resolve)=>{
        setTimeout(()=>{
   			inputX.value = subjectsX[i][0];
			console.log("Input : " + subjectsX[i][0])
			buttonX.onclick();
			console.log("Filter : " + subjectsX[i][0]);
			resolve();
		;} , 5000);
    });
}
function checkboxX (i) {
	return new Promise((resolve)=>{
        setTimeout(()=>{
			console.log("Check:" + subjectsX[i][0]);
    			document.querySelector("#divTDK > table:nth-child("+subjectsX[i][1]+") > tbody").getElementsByTagName("input")[0].checked = true;
			resolve();
        ;} , 5000);
    });
}
function clickButton (i) {
	submitX.onClick();
	console.log("Submit: " + subjectsX[i][0]);
}
for(let i = 0; i < subjectsX.length; i++){
	console.log("Register " + subjectsX[i][0])
	await inputFormX(i);
	await checkboxX(i);
	clickButton(i); 
	console.log("=======================================")

	if(i+1 ===  subjectsX.length){
		console.log("Finish!!!")
	}
}
