import { Injectable } from '@angular/core';
import { Review } from './review';
import { Company } from './company';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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

  addCompany(id, name, rating, industry, location, companySite, femaleRatio, pocRatio, lgbtqRatio, hrEmail): void {
  	console.log("adding new company");
    let newCompany: Company = {
      companyId: id,
	  companyName: name,
	  rating: rating,
	  industry: industry,
	  location: location,
	  companySite: companySite,
	  femaleRatio: femaleRatio,
	  pocRatio: pocRatio,
	  lgbtqRatio: lgbtqRatio,
	  hrEmail: hrEmail,
	  reviews: [],
    };
    console.log(newCompany.companyId);
  	this.companies.push(newCompany);
  	console.log(this.companies);

  }

  addReview(): void {

  }


}