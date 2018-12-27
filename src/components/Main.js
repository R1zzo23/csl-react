import React from 'react';
import { Link } from 'react-router';
import { Header } from '../shared/Header';

const Main = React.createClass({
  render() {
    return (
      <div>
        <Link to="/">
          <Header />
        </Link>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
