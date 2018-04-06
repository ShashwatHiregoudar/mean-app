import { Component, OnInit } from '../../../node_modules/@angular/core';
import { LawyerService } from '../lawyer.service';
import { Lawyer } from '../lawyer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.css'],
  providers: [ LawyerService ]
})
export class LawyerComponent implements OnInit {

  lawyers: Lawyer[];
  lawyer: Lawyer;
  name: String;
  type: String;
  phone: String;
  slotdate: String;
  slottime: String;
  constructor(private lawyerService: LawyerService) { }
  addlawyer() {
    const newLawyer = {
      name : this.name,
      type : this.type,
      phone : this.phone,
      slotdate : this.slotdate,
      slottime : this.slottime
    };
    this.lawyerService.addLawyer(newLawyer)
        .subscribe(lawyer => {
          this.lawyers.push(lawyer);
        });
  }
  deletelawyer(id) {
    this.lawyerService.deleteLawyer(id)
        .subscribe(data => {
          if ( data.n === 1) {
            for ( let i = 0; i < this.lawyers.length; i++) {
              if ( this.lawyers[i]._id === id ) {
                this.lawyers.splice(i, 1);
              }
            }
          }
        });
  }
  getlawyer() {
    this.lawyerService.getLawyers()
        .subscribe(lawyers => this.lawyers = lawyers);
  }
  ngOnInit() {
    this.getlawyer();
  }

}
