function calcSurfaceCircle(radius) {

    this.radius = radius;
    this.area = function () // area method
    {
        return Math.PI * this.radius * this.radius;
    };

}
let c = new calcSurfaceCircle(8);
console.log('The area is =', c.area().toFixed(2), 'm2');
