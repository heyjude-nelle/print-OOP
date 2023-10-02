class DiamondPrinter extends Printer {
    printDiamond() {
        this.setInput(); // Calls the parent class's setInput method to set _input.
            let diamond = ''; // Initializes a variable to store the diamond pattern.

            for (let i = 1; i <= this.userInput; i++) { 
                for (let b = 1; b <= (this.userInput - i); b++) { 
                    diamond += "&nbsp;"; // Builds the spaces before the asterisks.
                }
                for (let a = 1; a <= i; a++) {
                    diamond += "&nbsp;" + "*"; // Builds the asterisks.
                }
                diamond += "<br>"; // Adds a line break after each row.
            }
            for (let i = this.userInput - 1; i >= 1; i--) { 
                for (let b = 1; b <= this.userInput - i; b++) { 
                    diamond += "&nbsp;"; // Builds the spaces before the asterisks (second half).
                }
                for (let a = 1; a <= i; a++) {
                    diamond += "&nbsp;" + "*"; // Builds the asterisks (second half).
                }
                diamond += "<br>"; // Adds a line break after each row (second half).
            }
            this.validateInput() && this.print(diamond); // if this.validateInput returns true, this.print will trigger 
        } 
    }


class SquarePrinter extends Printer {
    printSquare() {
        this.setInput(); // Calls the parent class's setInput method to set _input.
            let square = ''; // Initializes a variable to store the square pattern.

            for (let i = 1; i <= this.userInput; i++) { 
                for (let a = 1; a <= this.userInput; a++) {
                    square += "&nbsp;" + "#"; // Builds the asterisks for each column in a row.
                }
                square += "<br>"; // Adds a line break after each row.
            }
            this.validateInput() && this.print(square); // if this.validateInput returns true, this.print will trigger 
    }
}

const diamondPrinter = new DiamondPrinter(); // Creates an instance of DiamondPrinter.
const squarePrinter = new SquarePrinter(); // Creates an instance of SquarePrinter.
