(function(){
	function GoodItem(obj) {
        this.des = obj;
        var space = 20;
        var colume = 5;
        var width = (1200-space*(colume-1))/colume;

        this.item = $("<div class='good-box' data-id='"+obj.goods_id+"'></div>");
        var name = $("<p class='good-name'>"+obj.goods_name
            +"</p>");
        var other = $("<p><img width='"+width+"px' src='"+obj.goods_thumb
                    +"' alt=''></p><h3>￥<span>"+obj.price+"</span></h3><p>"+obj.goods_desc
                    +"</p>");
        this.item.append(name);
        this.item.append(other);
        this.item.css({
            width:width+"px",
            height:"384px",
//          border:"2px #ff4411 solid",
            "box-sizing": "border-box",
            float:"left",
            overflow: "hidden",
            position: "relative",
            padding:"5px"
        });

        name.css({
            position: "absolute",
            height: "20px",
            "line-height": "20px",
            display: "none"
        });

        this.item.hover(function () {
            $(this).children().css("display","block");
        },function () {
            $(".good-name").css("display","none");
        });

    }

//	function GoodItem(obj){
//		console.log(obj)
//		this.des=obj ;
//		var width=(1200-20*4)/5;
//		this.item=$("<div><p class='good-name'>"+obj.goods_name+"</p><p><img width='"+width+"px' src='"+obj.goods_thumb+"'></p><h3>￥"+obj.price
//		+"</h3><p>"+obj.goods_desc+"</p></div>");
//		
//		
//	
//		this.item.css({
//			width:width+"px",
//			height:"384px",
//          border:"2px #ff4411 solid",
//          "box-sizing": "border-box",
//          float:"left",
//          overflow: "hidden",
//          position: "relative"
//		});
//		$(".good-name").css({
//			position: "absolute",
//          height: "20px",
//          "line-height": "20px",
//          display: "none"
//		})
//
//       this.item.hover(function () {
//          $(this).children().css("display","block");
//       },function () {
//          $(".good-name").css("display","none");
//       });

//         this.item.css({
//          width:width+"px",
//          height:"384px",
//          border:"2px #ff4411 solid",
//          "box-sizing": "border-box",
//          float:"left",
//          overflow: "hidden",
//          position: "relative"
//           });
//
//      $(".good-name").css({
//          position: "absolute",
//          height: "20px",
//          "line-height": "20px",
//          display: "none"
//      });
//}
//	
		
		
		
	GoodItem.prototype.click=function(callback){
		this.item.on("click",this,callback)
		return this;
	}
	function Good(url,parm,superView,action){
		this.loadData(url,parm,superView,action)
		
	}
	Good.prototype.loadData=function(url,parm,superView,action){
		$.get(url,parm,function(result){
			if(result.code==0){
				this.showGoodsView(result.data,superView,action);
			}
		}.bind(this));
	}
	Good.prototype.showGoodsView=function(goods,superView,action){
		goods.forEach(function(data){
		superView.append(new GoodItem(data).click(action).item)
		
		});
	
		$('.good-box').click(function () {
			
			var i=this.firstChild;
			var i1=this.firstChild.nextSibling;
			var i2=this.firstChild.nextSibling.nextSibling;
			var i3=this.firstChild.nextSibling.nextSibling.nextSibling;
		    var s=$("<div class='s'></div>")	
		     var s1=$("<div class='s1'></div>")
			var i4=$("<div class='butt'><button class='less'>-</button><input class='good-num' type='text'  value='1'/><button class='add' >+</button></div>")
		    var i5=$("<div class='good-buy'>立即购买</div>")
		    var i6=$("<div class='good-car'>加入购物车</div>")
		    
//			console.log(this)
//			console.log(this.firstChild.innerText)
//			console.log(this.firstChild.nextSibling)
//			console.log(this.firstChild.nextSibling.nextSibling)
			$(".shownew").html(i1);
			s.append(i);
			s.append(i3);
			s.append(i2);
			s.append(i4);
			s1.append(i5);
			s1.append(i6);
			$(".shownew").append(s);
			$(".shownew").append(s1);
	            i.className="good-name1"
	            i1.className="good-pic"
	            i2.className="good-pr"
	            i3.className="good-name2"
	           var danjia=i2.lastChild.innerHTML;
	           
	          i4.children().first().click(function(){
	          this.nextSibling.value--;
	          this.nextSibling.value==0?this.nextSibling.value=1:this.nextSibling.value=this.nextSibling.value;
	          this.parentNode.previousElementSibling.innerHTML="￥<span>"+(danjia*this.nextElementSibling.value)+".00</span>"
	          })
              i4.children().last().click(function(){
	          this.previousSibling.value++;
	          this.previousSibling.value==11?this.previousSibling.value=10:this.previousSibling.value=this.previousSibling.value;
//	          console.log(this.previousElementSibling.value)
	          this.parentNode.previousElementSibling.innerHTML="￥<span>"+(danjia*this.previousSibling.value)+".00</span>"
//	          this.parent.previousSibling.innerHTML="￥"+（obj.price*this.previousSibling.value)
	          })
//              var gid = $(this).data('id'); //专门用于获取data-*扩展属性的值
//                 console.log(gid);
//              // location.href = 'html/detail.html?goods_id='+gid;
//              $.get(PRODUCT_HOST+GOODS,{goods_id:gid},function (result) {
////                     console.log(result.data);
//                  var obj = '';
//                  if (result.data.length==2 ||result.data.length==1){
//                      obj = result.data[0];
//                  }
//                  console.log(obj);
//                  var detail = '';
//                  detail=`
//                      <div>
//                          <h1>商品详情</h1>
//                          <img src="${obj.goods_thumb}" alt="">            
//                      </div>
//                  `;
//                  $('.goods-container').html(detail);
//              });
                  
            });
		
	};
	   
      window.Good=Good;
})()
