import { Card, CardContent } from "@/components/ui/card";
import { ResultPosyandu, ResultSekolah } from "../page";
import { Data } from "./Data";

interface TotalProps {
  resultPosyandu: ResultPosyandu;
  resultSekolah: ResultSekolah;
  totalS: number;
  totalP: number;
  guru: number;
}

export const Total = ({
  resultPosyandu,
  resultSekolah,
  totalS,
  totalP,
  guru,
}: TotalProps) => {
  const totalPosyandu =
    resultPosyandu.balita + resultPosyandu.bumil + resultPosyandu.busui;
  const totalSekolah =
    resultSekolah["PAUD/TK/RA"].total_pm +
    resultSekolah["SD/MI"].total_pm +
    resultSekolah["SMP/MTS"].total_pm +
    resultSekolah["SMA/MA"].total_pm;

  return (
    <Card>
      <CardContent className="grid grid-cols-3 gap-4 sm:gap-6">
        <Data label="Peserta Didik" value={totalSekolah} />
        <Data label="3B Posyandu" value={totalPosyandu} />
        <Data label="Total" value={totalSekolah + totalPosyandu + guru} />
      </CardContent>
    </Card>
  );
};
