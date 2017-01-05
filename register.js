var verifyForm = function(e){
	var fname = $("#fname").val();
	if(!fname || fname.length === 0){
		$("#form-alert").text("Please enter your firstname").addClass("alert-danger").removeClass('hide');
		return false;
	}
	/*var lname = $("#lname").val();
	if(!lname || lname.length === 0){
		$("#form-alert").text("Please enter your lastname").addClass("alert-danger").removeClass('hide');
		return false;
	}*/
	var uscid = $("#uscid").val();
	if(!uscid || uscid.length !== 10 || isNaN(uscid)){
		$("#form-alert").text("USC ID should be a 10 digit numeric value").addClass("alert-danger").removeClass('hide');
		return false;
	}
	var email = $("#email").val();
	if(!email || email.length === 0 ){
		$("#form-alert").text("Email address should be valid USC email only").addClass("alert-danger").removeClass('hide');
		return false;
	}
	/*var checkedVal = $('input[name=inlineRadioOptions]:checked').val();
	if(!checkedVal || checkedVal.length === 0){
		$("#form-alert").text("Please select a gender").addClass("alert-danger").removeClass('hide');
		return false;
	}*/
	var pass = $("#pass").val();
	if(false){ 
		$("#form-alert").text("Password should be alphanumeric with 6 - 24 characters with atleast one uppercase and one special character !@#$%^&*+").addClass("alert-danger").removeClass('hide');
		return false;
	}
	/*var cpass = $("#cpass").val();
	if(pass != cpass){
		$("#form-alert").text("The value in confirm password is not same as in password").addClass("alert-danger").removeClass('hide');
		return false;
	}*/
	var isTermsChecked = $("#tnc").prop('checked');
	if(!isTermsChecked){
		$("#form-alert").text("Please check the terms and conditions").addClass("alert-danger").removeClass('hide');
		return false;
	}	
	//populateStorage();
	//nextStep();
	return true;
}



var resetAlert = function(){
	$("#form-alert").text("").removeClass().addClass("alert hide");
}
var validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@usc\.edu$/;
    return re.test(email.toLowerCase());
}
var validatePassword = function(password){
	var re =  /^(?=.*[0-9])(?=.*[!@#$%^&*+])[a-zA-Z0-9!@#$%^&*+]{6,24}$/;
	return re.test(password);
}
function nextStep(){
	window.location.href = "next.html";
}
function populateStorage() {
	sessionStorage.setItem('step1', '1');
	showJson();
}

function removeStorage() {
	sessionStorage.clear();
}
var showJSON = function(){
	var formData = {};
	formData["name"] = {};
	formData["name"]["firstname"] = $("#fname").val();
	formData["name"]["lastname"] = $("#lname").val();
	formData["email"] = $("#uscid").val();
	formData["uscid"] = $("#uscid").val();
	formData["dob"] = {};
	formData["dob"]["month"] = $(".month-select").val();
	formData["dob"]["day"] = $(".day-select").val();
	formData["dob"]["year"] = $(".year-select").val();
	$("#results").html("<pre>"+ JSON.stringify(formData,null, "\t") + "</pre>");
	$("#results").removeClass('hide');
	//sessionStorage.setItem('userdata', JSON.stringify(formData,null, "\t"));
	
}

var handleRegistration = function(e){
	e.preventDefault();
	if(verifyForm()){
		showJSON();
	}
}
$(document).ready(function(){
	$("#register-submit").on("click",handleRegistration);
	$('input[name=inlineRadioOptions]').on('click',resetAlert);
	$("#fname").on('click',resetAlert);
	$("lname").on('click',resetAlert);
	$("#uscid").on('click',resetAlert);
	$("#email").on('click',resetAlert);
	$("#pass").on("click",resetAlert);
	$("#cpass").on("click",resetAlert);
	$("#tnc").on("change",resetAlert);
});
