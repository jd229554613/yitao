//为了防止其他插件与jQuery重名 可以通过noConflict找到jQuery对象重新更改表示jQuery的符号
var $=jQuery.noConflict();
(function(){
	function Login(success){this.showLogin(success);};
	Login.prototype.showLogin=function(success){
		var loginContainer=$("<div class='loginContainer'></div>");
		var closeButton=$("<p>关闭</p>");
		var usrnameInput=$("<p><input type='text' placeholder='用户名' /></p>");
		var passwordInput=$("<p><input type='password' placeholder='密码' /></p>");
		var loginButton=$("<p><button>登录</button></p>");
		loginContainer.css(
			{width: "400px",height: "300px",
			"background-color": "#912020",border: "5px solid #ffd42e",
			position: "absolute",top: "50%",left: "50%",
			"box-sizing":"border-box","margin":"-150px -200px"}
		)
		closeButton.css({float:"right",color:"white",padding:"5px"})
		var inputcss={padding:"20px 0",margin:"0 auto",width:"300px","text-align":"center"};
		passwordInput.css(inputcss);
		usrnameInput.css(inputcss);
		loginButton.css(inputcss);
		closeButton.click(function(){
			loginContainer.fadeOut(300,"swing",function(){
				loginButton.remove();
			});
		})
		loginButton.click(function(){
			$.post(
				PRODUCT_HOST+LOGIN,
				{status:"login",username:usrnameInput.children().val(),password:passwordInput.children().val()},
				function(data){
					console.log(data)
					if(data.code==0){
						loginContainer.slideUp(500,function(){
							loginContainer.remove()
						success(data.data);	
						});
					}else{
						alert(data.message);
					}
				}
			);
		});
		loginContainer.append(closeButton);
		loginContainer.append(usrnameInput);
		loginContainer.append(passwordInput);
		loginContainer.append(loginButton);
		$(document.body).append(loginContainer);
	}
	window.Login=Login;
})();

