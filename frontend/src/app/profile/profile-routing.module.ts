import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from 'src/app/auth/auth.guard';
import {ProfileComponent} from 'src/app/profile/profile.component';

const routes: Routes = [
    {path: '', component: ProfileComponent, canActivate: [authGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}
