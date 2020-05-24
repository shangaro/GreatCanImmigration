import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { JglsafariComponent } from './jglsafari.component';
import { MaterialDesignModule } from 'src/app/shared/material-design.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,MaterialDesignModule,FormsModule],
    exports: [MaterialDesignModule],
    declarations: [JglsafariComponent],
    providers: [],
})
export class JglsafariModule { }
