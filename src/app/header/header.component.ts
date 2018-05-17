import { Component, OnInit } from '@angular/core';
import { HeaderNavigationLinks } from '../configs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  Links: any = HeaderNavigationLinks;

  changeRoute: any = function(Url:string) {
    this.router.navigateByUrl(Url);
  }

}
