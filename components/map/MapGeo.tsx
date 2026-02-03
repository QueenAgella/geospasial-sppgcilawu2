"use client";

import {
  MapContainer,
  TileLayer,
  ZoomControl,
  GeoJSON,
  Marker,
  Popup,
  Polyline,
  Tooltip,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Feature, FeatureCollection } from "geojson";
import { Icon, LatLngTuple } from "leaflet";
import { sekolah } from "@/lib/sekolah";
import { posyandu } from "@/lib/posyandu";
import geoJsonKelurahan from "@/data/32.05_kelurahan.json";

const customIconSppg = new Icon({
  iconUrl: "/icon/sppg.svg",
  iconSize: [24, 24],
});

const customIconSchool = new Icon({
  iconUrl: "/icon/pin.png",
  iconSize: [24, 24],
});

const customIconSchool2 = new Icon({
  iconUrl: "/icon/pin2.png",
  iconSize: [24, 24],
});

const customIconPosyandu = new Icon({
  iconUrl: "/icon/posyandu.svg",
  iconSize: [24, 24],
});

export default function MapGeo() {
  const KODE_KECAMATAN_CILAWU = "019";
  const LOKASI_SPPG: [number, number] = [-7.275000, 107.918623];
  const dataKelurahan = geoJsonKelurahan as FeatureCollection;

  const filteredKelurahan: FeatureCollection = {
    type: "FeatureCollection",
    features: dataKelurahan.features.filter(
      (f: Feature) => f.properties?.kd_kecamatan === KODE_KECAMATAN_CILAWU
    ),
  };

  const haversineDistance = (coord1: LatLngTuple, coord2: LatLngTuple) => {
    const toRad = (x: number) => (x * Math.PI) / 180;

    const [lat1, lon1] = coord1;
    const [lat2, lon2] = coord2;

    const R = 6371e3;
    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lon2 - lon1);

    const a =
      Math.sin(Δφ / 2) ** 2 +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  const estimateMinutes = (distanceMeter: number, speedKmh: number = 20) => {
    const speedMPerMinute = (speedKmh * 1000) / 60;
    return distanceMeter / speedMPerMinute;
  };

  return (
    <MapContainer
      center={[-7.275000, 107.918623]}
      zoom={14}
      zoomControl={false}
      style={{ width: "100%", height: "100%", zIndex: 0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <ZoomControl position="bottomright" />
      <Circle
        center={LOKASI_SPPG}
        radius={2000}
        pathOptions={{
          color: "blue",
          weight: 1,
          dashArray: "4 6",
          fillOpacity: 0,
        }}
      />
      <Marker position={LOKASI_SPPG} icon={customIconSppg}>
        <Tooltip permanent direction="top" offset={[0, -10]}>
          SPPG GARUT CILAWU CILAWU 2
        </Tooltip>
        <Popup>
          <p className="font-semibold">
            SPPG Garut Cilawu Cilawu 2 - Yayasan Always Be Positive
          </p>
          <ul>
            <li>
              Jalan Garut - Tasik KM. 8, Cilawu
            </li>
          </ul>
        </Popup>
      </Marker>
      {sekolah.map((s, id) => {
        const d = haversineDistance(LOKASI_SPPG, s.geocode);
        const minutes = estimateMinutes(d);

        return (
          <div key={id}>
            <Marker
              position={s.geocode}
              icon={
                s.category === "PAUD/TK/RA"
                  ? customIconSchool2
                  : customIconSchool
              }
            >
              <Tooltip permanent direction="top" offset={[0, -10]}>
                {s.name}
              </Tooltip>
              <Popup>
                <p className="font-semibold">{s.name}</p>
                <ul>
                  <li>Alamat: {s.alamat}</li>
                  <li>{`Jarak: ${d.toFixed(0)} M (${minutes.toFixed(
                    1
                  )} Menit)`}</li>
                  <li>Kategori: {s.category}</li>
                  <li>Jumlah Siswa: {s.total_pm} Orang</li>
                  <li>Jumlah Guru dan Tendik: {s.total_guru} Orang</li>
                </ul>
              </Popup>
            </Marker>
            <Polyline
              positions={[LOKASI_SPPG, s.geocode]}
              pathOptions={{
                color: "blue",
                weight: 1,
                dashArray: "4 6",
                opacity: 0.5,
              }}
            />
          </div>
        );
      })}

      {/* {posyandu.map((p, id) => {
        const d = haversineDistance(LOKASI_SPPG, p.geocode);
        const minutes = estimateMinutes(d);

        return (
          <div key={id}>
            <Marker position={p.geocode} icon={customIconPosyandu}>
              <Popup>
                <p className="font-semibold">{p.name}</p>
                <ul>
                  <li>Alamat: {p.alamat}</li>
                  <li>{`Jarak: ${d.toFixed(0)} M (${minutes.toFixed(
                    1
                  )} Menit)`}</li>
                  <li>Balita: {p.total_pm.balita}</li>
                  <li>
                    Ibu Hamil & Menyusui: {p.total_pm.bumil + p.total_pm.busui}
                  </li>
                  <li>
                    Total Penerima Manfaat:{" "}
                    {p.total_pm.balita + p.total_pm.bumil + p.total_pm.busui}
                  </li>
                </ul>
              </Popup>
            </Marker>
            <Polyline
              positions={[LOKASI_SPPG, p.geocode]}
              pathOptions={{
                color: "blue",
                weight: 1,
                dashArray: "4 6",
                opacity: 0.5,
              }}
            />
          </div>
        );
      })} */}

      {/* <GeoJSON
        data={filteredKelurahan}
        style={{
          color: "red",
          weight: 2,
          fillOpacity: 0.1,
        }}
      /> */}
    </MapContainer>
  );
}
