function registerForm(){
	var x=document.forms ["register"]["email"].value;
	var a=x.indexOf("@");
	var doct=x.lastIndexOf(".");
	if (a<1 || doct<a+2 || doct+2>=x.length){
		alert("This is an invalid email Address");
  		return false;
	}
}