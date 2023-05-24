import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "78rem",
  height: "48rem",
  backgroundColor: "red",
  borderRadius: "2rem",
  marginTop: "8rem",
};

const center = {
  lat: 43.198646330045015,
  lng: 140.99112959195782,
};

function GoogleMaps() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMaps);
