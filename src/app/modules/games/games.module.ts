import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { Game1Component } from './components/game-1/game-1.component';
import { Game2Component } from './components/game-2/game-2.component';
import { Game3Component } from './components/game-3/game-3.component';
import { Game4Component } from './components/game-4/game-4.component';
import { Game5Component } from './components/game-5/game-5.component';
import { GameExtraComponent } from './components/game-extra/game-extra.component';


@NgModule({
  declarations: [
    GamesComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    Game4Component,
    Game5Component,
    GameExtraComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
