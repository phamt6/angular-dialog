import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DialogComponent } from './dialog.component';
import { TestScheduler }  from 'rxjs/testing';
import { BehaviorSubject, defer, Subject } from 'rxjs';
import { DialogService } from './_services/dialog.service';

describe('DialogComponent', () => {
	let component: DialogComponent;
	let fixture: ComponentFixture<DialogComponent>;
	
	let mockObservable: BehaviorSubject<boolean>;
	let scheduler: TestScheduler;
	
	let el: DebugElement;
	let closeBtn: DebugElement;
	let overlay: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DialogComponent],
			providers: [DialogService]
		}).compileComponents();
	});

	beforeEach(() => {
		mockObservable = new BehaviorSubject<boolean>(false);

		fixture = TestBed.createComponent(DialogComponent);
		component = fixture.componentInstance;

		let dialogService = TestBed.inject(DialogService);
		spyOn(dialogService, 'watch').and.returnValue(mockObservable);

		el = fixture.debugElement.query(By.css('div.c-dialog'));
		closeBtn = fixture.debugElement.query(By.css('button.c-dialog__close'));
		overlay = fixture.debugElement.query(By.css('div.c-dialog__overlay'));

		scheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		})
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should stay hidden onload with initial properties', () => {
		expect(el.nativeElement.hidden).toBeTrue();
		expect(component.dialogTitle).toBeDefined();

		component.ngOnInit();
		scheduler.run(({ expectObservable }) => {
			const expectedDisplayStatus = { a: false };
			const expectedMarble = 'a';
			expectObservable(component.display$).toBe(expectedMarble, expectedDisplayStatus);
		})
	})

	it('should appear upon triggering dialogService', () => {  
		component.ngOnInit();
		mockObservable.next(true);
		fixture.detectChanges();
		scheduler.run(({ expectObservable }) => {
			const expectedDisplayStatus = { a: true };
			const expectedMarble = 'a';
			expectObservable(component.display$).toBe(expectedMarble, expectedDisplayStatus);
		});		
	})

	it('should disappear upon triggering of close method', () => { 
		component.ngOnInit();
		mockObservable.next(true);
		mockObservable.next(false);
		fixture.detectChanges();
		scheduler.run(({ expectObservable }) => {
			const expectedDisplayStatus = { a: false };
			const expectedMarble = 'a';
			expectObservable(component.display$).toBe(expectedMarble, expectedDisplayStatus);
		});
	});

	it('clicks on the close button should trigger close method', () => {
		let closeMethod = spyOn(component, 'close');
		closeBtn.triggerEventHandler('click', null);
		fixture.detectChanges();
		expect(closeMethod).toHaveBeenCalled();
	})

	it('clicks on the overlay should trigger close method', () => {
		let closeMethod = spyOn(component, 'close');
		overlay.triggerEventHandler('click', null);
		fixture.detectChanges();
		expect(closeMethod).toHaveBeenCalled();
	})
});
