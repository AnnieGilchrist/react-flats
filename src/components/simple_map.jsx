import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var marker;

    if (!this.props.lat || !this.props.lng) {
      marker = <div></div>
    } else {
      marker = <AnyReactComponent
                 lat={this.props.lat}
                 lng={this.props.lng}
                 text="."
               />
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          center={this.props.center}
          defaultZoom={11}
        >
          { marker }
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
