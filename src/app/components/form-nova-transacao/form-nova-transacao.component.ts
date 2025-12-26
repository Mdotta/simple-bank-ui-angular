import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../../modelos/transacao';
@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  valorTransacao: number = 0.0;
  tipoTransacao: string = "";
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

