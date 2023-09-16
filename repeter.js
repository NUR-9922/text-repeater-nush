function myFunction() {
    let input_text = document.getElementById("input-text").value;
    let input_num = document.getElementById("input-number").value;
    var c = document.getElementById("select_oparator").value;

    let output_val = "";
    if( c == "<br>" ){
    for (let a = 1; a <= input_num; a++) {
        output_val += input_text +"&nbsp" + c ;
    }

    document.getElementById("text").innerHTML = output_val;
}

 else if ( c == "<i>" ){
    for (let a = 1; a <= input_num; a++) {
        output_val += input_text +"&nbsp" + c ;
    }

    document.getElementById("text").innerHTML = output_val;
}
else if ( c == "<b>" ){
    for (let a = 1; a <= input_num; a++) {
        output_val += input_text +"&nbsp" + c ;
    }

    document.getElementById("text").innerHTML = output_val;
}
else if ( c == "<u>" ){
    for (let a = 1; a <= input_num; a++) {
        output_val += input_text +" &nbsp &nbsp &nbsp" + c ;
    }

    document.getElementById("text").innerHTML = output_val;
}

}