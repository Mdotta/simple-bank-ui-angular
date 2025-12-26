import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacaoEnum as TipoTransacao, Transacao } from '../../modelos/transacao';
import {  KeyValuePipe } from '@angular/common';
@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule,KeyValuePipe],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  valorTransacao: number = 0.0;
  tipoTransacao: string = "";
  tipoTransacaoEnum = TipoTransacao;
  transacaoCriada = output<Transacao>()
  aoSubmeter(){
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );
    this.transacaoCriada.emit(transacao);
    
    this.clearConsole()
  }
  clearConsole(){
    this.valorTransacao = 0.0;
    this.tipoTransacao = "";
  }
}

