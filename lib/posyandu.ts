import { LatLngTuple } from "leaflet";

export type PosyanduType = {
  geocode: LatLngTuple;
  name: string;
  alamat: string;
  total_pm: PosyanduPM;
};

export type PosyanduPM = {
  balita: number;
  bumil: number;
  busui: number;
};

export const posyandu: PosyanduType[] = [
  {
    geocode: [-7.060043, 108.01321],
    name: "Posyandu Tunasjaya",
    alamat: "Kp. Sangkali RT 003 RW 001",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.05362, 108.015031],
    name: "Posyandu Dahlia",
    alamat: "Kp. Cipatik RT 001 RW 002",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.053635, 108.015769],
    name: "Posyandu Mawar",
    alamat: "Kp. Cipatik RT 001 RW 003",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.052582, 108.020663],
    name: "Posyandu Melati",
    alamat: "Kp. Kubang RT 003 RW 004",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.053834, 108.022219],
    name: "Posyandu Seroja",
    alamat: "Kp. Ibnusina RT002 RW 005",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.058082, 108.022978],
    name: "Posyandu Mandiri",
    alamat: "Kp. Cikambangan RT 001 RW 006",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.057697, 108.022517],
    name: "Posyandu Kenanga",
    alamat: "Kp. Palalangon RT 002 RW 006",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.055381, 108.027222],
    name: "Posyandu Sejahtera",
    alamat: "Kp. Cioray Warung RT 001 RW 007",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.052944, 108.026672],
    name: "Posyandu Binangkit",
    alamat: "Kp. Cioray Tengah RT 002 RW 008",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.052935, 108.02804],
    name: "Posyandu Aster",
    alamat: "Kp. Cioray Tengah RT 002 RW 009",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.048151, 108.023886],
    name: "Posyandu Anggrek",
    alamat: "Kp. Cipoos RT 002 RW 010",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
  {
    geocode: [-7.0466, 108.026541],
    name: "Posyandu Plamboyan",
    alamat: "Kp. Talun RT 002 RW 011",
    total_pm: {
      balita: 0,
      bumil: 0,
      busui: 0,
    },
  },
];
