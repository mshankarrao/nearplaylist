import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'incompleteFirst',
  pure: false,
})
export class IncompleteFirstPipe implements PipeTransform {
  transform(items: any[], incompleteFirst: boolean): any[] {
    if (items.length === 0 || !incompleteFirst) {
      return items;
    }

    let incompleteItems = items.filter(playlist => (playlist.timeCompleted === null));
    let completedItems = items.filter(playlist => (playlist.timeCompleted !== null));

    return incompleteItems.concat(completedItems);
  }
}
