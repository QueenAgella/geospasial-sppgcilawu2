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

type HistoryItem = {
  week: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
};

export const History = () => {
  const isLibur = (value?: string): boolean => {
    return value?.toLowerCase().includes("libur") ?? false;
  };

  const days: (keyof HistoryItem)[] = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ];

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
            {history.map((item: HistoryItem, index: number) => (
              <TableRow key={index}>
                <TableCell>{item.week}</TableCell>

                {days.map((day) => (
                  <TableCell
                    key={day}
                    className={
                      isLibur(item[day]) ? "text-red-500 font-medium" : ""
                    }
                  >
                    {item[day]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};