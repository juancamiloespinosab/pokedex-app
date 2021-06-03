import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  @Input() abilities;

  constructor() { }

  ngOnInit(): void {
  }

}
