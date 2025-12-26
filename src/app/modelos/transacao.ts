export class Transacao {
    constructor(
        public readonly tipo: TipoTransacaoEnum,
        public readonly valor: number
    ){}
}

export enum TipoTransacaoEnum{
    DEPOSITO = "Depósito",
    SAQUE = "Saque"
}