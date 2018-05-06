import { Review } from './review';
export class Company {
	companyId: number;
	companyName: string;
	rating: number;
	industry: string;
	location: string;
	companySite: string;
	femaleRatio: number;
	pocRatio: number;
    lgbtqRatio: number;
	hrEmail: string;
	reviews: Review[];
}