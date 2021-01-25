import { DialogService } from './_services/dialog.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit {
	@ViewChild('dynamicInsert', { read: ViewContainerRef }) dynamicInsert!: ViewContainerRef;
	display$: Observable<boolean> = new Observable<boolean>();

	constructor(
		private dialogService: DialogService,
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngOnInit() {
		this.display$ = this.dialogService.watch();
	}

	close() {
		this.dialogService.close();
	}

	ngAfterViewInit() {
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
		this.dynamicInsert.clear();
		const dynamicComponent = <DynamicComponent>this.dynamicInsert.createComponent(componentFactory).instance;
		dynamicComponent.someProp = 'Hello World';
	}
}
