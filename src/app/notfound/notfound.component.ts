import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

Router;

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('redirect');
    setTimeout( (router: Router) => {
      this.router.navigate(['/']);
    }, 3000);
  }

}
