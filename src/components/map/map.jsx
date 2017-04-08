import React from 'react';
import { defaultProps, withState, compose, withHandlers } from 'recompose';
import GoogleMapReact from 'google-map-react';
import MyMarker from './MyMarker.jsx';
import GmapConfig from '../../settings/gmapconfig.js'; 
import markerData from './markerData.js'
//

class SimpleMap extends Component {

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap.defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };