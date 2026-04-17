"use client";

import { sekolah } from "@/lib/sekolah";

export default function SekolahList() {
  const openMaps = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-4">
      {sekolah.map((item, index) => (
        <div
          key={index}
          className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-semibold text-base">{item.name}</h3>

          <p className="text-xs text-gray-500">{item.category}</p>

          <div
            onClick={() => openMaps(item.geocode[0], item.geocode[1])}
            className="mt-1 flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition active:scale-95"
          >
            <span>📍</span>
            {item.alamat}
          </div>

          <div className="mt-2 text-xs text-gray-600 space-y-1">
            <p>Total PM: {item.total_pm}</p>
            <p>Total Guru: {item.total_guru}</p>
            <p>
              PK: {item.pk} | PB: {item.pb}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}