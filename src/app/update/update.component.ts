import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public data: any = [];

  constructor() { }
  

  ngOnInit(): void {
    this.data = localStorage.getItem('nameday');
    this.data = JSON.parse(this.data);
  }

  checklogin(): void {
    localStorage.setItem('nameday', JSON.stringify(this.data))
  }
}
