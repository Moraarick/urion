import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

}
