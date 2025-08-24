import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { About } from './about/about';
import { NgModule } from '@angular/core';
//adding routes for navbar to navigate between pages
export const routes: Routes = [
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: 'welcome', component: Welcome},
    {path: 'about', component: About},
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
