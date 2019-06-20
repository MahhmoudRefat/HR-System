/**************** numbers only function ********************************/

function Numric(elem, helpermsg){
	var NumricExpression = /^[0-9]+$/;
	if(elem.value.match(NumricExpression))
	{ return true; }
else{
	alret(helpermsg);
	elem.focus();
	return false;
 }
}


/**************** letters only function ********************************/
  
function alpha(elem, helpermsg){
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.value.match(alphaExp))
	{ return true; }
else{
	alret(helpermsg);
	elem.focus();
	return false;
}

 
 /**************** notempty only function ********************************/

function notEmpty(elem, helpermsg){
	if(elem.value.lenght==0)
	{ return true; }
else{
	alret(helpermsg);
	elem.focus();
	return false;
}


/**************** email validation  ********************************/
    
function ValidateEmail(inputText)
{ var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(inputText.value.match(mailformat))
    { document.form1.text1.focus();
    return true;
    }
 else
    { alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
    }
}
    
/*

        <form name="form1" action="#">
        <input type= “email” name= “text1”/>
        <input type="submit" name="submit" value="Submit" onclick="ValidateEmail(document.form1.text1)"/>
        </form>

*/