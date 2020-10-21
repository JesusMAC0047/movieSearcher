import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { MovieComponent } from './components/movie/movie.component';

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'movie/:name', component: MovieComponent},
    {path: '**', component: MainComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);