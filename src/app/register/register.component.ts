import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import JobsSerive from '../services/jobs.service';
import ColonistsService from '../services/colonists.service';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';
import { cantBe, tooOld} from '../shared/Validators'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [JobsSerive, ColonistsService]
})
export class RegisterComponent implements OnInit {

  colonist: NewColonist;
  marsJob: Job[];
  regForm: FormGroup;


  NO_JOB_SELECTED = '(none)';


  constructor(private jobService: JobsSerive,
              private colonistService: ColonistsService,
              private router: Router 
              ) {
    

    jobService.getJobs().subscribe((jobs) => {
      this.marsJob = jobs;
      }, (err) => {
        console.log(err);
      });
   }

  ngOnInit() {

    this.regForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(2)]),
      age: new FormControl('',[Validators.required, tooOld(130)]),
      job_id: new FormControl(this.NO_JOB_SELECTED, [cantBe(this.NO_JOB_SELECTED)])
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
      const colonist = new NewColonist(name, age, job_id);
      console.log('OK, let\'s register this new colonist:', new NewColonist(name, job_id, age))

      this.colonistService.submitColonist(colonist)
          .subscribe((colonist) => {
            localStorage.setItem('colonist_id', JSON.stringify(colonist.id))
            this.router.navigate(['/encounters']);
          }, (err) => {
            console.log('there is an error', err);
          });
    }
   }
}





