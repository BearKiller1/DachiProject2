import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './menu/news/news.component';
import { GamesComponent } from './menu/games/games.component';
import { AboutComponent } from './menu/about/about.component';
import { CarouselComponent } from './menu/carousel/carousel.component';
import { StatsComponent } from './menu/stats/stats.component';
import { ProdnotfoundComponent } from './menu/prodnotfound/prodnotfound.component';
import { PagenotfoundComponent } from './menu/pagenotfound/pagenotfound.component';
import { DetailComponent } from './menu/detail/detail.component';
import { SearchComponent } from './menu/search/search.component';
import { FilterComponent } from './menu/filter/filter.component';
import { AllgamesComponent } from './menu/allgames/allgames.component';

const routes: Routes = [
  {
    path:'news',
    component:NewsComponent,
  },
  {
    path:'games',
    component:GamesComponent,
    children:[
      {
        path:"detail/:id",
        component:DetailComponent,
      },
      {
        path:"search/:keyword",
        component:SearchComponent,
      },
      {
        path:"all",
        component:AllgamesComponent,
      },
      {
        path:"filter",
        component:FilterComponent,
      },
      {
        path:"",
        redirectTo:'all',
        pathMatch:'full',
      },
      {
        path:"**",
        component:ProdnotfoundComponent,
      }
    ]
  },
  {
    path:'carousel', // <-- no need
    component:CarouselComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:"**",
    component:PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
