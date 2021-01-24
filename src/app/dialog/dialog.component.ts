import { DialogService } from './_services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit {
	display$: Observable<boolean> = new Observable<boolean>();

	constructor(
		private dialogService: DialogService
	) { }

	ngOnInit() {
		this.display$ = this.dialogService.watch();
	}

	close() {
		this.dialogService.close();
	}

}
