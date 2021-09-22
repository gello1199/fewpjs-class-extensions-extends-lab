// Your code here
class Polygon {
   constructor(array) {
       this.array = array;
       this.count = this.array.length;
   }

   get countSides() {
       return this.count;
   }

   get perimeter() {
       return this.array.reduce((accelerator, side) => {
           return accelerator + side;
       }, 0)
   }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        if(side1 + side2 <= side3) {
            return false
        } else if (side2 + side3 <= side1) {
            return false
        } else if (side1 + side3 <= side2) {
            return false
        } else {
            return true
        }
    }

}

class Square extends Polygon {
    get isValid() {
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        let side4 = this.array[3]
        if(side1 === side2 && side1 === side3 && side1 === side4) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.array[0] * this.array[0]
    }
}