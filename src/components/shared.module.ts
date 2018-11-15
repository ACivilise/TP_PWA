import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Components
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HomeComponent],
    exports: [HomeComponent, CommonModule, FormsModule]
})
export class SharedModule { }
