import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLedComponent } from './components/atoms/main-led/main-led.component';
import { LedComponent } from './components/atoms/led/led.component';
import { TitleComponent } from './components/atoms/title/title.component';
import { SearchInputComponent } from './components/atoms/search-input/search-input.component';
import { SearchButtonComponent } from './components/atoms/search-button/search-button.component';
import { InfoComponent } from './components/atoms/info/info.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { TypeComponent } from './components/atoms/type/type.component';
import { LedsComponent } from './components/molecules/leds/leds.component';
import { SearchBoxComponent } from './components/molecules/search-box/search-box.component';
import { CardComponent } from './components/molecules/card/card.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { GridComponent } from './components/organisms/grid/grid.component';
import { MainComponent } from './components/pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLedComponent,
    LedComponent,
    TitleComponent,
    SearchInputComponent,
    SearchButtonComponent,
    InfoComponent,
    ImageComponent,
    TypeComponent,
    LedsComponent,
    SearchBoxComponent,
    CardComponent,
    HeaderComponent,
    GridComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
