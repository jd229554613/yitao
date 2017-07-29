var url = "http://h6.duchengjiu.top/shop/api_cart.php";
    var parm = {token:localStorage.getItem("token")};
    
    $.get(url,parm,function(result){
    	console.log(result.data)
    	var content="";
    	result.data.forEach(function(obj){content +=`<div class="che" data-id=${obj.goods_id}> <input type="checkbox" /><img src="${obj.goods_thumb}"width="100px"height="100px"/>
    	<span >${obj.goods_name}</span>
    	<a><button class="jian">-</button><input type="text" value="${obj.goods_number}" /><button class="jia">+</button></a>
    	<b class="mm">小计${obj.goods_price}</b><a class="delit">删除</a></div>`
    	 money=obj.goods_price})
    	$(".gouwu").append(content)
    }
    );
    $(document).on('click','.jian',function(){
                    var i=$(this).next().val();
                    i==1?i=2:i=i;
                    $(this).next().val(i-1)	
                    console.log(i-1)
                    console.log($("this").parent().next())
                  $(this).parent().next().html("小计"+parseInt(money*(i-1))+".00")
                   })
   $(document).on('click','.jia',function(){
                    var i=$(this).prev().val();
                   i==10?i=9:i=i;
                    $(this).prev().val(parseInt(i)+1)	
                  console.log(i)
                   $(this).parent().next().html("小计"+parseInt(money*(parseInt(i)+1))+".00")
                   })
   $(document).on('click','.delit',function(){
   	var url = "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.getItem("token");
              var parm = {goods_id:$(this).parent().data("id"),number:0};
             $.post(url,parm,function (result) {
             alert(result.message);
       $(this).parent().remove();
       }.bind(this));
       
   	
   })
