"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { id } from "date-fns/locale";

export const Today = () => {
  const [date, setFormattedDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setFormattedDate(
        format(now, "EEEE, dd/MM/yyyy. HH:mm:ss", { locale: id }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className="text-[#071e49] font-medium">{`${date} WIB`}</p>;
};
