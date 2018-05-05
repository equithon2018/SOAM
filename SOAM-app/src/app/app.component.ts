import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Observable } from 'rxjs/Rx';
import { Company } from '../company';

@Component({
    selector: 'app-root',
    template: `
        <ul>
            <li *ngFor="let company of companies | async">
                <pre>{{ company.companyName }}</pre>
            </li>
        </ul>
    `
})
export class AppComponent {
    public companies: FirebaseListObservable<Company[]>;
    constructor(db: AngularFireDatabase) {
        this.companies = db.list('/companies');
    }
}
