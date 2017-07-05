import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import { SliderModule } from 'primeng/primeng';
import { MdSlideToggleModule, MdSlideToggleChange } from '@angular/material';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})

export class AdvancedSearchComponent implements OnInit {

  searchFormControl = new FormControl();
  displayAdvancedOptions = false;
  options: string[] = [
  'New York',
  'Kanpur',
  'Moon',
  'Mars',
  'Sun'
  ];
  filteredOptions: Observable<string[]>;
  bedrooms = [
    {value: 'bedroom-1', viewValue: 'One'},
    {value: 'bedroom-2', viewValue: 'Two'},
    {value: 'bedroom-3', viewValue: 'Three'},
    {value: 'bedroom-4', viewValue: 'Four'},
    {value: 'bedroom-5', viewValue: 'Five'}
  ];
  bathrooms = [
    {value: 'bathroom-1', viewValue: 'One'},
    {value: 'bathroom-2', viewValue: 'Two'},
    {value: 'bathroom-3', viewValue: 'Three'},
    {value: 'bathroom-4', viewValue: 'Four'},
    {value: 'bathroom-5', viewValue: 'Five'}
  ];
  types = [
    {value: 'type-1', viewValue: 'Hot'},
    {value: 'type-2', viewValue: 'Cold'}
  ];
  amenities = [
    {value: 'amenity-1', viewValue: 'Club'},
    {value: 'amenity-2', viewValue: 'Swimming Pool'}
  ];
  rangeValues: number[] = [
    100,
    10000
  ]

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.searchFormControl.valueChanges
        .startWith(null)
        .map(val => val ? this.filter(val) : this.options.slice());
  }

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

  public toggleAdvancedOptions = (event: MdSlideToggleChange) => {
    this.displayAdvancedOptions = !this.displayAdvancedOptions;
  }

}
