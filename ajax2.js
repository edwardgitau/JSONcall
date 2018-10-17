window.onload=function() {
	var getText= document.getElementById('txt');
	var getJson=document.getElementById('json');
	var content=document.getElementById('content');
	var xhr=new XMLHttpRequest();

	getText.addEventListener("click",function(){
		xhr.addEventListener('readystatechange',function(){
			content.innerHTML=this.responseText+"<br />";
		});
		xhr.open("GET","ajax2.txt",true);
		xhr.send();

	});
	getJson.addEventListener("click",function(){
		xhr.addEventListener('readystatechange',function(){
			if(this.readyState==4&&this.status==200){
				var data=JSON.parse(xhr.responseText);

				for(p in data){
					content.innerHTML +=p +":"+data[p]+"<br />";
			}
			
			}
			
		});
		xhr.open("GET","ajax2.JSON",true);
		xhr.send();
	});

};