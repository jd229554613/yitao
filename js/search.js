var search;
$(".header-search-container").find("input:first").keyup(function(){
	search=$(".header-search-container").find("input:first").val()
	localStorage.setItem('search',search);
})

$(".header-search-container").find("input:last").click(function(){
	window.open("search.html")
})
$.get(PRODUCT_HOST+GOODS,{search_text:localStorage.getItem('search')},function(result){
	var content = '';
	var list='';
	result.data.forEach(function(obj){
		content +="<div class='searchCSS'  data-id='"+obj.goods_id+"'><p>"+obj.goods_name+"</p><p><img src='"+obj.goods_thumb
                    +"' alt='"+obj.goods_name+"'></p><h3>￥<span>"+obj.price+"</span></h3><p>"+obj.goods_desc
                    +"</p></div>"
	})
	content==""?content="未找到相关商品":content=content;
	$(".search-list").append(content);
//  $(".search-name").append(list)
	
})
var gid;
$(document).on('click','.searchCSS',function(){
	 gid=$(this).data('id');
    $.get(PRODUCT_HOST+GOODS,{goods_id:gid},function (result) {
                       console.log(result.data);
                    var obj = '';
                    if (result.data.length==2 ||result.data.length==1){
                        obj = result.data[0];
                    }
                    var detail='';
                    detail=`
                        <div>
                            <h1>商品详情</h1>
                            <img src="${obj.goods_thumb}" alt=""> 
                            <div class="xiangqing">
                            <p>${obj.goods_name}</p>
                            <p>￥<span class="mm">${obj.price}</span></p>
                            <p>${obj.goods_desc}</p>
                            <div class='butt'><button class='less'>-</button><input class='good-num' type='text'  value='1'/><button class='add' >+</button></div>
                            </div>
                        </div><div class='good-buy'>立即购买</div> <div class='good-car'>加入购物车</div>
                    `;
                   $('.search-list').html(detail); 
                   var money=obj.price
                   $('.less').click(function(){
                    var i=$(this).next().val();
                    i==1?i=2:i=i;
                    $(this).next().val(i-1)	
                    console.log(i-1)
                   $(".mm")[0].innerHTML=money*(i-1)+".00"
                    
                   })
                    $('.add').click(function(){
                    var i=$(this).prev().val();
                    i==10?i=9:i=i;
                    var m2= $(this).prev().val( parseInt(i)+1)
                    $(".mm")[0].innerHTML=money*(parseInt(i)+1)+".00"
                   })
                    });
                    });
                    
                   
                    $(document).on("click",".good-car",function(){
                    	alert(0)
                    	var url = "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.getItem("token");
                        var parm = {goods_id:gid,number:$(".good-num").val()};
                        $.post(url,parm,function (result) {
                        alert(result.message);
                        console.log(result.data);});
                         })
                    	
                    	
                    	
                  
                 	
//$('.search-list').click(function () {
//			var i=this.firstChild;
//			var i1=this.firstChild.nextSibling;
//			var i2=this.firstChild.nextSibling.nextSibling;
//			var i3=this.firstChild.nextSibling.nextSibling.nextSibling;
//		    var s=$("<div class='s'></div>")	
//		    var s1=$("<div class='s1'></div>")
//			var i4=$("<div class='butt'><button class='less'>-</button><input class='good-num' type='text'  value='1'/><button class='add' >+</button></div>")
//		    var i5=$("<div class='good-buy'>立即购买</div>")
//		    var i6=$("<div class='good-car'>加入购物车</div>")
////			console.log(this)
////			console.log(this.firstChild.innerText)
////			console.log(this.firstChild.nextSibling)
////			console.log(this.firstChild.nextSibling.nextSibling)
//			$(".search-list").html(i1);
//			s.append(i);
//			s.append(i3);
//			s.append(i2);
//			s.append(i4);
//			s1.append(i5);
//			s1.append(i6);
//			$(".search-list").append(s);
//			$(".search-list").append(s1);
//	            i.className="good-name1"
//	            i1.className="good-pic"
//	            i2.className="good-pr"
//	            i3.className="good-name2"
//	           var danjia=i2.lastChild.innerHTML
//	          i4.children().first().click(function(){
//	          this.nextSibling.value--;
//	          this.nextSibling.value==0?this.nextSibling.value=1:this.nextSibling.value=this.nextSibling.value;
//	          this.parentNode.previousElementSibling.innerHTML="￥<span>"+(danjia*this.nextElementSibling.value)+".00</span>"
//	          })
//            i4.children().last().click(function(){
//	          this.previousSibling.value++;
//	          this.previousSibling.value==11?this.previousSibling.value=10:this.previousSibling.value=this.previousSibling.value;
////	          console.log(this.previousElementSibling.value)
//	          this.parentNode.previousElementSibling.innerHTML="￥<span>"+(danjia*this.previousSibling.value)+".00</span>"
////	          this.parent.previousSibling.innerHTML="￥"+（obj.price*this.previousSibling.value)
//	          })
////              var gid = $(this).data('id'); //专门用于获取data-*扩展属性的值
////                 console.log(gid);
////              // location.href = 'html/detail.html?goods_id='+gid;
////              $.get(PRODUCT_HOST+GOODS,{goods_id:gid},function (result) {
//////                     console.log(result.data);
////                  var obj = '';
////                  if (result.data.length==2 ||result.data.length==1){
////                      obj = result.data[0];
////                  }
////                  console.log(obj);
////                  var detail = '';
////                  detail=`
////                      <div>
////                          <h1>商品详情</h1>
////                          <img src="${obj.goods_thumb}" alt="">            
////                      </div>
////                  `;
////                  $('.goods-container').html(detail);
////              });
//                
//          });
		
	


