export interface Clothes{
    //el export hace la interface publica para poder exportar
    id: BigInteger;
    name: string;
    type: string;
    waist:string;
    price: number;
    stock: number;
    image: string;//porque es una url
    clearance : Boolean;
    quantity: number;
}
