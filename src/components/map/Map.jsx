import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: 400, width: "100%" }}
    >
      <TileLayer
        // url={`https://api.mapbox.com/styles/v1/umontag/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidW1vbnRhZyIsImEiOiJjbDJ4aDZveGMwdnEwM2tvejlkaDY1NGdrIn0.YEz0XFlyfegL-mHmn6b-SQ`}
        // attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>Hey ! you found me</Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default Map;
