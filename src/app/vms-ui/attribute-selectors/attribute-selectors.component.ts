import { Component,
  OnInit,
  Output,
  EventEmitter
  } from '@angular/core';


@Component({
  selector: 'app-attribute-selectors',
  templateUrl: './attribute-selectors.component.html',
  styleUrls: ['./attribute-selectors.component.sass']

})
export class AttributeSelectorsComponent implements OnInit {
  sizeAttributes = ['Participants', 'Staff Members'];
  colorAttributes = ['Makerspace Type', 'Out of School'];
  sizeEncodingSelected: any;
  colorEncodingSelected: any;

  sizeAttributeMap = {
    'Participants': 'participant_day',
    'Staff Members': 'staff_overall'
  };
  colorAttributeMap = {
    'Makerspace Type': 'type',
    'Out of School': 'out_of_school'
  };
  constructor() { }

  ngOnInit() {
  }

  setSize(event: any) {
  this.sizeEncodingSelected = this.sizeAttributeMap[event.value];
  }

  setColor(event: any) {
    this.colorEncodingSelected = this.colorAttributeMap[event.value];
  }
}
