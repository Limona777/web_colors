function register(){
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	var repwd=document.getElementById("repassword").value;
	if(username==""){
		alert("用户名不能为空");
		return false;
	}
	if(pwd==""){
		alert("密码不能为空");
		return false;
	}
	if(repwd!=pwd){
		alert("两次密码不一致");
		return false;
	}
	else{
		localStorage.setItem("uname",username);
		localStorage.setItem("pwd",pwd);
		alert("注册成功");
	}
	window.location.href="login.html";
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
