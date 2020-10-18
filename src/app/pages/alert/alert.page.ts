import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ok } from 'assert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

   async alert(){

    this.alertCtrl.create({});
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['OK']
    }
    );

    alert.present();
  }
  async multiple(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });
    await alert.present();
  }
  async confirm(){
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Message<strong> text</strong>!!!!',
      buttons: [
        {text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('confirm Cancel: blah');
        }
      }, {
        text: 'okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
      ]
    });
    await alert.present();
  }

  async prompt(){
    const alert = await this.alertCtrl.create({
      header: 'Acesso Restrito!',
      inputs: [
            {
              name: 'email',
              type: 'text',
              placeholder: 'Inform seu email'
            },
            {
              name: 'senha',
              type: 'password',
              id: 'name2-id',
              placeholder: 'Informe sua senha'
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, {
              text: 'ok',
              handler: (form) => {
                console.log(form);
              }
            }
          ]
        });
    await alert.present();
  }
}
