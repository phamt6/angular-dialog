import { DialogService } from './../dialog/_services/dialog.service';
import { Component, Output } from '@angular/core';

@Component({
	selector: 'app-dynamic',
	templateUrl: './dynamic.component.html',
	styleUrls: ['./dynamic.component.less']
})
export class DynamicComponent {	
	constructor(
		private dialogService: DialogService
	){}

	submit() {
		this.dialogService.close();
	}
}
