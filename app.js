$('#currentDay').text(`
    ${moment().format('dddd, MMMM Do')}
`)


//var box9 = $('#9')
//var hour = $('.hour')

//console.log(timeNow)
//create all same class compare all of them to current time and then run
// function checkTime () {
//     if (parseInt(hour.attr('data-hour')) < timeNow) {
//         hour.removeClass('past present future')
//         hour.addClass('past')
//     } else if (parseInt(hour.attr('data-hour') === timeNow)) {
//         hour.removeClass('past present future')
//         hour.addClass('present')
//     } else {
//         hour.removeClass('past present future')
//         hour.addClass('future')
//     }
// }

// console.log(hour.attr('data-hour'))
// console.log(box9.attr('data-hour'))
// console.log(box9.attr('id'))

$('#9').val(localStorage.getItem('9'))
$('#10').val(localStorage.getItem('10'))
$('#11').val(localStorage.getItem('11'))
$('#12').val(localStorage.getItem('12'))
$('#13').val(localStorage.getItem('13'))
$('#14').val(localStorage.getItem('14'))
$('#15').val(localStorage.getItem('15'))
$('#16').val(localStorage.getItem('16'))
$('#17').val(localStorage.getItem('17'))

//checks time
var timeNow = parseInt(moment().format('HH'));

function checkTime () {
    for (i = 9; i <= 17; i++) {
        if (parseInt($(`#${i}`).attr('id')) < timeNow) {
            $(`#${i}`).removeClass('present future')
            $(`#${i}`).addClass('past')
        } else if (parseInt($(`#${i}`).attr('id')) === timeNow) {
            $(`#${i}`).removeClass('past future')
            $(`#${i}`).addClass('present')
        } else {
            $(`#${i}`).removeClass('past present')
            $(`#${i}`).addClass('future')
        }
    }
}

//create the local storage
$('.saveBtn').click(function() {
    let hellocentralgrader = $(this).siblings(`.description`).val()
    let givemeanA = $(this).siblings('.description').attr('id')
    localStorage.setItem(givemeanA, hellocentralgrader)
}) 

checkTime ()