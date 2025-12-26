import { Component, computed, input } from '@angular/core';
import { TipoTransacaoEnum as TipoTransacao, Transacao } from '../../../modelos/transacao';
import { CurrencyPipe,DatePipe } from '@angular/common';
@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {
  tipoTransacaoEnum = TipoTransacao;
  transacao = input.required<Transacao>();
  valorFormatado = computed(()=>{
    switch(this.transacao().tipo){
      case TipoTransacao.DEPOSITO:
        return this.transacao().valor;
      case TipoTransacao.SAQUE:
        return this.transacao().valor * -1;
    }
    
  })
}
