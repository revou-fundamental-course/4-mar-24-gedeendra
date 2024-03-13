function bmiCalculation ()  {
    // variable
    let bmiWeight = document.getElementById("bmiWeight").value;
    let bmiHeight = document.getElementById("bmiHeight").value;

    // calculate BMI
    bmiResult = bmiWeight / ((bmiHeight / 100)*(bmiHeight / 100))
    
    // Upload the result to html
    document.getElementById("bmi-value").innerHTML = bmiResult.toFixed(1);
    
    // Upload another details to html based on the criteria
    if (bmiResult < 18.5) {
        document.getElementById("category-one").innerHTML = "Underweight";
        document.getElementById("category-two").innerHTML = "You are underweight.";
        document.getElementById("category-three").innerHTML = "BMI result < 18.5";
        document.getElementById("category-four").innerHTML = "You are in the underweight category.";
        document.getElementById("category-five").innerHTML = "Contact a doctor for advice on proper nutrition and diet to improve health.";
        document.getElementById("category-six").innerHTML = "Low weight can lead to various health problems:";
        document.getElementById("category-seven").innerHTML = "Infertility";
        document.getElementById("category-eight").innerHTML = "Anemia";
        document.getElementById("category-nine").innerHTML = "Osteoporosis";
        document.getElementById("category-ten").innerHTML = "Weak Immune System";
    } else if (bmiResult >= 18.5 && bmiResult < 25) {
        document.getElementById("category-one").innerHTML = "Normal";
        document.getElementById("category-two").innerHTML = "You have an ideal weight. Good job!!";
        document.getElementById("category-three").innerHTML = "BMI result between 18.5 and 25";
        document.getElementById("category-four").innerHTML = "You are in the normal weight category.";
        document.getElementById("category-five").innerHTML = "Keep maintaining your weight and balance your diet and physical activity.";
    } else if (bmiResult >= 25 && bmiResult < 30) {
        document.getElementById("category-one").innerHTML = "Overweight";
        document.getElementById("category-two").innerHTML = "You have an overweight.";
        document.getElementById("category-three").innerHTML = "BMI result between 25 and 30";
        document.getElementById("category-four").innerHTML = "You are in the overweight category.";
        document.getElementById("category-five").innerHTML = "The best way to lose weight is by regulating calorie intake and exercising. If your BMI falls into this category, it is recommended to reduce weight to normal levels.";
        document.getElementById("category-six").innerHTML = "Some diseases related to obesity:";
        document.getElementById("category-seven").innerHTML = "Diabetes";
        document.getElementById("category-eight").innerHTML = "Hypertension";
        document.getElementById("category-nine").innerHTML = "Heart Disease";
        document.getElementById("category-ten").innerHTML = "Osteoarthritis";
    } else {
        document.getElementById("category-one").innerHTML = "Obesity";
        document.getElementById("category-two").innerHTML = "You are in the obesity category.";
        document.getElementById("category-three").innerHTML = "BMI result is over 30.";
        document.getElementById("category-four").innerHTML = "You are in the obesity category.";
        document.getElementById("category-five").innerHTML = "Strive to lose weight and adopt a healthy lifestyle by watching your diet and engaging in physical activity. Visit a doctor soon for further health checks to assess the risks associated with your weight.";
        document.getElementById("category-six").innerHTML = "Some diseases related to obesity:";
        document.getElementById("category-seven").innerHTML = "Diabetes";
        document.getElementById("category-eight").innerHTML = "Hypertension";
        document.getElementById("category-nine").innerHTML = "Heart Disease";
        document.getElementById("category-ten").innerHTML = "Osteoarthritis";
    }
}