import { Component, OnInit } from '@angular/core';
import { Aliens, newEncounter } from '../models';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounters.service'
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';
import { cantBe } from '../shared/Validators'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService, EncountersService]
})
export class ReportComponent implements OnInit {

  marsAlien: Aliens[];
  repForm: FormGroup;

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
    this.repForm = new FormGroup({
      atype: new FormControl(this.NO_TYPE_SELECTED, [cantBe(this.NO_TYPE_SELECTED)]),
      action: new FormControl('', [Validators.required, Validators.maxLength(450)])
    });
  }


private getDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

  onSubmit(event, form) {
    event.preventDefault();
    if (this.repForm.invalid){

    } else {
      const atype = this.repForm.get('atype').value;
      const action = this.repForm.get('action').value;
      const date = this.getDate();
      const encounter = new newEncounter(atype, action, date, 4 )
      // const colonist_id = this.repForm.get('colonist_id').value;
      console.log( new newEncounter(atype, action, date, 4) )

      this.encountersService.submitEncounter(encounter)
          .subscribe((enc) => {
            console.log('got encounter:', enc);
          }, (err) => {
            console.log('there was an error', err);
          });
    }
  }
}
