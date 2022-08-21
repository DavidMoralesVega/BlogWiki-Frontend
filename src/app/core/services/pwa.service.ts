import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
    providedIn: 'root'
})
export class PwaService {

    private promptEvent: any;
    status = false

    constructor(private swUpdate: SwUpdate) { }

    public initPwaPrompt() {
        window.addEventListener('beforeinstallprompt', (event: any) => {
            event.preventDefault();
            this.promptEvent = event;
            this.setButton(true);
        });
    }

    public setButton(arr: any) {
        return this.status = arr;
    }

    public installPwa() {
        this.setButton(false);
        this.promptEvent.prompt();
        this.promptEvent.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === 'accepted') {
            } else {
            }
            this.promptEvent = null;
        });
    }

    public updatePWA() {
        this.swUpdate.available
          .subscribe((value: any) => {
            window.location.reload();
          });
      }
}
