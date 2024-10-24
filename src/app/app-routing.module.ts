import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from './services-page/services-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesPageComponent,
  },
  {
    path: 'gallery',
    component: GalleryPageComponent,
  },
  // Otras rutas adicionales si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
