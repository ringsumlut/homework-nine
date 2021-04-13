import * as MODEL from "../model/model.js";

function init() {
    let currentBackgroundImage = "home";
    let currentInfoImage = "info";

    $("nav a").click(function(e) {
        let btnID = this.id;
        let contentID = btnID + "Content";

        $(".hero")
        .removeClass(`${currentBackgroundImage}-hero-image`)
        .addClass(`${btnID}-hero-image`);
        currentBackgroundImage = btnID;

       

        //$(".hero").css("background-image", " url(../images/cat.jpg)");
        $(".hero-content .page-name").html(btnID);

        MODEL.getPageContent(contentID);

        
    });
    $('.navbar a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
         });
}


$(document).ready(function() {
    init();
    MODEL.getPageContent("homeContent");
});
