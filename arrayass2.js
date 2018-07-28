window.setTimeout(function(){
var todos=[];
var input=prompt("What would you like to do?");
while(input!=="quit")
{
  if(input==="list"){
  	console.log("*********");
  	todos.forEach(function(todo,i){
    console.log(i+" : "+todo);
   });
  	console.log("*********");
  }
  else if(input==="new"){
	var newtodo=prompt("enter a new todo");
  todos.push(newtodo);
  }
  else if(input==="delete"){
  	var index=prompt("enter index");
  	todos.splice(index,1);
  }
  var input=prompt("What would you like to do?");
}
console.log("you quit");
},500);