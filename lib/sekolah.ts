import { LatLngTuple } from "leaflet";

export type SekolahType = {
  geocode: LatLngTuple;
  category: "PAUD/TK/RA" | "SD/MI" | "SMP/MTS" | "SMA/MA";
  name: string;
  alamat: string;
  total_pm: number;
  total_guru: number;
  pk: number;
  pb: number;
};

export const sekolah: SekolahType[] = [
  {
    geocode: [-7.274400000000, 107.921400000000],
    category: "PAUD/TK/RA",
    name: "KOBER AL - QOMARIYAH",
    alamat: "Kp. Cikadu RT 01/07, Ds. Cilawu",
    total_pm: 28,
    total_guru: 5,
    pk: 28,
    pb: 5,
  },
  {
    geocode: [-7.262553, 107.912213],
    category: "PAUD/TK/RA",
    name: "TK ISLAM PLUS AL - MUHAJIRIN",
    alamat: "Perum BPI Blok A, Ds. Pasanggrahan",
    total_pm: 38,
    total_guru: 5,
    pk: 38,
    pb: 5,
  },
  {
    geocode: [-7.272521, 107.917419],
    category: "PAUD/TK/RA",
    name: "TK DARUL HIKMAH",
    alamat: "Kp. Pasanggrahan Tongoh RT 04/02, Ds. Cilawu",
    total_pm: 43,
    total_guru: 9,
    pk: 43,
    pb: 9,
  },
  {
    geocode: [-7.271632455245153, 107.9165309596133], 
    category: "SD/MI",
    name: "SDN 1 CILAWU",
    alamat: "Kp. Pasanggrahan Tonggoh, Ds. Cilawu",
    total_pm: 272,
    total_guru: 16,
    pk: 137,
    pb: 151,
  },
  {
    geocode: [-7.281442630368211, 107.92190005548501], 
    category: "SD/MI",
    name: "SDN 2 Cilawu",
    alamat: "Kp. Cigasong, Ds. Cilawu",
    total_pm: 180,
    total_guru: 11,
    pk: 78,
    pb: 113,
  },
  {
    geocode: [-7.279070100854579, 107.91948552914907], 
    category: "SD/MI",
    name: "SDN 3 CILAWU",
    alamat: "Kp. Cigasong, Ds. Cilawu",
    total_pm: 116,
    total_guru: 11,
    pk: 57,
    pb: 70,
  },
  {
    geocode: [-7.268968309605799, 107.91343268151833],
    category: "SMP/MTS",
    name: "MTSS DARUNNAJAH",
    alamat: "Jl. Raya Cilawu No.2 Km 7 (Samping GI PLN Cilawu), Ds. Cilawu",
    total_pm: 121,
    total_guru: 10,
    pk: 0,
    pb: 131,
  },
  {
    geocode: [-7.275461887035692, 107.91813621329321], 
    category: "SMA/MA",
    name: "SMKN 10 GARUT",
    alamat: "Jl. Raya Garut Tasik Km 08, Ds. Cilawu",
    total_pm: 2033,
    total_guru: 143,
    pk: 0,
    pb: 2176,
  },
];
