import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import JobsSerive from '../services/jobs.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


const notNone = (value) => {
  return value === '(none)' ? false: true;
}

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


  constructor(jobService: JobsSerive) {
    this.colonist = new NewColonist(null,this.NO_JOB_SELECTED,null);

    jobService.getJobs().subscribe((jobs) => {
      this.marsJob = jobs;
      }, (err) => {
        console.log(err);
      });
   }

  ngOnInit() {
  }

get notSelected (){
  return this.colonist.job_id === this.NO_JOB_SELECTED;
}

 onSubmit(event, form){
    event.preventDefault();
     form.controls.age.invalid = true;
   }



}
