export class PlaylistSettings {
  hideCompleted: boolean;
  incompleteFirst: boolean;
  sortOrder: string;

  constructor() {
    this.hideCompleted = false;
    this.incompleteFirst = true;
    this.sortOrder = PlayListSortOrder.NewestFirst;
  };
}

export enum PlayListSortOrder {
  Alphabetical = 'alphabetical',
  NewestFirst = 'newestFirst',
  OldestFirst = 'oldestFirst',
}
