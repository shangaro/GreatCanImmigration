import { NgModule } from '@angular/core';
import { BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatMenuModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule
        
        
        
    ],
    exports:
     [
        BrowserAnimationsModule,NoopAnimationsModule,
        MatMenuModule,MatCheckboxModule,MatButtonModule,
        MatIconModule,MatCardModule,MatDividerModule,MatToolbarModule,
        MatSidenavModule,MatListModule,MatInputModule,MatExpansionModule,
        MatTableModule,MatPaginatorModule
    ]
})
export class MaterialDesignModule { }
