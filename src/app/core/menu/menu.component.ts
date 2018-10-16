import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

const ITEMS = [
  {
    "content" : "Inicio",
    "icon" : "md-home",
    "redirect" : "dashboard",
    "subItems" : []
  },
  {
    "content" : "Mi negocio",
    "icon" : "md-web",
    "redirect" : "",
    "subItems" : [
      {
        "content" : "Empleados",
        "redirect" : "employee",
        "subItems" : []
      },
      {
        "content" : "Documentos",
        "redirect" : "document",
        "subItems" : []
      }
    ]
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items = ITEMS;
  public insideLocked = false;

  router:Router;
  constructor(private _router: Router) {
    this.router = this._router;
    console.log("Hello");
  }

  ngOnInit() {
  }

  myRedirect(){
    this.router.navigate(['/locked']);
  }

}
