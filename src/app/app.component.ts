import { Component, signal, Signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FormNovaTransacaoComponent } from "./components/form-nova-transacao/form-nova-transacao.component";
import { Transacao } from './modelos/transacao';
@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);
  processarTransacao(transacao:Transacao){
    console.log("Transação processada no componente pai.");
    this.transacoes.update(transacoesAtuais => [transacao, ...transacoesAtuais]);
    console.log(transacao);
  }
}
