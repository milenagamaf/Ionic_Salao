import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Prod } from 'src/app/model/prod';
import { ProdService } from 'src/app/services/prod.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.page.html',
  styleUrls: ['./prod-form.page.scss'],
})
export class ProdFormPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private prodService: ProdService,
    private activeRouter: ActivatedRoute
  ) { }

  prod = new Prod()
  _id: string | null = null;

  ngOnInit() {
    this.getParam()
  }

  getParam() {
    this._id = this.activeRouter.snapshot.paramMap.get("id");
    if (this._id) {
      this.prodService.get(this._id).then(res => {
        this.prod = <Prod>res;
      })
    }
  }

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });
    await alert.present();
  }

  save() {
    this.prodService.add(this.prod)
      .then((res) => {
        console.log(res);
        this.presentAlert("Aviso", "Cadastrado");
      })
      .catch((err) => {
        console.log(err);
        this.presentAlert("Erro", "Não cadastrado");
      })
  }



}
