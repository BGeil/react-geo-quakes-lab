import React, { Component } from 'react';
// import MapContainer from './MapContainer'
import QuakeContainer from './QuakeContainer'

class App extends Component {
    constructor(){
        super();
        this.state = {
          properties: []
        }
      }
      getEarthquake = async () => {
        try {
          const locations = await fetch(`http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson`)
          const parsedLocations = await locations.json();
          console.log(parsedLocations)
          this.setState({
            properties: parsedLocations.features
          })
        }
        catch(err) {
          console.error(err)
        }
      }
      componentDidMount(){
        this.getEarthquake()
      }
      render() {
        return (
          <div className="app">
            <div className="mapContainer">
             
            </div>
            <div className="quakeContainer">
              <h1>Earthquakes from the past week: </h1>
               <QuakeContainer properties={this.state.properties}/>
            </div>
          </div>
        );
      }
}

export default App;
