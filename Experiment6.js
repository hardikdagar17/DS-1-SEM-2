document.getElementById("btn1").onclick = function() {
    document.getElementById("heading").innerText = document.getElementById("inputBox").value || "No Text Entered";
};
document.getElementById("btn2").onclick = function() {
    document.body.style.backgroundColor = "black";
};

document.getElementById("btn3").onclick = function() {
    document.getElementById("heading").style.fontSize = "40px";
};

document.getElementById("btn4").onclick = function() {
    document.getElementById("para").style.display = document.getElementById("para").style.display === "none" ? "block" : "none";
};

document.getElementById("btn5").onclick = function() {
    document.getElementById("heading").innerText = "This is a Heading";
    document.getElementById("heading").style.fontSize = "24px";
    document.body.style.backgroundColor = "white";
    document.getElementById("para").style.display = "block";
    document.getElementById("inputBox").value = "";
};