import { Injectable } from '@angular/core';
import { Company } from './company';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  companies: FirebaseListObservable<Company[]>;
  
  constructor(db: AngularFireDatabase) {
  this.companies = db.list('/companies'); 
  }

  getCompanies(): FirebaseListObservable<Company[]> {
  	return this.companies;
  }

  addCompany(id, name, rating): void {
  	console.log("adding new company");
    let newCompany: Company = {
      companyId: id;
	  companyName: name;
	  rating: rating;
    };
    console.log(newCompany.companyId);
  	this.companies.push(newCompany);
  	console.log(this.companies);

  }


}