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
  const totalSiswa = sekolah.reduce((sum, item) => sum + item.total_pm, 0);
  const totalGuru = sekolah.reduce((sum, item) => sum + item.total_guru, 0);
  const totalPk = sekolah.reduce((sum, item) => sum + item.pk, 0);
  const totalPb = sekolah.reduce((sum, item) => sum + item.pb, 0) + totalGuru;
  const grandTotal = totalSiswa + totalGuru;

  return (
    <Card>
      <CardContent>
        <Table>
          <TableCaption>Daftar Sekolah Penerima Manfaat.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Nama Sekolah</TableHead>
              <TableHead>Porsi Kecil</TableHead>
              <TableHead>Porsi Besar</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Alamat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sekolah.map((item, index) => (
              <TableRow key={item.name}>
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
                <TableCell>{item.alamat}</TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold">
              <TableCell></TableCell>
              <TableCell>TOTAL</TableCell>
              <TableCell>{totalPk}</TableCell>
              <TableCell>{totalPb}</TableCell>
              <TableCell>{grandTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
