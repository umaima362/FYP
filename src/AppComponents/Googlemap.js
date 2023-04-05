import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React , {useState,Component} from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import Multiform from './Multiform';

/*function Googlemap(props) {

  const [address,setAddress] = useState('');
  const [mapCenter,setMapCenter] = useState({lat: 31.5204,  lng: 74.3587});
 
 


  const handleChange = address => {
    setAddress({ address });
  };
 
  const  selectLocation = e => {
    
    
    
   
  };
  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {console.log('Success', latLng) ;
            setAddress({address}) ;
           setMapCenter({ mapCenter: latLng }) }

       )
      .catch(error => console.error('Error', error));
  };
  return (
    <div>
    
      <div id="googleMap" >
       <div style={{display:'flex',justifyContent: 'center', alignItems: 'center' , marginBottom:'50px'}}>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>

   
      <Map 

style={{marginRight:'5px' ,height: '70vh', width: '90%'}}
 google={props.google}
 initialCenter={{
   lat:mapCenter.lat,
   lng:mapCenter.lng
 }}
 center={{
   lat:mapCenter.lat,
   lng:mapCenter.lng
 }}>
<Marker position={{
  lat:mapCenter.lat,
  lng:mapCenter.lng
}} />

<button type="button" onClick={selectLocation} className="btn btn-outline-danger" style={{marginTop:'500px' , width:'150px'}}>
                Next
              </button>
</Map>
    
      </div>
 
      
      
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDLn7JG3ZHQNy8-G_Py7HlM6RJbnjY_wVY')
})(Googlemap)  */  



export class Googlemap extends Component {

  constructor(props) {
    super(props);
    this.state = { address: '',
    mapCenter:
    {
      lat: 31.5204,
      lng: 74.3587
    } };
  }
 
 

  handleChange = address => {
    this.setState({ address });
  };
 
 selectLocation = e => {
  
if (this.state.address != '') {
     
    this.props.handleNext();
    return true;
  } else {
    e.preventDefault();
    alert("Please Enter Location");
    return false;
  } 
 
  
 
   
  };

  backlocation = e => {
  
   
         
        this.props.handleBack();
      
     
     
      
     
       
      };
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {console.log('Success', latLng) ;
            this.setState({address}) ;
            this.setState({ mapCenter: latLng }) }

       )
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
      <div id="googleMap" >
       <div style={{display:'flex',justifyContent: 'center', alignItems: 'center' , marginBottom:'50px'}}>
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                 required >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
      
      <Map 

style={{marginRight:'5px' ,height: '70vh', width: '90%'}}
 google={this.props.google}
 initialCenter={{
   lat:this.state.mapCenter.lat,
   lng:this.state.mapCenter.lng
 }}
 center={{
   lat:this.state.mapCenter.lat,
   lng:this.state.mapCenter.lng
 }}>
<Marker position={{
  lat:this.state.mapCenter.lat,
  lng:this.state.mapCenter.lng
}} />
 <button type="button" onClick={this.backlocation} className="btn btn-outline-danger" style={{marginTop:'500px'  , width:'150px'}}>
                Back
              </button>
<button type="button" onClick={this.selectLocation} className="btn btn-outline-danger" style={{marginTop:'500px',marginLeft:'600px' , width:'150px'}}>
                Next
              </button>
              
</Map>
     
      
     
      </div>
      
    )
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDLn7JG3ZHQNy8-G_Py7HlM6RJbnjY_wVY')
})(Googlemap)  




