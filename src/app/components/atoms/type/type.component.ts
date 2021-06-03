import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ColorTypeService } from 'src/app/services/color-type-service.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  @Input() type;
  @ViewChild('typeElement') typeElementRef: ElementRef;

  constructor(private colorTypeService: ColorTypeService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setColors();

  }

  async setColors() {
    let colors = await this.colorTypeService.getJSON();

    let colorType = colors.list.find(el => el.name == this.type);

    this.typeElementRef.nativeElement.style = `
    background-color: ${colorType['bg-color'] || 'white'}; 
    color: ${colorType['text-color'] || 'black'}
    `;

  }

}
