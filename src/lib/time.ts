export type DayInput = {
  arrival: string;
  departure: string;
  expectedStart: string;
  expectedEnd: string;
  pause: number;
  margin: number;
};
export function minutes(value: string) {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(value))
    throw new Error("Horaire invalide");
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}
export function formatDuration(value: number) {
  return `${Math.floor(value / 60)} h ${String(value % 60).padStart(2, "0")}`;
}
export function calculateDay(input: DayInput) {
  const a = minutes(input.arrival),
    d = minutes(input.departure),
    s = minutes(input.expectedStart),
    e = minutes(input.expectedEnd);
  if (
    !Number.isFinite(input.pause) ||
    input.pause < 0 ||
    !Number.isFinite(input.margin) ||
    input.margin < 0
  )
    throw new Error("Valeur invalide");
  if (e <= s || d <= a)
    throw new Error(
      "Cette démo attend une arrivée avant le départ, dans la même journée. Les services de nuit nécessitent un autre paramétrage.",
    );
  const gross = d - a;
  if (input.pause > gross)
    throw new Error("La pause ne peut pas dépasser la durée de présence.");
  const effective = gross - input.pause,
    expected = Math.max(0, e - s - input.pause),
    late = Math.max(0, a - s),
    early = Math.max(0, e - d),
    extra = Math.max(0, effective - expected);
  return {
    gross,
    effective,
    expected,
    late,
    early,
    extra,
    lateFlag: late > input.margin,
  };
}
