import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
import { DetailsComponent } from './components/organisms/details/details.component';
import { from } from 'rxjs';
import { LoadingComponent } from './components/atoms/loading/loading.component';
import { StatsComponent } from './components/molecules/stats/stats.component';
import { StatComponent } from './components/atoms/stat/stat.component';
import { AbilityComponent } from './components/atoms/ability/ability.component';
import { AbilitiesComponent } from './components/molecules/abilities/abilities.component';
import { CloseDetailsComponent } from './components/atoms/close-details/close-details.component';

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
    MainComponent,
    DetailsComponent,
    LoadingComponent,
    StatsComponent,
    StatComponent,
    AbilityComponent,
    AbilitiesComponent,
    CloseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
