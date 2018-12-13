import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RestapiService } from '../restapi.service';
import { Data } from '../data'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: Data[]
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private restApiService : RestapiService
  ) { }
  
  getUserById(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.restApiService.getUserId(id)
        .subscribe(data => this.data = data)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.restApiService.updateHero()
      .subscribe(() => this.goBack());
  }

  ngOnInit() {
    this.getUserById();
  }

}
