    class Printer {
    #input = null;
    notValid = "Please enter a numerical value between 2 and 50!";

    get userInput() { //#input can be accessed throgh PUBLIC userInput
        return this.#input;
    }
    
    setInput() { //made input PRIVATE by applying #
        this.#input = document.getElementById("inputValue").value; // Sets _input based on the value of an input element.
    }

    // This method checks if the input is valid (numeric and within a specific range). REFACTORED
    validateInput() {
        if (!isNaN(this.#input) && this.#input >= 2 && this.#input <= 50){
            return true;
        } else {
            this.print(this.notValid);
        }
    }

    // This method displays the output on the webpage.
    print(output) {
        document.getElementById("output").innerHTML = output; // Sets the HTML content of an element with the id "output".
    }
}