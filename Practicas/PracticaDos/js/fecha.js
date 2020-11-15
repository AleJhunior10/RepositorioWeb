$(function () {
    $('input[name="nacimiento"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1990,
        maxYear: parseInt(moment().format('YYYY'), 10)
    }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        $("#validacion").text("Tu tienes " + years + " años");
    });
});