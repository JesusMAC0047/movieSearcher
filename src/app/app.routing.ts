import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { MovieComponent } from './components/movie/movie.component';
import { InformationComponent } from './components/information/information.component';

const appRoutes: Routes = [
    {path: 'home', component: MainComponent},
    {path: 'movie/:name', component: MovieComponent},
    {path: 'information', component: InformationComponent},
    {path: '**', component: MainComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);