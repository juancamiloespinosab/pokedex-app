import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-close-details',
  templateUrl: './close-details.component.html',
  styleUrls: ['./close-details.component.css']
})
export class CloseDetailsComponent implements OnInit {

  @Output() closeDetailsEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeDetails() {
    this.closeDetailsEvent.emit()    
    
  }


}
