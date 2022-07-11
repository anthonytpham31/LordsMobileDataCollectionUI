import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuildGiftDataComponent } from './guild-gift-data/guild-gift-data.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'GuildGifts', component: GuildGiftDataComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
