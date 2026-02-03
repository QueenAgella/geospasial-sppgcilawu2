import { Prose } from "@/components/ds";
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
import { history } from "@/lib/history";

export const History = () => {
  return (
    <Card>
      <CardContent className="space-y-4">
        <Table>
          <TableCaption>Riwayat Jumlah Penerima Manfaat.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Tanggal</TableHead>
              <TableHead>Senin</TableHead>
              <TableHead>Selasa</TableHead>
              <TableHead>Rabu</TableHead>
              <TableHead>Kamis</TableHead>
              <TableHead>Jumat</TableHead>
              <TableHead>Sabtu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.week}</TableCell>
                <TableCell
                  className={
                    item.mon.toLowerCase() === "libur" ? "text-red-500" : ""
                  }
                >
                  {item.mon}
                </TableCell>
                <TableCell
                  className={
                    item.tue.toLowerCase() === "libur" ? "text-red-500" : ""
                  }
                >
                  {item.tue}
                </TableCell>
                <TableCell
                  className={
                    item.wed.toLowerCase() === "libur" ? "text-red-500" : ""
                  }
                >
                  {item.wed}
                </TableCell>
                <TableCell
                  className={
                    item.thu.toLowerCase() === "libur" ? "text-red-500" : ""
                  }
                >
                  {item.thu}
                </TableCell>
                <TableCell
                  className={
                    item.fri.toLowerCase() === "libur" ? "text-red-500" : ""
                  }
                >
                  {item.fri}
                </TableCell>
                <TableCell
                  className={
                    item.sat.toLowerCase() === "libur" ? "text-red-500" : ""
                  }
                >
                  {item.sat}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
