import React, { Component } from 'react';
import Flat from './flat'

class FlatList extends Component {
  constructor(props) {
    super(props);
  }

  renderList = () => {
    return this.props.flats.map(flat => <Flat flat={flat} key={flat.id} selectFlat={this.props.selectFlat}/>);
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
