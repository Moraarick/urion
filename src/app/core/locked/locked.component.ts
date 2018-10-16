import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.css']
})
export class LockedComponent implements OnInit {
  router:Router;
  constructor(private _router: Router) {
    this.router = this._router;
  }

  ngOnInit() {
  }

  myRedirect(){
    this.router.navigate(['/core/dashboard']);
  }

}
