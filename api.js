var xmlhttp = new XMLHttpRequest();
var url = "https://api.covid19india.org/v4/min/data.min.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var dd = arr["WB"]["districts"]["Dakshin Dinajpur"]["total"];
    var tdata = arr["WB"]["districts"]["Dakshin Dinajpur"]["delta"];
    if (tdata == null) {
        document.getElementById("ac01").innerHTML = dd.confirmed;
        document.getElementById("rc01").innerHTML = dd.recovered;
        document.getElementById("dc01").innerHTML = dd.deceased;
    } else {
        document.getElementById("ac01").innerHTML = dd.confirmed + "<h5>+" + tdata.confirmed + "</h5>";
        document.getElementById("rc01").innerHTML = dd.recovered + "<h5>+" + tdata.recovered + "</h5>";
        document.getElementById("dc01").innerHTML = dd.deceased + "<h5>+" + tdata.deceased + "</h5>";
    }
}