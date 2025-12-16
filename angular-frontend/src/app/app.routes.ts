// import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { PreviewComponent } from './pages/preview/preview.component';
// import { SlugPageComponent } from './pages/slug/slug-page.component';
// import { HomepageBr } from './pages/br/homepage-br/homepage-br';
// import { SlugBr } from './pages/br/slug-br/slug-br';
// import { HomepageCo } from './pages/co/homepage-co/homepage-co';
// import { SlugCo } from './pages/co/slug-co/slug-co';

// export const routes: Routes = [
//   { path: '', pathMatch: 'full', component: HomeComponent },
//   { path: 'api/preview', component: PreviewComponent },
//   { path: 'br', component: HomepageBr },
//   { path: 'co', component: HomepageCo },
//   { path: 'br/:slug', component: SlugBr },
//   { path: 'co/:slug', component: SlugCo },
//   { path: ':slug', component: SlugPageComponent },
// ];

import { Routes } from '@angular/router';
import { PreviewComponent } from './pages/preview/preview.component';
import { App } from './app';
import { HomeMock } from './pages/home-mock/home-mock';

export const routes: Routes = [
  // { path: 'api/preview', component: PreviewComponent },
  // { path: '**', component: App } Voltar depois do mock
  { path: '**', component: HomeMock }
];
