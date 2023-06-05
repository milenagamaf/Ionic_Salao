import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prod } from 'src/app/model/prod';
import { ProdService } from 'src/app/services/prod.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.page.html',
  styleUrls: ['./prod-list.page.scss'],
})
export class ProdListPage implements OnInit {

  constructor(
    private prodService: ProdService,
    private router: Router
  ) { }

  prods: Prod[] = [];

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.prodService.list().then(res => {
      console.log(res)
      this.prods = <Prod[]>res;
    })
  }

  editProd(_id: string) {
    this.router.navigate(['/tabs/prodForm', _id],)
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event?.target?.complete();
    }, 2000);
  }



}
