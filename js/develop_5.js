function datepickerInit(){
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $('.datepiker-kalendar').datepicker($.extend({
        dateFormat: 'mm/yy',
        showOtherMonths: true,
        selectOtherMonths: true,
        onSelect: function(dateText, inst) {
            $('.choseDate').val(dateText);
            setTimeout(function(){searchInDatepicker();},0);
        },
    },
     $.datepicker.regional['ru']
   ));
}

function searchInDatepicker(){
    var mounth = $('.ui-datepicker-calendar tr:nth-child(2) td').data('month');
    var indexElem = null;
    for(var i=0;i<calendar.length;i++){
        if(mounth == calendar[i].mounthNum){
            indexElem = i;
            break;
        }
    }
    if(indexElem!= null){
        for(var i=0;i<calendar[indexElem].mounthDays.length;i++){
            var date = calendar[indexElem].mounthDays[i].dayNum;
            if(calendar[indexElem].mounthDays[i].dayType=='sorry'){
                $('.ui-datepicker-calendar td:not(.ui-state-disabled)').eq(date-1).addClass('engaged');
            }
        }
    }
};

function sinhTableWithCalendar(){
    var timerId = null;
    searchInDatepicker();
    $(document).on('click','.ui-datepicker-next, .ui-datepicker-prev',function(){
        clearTimeout(timerId);
        timerId = setTimeout(
            function(){
                searchInDatepicker();
            },300
        );
    });
};


jQuery(document).ready(function($) {
    datepickerInit();
    sinhTableWithCalendar();
});