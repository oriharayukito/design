$(function(){
    $(".menu-hover").each(function(){
        $(this).hover(
            function(){
            //ホバー時ただ表示
            $(this).find("ul.menu-child li").stop().slideDown();
        }, 
            function(){
            //ホバー時ただ消す
            $(this).find("ul.menu-child li").stop().slideUp();
        });
    });
});