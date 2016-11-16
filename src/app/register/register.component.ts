import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import JobsSerive from '../services/jobs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [JobsSerive]
})
export class RegisterComponent implements OnInit {

  colonist: NewColonist;

  marsJob: Job[];

  NO_JOB_SELECTED = '(none)';


  constructor(jobService: JobsSerive) {
    this.colonist = new NewColonist(null,this.NO_JOB_SELECTED,null);

    jobService.getJobs().subscribe((jobs) => {
      this.marsJob = jobs;
      
    });
   }

  ngOnInit() {
  }

get jobSelected (){
  return this.colonist.job_id !== this.NO_JOB_SELECTED;
}


}
