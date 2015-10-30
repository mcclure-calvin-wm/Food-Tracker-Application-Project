function z(){
    var table = document.getElementById("saved");

    var inputFood = document.getElementsByName("Food")[0].value;
    var inputDescription = document.getElementsByName("Description")[0].value;
    var inputStart = document.getElementsByName("Date of purchase")[0].value;
    var inputEnd = document.getElementsByName("Date of Expiration")[0].value;

    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML= inputFood;
    cell2.innerHTML= inputDescription;
    cell3.innerHTML= inputStart;
    cell4.innerHTML= inputEnd;

    if(inputEnd < inputStart){
        row.style.backgroundColor = "red";
    } else {
        row.style.backgroundColor = "white";
    }
}