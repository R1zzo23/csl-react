import React from 'react';

const Traits = React.createClass({
  render() {
    return (
      <div className="traits">
        <p>CON: {this.props.con}</p>
        <p>GRE: {this.props.gre}</p>
        <p>LOY: {this.props.loy}</p>
        <p>PFW: {this.props.pwf}</p>
        <p>PT: {this.props.pt}</p>
        <p>PER: {this.props.per}</p>
        <p>DUR: {this.props.dur}</p>
        <p>WE: {this.props.we}</p>
        <p>POP: {this.props.pop}</p>
      </div>
    )
  }
});

export default Traits;
