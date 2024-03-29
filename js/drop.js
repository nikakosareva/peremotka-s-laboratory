$(function(){
    var $allthings = $(".allthings"),
    $mainphoto = $(".mainphoto");
    
    $mainphoto.droppable({
        accept: ".allthings > .all",
        drop: function(event, ui){
         deleteImage(ui.draggable);
        }
    });
    
    function deleteImage($item){
        (function($) {
            $item.addClass("item");
            $(".item")
        })(jQuery);
        $item.fadeOut(function(){
        var $list = $(".item", ".pants", ".guy", ".hand", ".camera", ".foot", ".hat", ".circle", ".man", ".mainphoto",).length
        $(".item", ".pants", ".guy", ".hand", ".camera", ".foot", ".hat", ".circle", ".man", ".mainphoto",);
        $(this).removeAttr("");
        $(this).appendTo(".mainphoto");
        $(this).removeClass("item");
        $(this).css({'top':'8vw', 'left':'7vw', 'animation':'none'});
        $(this).addClass("placed");
        })
    }
    });