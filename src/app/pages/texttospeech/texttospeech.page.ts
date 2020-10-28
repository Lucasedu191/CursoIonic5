import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-texttospeech',
  templateUrl: './texttospeech.page.html',
  styleUrls: ['./texttospeech.page.scss'],
})
export class TexttospeechPage implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  textoASerFalado: string = 'Olá Mundo';
  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }

  falar(){
    this.tts.speak({
      text : this.textoASerFalado,
      locale: 'pt-BR',
      rate: 0.75
    })
    .then(() => {
      console.log ('Fala com sucesso!');
    })
    .catch((erro: any) => {
      console.log(erro);
    });

  }
}
