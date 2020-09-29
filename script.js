

console.log("helloo");

function multy(x,y){
	let a=0;
	if(y===0) {
		a=1;
	}
	else if(y<0){
		a=x;
		for(let i=1;i<y;i++){
			a*=x;
		}
		a=1/a;
	}else{
		a=x;
		for(let i=1;i<y;i++){
			a*=x;
		}
	}
	return a;
}

function num(x){
	if (x % 2 === 0) {
		console.log("Even"); 
	}
	else {
		console.log("odd");
	}
	if(x == 0){
		console.log("x = 0");
	}
	else if(x < 0) {
		console.log("x<0");
	}
	else if(x > 0){
		console.log("x>0");
	}
	if(x % 1 === 0) {
		console.log("x is integer");
	}
	else {
		console.log("x is float");
	}
}
