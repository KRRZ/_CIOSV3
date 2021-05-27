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
    const url = 'https://api.abalin.net/tomorrow?country=hu'
    this.http.get(url).subscribe((res) => {
      this.data.push(res)

      const url1 = 'https://api.abalin.net/today?country=hu'
      this.http.get(url1).subscribe((res1) => {
        this.data.push(res1)

        const url2 = 'https://api.abalin.net/yesterday?country=hu'
        this.http.get(url2).subscribe((res2) => {
          this.data.push(res2)



          //console.log(this.data[0])

          this.nd = this.data[0].data.dates.day + " " + this.data[0].data.dates.month + " " + this.data[0].data.namedays.hu

          localStorage.setItem('nameday', JSON.stringify(this.data))


        })
      }

      );
    })
  }
}
