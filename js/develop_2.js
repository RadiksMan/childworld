function initFancyBox () {
    $('.box-imges>a').fancybox({
            fitToView: true,
            autoSize:false
    });
}

$(document).ready(function() {
    initFancyBox();
});