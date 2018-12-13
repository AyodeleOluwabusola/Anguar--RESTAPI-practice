import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service'
import { Data } from '../data';

@Component({
  selector: 'app-landingp',
  templateUrl: './landingp.component.html',
  styleUrls: ['./landingp.component.css']
})
export class LandingpComponent implements OnInit {
  datas: Data[]
  constructor(private restApiService: RestapiService) { }
  getMyData(): void {
    this.restApiService.getData()
        .subscribe(
          datas => {
          this.datas = datas;
        console.log('DATA', datas)
      })
  }


  ngOnInit() {
    this.getMyData()
  }

}
