import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from '@angular/core';

// import trigger,animate.. first

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  // animateions[] add here !!
  animations: [
    trigger('routeAnimation', [
      state('*',
      style({
        width:'100%',
        opacity:1,
        transform:'translateX(0)'
      })),
      transition('void => *', [
        style({
          width:'100%',
          opacity:0,
          transform:'translateX(-100%)'
        }),
        animate('1s ease-out')
      ]),
      transition('* => void', [
        animate('1s ease-in', style({
          width:'100%',
          opacity:0,
          transform:'translateX(100%)'
        }))
      ])
    ])
  ]


})
export class WelcomeComponent implements OnInit {

// add @Hostbinding  return true;


  constructor() { }

  ngOnInit() {
  }

}
