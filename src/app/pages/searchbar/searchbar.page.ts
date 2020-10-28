import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  nome: string = '';
  pessoas: any;
  pessoasFiltradas: any;

  constructor() {
  this.pessoas = [
    {id: 1, idade: 19, nome: "Monica"},
    {id: 2, idade: 23, nome: "Leticia"},
    {id: 3, idade: 21, nome: "Rosangela"},
    {id: 4, idade: 24, nome: "Laura"},
    {id: 5, idade: 28, nome: "Camila"},
    {id: 6, idade: 25, nome: "Paula"},
    {id: 7, idade: 18, nome: "Juliana"},
    {id: 8, idade: 22, nome: "Adriana"},
    {id: 9, idade: 22, nome: "Ana"},
    {id: 10, idade: 22, nome: "Aline"},
  ];
  this.pessoasFiltradas = this.pessoas;
  }
  ngOnInit() {
  }

  filtrarItens(event){
    this.nome = event.target.value.toLowerCase();
    console.log(this.nome);
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome){
    this.pessoasFiltradas = this.pessoas;

    return this.pessoasFiltradas.filter((item) => {
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

}
