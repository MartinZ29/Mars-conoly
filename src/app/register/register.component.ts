import { Component, OnInit } from '@angular/core';
import { Colonist, Job } from '../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  colonist: Colonist;

  marsJob:[Job];


  constructor() {
    this.colonist = new Colonist('',null,null,null);
   }

  ngOnInit() {
  }

}
