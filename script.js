function num(x){
	if(x%2===0) {
		console.log("Even"); 
	}
	else {
		console.log("odd");
	}
	if(x==0){console.log("x = 0");}
	else if(x<0) {console.log("x<0");}
	else if(x>0){console.log("x>0");}
	if(x % 1 === 0) {console.log("x is integer");}
	else {console.log("x is float");}
}