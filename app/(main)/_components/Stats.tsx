import { Prose } from "@/components/ds";
import { Card, CardContent } from "@/components/ui/card";
import { ResultPosyandu, ResultSekolah } from "../page";
import { Data } from "./Data";

interface StatsProps {
  resultPosyandu: ResultPosyandu;
  resultSekolah: ResultSekolah;
  guru: number;
}

export const Stats = ({ resultPosyandu, resultSekolah, guru }: StatsProps) => {
  return (
    <Card>
      <CardContent className="grid gap-4 sm:gap-6">
        <Prose>
          <p className="text-muted-foreground">
            Sebaran jumlah penerima manfaat:
          </p>
        </Prose>
        <div className="grid  grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <Data
            label="PAUD/TK/RA"
            value={resultSekolah["PAUD/TK/RA"].total_pm}
          />
          <Data label="SD/MI" value={resultSekolah["SD/MI"].total_pm} />
          <Data label="SMP/MTS" value={resultSekolah["SMP/MTS"].total_pm} />
          <Data label="SMA/MA" value={resultSekolah["SMA/MA"].total_pm} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <Data label="Balita" value={resultPosyandu.balita} />
          <Data label="Ibu Hamil" value={resultPosyandu.bumil} />
          <Data label="Ibu Menyusui" value={resultPosyandu.busui} />
          <Data label="Guru" value={guru} />
        </div>
      </CardContent>
    </Card>
  );
};
