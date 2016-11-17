import { Component, OnInit } from '@angular/core';
import { Aliens } from '../models';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounters.service'
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService]
})
export class ReportComponent implements OnInit {

  marsAlien: Aliens[];
  regForm: FormGroup;

  NO_TYPE_SELECTED = '(none)';

  constructor(private aliensService: AliensService, 
              private encountersService: EncountersService ) { 

    aliensService.getAliens().subscribe((aliens) => {
      this.marsAlien = aliens;
      console.log();
    }, (err) => {
      console.log(err)
    });
  }

  ngOnInit() {
  }

}
