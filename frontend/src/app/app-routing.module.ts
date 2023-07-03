import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
    {path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)},
    {path: '**', redirectTo: 'profile'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
