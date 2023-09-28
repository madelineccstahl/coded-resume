// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25); 
var expression2 = (x > 50);

// Write Your JavaScript Code Here

if (expression1 && expression2) {
    console.log("True ✅ True ✅")
}   else if (expression1 && !expression2) { // can also just have expression1 by itself, since it's evaluating it as true or not
    console.log("True ✅ False ❌")
}   else if (expression2) { // we just need to know if expression2 is true by itself, we know !expression1 is false b/c its reversed?
    console.log("False ❌ True ✅")
}   else if { // don't even need either
    console.log("False ❌ False ❌")
}
