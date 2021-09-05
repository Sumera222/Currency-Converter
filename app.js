function Currency(){
    y = document.getElementById("converter").value;
    return y;
}

function Calculate(){
y = Currency();

x = document.getElementById("value1").value;

if(x == ""){
    document.getElementById("value2").value = "";
}else{
    switch(y){
        case "US Dollar":
            document.getElementById("value2").value = x * 161.40;
        break;

        case "Euro":
            document.getElementById("value2").value = x * 190.90;
        break;

        }
}
}
