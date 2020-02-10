function whatCanIDrink(age) {
    if(age < 10) {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
    if(age < 18) {
        return "Drink Toddy";
    }
    if(age < 18) {
        return "Drink Coke";
    }
    if(age < 21) {
        return "Drink Beer";
    }
    if(age < 130) {
        return "Drink Whiskey";
    }
    else {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
};