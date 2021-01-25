import { DynamicComponent } from './../dynamic/dynamic.component';
import { DialogComponent } from './dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		DialogComponent,
		DynamicComponent
	],
	entryComponents: [
		DynamicComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		DialogComponent
	]
})
export class DialogModule { }
