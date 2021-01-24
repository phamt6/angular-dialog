import { DialogService } from './dialog/_services/dialog.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {
	title = 'coding-ex-dialog';

	constructor(
		private dialogService: DialogService
	) { }

	open() {
		this.dialogService.open();
	}
}
