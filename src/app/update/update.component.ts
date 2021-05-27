import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  fasz = localStorage.getItem('nameday');

  private pina: any = [];

  constructor() { }
  

  ngOnInit(): void {
    this.pina = localStorage.getItem('nameday');
    this.pina = JSON.parse(this.pina);
   // console.log(JSON.parse(this.pina[0]));
    console.log(this.pina[0].data.dates.day);
  }

  getDat() {
    this.fasz = localStorage.getItem('nameday');
    
  }
}
