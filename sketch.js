var house = {
    x: 100, // was houseX
    y: 300, // was houseY
    width: 200, // was houseWidth
    height: 200, // etc.
    roofHeight: 100,
    draw: function() {
        this.drawStructure();
        this.drawRoof();
    },
    drawStructure: function() {
        rect(this.x, this.y, this.width, this.height); // Draw a structure
    },
    drawRoof: function() {
        var leftEaves = {
        x: this.x - 10,
        y: this.y
      };
      var roofPoint = {
        x: this.width / 2 + this.x,
        y: this.y - this.roofHeight
      };
      var rightEaves = {
        x: this.x + this.width + 10,
        y: this.y
      };
      triangle(leftEaves.x, leftEaves.y, roofPoint.x, roofPoint.y, rightEaves.x, rightEaves.y);
    }
};

function setup () {
    createCanvas(600, 600);

    house.draw();
    house.x = house.x + 250;
    house.draw();
}

function draw() {

}
