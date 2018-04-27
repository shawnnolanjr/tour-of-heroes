import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroService} from './services/hero.service';
import {MessageService} from './services/message.service';
import {MessagesComponent} from './messages/messages.component';
import {HeroNiceNamePipe} from "./hero-nice-name.pipe";
import {AgmCoreModule} from '@agm/core';
import {MapsComponent} from "./maps/maps.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDE8dYCSrFMYm2pRBVpaQLu4I-m3MO8D0E'
        }),
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        HeroSearchComponent,
        MapsComponent,
        HeroNiceNamePipe
    ],
    providers: [HeroService, MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
