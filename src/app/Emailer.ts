/*import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'home.html'
  })

export class Emailer{


constructor(private emailComposer: EmailComposer) { }

    SendEmail(){


    this.emailComposer.getClients().then((apps: []) => {
       // Returns an array of configured email clients for the device
    });

    this.emailComposer.hasClient().then( (isValid: boolean) => {
     if (isValid) {
       // Now we know we have a valid email client configured
       // Not specifying an app will return true if at least one email client is configured
     }
    });

    this.emailComposer.hasAccount().then((isValid: boolean) => {
     if (isValid) {
       // Now we know we have a valid email account configured
     }
    });

    this.emailComposer.isAvailable().then( (available: boolean) => {
     if(available) {
       // Now we know we can send an email, calls hasClient and hasAccount
       // Not specifying an app will return true if at least one email client is configured
     }
    });

    let email = {
      to: 'griffintgoldberg@gmail.com',
      //cc: 'erika@mustermann.de',
      //bcc: ['john@doe.com', 'jane@doe.com'],
      /*attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    }

    // Send a text message using default options
    this.emailComposer.open(email);
    }
}
*/
