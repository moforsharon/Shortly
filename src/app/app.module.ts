import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componemts/header/header.component';
import { ButtonComponent } from './componemts/button/button.component';
import { StyledButtonComponent } from './componemts/styled-button/styled-button.component';
import { JumbotronComponent } from './componemts/jumbotron/jumbotron.component';
import { StatisticsSectionComponent } from './componemts/statistics-section/statistics-section.component';
import { ShortenLinkComponent } from './componemts/shorten-link/shorten-link.component';
import { CardComponent } from './componemts/card/card.component';
import { CardsContainerComponent } from './componemts/cards-container/cards-container.component';
import { BoostLinkComponent } from './componemts/boost-link/boost-link.component';
import { FooterComponent } from './componemts/footer/footer.component';
import { ToggleMobileNavComponent } from './componemts/toggle-mobile-nav/toggle-mobile-nav.component';
import { NavItemsComponent } from './componemts/nav-items/nav-items.component';
import { ShortenedLinkComponent } from './componemts/shortened-link/shortened-link.component';
import { InputComponent } from './componemts/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    StyledButtonComponent,
    JumbotronComponent,
    StatisticsSectionComponent,
    ShortenLinkComponent,
    CardComponent,
    CardsContainerComponent,
    BoostLinkComponent,
    FooterComponent,
    ToggleMobileNavComponent,
    NavItemsComponent,
    ShortenedLinkComponent,
    InputComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
     FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
