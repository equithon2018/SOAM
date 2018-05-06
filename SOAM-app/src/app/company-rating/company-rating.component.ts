import { Component, Inject, OnInit } from '@angular/core';

import { FormGroup, FormBuilder }   from '@angular/forms';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";



@Component({
  selector: 'app-company-rating',
  templateUrl: './company-rating.component.html',
  styleUrls: ['./company-rating.component.css']
})
export class CompanyRatingComponent implements OnInit   {

  // constructor() { }
  form: FormGroup;
  description: string;


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CompanyRatingComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.description;
  }
  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []],

    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }


}
