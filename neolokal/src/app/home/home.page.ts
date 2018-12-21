import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../common/components/spinner/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.spinnerService.activate();
    setTimeout(() => {
      this.spinnerService.deactivate();
    }, 3000);
  }
}
