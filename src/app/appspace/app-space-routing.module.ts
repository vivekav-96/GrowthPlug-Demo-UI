import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppContainerComponent } from './app-container/app-container.component';







const routes: Routes = [
   
    {
        path: '',
        component: AppContainerComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppSpaceRoutingModule { }