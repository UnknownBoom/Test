
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
multy(2,3);

