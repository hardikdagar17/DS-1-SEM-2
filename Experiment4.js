function calculateResult(){

    let subjects = parseInt(prompt("Enter number of subjects"));

    let total = 0;

    for(let i = 1; i <= subjects; i++){
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        total = total + marks;
    }

    let average = total / subjects;

    let grade;
    let result;

    if(average >= 90){
        grade = "A";
    }
    else if(average >= 75){
        grade = "B";
    }
    else if(average >= 50){
        grade = "C";
    }
    else{
        grade = "F";
    }

    if(average >= 40){
        result = "PASS";
    }
    else{
        result = "FAIL";
    }

    document.getElementById("result").innerHTML =
    "Total Marks: " + total + "<br>" +
    "Average Marks: " + average + "<br>" +
    "Grade: " + grade + "<br>" +
    "Result: " + result;
}