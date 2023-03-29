$(".header_menu-box").click(function(){
    $(this).find(".header_menu").toggleClass("active");
    $(".header_bottom").toggleClass("active");
})

$(".header_search-m").click(function(){
    $(".header_searchForm-m").slideToggle(300);
    $(this).toggleClass("active");
})

$(".product-num_btn").click(function(){
    let productNum = parseInt($(this).parents(".product-num").find(".product-num_val").val());
    if($(this).hasClass("product-num_minus")) {
        if(productNum <= 0) {
            productNum = 0;
        }else {
            productNum = productNum - 1;
        }
    }else if($(this).hasClass("product-num_plus")) {
        productNum = productNum + 1;
    }
    $(this).parents(".product-num").find(".product-num_val").val(productNum);
})

let img;
$(".upload-memberPic").change(function(e) {
    img = $(this).parents(".member_name").find(".memberPic");
    readURL(e.target);
})
function readURL(input) {
    if(input.files && input.files[0]){
        let reader = new FileReader();
        reader.onload = function (e) {
            img.attr('src', e.target.result);
            img.css("opacity", "1");
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(".header_user-login").click(function(){
    $(this).find("nav").slideToggle(300);
})

$(document).click(function (event) {
    var area = $(".header_user-login");
    if (!area.is(event.target) && area.has(event.target).length === 0 && $(window).width()<992) {
        $(".header_user-login").find("nav").slideUp(300);
    }
});