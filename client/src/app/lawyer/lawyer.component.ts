import { Component, OnInit } from '../../../node_modules/@angular/core';
import { LawyerService } from '../lawyer.service';
import { Lawyer } from '../lawyer';
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
  constructor(private lawyerService: LawyerService) { }

  ngOnInit() {
    this.lawyerService.getLawyers()
        .subscribe(lawyers => this.lawyers = lawyers);
  }

}
