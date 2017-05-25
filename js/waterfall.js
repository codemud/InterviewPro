(function() {
	// // 父级对象
	// var oParent=document.getElementById('main');
	// // 获取存储块框pin的数组aPin
	// var aPin=getClassObj(oParent,pin);
	// //获取-每行中能容纳的块框个数-num【窗口宽度除以一个块框宽度】
	// var num=Math.floor(document.documentElement.clientWidth/aPin[0].offsetWidth);
	// //用cssText属性为父级main添加居中样式：定宽+自动水平外边距
	// oParent.style.cssText= 'width:' +iPinW*num+ 'px;margin:0 auto;';
	// function getClassObj(parent,className){
 //       var obj=parent.getElementsByTagName( '*' ); //获取 父级的所有子集
 //       var pinS=[]; //创建一个数组 用于存储类为className的元素
 //       for( var   i=0;i<obj.length;i++) { //遍历子集、判断类名、压入数组
 //           if(obj[i].className==className)
 //               pinS.push(obj[i]);
 //       };
 //       return pinS;
	//  }
		var windowWidth;
		var w = 250;
		var w = document.documentElement.clientWidth;//获取页面可见高度 
		var boxW = Math.floor(w/100);//每1%所指定宽度
		window.onload=function(){  
             changeDivHeight();  
        }  
        //当浏览器窗口大小改变时，设置显示内容的高度  
        window.onresize=function(){  
             changeDivHeight();  
        }  

        function changeDivHeight(){ 
            // var boxW = Math.floor(w/100);
            // console.log(w)
            document.getElementById("main").style.width=w-(boxW*39)+"px";
            windowWidth = w-(boxW*39);
            console.log(windowWidth)
		}

		//每行中能容纳的展示框个数【窗口宽度除以一个块框宽度】
		var cols = Math.floor((w-(boxW*39))/250);
		console.log(cols)
		//给ul设置定位为relative，下面的每个li设置为absolute，
		//  然后去掉margin-bottom与margin-right，然后通过设置left与top来控制每个的li位置

		//1.获取到ul下所有的li，然后给对应的li添加样式

		
		

		//取得展示框对象
    	// var $boxs = $("#main>div");
	    // //给最外围的main元素设置宽度和外边距
	    // $('#main').width(w*cols).css('margin','o auto');
	    // //用于存储 每列中的所有块框相加的高度。
	    // var hArr=[];
	    // $boxs.each( function( index, value ){
	    //     var h = $boxs.eq( index).outerHeight();
	    //     if( index < cols ){
	    //         hArr[ index ] = h; //第一行中的num个块框 先添加进数组HArr
	    //     }else{
	    //         var minH = Math.min.apply( null, hArr );//数组HArr中的最小值minH
	    //         var minHIndex = $.inArray( minH, hArr );
	    //         $( value).css({
	    //             'position':'absolute','top':minH+'px', 'left':minHIndex*w + 'px'
	    //         });
	    //         //数组 最小高元素的高 + 添加上的展示框[i]块框高
	    //         hArr[ minHIndex ] += $boxs.eq( index).outerHeight();//更新添加了块框后的列高
	    //     }
	    // });

})();