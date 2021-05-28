import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public data: any = [];
  del = 0
  obj = ""

  constructor() { }

  ngOnInit(): void {
    this.data = localStorage.getItem('nameday');
    this.data = JSON.parse(this.data);
  }
  delete(obj: any){
    
    this.data = this.data.filter((item: any) => item !== obj);

    localStorage.setItem('nameday', JSON.stringify(this.data))
  }
}
