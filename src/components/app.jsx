import React, { Component } from 'react';
import flats from '../data/flats';
import FlatList from './flat_list';
import SimpleMap from './simple_map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatLat: null,
      selectedFlatLong: null,
      center: {
        lat: 48.84,
        lng: 2.32
      }
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      selectedFlatLat: lat,
      selectedFlatLong: lng,
      center: {
        lat: lat,
        lng: lng
      }
    });
  }

  render() {
    return (
      <div>
        <FlatList flats={ flats } selectFlat={this.selectFlat}/>
        <div className="map-container">
          <SimpleMap
            center={ this.state.center }
            lat={ this.state.selectedFlatLat }
            lng={ this.state.selectedFlatLong }
          />
        </div>
      </div>
    );
  }
}

export default App;
