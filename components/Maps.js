"use client";

import { Map, Marker, Popup } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from "geolib";
import { Fragment, useState } from "react";

function Maps({ locations = [] }) {
  const coordinates = locations
    .map((location) => ({
      latitude: Number(location.lat),
      longitude: Number(location.long),
    }))
    .filter(
      ({ latitude, longitude }) =>
        Number.isFinite(latitude) && Number.isFinite(longitude),
    );

  const center = coordinates.length
    ? getCenter(coordinates)
    : { latitude: 51.542165499999996, longitude: -0.0022275 };

  const [selectedLocationId, setSelectedLocationId] = useState(null);

  return (
    <Map
      key={`${center.latitude}-${center.longitude}`}
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: "100%", height: "32rem" }}
      mapboxAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/abhishek-06/cmu6mfvsm001h01qv8hcf3fye"
    >
      {locations.map((location) => {
        const latitude = Number(location.lat);
        const longitude = Number(location.long);

        if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
          return null;
        }

        const isSelected = selectedLocationId === location.img;

        return (
          <Fragment key={`${location.img}-${latitude}-${longitude}`}>
            <Marker
              latitude={latitude}
              longitude={longitude}
              anchor="bottom"
              onClick={(event) => {
                event.originalEvent.stopPropagation();
                setSelectedLocationId(location.img);
              }}
            >
              <div className="cursor-pointer text-xl animate-bounce">📌</div>
            </Marker>

            {isSelected && (
              <Popup
                onClose={() => setSelectedLocationId(null)}
                closeOnClick={true}
                latitude={latitude}
                longitude={longitude}
                closeButton={true}
                anchor="top"
                className="custom-popup"
              >
                {location.title}
              </Popup>
            )}
          </Fragment>
        );
      })}
    </Map>
  );
}

export default Maps;
