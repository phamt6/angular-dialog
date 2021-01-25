import { Component } from '@angular/core';

@Component({
	selector: 'app-dynamic',
	templateUrl: './dynamic.component.html',
	styleUrls: ['./dynamic.component.less']
})
export class DynamicComponent {
	content: string = 'Dynamic Content';
}
