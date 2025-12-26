import { nanoid } from "nanoid";

export class Transacao {
    readonly id = nanoid();
    readonly data = new Date();
    
    constructor(
        public readonly tipo: TipoTransacaoEnum,
        public readonly valor: number
    ){}
}

export enum TipoTransacaoEnum{
    DEPOSITO = "Depósito",
    SAQUE = "Saque"
}