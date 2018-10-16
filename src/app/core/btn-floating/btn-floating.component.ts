import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-floating',
  templateUrl: './btn-floating.component.html',
  styleUrls: ['./btn-floating.component.scss']
})
export class BtnFloatingComponent implements OnInit {
  private open:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
