export type HistoryType = {
  week: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
};

function getMonday(date: Date) {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}

function formatDate(date: Date) {
  return date
    .toLocaleDateString("id-ID")
    .replace(/\//g, "-");
}

export function generateTodayHistory(): HistoryType {
  const today = new Date();
  const monday = getMonday(new Date(today));
  const saturday = new Date(monday);
  saturday.setDate(monday.getDate() + 5);

  const history: HistoryType = {
    week: `${formatDate(monday)} s.d. ${formatDate(saturday)}`,
    mon: "-",
    tue: "-",
    wed: "-",
    thu: "-",
    fri: "-",
    sat: "-",
  };

  const day = today.getDay(); 
  // 0 = Minggu, 1 = Senin, ... 6 = Sabtu

  if (day === 1) history.mon = "3041";
  if (day === 2) history.tue = "3041";
  if (day === 3) history.wed = "3041";
  if (day === 4) history.thu = "3041";
  if (day === 5) history.fri = "3041";
  if (day === 6) history.sat = "3041";

  return history;
}

export const history: HistoryType[] = [generateTodayHistory()];