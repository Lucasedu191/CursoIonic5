import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  atualizar(event){
    console.log('usuario solicitou a atualização');
    setTimeout(() => {
      console.log('lista atualizada com sucesso!');
    }, 2000);
  }
}
