import { Prose } from "@/components/ds";
import { Card, CardContent } from "@/components/ui/card";

const mobil1 = [
  {
    name: "KOBER AL - QOMARIYAH",
    total: 33,
  },
  {
    name: "TK ISLAM PLUS AL - MUHAJIRIN",
    total: 43,
  },
  {
    name: "TK DARUL HIKMAH",
    total: 52,
  },
  {
    name: "SDN 1 CILAWU",
    total: 288,
  },
];

const mobil2 = [
   {
    name: "SDN 2 CILAWU",
    total: 191,
  },
  {
    name: "SDN 3 CILAWU",
    total: 127,
  },
  {
    name: "MTSS DARUNNAJAH",
    total: 131,
  },
  {
    name: "SMKN 10 GARUT",
    total: 2176,
  },
];

export const Schedule = () => {
  return (
    <Card>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">Alur distribusi paket MBG:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Prose>
            <p>{`Kloter 1: ${mobil1.reduce(
              (sum, m) => sum + m.total,
              0,
            )} Paket`}</p>
            <ol>
              {mobil1.map((m, i) => (
                <li key={i} className="text-zinc-800 text-sm">
                  {`${m.name} `}
                  <span className="font-semibold">({m.total})</span>
                </li>
              ))}
            </ol>
          </Prose>
          <Prose>
            <p>{`Kloter 2: ${mobil2.reduce(
              (sum, m) => sum + m.total,
              0,
            )} Paket`}</p>
            <ol>
              {mobil2.map((m, i) => (
                <li key={i} className="text-zinc-800 text-sm">
                  {`${m.name} `}
                  <span className="font-semibold">({m.total})</span>
                </li>
              ))}
            </ol>
          </Prose>
        </div>
      </CardContent>
    </Card>
  );
};
