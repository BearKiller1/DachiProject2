import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { GamesComponent } from './games/games.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StatsComponent } from './stats/stats.component';
import { ProdnotfoundComponent } from './prodnotfound/prodnotfound.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { AllgamesComponent } from './allgames/allgames.component'


import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [NewsComponent, GamesComponent, AboutComponent, CarouselComponent, StatsComponent, ProdnotfoundComponent, PagenotfoundComponent, DetailComponent, SearchComponent, FilterComponent, AllgamesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NewsComponent, GamesComponent, AboutComponent, CarouselComponent, StatsComponent, ProdnotfoundComponent, PagenotfoundComponent, DetailComponent, SearchComponent, FilterComponent, AllgamesComponent]
})
export class MenuModule { }
