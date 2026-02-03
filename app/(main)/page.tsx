import { Container, Prose, Section } from "@/components/ds";
import { MapWrapper } from "@/components/map/MapWrapper";
import { Card } from "@/components/ui/card";
import { posyandu } from "@/lib/posyandu";
import { sekolah } from "@/lib/sekolah";
import { Total } from "./_components/Total";
import { Stats } from "./_components/Stats";
import { Target } from "./_components/Target";
import { History } from "./_components/History";
import { Today } from "@/components/ui/today";

export interface ResultPosyandu {
  balita: number;
  bumil: number;
  busui: number;
}

export interface ResultSekolah {
  "PAUD/TK/RA": {
    total_pm: number;
  };
  "SD/MI": {
    total_pm: number;
  };
  "SMP/MTS": {
    total_pm: number;
  };
  "SMA/MA": {
    total_pm: number;
  };
}

export default function Home() {
  const resultPosyandu: ResultPosyandu = posyandu.reduce(
    (acc, item) => {
      acc.balita += item.total_pm.balita;
      acc.bumil += item.total_pm.bumil;
      acc.busui += item.total_pm.busui;
      return acc;
    },
    { balita: 0, bumil: 0, busui: 0 },
  );

  const resultSekolah: ResultSekolah = sekolah.reduce(
    (acc, item) => {
      acc[item.category].total_pm += item.total_pm;
      return acc;
    },
    {
      "PAUD/TK/RA": { total_pm: 0 },
      "SD/MI": { total_pm: 0 },
      "SMP/MTS": { total_pm: 0 },
      "SMA/MA": { total_pm: 0 },
    },
  );

  const guru = sekolah.reduce((sum, s) => sum + s.total_guru, 0);

  return (
    <Section>
      <Container className="grid gap-6 sm:gap-8">
        <Prose>
          <Today />
          <h4>
            Geospasial Penerima Manfaat Program Makan Bergizi Gratis (MBG)
          </h4>
          <h6 className="text-muted-foreground">
            SPPG Garut Cilawu Cilawu 2 - Yayasan Always Be Positive
          </h6>
        </Prose>
        <Total
          resultPosyandu={resultPosyandu}
          resultSekolah={resultSekolah}
          totalS={sekolah.length}
          totalP={posyandu.length}
          guru={guru}
        />
        <Stats
          resultPosyandu={resultPosyandu}
          resultSekolah={resultSekolah}
          guru={guru}
        />
        <Card className="h-[80vh] w-auto py-0 overflow-hidden">
          <MapWrapper />
        </Card>
        {/* <Schedule /> */}
        <div className="w-full overflow-x-auto">
          <History />
        </div>
        <div className="w-full overflow-x-auto">
          <Target />
        </div>
      </Container>
    </Section>
  );
}
