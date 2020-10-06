function Area_Rectangle(length, breadth) {
    return (length * breadth).toFixed(2);
}
function Area_Square(side) {
    return (side * side).toFixed(2);
}
function Area_Triangle(length, breadth) {
    return (length * breadth * 0.5).toFixed(2);
}
console.log("The Surface area of Rectangle is: " + Area_Rectangle(10.50, 30.08));
console.log("The Surface area of Square is: " + Area_Square(40.56));
console.log("The Surface area of Triangle is: " + Area_Triangle(20.48, 30.34));
