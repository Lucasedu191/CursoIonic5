import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(private actionsheetCtrl : ActionSheetController) { }

  ngOnInit() {
  }
  async actionsheet(){
    const actionSheet = await this.actionsheetCtrl.create({
      header: 'Albuns',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Deleted clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'basket',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () =>{
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
