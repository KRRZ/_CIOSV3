import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private data: any = []
  nd = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {  
  }

  getData() {
    const url = 'https://api.abalin.net/today?country=hu'
    this.http.get(url).subscribe((res) => {
      this.data = res
      console.log(this.data)
      this.nd = this.data.data.dates.day + " " + this.data.data.dates.month + " " + this.data.data.namedays.hu
    })
  }

}

