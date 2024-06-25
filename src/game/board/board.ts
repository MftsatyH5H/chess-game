import { Pawn } from "../pieces/pawn";
import { Tower } from "../pieces/tower";
import { Horse } from "../pieces/horse";
import { Bishop } from "../pieces/bishop";
import { Queen } from "../pieces/queen";
import { King } from "../pieces/king";

export class Board{
    private currentTurn: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private currentBoard: any
    constructor(){
        this.currentTurn = 'White'
        this.currentBoard = [
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null]
        ];   
    }
    getBoard(){
        return this.currentBoard
    }
    startGame(){
        //specials
        for (let i = 0; i < this.currentBoard[0].length; i++){
            if(i === 0 || i === 7){
                const tower = new Tower('Black')
                this.currentBoard[0][i] = tower
            }
            if(i === 1 || i === 6){
                const horse = new Horse('Black')
                this.currentBoard[0][i] = horse
            }
            if(i === 2 || i === 5){
                const bishop = new Bishop('Black')
                this.currentBoard[0][i] = bishop
            }
            if(i === 3){
                const queen = new Queen('Black');
                this.currentBoard[0][i] = queen
            }
            if(i === 4){
                const king = new King('Black');
                this.currentBoard[0][i] = king
            }
        }

        for (let i = 0; i < this.currentBoard[7].length; i++){
            if(i === 0 || i === 7){
                const tower = new Tower('White')
                this.currentBoard[7][i] = tower
            }
            if(i === 1 || i === 6){
                const horse = new Horse('White')
                this.currentBoard[7][i] = horse
            }
            if(i === 2 || i === 5){
                const bishop = new Bishop('White')
                this.currentBoard[7][i] = bishop
            }
            if(i === 3){
                const queen = new Queen('White');
                this.currentBoard[7][i] = queen
            }
            if(i === 4){
                const king = new King('White');
                this.currentBoard[7][i] = king
            }
        }
        //pawns
        for(let i = 0; i < this.currentBoard[1].length; i++){
            const pawn = new Pawn('Black')
            this.currentBoard[1][i] = pawn
        }
        for(let i = 0; i < this.currentBoard[6].length; i++){
            const pawn = new Pawn('White')
            this.currentBoard[6][i] = pawn
        }
    }
    checkWinConditions(){
           
    }
    checkMissingPieces(){

    }
    changeTurn(){
        //implement played piece here somehow
        this.checkMissingPieces();
        this.checkWinConditions();
        this.currentTurn === 'White' ? this.currentTurn = 'Black' : this.currentTurn = 'White'
    }
}