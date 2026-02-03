import { Prose } from "@/components/ds";
import NumberCounter from "./NumberCounter";

interface DataProps {
  label: string;
  value: number;
}

export const Data = ({ label, value }: DataProps) => {
  return (
    <Prose>
      <small className="text-muted-foreground">{label}</small>
      <h4>
        <NumberCounter target={value} />
      </h4>
    </Prose>
  );
};
