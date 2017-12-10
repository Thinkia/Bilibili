/*
重要性: 安全…………  
canvas: 画布
floor: 向下取整   2.2  -〉2     5.7-〉5
random:  (0,1)

普通验证：char
算数验证：
滑动验证：

邮箱验证：   simple mail协议；
手机短信验证：  中国网建api；



随机数  伪    

时间戳：   1970 1 1      秒数；
北京时间         时间戳+8*60*60；

时间戳%7；



*/

function showCheck(a){
	var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
	ctx.clearRect(0,0,600,800);
	ctx.font = "100px 'Microsoft Yahei'";
	ctx.fillText(a,0,100);
	ctx.fillStyle = "white";
}
var code ;    
function createCode(){       
    code = "";      
    var codeLength =2;
    var selectChar = new Array('长','亭','忆','卿','重','折','柳');      
    for(var i=0;i<codeLength;i++) {
       var charIndex = Math.floor(Math.random()*7);      
       code +=selectChar[charIndex];
    }      
    if(code.length != codeLength){      
      createCode();      
    }
    showCheck(code);
}
          
function validate () {
    var inputCode = document.getElementById("J_codetext").value.toUpperCase();
	
    var codeToUp=code.toUpperCase();
    if(inputCode.length <=0) {
      document.getElementById("J_codetext").setAttribute("placeholder","还没有输入验证码呢");
      createCode();
      return false;
    }
    else if(inputCode != codeToUp ){
      document.getElementById("J_codetext").value="";
      document.getElementById("J_codetext").setAttribute("placeholder","验证码不正确哦");
      createCode();
      return false;
    }
    else {
	  createCode();
      return true;
    }

}
