import React, { useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

declare global {
  interface Window {
    google: any;
  }
}

const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ['places'];


const center = { lat: 37.7749, lng: -122.4194 }; // Initial map center

const MapContainer = () => {
  const history = useHistory();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
      history.replace('/'); // Redirect to the login page if not authenticated
    }
  }, [history]);

  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDjfzRLyR_isgxWi9TEMPDd6LdoaEIfJi0',
    libraries,
  });

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.panTo(center);
    }
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={{ height: '100%', width: '100%' }}
      zoom={10}
      center={center}
      onLoad={(map) => {
        mapRef.current = map;
      }}
    >
      {/* Add markers or other map components here */}
    </GoogleMap>
  );
};

const Location: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Location</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MapContainer />
      </IonContent>
    </IonPage>
  );
};

export default Location;
