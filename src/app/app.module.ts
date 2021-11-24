import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {StartComponent} from './start/start.component';
import {GameComponent} from './game/game.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ImageComponent} from './image/image.component';
import {KeyboardComponent} from './game/keyboard/keyboard.component';
import {WordService} from "./word.service";
import {InternalListWordService} from "./internal-list-word.service";
import {GameOverComponent} from './game-over/game-over.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    AboutComponent,
    PageNotFoundComponent,
    ImageComponent,
    KeyboardComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'start', component: StartComponent},
      {path: 'game', component: GameComponent},
      {path: 'about', component: AboutComponent},
      {path: 'over', component: GameOverComponent},
      {path: '', component: StartComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
    ServiceWorkerModule.register('sw.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [
    {provide: WordService, useClass: InternalListWordService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
