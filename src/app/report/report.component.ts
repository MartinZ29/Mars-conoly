import { Component, OnInit } from '@angular/core';
import { Aliens } from '../models';
import AliensService from '../services/aliens.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService]
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
