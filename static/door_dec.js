
$(document).ready(function(){
    console.log("READY")

    for (var i=0; i<names.length; i++) {
        make_div_for_name(names[i])
    }
    

    
});


names = ['Ecenaz']
colors = ['#ffff66', '#ff3399', '#0099ff']
// colors = ['#952a75', 'rgb(228, 7, 70)', '#FFC30F']
colors = ['rgb(245, 196, 48)', 'rgb(228, 7, 70)', '#0099ff']


function make_div_for_name(name) {
    var div = $("<div>")
    $(div).addClass('dec')
    // $(div).addClass('row')
    var letters = name.toLowerCase().split("")
    var name_row = $("<div>")
    $(name_row).html(name)
    $(name_row).addClass('name')
    $(div).append(name_row)

    var letter_row = $("<div>")
    for (var i=0; i< letters.length; i++) {
        if (letters[i] == " ") {

            continue
        }
        var img_div = $("<div>")
        var img_src = './static/asl_alph/'+ letters[i] + '.png';

        var img = $("<img>")
        $(img).attr('src', img_src)
        $(img).addClass('letter')
        $(img_div).append(img)
        $(img_div).addClass('letter_div')
        $(img_div).css('background-color', colors[i%3])
        $(letter_row).append(img_div)

    }
    $(div).append(letter_row)
    $("#container").append(div)
    // $("#container").append("<br>")
}

