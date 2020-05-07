// function who returns the area of a surface in m2
function calcSurface(length, width) {

    let result = length * width;
    return  "The area is " + result + " m2";

}
show(calcSurface(4, 5));    // The area is 20 m2
show(calcSurface(10, 7));   // The area is 70 m2
show(calcSurface(3, 9));    // The area is 27 m2
show(calcSurface(12, 16));  // The area is 192 m2
