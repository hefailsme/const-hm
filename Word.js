var letter = require('./letter.js')

function Word(fruit) {
    this.fruit = fruit
    this.let = []
    this.fruitFound = false
    this.getLet = function () {
        for (var i = 0; i < this.fruit.length; i++) {
            var newLetter = new letter(this.fruit[1])
            this.let.push(newLetter)
        }
    }

    this.findFruit = function() {
        this.fruitFound = this.fruit.every(function(currLett) {
            return currLett.appear
        })
        return this.fruitFound
    }
    this.checkLetter = function(guessLet) {
        var toReturn = 0
        for (var i = 0; i < this.let.length; i++) {
            if(this.let[i].char == guessLet) {
                this.let[i].appear = true
                toReturn++
            }
        }
        return toReturn
    }

}