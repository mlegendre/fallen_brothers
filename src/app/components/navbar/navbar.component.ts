import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SponsorModalComponent } from '../sponsor-modal/sponsor-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean;
  constructor() { 
    this.isCollapsed = false;
  }

  @Input() sponsorModal: SponsorModalComponent;
  @HostListener('click')
  click(context){
    this.sponsorModal.open(context);
  }
  ngOnInit() {
  }

}
