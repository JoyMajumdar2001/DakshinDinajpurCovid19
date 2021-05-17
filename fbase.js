var firebaseConfig = {
    apiKey: "AIzaSyC4wniOZoqWA5i8CP2Ls38mBIsPi_D-IiQ",
    authDomain: "ddinajpurcovid19.firebaseapp.com",
    projectId: "ddinajpurcovid19",
    storageBucket: "ddinajpurcovid19.appspot.com",
    messagingSenderId: "976051339905",
    appId: "1:976051339905:web:8e927c43f5dbc3995a4380",
    measurementId: "G-J6MENSHFNT"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
var docRef = db.collection("hospitals").doc("bh");
docRef.get().then((doc) => {
    if (doc.exists) {
        document.getElementById("tmen").innerHTML = doc.data().tmen;
        document.getElementById("vmen").innerHTML = doc.data().vmen;

        document.getElementById("twomen").innerHTML = doc.data().twomen;
        document.getElementById("vwomen").innerHTML = doc.data().vwomen;

        document.getElementById("tuni").innerHTML = doc.data().tuni;
        document.getElementById("vuni").innerHTML = doc.data().vuni;

        document.getElementById("total").innerHTML = doc.data().total;
        document.getElementById("vacant").innerHTML = doc.data().vacant;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var docRef = db.collection("hospitals").doc("gp");
docRef.get().then((doc) => {
    if (doc.exists) {
        document.getElementById("tmen1").innerHTML = doc.data().tmen;
        document.getElementById("vmen1").innerHTML = doc.data().vmen;

        document.getElementById("twomen1").innerHTML = doc.data().twomen;
        document.getElementById("vwomen1").innerHTML = doc.data().vwomen;

        document.getElementById("tuni1").innerHTML = doc.data().tuni;
        document.getElementById("vuni1").innerHTML = doc.data().vuni;

        document.getElementById("total1").innerHTML = doc.data().total;
        document.getElementById("vacant1").innerHTML = doc.data().vacant;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var docRef = db.collection("safehomes").doc("yh");
docRef.get().then((doc) => {
    if (doc.exists) {
        document.getElementById("tmen2").innerHTML = doc.data().tmen;
        document.getElementById("vmen2").innerHTML = doc.data().vmen;

        document.getElementById("twomen2").innerHTML = doc.data().twomen;
        document.getElementById("vwomen2").innerHTML = doc.data().vwomen;

        document.getElementById("tuni2").innerHTML = doc.data().tuni;
        document.getElementById("vuni2").innerHTML = doc.data().vuni;

        document.getElementById("total2").innerHTML = doc.data().total;
        document.getElementById("vacant2").innerHTML = doc.data().vacant;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var docRef = db.collection("safehomes").doc("bi");
docRef.get().then((doc) => {
    if (doc.exists) {
        document.getElementById("tmen3").innerHTML = doc.data().tmen;
        document.getElementById("vmen3").innerHTML = doc.data().vmen;

        document.getElementById("twomen3").innerHTML = doc.data().twomen;
        document.getElementById("vwomen3").innerHTML = doc.data().vwomen;

        document.getElementById("tuni3").innerHTML = doc.data().tuni;
        document.getElementById("vuni3").innerHTML = doc.data().vuni;

        document.getElementById("total3").innerHTML = doc.data().total;
        document.getElementById("vacant3").innerHTML = doc.data().vacant;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});