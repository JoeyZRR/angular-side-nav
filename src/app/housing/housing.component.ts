import { Component, OnInit } from '@angular/core';

interface HouseDetail {
  name: String;
  phone: String;
}

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
})
export class HousingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  address = '50 Millstone Rd, East Windsor, NJ 08520';

  houseDetail: HouseDetail[] = [
    {
      name: 'Joey',
      phone: '1234567897',
    },
    {
      name: 'Taylor',
      phone: '1234567897',
    },
    {
      name: 'Patrick',
      phone: '1234567897',
    },
    {
      name: 'Taeyong',
      phone: '1234567897',
    },
    {
      name: 'Chuqi',
      phone: '1234567897',
    },
  ];
}
