import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public data: any = [];
  c = 0
  url = 'https://api.abalin.net/tomorrow?country=hu'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((res) => {
      this.data.push(res)})

    this.data = localStorage.getItem('nameday');
    this.data = JSON.parse(this.data);
    this.c = Object.keys(this.data).length
    console.log(this.c)   
  }

  create(): void {
    this.http.get(this.url).subscribe((res) => {
      this.data.push(res)})

    localStorage.setItem('nameday', JSON.stringify(this.data))
    this.c = Object.keys(this.data).length
  }
}
