import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';
import L from 'leaflet';

// 🔍 Search Component to plug into Leaflet
const SearchControl = () => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider: provider,
      style: 'bar',
      autoClose: true,
      showMarker: true,
      showPopup: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: true,
      searchLabel: 'Search any area in Bangladesh...',
      marker: {
        icon: new L.Icon.Default(),
        draggable: false,
      },
      popupFormat: ({ label }) => `📍 ${label}`,
    });

    map.addControl(searchControl);

    return () => {
      map.removeControl(searchControl);
    };
  }, [map]);

  return null;
};

const BangladeshMap = ({ serviceCenter }) => {
  const centerOfBangladesh = [23.8103, 90.4125]; // Dhaka

  return (
    <MapContainer
      center={centerOfBangladesh}
      zoom={7}
      scrollWheelZoom={true}
      style={{ height: '800px', width: '100%', borderRadius: '12px' }}
    >
      {/* Map tile layer */}
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Search Bar */}
      <SearchControl />

      {/* Service Center Markers */}
      {serviceCenter.map((center, idx) => (
        <Marker position={[center.latitude, center.longitude]} key={idx}>
          <Popup>
            <strong>{center.district}</strong>
            <br />
            {center.covered_area.join(', ')}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default BangladeshMap;
