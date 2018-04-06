var Letter = function (let) {
    this.letter = let
    this.guess = false
    this.letterDisplay = function () {
        if (this.guess = true) {
            return this.letter
        } else {
            return ' _ '
        }
    }
}

module.exports = Letter
