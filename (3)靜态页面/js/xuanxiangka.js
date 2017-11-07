
window.onload=function(){
	var lis=document.getElementById("topUL").getElementsByTagName("li");
	var divs=document.getElementsByClassName("box");
	
	for(var i=0;i<lis.length;i++){
		lis[i].num=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className="";
			}
		this.className="active";
		
		for(var j=0;j<divs.length;j++){
			divs[j].style.display="none";
			divs[j].style.marginTop=0;
		}
		
		console.log(this.num)
		
		divs[this.num].style.display="block";
		}
		
	}
	
	
	document.addEventListener("keypress",function(event){
		if((event.keyCode||event.which)==9){
			for(var i=0;i<lis.length;i++){
				if(lis[i].className=="active"){
					if(i<lis.length-1){
						lis[i+1].onclick();
					}else if(i==lis.length-1){
						lis[0].onclick();
					}
				break;
				}
			}
			
		}
	},false);
}
