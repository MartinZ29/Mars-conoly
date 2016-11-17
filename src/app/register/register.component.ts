import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import JobsSerive from '../services/jobs.service';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [JobsSerive]
})
export class RegisterComponent implements OnInit {

  colonist: NewColonist;
  marsJob: Job[];
  regForm: FormGroup;


  NO_JOB_SELECTED = '(none)';


  constructor(jobService: JobsSerive,
              // private formBuilder: FormBuilder 
              ) {
    

    jobService.getJobs().subscribe((jobs) => {
      this.marsJob = jobs;
      }, (err) => {
        console.log(err);
      });
   }

cantBe(value: string): ValidatorFn {
  return (control: AbstractControl): {[Key: string]: any} => {
    return control.value === value ? {'cant be value': {value}} : null;
  };
}

tooOld(value: number): ValidatorFn {
  return (control: AbstractControl): {[Key: string]: any} => {
    return control.value > 130 ? {'too old': {value}} : null;
  }
}


  ngOnInit() {

    this.regForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(2)]),
      age: new FormControl('',[Validators.required, this.tooOld(130)]),
      job_id: new FormControl(this.NO_JOB_SELECTED, [this.cantBe(this.NO_JOB_SELECTED)])
    });

  }


 onSubmit(event, form){
    event.preventDefault();
    console.log('The form is invalid:', this.regForm.invalid);
    if(this.regForm.invalid){

    } else {
      const name = this.regForm.get('name').value;
      const age = this.regForm.get('age').value;
      const job_id = this.regForm.get('job_id').value;
      // const colonist = this.regForm.get(['name','job_id','age'])
      console.log('OK, let\'s register this new colonist:', new NewColonist(name, job_id, age))
    }

    //  form.controls.age.invalid = true;
   }
}





