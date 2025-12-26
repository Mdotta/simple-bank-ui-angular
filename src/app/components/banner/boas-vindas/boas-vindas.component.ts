import { Component } from '@angular/core';
import { DatePipe,TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-boas-vindas',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './boas-vindas.component.html',
  styleUrl: './boas-vindas.component.css'
})
export class BoasVindasComponent {
  nome = 'Dotta';
  dataAtual = new Date();
}
