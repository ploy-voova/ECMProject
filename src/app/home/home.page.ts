import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {

  }

  slideOpts = {
    initialSlide: 0,  // เริ่มต้นที่ Slide แรก
    speed: 400,       // ความเร็วในการสไลด์
    spaceBetween: 10, // ระยะห่างระหว่าง Slide
    slidesPerView: 1, // แสดง Slide ทีละ 1 หน้าจอ
  }


}
