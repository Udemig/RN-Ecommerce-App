interface Widget {
  id: number;
  title: string;
  type: string;
}

interface HomeState {
  homeWidgets: Widget[];
}

export type { HomeState, Widget };
