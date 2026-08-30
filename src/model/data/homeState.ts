interface Widget {
  id: number;
  title: string;
  type: string;
  slug:"bestSeller" | "bestOffer" | "populer"
}

interface HomeState {
  homeWidgets: Widget[];
}

export type { HomeState, Widget };
