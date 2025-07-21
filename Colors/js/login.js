function log(){
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	if(username==""||pwd==""){
		alert("不能为空");
		return false;
	}
	if(localStorage.getItem("uname")){
		var uname=localStorage.getItem("uname").toString();
		var pass=localStorage.getItem("pwd").toString();
		if(username==uname){
			if(pwd==pass){
				sessionStorage.setItem("username",uname);
				alert("登陆成功");
				window.location.href="index.html"
			}
			else{
				alert("密码有误");
			}
		}
		else{
			alert("用户名有误");
		}
	}
	else{
		alert("请先注册");
	}
}
function check(){
	if(sessionStorage.getItem("username")){
		alert("欢迎访问， "+sessionStorage.getItem("username").toString());
	}
	else{
		alert("请先登录");
		window.location.href="login.html";
	}
}
/*拖动*/
var myIcon=document.createElement("img");
myIcon.src="/img/1.jpg";
function drag(e){
	e.dataTransfer.effectAllowed="link";
	e.dataTransfer.setDragImage(myIcon,0,0);
	e.dataTransfer.setData("text/plain",e.target.id);
}
function drop(e){
	allowDrop(e)
	var data=e.dataTransfer.getData("text");
	if(e.target.tagName=="DIV"){
		e.target.appendChild(document.getElementById(data));
	}else if(e.target.tagName=="IMG"){
		e.parentNode.appendChild(document.getElementById(data));
	}
}
function allowDrop(e){
	e.preventDefault();
	e.stopPropagation();
}
/*轮播*/
window.onload = function(){
  var box=this.document.getElementsByClassName("lunbo")[0];
  var lik=box.getElementsByTagName("li");
  function fun(i,j){
    lik[i].style.opacity=1;
    lik[j].style.opacity=0;
  }
  fun(0,1);
  var i =0;
  function auto(){
    if(++i>=5){
      i=0;
      fun(0,4);
    }
    else fun(i,i-1);
  }
  timer=this.setInterval(auto,2000);
  var j =0;
}