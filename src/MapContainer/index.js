import React, {Component}  from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
  	const style = {
  		width: '40%',
  		height: '40%',
  		'padding-top': '2em', 
  		'padding-left': '2em'
  	}
    return (
      <div>
	      <Map google={this.props.google} style={style} zoom={14}>
	        <Marker onClick={this.onMarkerClick}
	                name={'Current location'} />
	        <InfoWindow onClose={this.onInfoWindowClose}>
	        </InfoWindow>
	      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)


