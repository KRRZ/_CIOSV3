import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname = ""
  pword = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem("login", "false")
  }

  login(): void {
    if (this.uname == "admin" && this.pword == "admin") {
      localStorage.setItem("login", "true");
      this.router.navigate(['/list']);
    }
  }
}
