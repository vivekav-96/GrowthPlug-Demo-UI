import { NgModule } from '@angular/core';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppInfoHeaderComponent } from './app-info-header/app-info-header.component';
import { AppListDataComponent } from './app-list-data/app-list-data.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { AppSpaceRoutingModule } from './app-space-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';




@NgModule({
    declarations: [      
    AppMenuComponent,
    AppInfoHeaderComponent,
    AppListDataComponent,
    AppContainerComponent],
    imports: [

        AppSpaceRoutingModule,
        CommonModule,ButtonsModule,DialogsModule,
        FormsModule,DropDownsModule,TreeViewModule,GridModule
    ],

    providers:
    [],
   

  })
  export class AppSpaceModule { }