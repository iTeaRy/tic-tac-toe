class TicTacToe {
    constructor() {
        this.correntSymbol = 'x';
        this.array = [[null,null,null],[null,null,null],[null,null,null]];
    }

    getCurrentPlayerSymbol() {
        return this.correntSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.array[rowIndex][columnIndex] === null){
            this.array[rowIndex][columnIndex] = this.correntSymbol;
            this.correntSymbol = (this.correntSymbol === 'o' ? 'x' : 'o');
        }
        
    }

    isFinished() {
        return this.noMoreTurns() || !!this.getWinner();
    }

    getWinner() {
        let sum = 0; 
        let symbol ='';
        let result = null;
        for (let rowIndex = 0; rowIndex< 3; rowIndex++) {
            sum =1;
            symbol = this.array[rowIndex][0];
            for (let columnIndex = 1; columnIndex< 3; columnIndex++) {
                symbol === this.array[rowIndex][columnIndex] ? sum++ : sum = 0;
            }
           if (sum === 3) {
            result = symbol;
            break;
           } else {
                sum =1;
                symbol = this.array[0][rowIndex];
            }
            for (let columnIndex = 1; columnIndex< 3; columnIndex++) {
                symbol === this.array[columnIndex][rowIndex] ? sum++ : sum = 0;
            } 
            if (sum === 3) {
            result = symbol;
            break;
           } 
        }
        if (this.array[0][0]===this.array[1][1] && this.array[0][0]===this.array[2][2]) {result = this.array[0][0];};
        if (this.array[2][0]===this.array[1][1] && this.array[2][0]===this.array[0][2]) {result = this.array[2][0];};
        return result;
    }

    noMoreTurns() {
        let result= true;
        let rowIndex=0;
        let columnIndex=0;
        while (rowIndex<3 && result) {
            columnIndex=0;
            while (columnIndex<3 && result) {
                if (!this.array[rowIndex][columnIndex]) {
                    result = false;
                }
                 columnIndex++;
            }
            rowIndex++;
        }
        return result;
    }

    isDraw() {
        return !!this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.array[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
