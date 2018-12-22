import React from 'react';
import {RentalCard} from './RentalCard';

export class RentalList extends React.Component {
  constructor() {
    super();
    this.state = {
      rentals: [1,2,3]
    }
  }

  renderRentals() {
    return this.state.rentals.map((rental) => {
      return (
        <RentalCard />
      )
    });
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title text-center">Your Home for CSL Scouting</h1>
        <div className="row">
          {this.renderRentals()}
        </div>
      </section>
    )
  }
}
