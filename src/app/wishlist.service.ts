import { effect, Injectable, SettableSignal, signal } from '@angular/core';
import { DUMMY_WISHLIST_ARR } from './dummy-data';
import { WishlistItem } from './interfaces/wishlist.interface';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  wlArray: SettableSignal<WishlistItem[]>;
  lsSaver = effect(() => {
    localStorage.setItem('ng-wishlist', JSON.stringify(this.wlArray()));
  });
  constructor() {
    const itemsFromStorage = this.getItemsFromStorage();
    this.wlArray = signal(itemsFromStorage);
  }

  getItemsFromStorage() {
    const itemsStr = localStorage.getItem('ng-wishlist');
    return itemsStr ? JSON.parse(itemsStr) : DUMMY_WISHLIST_ARR;
  }
}
