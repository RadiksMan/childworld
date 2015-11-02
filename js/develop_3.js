function validationCall(form){

  var thisForm = $(form);
  var formSur = thisForm.serialize();

    $.ajax({
        url : thisForm.attr('action'),
        data: formSur,
        method:'POST',
        success : function(data){
            if ( data.trim()!='true') {
                thisForm.trigger("reset");
                popNext();
            }
            else {
               $(this).trigger('reset');
            }

        }
    });

    function popNext(){
    $.fancybox.open("#call_success",{
        padding:0,
        fitToView:false,
        wrapCSS:"call-popup",
        autoSize:true,
        afterClose: function(){
            clearTimeout(timer);
        }
    });
    var timer = null;

    timer = setTimeout(function(){
        $.fancybox.close("#call_success");
    },2000);
    $('form').trigger("reset");
}
}


$(document).ready(function(){
	validate('#portfolio-form', {submitFunction:validationCall});
	validate('#grafic-form', {submitFunction:validationCall});
	inputNumber('.phone');
});