$(function() {
    let headerBurger = $("#headerBurger");
    let navAdd = $("#navAdd");
    let navRemove = $("#navRemove");

    navAdd.on("click", function(event){
        event.preventDefault();

        headerBurger.addClass("show");
    })

    navRemove.on("click", function(event){
        event.preventDefault();

        headerBurger.removeClass("show");
    })

});
