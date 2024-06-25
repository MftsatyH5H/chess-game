export abstract class Piece {
    color: string
    type: string
    constructor(color: string, type: string){
        this.color = color;
        this.type = type;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    abstract getValidMovements(board: any, xIndex: any, yIndex: any): Piece
    abstract move(): Piece
}