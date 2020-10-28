import { CepService } from './../../services/cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  cep: string = '82840160';
  resultado: any = { cep: '', logradouro: ''};
  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  consultarCep(){
    this.cepService.obterEndereco(this.cep)
    .then((json) => {
      this.resultado = json;
    })
    .catch((erro) => {
      console.log(erro);
    });
  }

}
