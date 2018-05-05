import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CompanyService } from './company.service';

import { Observable } from 'rxjs/Rx';


import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [CompanyService],
})

export class AppComponent implements OnInit {
    companies: Company[];

    constructor(private companyService: CompanyService) { }

    ngOnInit() {
    	this.getCompanies();
    }

    getCompanies(): void {
    this.companyService.getCompanies()
        .subscribe(companies => this.companies = companies);
    }

    addCompany(): void {
    this.companyService.addCompany(5, "test4", 3, "Tech", "North America", "www.atechcompany.com", 40, 40, 50, "hr@ateachcompany.com");
    }
}
