"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sekolah } from "@/lib/sekolah";

export const Target = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ cegah mismatch

  const totalSiswa = sekolah.reduce((sum, item) => sum + item.total_pm, 0);
  const totalGuru = sekolah.reduce((sum, item) => sum + item.total_guru, 0);
  const totalPk = sekolah.reduce((sum, item) => sum + item.pk, 0);
  const totalPb = sekolah.reduce((sum, item) => sum + item.pb, 0) + totalGuru;
  const grandTotal = totalSiswa + totalGuru;

  const openMaps = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  return (
    <Card>
      <CardContent>
        <Table>
          <TableCaption>Daftar Sekolah Penerima Manfaat.</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Nama Sekolah</TableHead>
              <TableHead>Porsi Kecil</TableHead>
              <TableHead>Porsi Besar</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Alamat</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {sekolah.map((item, index) => (
              <TableRow key={item.name} className="hover:bg-gray-50">
                <TableCell>{index + 1}</TableCell>

                <TableCell className="font-medium">
                  {item.name}
                  <div className="text-xs text-muted-foreground">
                    {item.category}
                  </div>
                </TableCell>

                <TableCell>{item.pk}</TableCell>
                <TableCell>{item.pb + item.total_guru}</TableCell>
                <TableCell>{item.total_pm + item.total_guru}</TableCell>

                <TableCell
                  onClick={() =>
                    openMaps(item.geocode[0], item.geocode[1])
                  }
                  className="cursor-pointer group"
                >
                  <span className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
                    {item.alamat}
                  </span>
                </TableCell>
              </TableRow>
            ))}

            <TableRow className="font-bold">
              <TableCell></TableCell>
              <TableCell>TOTAL</TableCell>
              <TableCell>{totalPk}</TableCell>
              <TableCell>{totalPb}</TableCell>
              <TableCell>{grandTotal}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};