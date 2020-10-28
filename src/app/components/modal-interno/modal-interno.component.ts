import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-interno',
  templateUrl: './modal-interno.component.html',
  styleUrls: ['./modal-interno.component.scss'],
})
export class ModalInternoComponent implements OnInit {

  constructor(private navParams: NavParams) {
    // tslint:disable-next-line:quotemark
    console.log(this.navParams.get("nome"));
   }

  ngOnInit() {}

}
