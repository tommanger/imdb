import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  yPostion = 0;
  showNav = true;
  ngOnInit() {
    const id = this.route.snapshot;
    console.log(id)
    window.addEventListener('scroll', ev => {
      if (window.scrollY > this.yPostion) {
        this.showNav = false
      } else {
        this.showNav = true
      }
      this.yPostion = window.scrollY
    })
  }

}
