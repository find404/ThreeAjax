				
        //主题部分。
        var ThreeAjax = {
		Interactive : [],
		Send	: (function(){
			     var Url		= (this.Interactive[0].Url==undefined) 		? window.location.pathname : this.Interactive[0].Url;
			     var Operation   = (this.Interactive[0].Operation==undefined)    ? 'post'				   : this.Interactive[0].Operation;
				$[Operation](Url, this.Interactive[0],function(data) {
				if(data){
					if(data.ret==100){
						ThreeAjax.Interactive[1](data);
					}else{
						if(ThreeAjax.Interactive[3]==undefined){
								alert('数据有误');
						}else{
								ThreeAjax.Interactive[3];
						}
					}
				}else{
					if(ThreeAjax.Interactive[3]==undefined){
						alert('网络有误！');
					}else{
						ThreeAjax.Interactive[3];
					}
				}
				});
				})
				};
        
        
        //调用    eg:
        //数据准备层
        	ThreeAjax.Interactive.push({
			'order': 'goods_id',
			'page':1,
			'page_size':20,
			'desc':'desc',
			'Url' : '/Goods/goodsData'
						});
            
         //成功页面调用层
           ThreeAjax.Interactive.push(function(data){
                var html = '';
                if($.isEmptyObject(data.data.data) == false){
                  $.each(data.data.data ,function(k ,v) {
                    if(v){
                      html += '<li class="col-2">';
                      html += '</li>';
                    }
                  })
                    $('.ajax_goods_list').html(html);
                }else{
                    $('.ajax_goods_list').html('没有了~~');
              }
            }
  );
