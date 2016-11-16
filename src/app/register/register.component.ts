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


  constructor(jobService: JobsSerive) {
    this.colonist = new NewColonist(null,null,null);

    jobService.getJobs().subscribe((jobs) => {
      this.marsJob = jobs;
      
    });
   }

  ngOnInit() {
  }

}
