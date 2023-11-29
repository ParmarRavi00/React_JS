import React from 'react'
import { Route, Routes,Outlet } from 'react-router-dom';
import Flights from './Flights';
import FlightHotel from './FlightHotel';
import CarRentals from './CarRentals';
import Attractions from './Attractions';
import AirportTaxis from './AirportTaxis';
import Stays from './Stays';

function Links() {
  return (
      <div>
          
          <Routes>
              <Route path='/' element = {<Stays/>}>Stays</Route>
              <Route path='/Flights' element = {<Flights/>}>Flights</Route>
              <Route path='/FlightHotel' element = {<FlightHotel/>}>Flight + Hotel</Route>
              <Route path='/CarRentals' element = {<CarRentals/>}>Car rentals</Route>
              <Route path='/Attractions' element = {<Attractions/>}>Attractions</Route>
              <Route path='/AirportTaxis' element = {<AirportTaxis/>}>Airport taxis</Route>
      </Routes>
      
      <Outlet/>
      
    </div>
  )
}

export default Links;