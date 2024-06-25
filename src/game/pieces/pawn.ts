/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Piece } from "./piece";

export class Pawn extends Piece{
    
    constructor(color: string){
        super(color, 'Pawn')
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getValidMovements(board: any, xIndex: any, yIndex: any): Piece {
        const validMovements = []
        console.log(board, xIndex, yIndex)
        console.log(board[xIndex][yIndex])
        if(this.color === 'White'){
            if(board[xIndex][yIndex - 1] === null) validMovements.push([xIndex, yIndex - 1])
        }
        if(this.color === 'Black'){
            if(board[yIndex + 1][xIndex] === null) validMovements.push([xIndex, yIndex + 1])
        }
        //@ts-ignore
        return validMovements
    }
    move(): Piece {
        throw new Error("Method not implemented.");
    }
    
}