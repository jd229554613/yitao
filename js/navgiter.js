var $=jQuery.noConflict();
(function(){
	//现在导航栏上面的每一个按钮
	function NavgaterItem(obj){
		var obj=obj||{};
		this.name=obj.cat_name;
		this.id=obj.cat_id;
		this.item=$("<li>"+this.name+"</li>");
	}
	//click是自定义的属性
	NavgaterItem.prototype.itemClick=function(callback){
		this.item.on("click",this,callback);
		return this;
	};
	window.NavgaterItem=NavgaterItem;
	function Navigater(){
		
	}
	//
	Navigater.prototype.createView=function(url,superView,callback){
	$.get(url,function(result){
		console.log(result)
		if(result.code==0){
			result.data.forEach(function(obj){
				superView.append(new NavgaterItem(obj).itemClick(callback).item)
			})
		}
	});
	return this}
	window.Navigater=Navigater;
})()
