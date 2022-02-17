(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
 */
$.extend($.validator.messages, {
	required: "*必须填写",
	remote: "*请修正此栏位",
	email: "*请输入有效的电子邮件",
	url: "*请输入有效的网址",
	date: "*请输入有效的日期",
	dateISO: "*请输入有效的日期 (YYYY-MM-DD)",
	number: "*请输入正确的数字",
	digits: "*只可输入数字",
	creditcard: "*请输入有效的信用卡号码",
	equalTo: "*你的输入不相同",
	extension: "*请输入有效的后缀",
	maxlength: $.validator.format("*最多 {0} 个字"),
	minlength: $.validator.format("*最少 {0} 个字"),
	rangelength: $.validator.format("*请输入长度为 {0} 至 {1} 之間的字串"),
	range: $.validator.format("*请输入 {0} 至 {1} 之间的数值"),
	max: $.validator.format("*请输入不大于 {0} 的数值"),
	min: $.validator.format("*请输入不小于 {0} 的数值")
});

}));



$(document).ready(function(){
    //提交表单
    $(function() {
	$("#myform").validate({
		rules: {
			email: {
				required:true,
				email:true,
			},
			uname:{
				required:true,
			},
			pwd: {
				required:true,
				minlength:6,
				maxlength:16,
			},
			repwd: {
				required:true,
				equalTo:"#pwd",
				minlength:6,
				maxlength:16,
			},
		},
		messages: {
			email: {
				required: "*这是必填字段",
				email:"*请输入正确的邮箱地址,如“666@com”"
			},
			uname:{
				required: "*这是必填字段",
			},
			pwd: {
				required: "*这是必填字段",
				minlength:"*最少六位",
				maxlength:"*最多十六位",
			},
			repwd: {
				equalTo:"请输入相同的密码",
				required: "*这是必填字段",
				minlength:"*最少六位",
				maxlength:"*最多十六位",
			},
		}
	})
})
    //提交按钮样式变化
    $("#registerBtn").mouseover(function(){
        $(this).attr("src","images/register_btn_over.gif");
    }).mouseout(function(){
        $(this).attr("src","images/register_btn_out.gif");
    });
    //省市级联
    var cityList = new Array();
    cityList['广东省'] = ['广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
    cityList['江西省'] = ['九江市','南昌市','上饶市','抚州市','宜春市','吉安市','赣州市'];
    cityList['广西省'] = ['柳州市','南宁市','河池市','百色市','桂林市'];
    cityList['其他'] = ['其他'];
    $("#province").append(function(){
        var html="";
        for (var i in cityList){
            html+="<option value="+i+">"+i+"</option>";
        }
        return $(html);
    });
    $("#province").change(function(){
        var v= $(this).val();
        var html="";
        if(v=="请选择省/城市"){
            html="<option>请选择城市/地区</option>";
            $("#city").html(html);
            return;
        }
        var citys=cityList[v];
        $.each(citys,function(i,n){
            html+="<option value="+n+">"+n+"</option>";
        });
        $("#city").html(html);
    });
});
//$(function(){
//	$("#myform").validate({
//			rules:{
//				email:{
//					required:true
//				},
//				nickName:{
//					required:true
//				},
//				pwd{
//					required:true,
//					checkpwd:true,
//				},
//				repwd:{
//					required:true,
//					equalTo:'#pwd',//当前值必须和id为upwd的元素一致
//				}
//			    },
//			    //自定义
//			    messages:{
//			    	email:{
//					    required:"邮箱不能为空"
//				    },
//				    nickName:{
//					    required:"昵称不能为空"
//				    },
//				    pwd{
//					    required:"密码不能为空"
//					    checkpwd:"密码必须是6位数字"
//				    },
//				    repwd:{
//					    required:"两次输入的密码不一致"
//					    equalTo:"两次密码不一致"//当前值必须和id为upwd的元素一致
//				}
//			  }
//			    
//			    
//		})
//})