import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Taj Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 101,
      roomType: 'Deluxe Room',
      amenities: 'AC, Wifi, TV',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
      checkinTime: new Date('11/11/2005'),
      checkoutTime: new Date('15/11/2005'),
      rating: 4.5,
    },
    {
      roomNumber: 201,
      roomType: 'Suite',
      amenities: 'AC, Wifi, TV, balcony',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
      checkinTime: new Date('11/5/2007'),
      checkoutTime: new Date('15/5/2007'),
      rating: 3.4,
    },
    {
      roomNumber: 301,
      roomType: 'Super Deluxe Room',
      amenities: 'AC, Wifi, TV, balcony, Queen bed',
      price: 1500,
      photos:
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      checkinTime: new Date('11/7/2006'),
      checkoutTime: new Date('15/7/2006'),
      rating: 4.7,
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
