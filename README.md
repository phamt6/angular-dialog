## Component Design

Design a reusable Angular Dialog component

This project has been created with [Angular CLI](https://github.com/angular/angular-cli) version 11., reviewer is expected to clone the repository locally, install dependencies with `npm install` and follow the instruction below

The following files and folders are relevant for coding reviewing:
1. `src/app/dialog/dialog.service`
2. `src/app/dialog/dialog.component`
3. `src/app/dialog/dialog.component.spec`
4. `src/app/dialog/dialog.component.less`

**Example for usage:**
1. `src/app/app.component.html` - dialog title is collected from here
2. `src/app/dynamic/dynamic.component.ts`
    *custom component that needs to close the popup upon different button click can call DialogService.close method*
3. `src/app/dynamic/dynamic.component.html`

**Requirement: resuable, flexible**

`Title` area only display "Text" information.

`X` close button can dismiss the Dialog component.

In **Content area** should be able to display any **text, form, different custom components**.
Can close the dialog by **clicking X button** or **any custom button can trigger close event (for example, if you pass a form to the Content, when click `Submit` button should close the Dialog)**.

You can use Angular CLI or [stackblitz](https://stackblitz.com/) to create an Angular project.

1. Create `Dialog` component folder, all Dialog releated code should be inside this folder. ✅ 
2. In `app.component.ts`, use `Dialog` component that you created with few example to show how to use your component (don't use any existing implementation such as Angular Material) ✅
3. Styling is **not** important, you don't need to make it looks beautiful, background overlay is not required. ✅ **I did it anyway, clicking on the overlay will also close the dialog**
4. We mainly would like to see how you design a reusable component. ✅ 
5. Basic unit testing cases for `Dialog` Component are **required**. ✅ 
6. It is **not** necessary to implement ARIA / Keyboard focus, you can skip it and it won't affect the score. Of course, it is a **plus** to show us your knowledge about accessibility. 🤞 **I have tried to add some aria attributes to the dialog component**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
