import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      document.documentElement.style.setProperty('--background', '#469FD1');
    }, 100);
  }

  ngAfterViewInit() {
    console.log('DOM พร้อมใช้งาน');
  }

}
