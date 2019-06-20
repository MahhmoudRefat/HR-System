<script type="text/javascript" src="project.js"></script>
<script>
    
function sayHello(){ document.write ("Hello there!"); }
</script>
</head>
<body>
<button onclick="myButton()">Delete</button>
<p id="myButton"></p>
<script>
function myButton() {
var x;
if (confirm("Delete!") == true) {
x = "OK"; }
else { x = "Cancel!"; }
document.getElementById("myButton").innerHTML = x;
}
</script>

<button onclick ="myfunction()">click</button>
<p id"myfunction"></p>
<script>
function myfunction() {
var person = prompt("please enter your name ","Enter your name");
if(person != null)
{
document.getElementById("myfunction").innerHTML="Hello"+person+"!How are yoy today?"; }
}

</script>

<h3>My Employee </h3>

<script> 
function employee(){
	var myHR = ["Lucy", " Lola"];
var myemloyee = [" Sam", " Tom", " Steven"];
document.getElementById("demo").innerHTML = myHr.concat(myemployee); }
<p id="demo"></p>
<button onclick ="employee()" >allEmployee</button>

</script>

<button type="button" onclick="sayHello()" value="Say Hello">
