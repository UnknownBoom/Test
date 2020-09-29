function multy(x,y){
	var a=0;
	if(y===0) {
		a=1;
	}
	else if(y<0){
		a=1/x;
		for(let i=1;i<y;i++){
			a*=x;
		}
	}else{
		a=x;
		for(let i=1;i<y;i++){
			a*=x;
		}
	}
	console.log(a);
}
multy(2,3);