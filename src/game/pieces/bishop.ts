import { Piece } from "./piece";

export class Bishop extends Piece{
    
    constructor(color: string){
        super(color, 'Bishop')
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getValidMovements(board : any): Piece {
        console.log(board)
        throw new Error("Method not implemented.");
    }
    move(): Piece {
        throw new Error("Method not implemented.");
    }
    
}