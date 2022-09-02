import { VaccationDataService } from './../../services/vaccation-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holiday-package-search',
  templateUrl: './holiday-package-search.component.html',
  styleUrls: ['./holiday-package-search.component.scss']
})
export class HolidayPackageSearchComponent implements OnInit {
  vaccationRecords: any
  city: any
  constructor(private vaccationDataService: VaccationDataService,private route:Router) { }
  ngOnInit(): void {
    this.getCity()
  }

  vaccationFormObj = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required)
  })
  // search btn logic
  searchPackages() {
    console.log(this.vaccationFormObj)
    if (this.vaccationFormObj.status == 'INVALID') {
      alert("Please enter from and to destination")
    }

    let origin: string = this.vaccationFormObj.get('from')?.value
    origin = origin.toLowerCase()
    let destination: string = this.vaccationFormObj.get('to')?.value
    destination = destination.toLowerCase()
    this.vaccationDataService.getVaccationRecords().subscribe((res: any) => {
      this.vaccationRecords = res.packages
      this.vaccationRecords = res.packages.filter((el: any) => {
        let _tempOrigin: string = el.from
        let _tempDestination: string = el.to
        return ((_tempOrigin.toLowerCase() == origin) && (_tempDestination.toLowerCase() == destination))
      })
      if (this.vaccationFormObj.status == 'VALID') {
        if (this.vaccationRecords.length == 0) {
          alert("No records found")
        }
      }
      console.log(this.vaccationRecords)
    })
  }

  bookThePackage(){
this.route.navigateByUrl('/package/vaccationBooking')
  }

  //City list
  getCity() {
    this.vaccationDataService.getCityRecords().subscribe((res: any) => {
      this.city = res.city
    })
  }
}
