"use client";
import { useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ListingCardItem, SearchResultData } from "@/Utils/types/interface";
import { getCenter } from "geolib";
import Image from "next/image";

const Map = ({ searchResultData }: { searchResultData: SearchResultData }) => {
  const [selectedLocation, setSelectedLocation] =
    useState<ListingCardItem | null>(null);

  //  get coordinates of map
  const coordinates = searchResultData.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));
  //  get center of map
  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    longitude: center.longitude,
    latitude: center.latitude,
  });
  return (
    <MapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      onMove={(nextViewport) =>
        setViewPort((prev) => {
          return {
            ...prev,
            longitude: nextViewport.viewState.longitude,
            latitude: nextViewport.viewState.latitude,
          };
        })
      }
    >
      {searchResultData.map((listing) => (
        <div key={listing.long}>
          <Marker longitude={listing.long} latitude={listing.lat}>
            <div
              onClick={() => setSelectedLocation(listing)}
              className="animate-bounce"
            >
              <Image
                src="https://img.icons8.com/ios-filled/50/000000/map-marker.png"
                alt="map-marker"
                width={24}
                height={24}
              />
            </div>
          </Marker>
          {selectedLocation?.long === listing.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
              longitude={listing.long}
              latitude={listing.lat}
            >
              {listing.title}
            </Popup> 
          ) : null}
        </div>
      ))}
    </MapGL>
  );
};

export default Map;
