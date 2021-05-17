var today = new Date();
var ddd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = ddd + '-' + mm + '-' + yyyy;
var xmlhttp1 = new XMLHttpRequest();
var url = "https://api.covid19india.org/v4/min/data.min.json";

xmlhttp1.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr1 = JSON.parse(this.responseText);
        myFunction(myArr1);
    }
};
xmlhttp1.open("GET", url, true);
xmlhttp1.send();

function myFunction(arr1) {
    var dd1 = arr1["WB"]["districts"]["Dakshin Dinajpur"]["total"];
    document.getElementById("vacNo").innerHTML = "Total Vaccinated : " + dd1.vaccinated;
}

var xmlhttp2 = new XMLHttpRequest();
var url2 = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=716&date=" + today;

xmlhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr2 = JSON.parse(this.responseText);
        myFunction2(myArr2);
    }
};
xmlhttp2.open("GET", url2, true);
xmlhttp2.send();

function myFunction2(arr2) {
    var lst = arr2["centers"];
    var i;
    var temp = "";
    for (i = 0; i < lst.length; i++) {
        temp += "<tr>";
        temp += "<td>" + lst[i].name + "</td>";
        temp += "<td>" + lst[i].block_name + "</td>";
        temp += "<td>" + lst[i].sessions[0].vaccine + "</td></tr>";
    }
    document.getElementById("tbd").innerHTML = temp;
}

function myFunctionPress() {
    var xmlhttp3 = new XMLHttpRequest();
    var x = document.getElementById("pincode").value;
    var url3 = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=" + x + "&date=" + today;

    xmlhttp3.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var my = JSON.parse(this.responseText);
            myFunction3(my);
        }
    };
    xmlhttp3.open("GET", url3, true);
    xmlhttp3.send();

    function myFunction3(arr3) {
        var lst1 = arr3["centers"];
        console.log(lst1);
        var i1;
        var temp1 = "";
        for (i1 = 0; i1 < lst1.length; i1++) {
            temp1 += "<tr>";
            temp1 += "<td>" + lst1[i1].name + "</td>";
            temp1 += "<td>" + lst1[i1].block_name + "</td>";
            temp1 += "<td>" + lst1[i1].sessions[0].vaccine + "</td></tr>";
        }
        document.getElementById("tbd").innerHTML = temp1;
    }
}