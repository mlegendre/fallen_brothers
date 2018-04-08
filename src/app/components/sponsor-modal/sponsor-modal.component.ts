import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbTab, NgbTabContent, NgbTabset, NgbDropdown} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sponsor-modal',
  templateUrl: './sponsor-modal.component.html',
  styleUrls: ['./sponsor-modal.component.css']
})
export class SponsorModalComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  } 
}