import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CompanyRatingComponent} from "../company-rating/company-rating.component";




@Component({
  selector: 'app-company-main',
  templateUrl: './company-main.component.html',
  styleUrls: ['./company-main.component.css']
})
export class CompanyMainComponent implements OnInit {

  constructor(private dialog: MatDialog) { }


  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
      width: '700px',
      // data: { name: this.name, animal: this.animal }

    };

    // this.dialog.open(CompanyRatingComponent, dialogConfig);

    const dialogRef = this.dialog.open(CompanyRatingComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

  ngOnInit() {

  }

}
