// src/services/calendar.ts
export type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
};

const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: "1",
    title: "Evento de prueba On The Rocks",
    start: "2025-08-01T10:00:00",
    end: "2025-08-01T18:00:00",
  },
  {
    id: "2",
    title: "Reunión con cliente premium",
    start: "2025-08-03T14:00:00",
    end: "2025-08-03T15:00:00",
  },
];

export async function fetchEvents(): Promise<CalendarEvent[]> {
  // Siempre devuelve datos simulados
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_EVENTS), 500);
  });
}
