import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  today = ""
  tomorrow = ""

  private data: any = [];

  constructor() { }
  

  ngOnInit(): void {
    this.data = localStorage.getItem('nameday');
    this.data = JSON.parse(this.data);
    console.log(this.data[0].data.dates.day);
    this.today = this.data[0].data.dates.day + " " + this.data[0].data.dates.month + " " + this.data[0].data.namedays.hu
    this.tomorrow = this.data[1].data.dates.day + " " + this.data[1].data.dates.month + " " + this.data[1].data.namedays.hu

  }

  getDat() {
    
    
  }
}
