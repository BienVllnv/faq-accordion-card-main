var answer = $(this).click(function(){
    $(this).addClass("show");
});

$("p").hide();

$("div.number-1").click(function(){
    $("p", this).addClass("answers")
    answer();
});

function answer(){
    $(".answers").show();
}