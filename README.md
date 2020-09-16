# MyIonicProject
CHOYCES App Prototype

To begin:
create a new blank ionic project and then download these files into the project.
Instructions:
1. ionic start
2. angular
3. any name
4. blank
5. Y


To add a new page to main menu:

//code enclosed in ()

//change all instances of name to name of page
1. command: ionic generate page name
2. in app.component.ts add import statement for page

(import {namePage} from '../pages/name/name';

   then add page to this.pages dictionary
   
({ title: 'name', component: namePage })

3. in app.module.ts add import statement for page

(same as before)

   then add page to declarations and entryComponents list
   
exported name of page will be in page's .ts file
