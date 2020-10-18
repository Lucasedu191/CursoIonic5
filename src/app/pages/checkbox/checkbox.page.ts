import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  meses: any[] =[
    {nomeDoMes: 'janeiro', valor : 1, marcado: false},
    {nomeDoMes: 'fevereiro', valor : 2, marcado: true},
    {nomeDoMes: 'março', valor : 3, marcado: true},
    {nomeDoMes: 'abril', valor : 4, marcado: true},
    {nomeDoMes: 'maio', valor : 5, marcado: false},
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibirMeses(){
    console.log(this.meses);
  }

}
