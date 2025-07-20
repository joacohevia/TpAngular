import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClothesComponent } from './clothes/clothes.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
        path: '',
        redirectTo: 'clothes',
        pathMatch: 'full',
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path : 'clothes-list',
        component : ClothesListComponent
    },
    {
        path : 'cart',
        component: CartComponent
    },
    {
        path : 'clothes',
        component : ClothesComponent
    }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
