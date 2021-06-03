import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() data;
  @Output() closeDetailsEvent: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    console.log(this.data);

  }

  onCloseDetails(e) {
    this.closeDetailsEvent.emit(e)
  }

}
