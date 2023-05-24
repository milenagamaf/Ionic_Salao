import { Component } from '@angular/core';
import { Prod } from '../model/prod';
import {AlertController} from '@ionic/angular'
import { ProdService } from '../services/prod-service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}

  prod = new Prod()
  prodService = new ProdService();

  async presentAlert(tipo: string, texto:string) {
    const alert = await this.alertController.create({
      header: tipo,
     // subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });
    await alert.present();
  }

  save(){
    this.prodService.add(this.prod);
    this.presentAlert("Aviso", "Cadastrado");
   //console.log(this.prod);
  }

}

