function init(){
	//顶部登录
	$(".header-top-login").click(function(){
	new Login(function(user){
		$(".header-top-menu ul li:first-child").first().html("<a href='#'>"+user.username+"</a>")
	 });
	});
	//左侧登录
	$(".right-course-login").click(function(){
	new Login(function(user){
		$(".header-top-menu ul li:first-child").first().html("<a href='#'>"+user.username+"</a>")
	 });
	});
	//导航
	new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".mian-nav-container"),function(event){
		$('.goods-container').html('')
 	    new Good(PRODUCT_HOST+GOODS,{cat_id:event.data.id,page:1,pagesize:10},$(".goods-container"),function (event) {
        console.log(event.data);}); }
	);
	new corouselView.Corouse("#left-course",
    [{imagePath:"image/header/hot1.jpg"},
    {imagePath:"image/header/hot2.jpg"}],200,400).
putSuperView().createControlButton().startTimer(3*1000)
new corouselView.Corouse("#center-course",
    [{imagePath:"image/header/TB1BunHRVXXXXagaXXXXXXXXXXX-750-340.jpg"},
    {imagePath:"image/header/TB1jT3mRVXXXXXnXXXXXXXXXXXX-750-340.jpg"}],742,400).
putSuperView().startTimer(2*1000)

new Good(PRODUCT_HOST+GOODS,null,$(".goods-container"),function(event){
//	console.log(event.data);
});

//new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function(event){
// 	
//  );      
        
 

}
init();