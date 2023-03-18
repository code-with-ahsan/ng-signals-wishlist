import {
  effect,
  Injectable,
  SettableSignal,
  Signal,
  signal,
} from '@angular/core';
import { DUMMY_WISHLIST_ARR } from './dummy-data';
import { WishlistItem } from './interfaces/wishlist.interface';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  localStorageKey = 'ng-wish-list';
  wishlistArr: SettableSignal<WishlistItem[]>;
  localStorageSaver = effect(() => {
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.wishlistArr())
    );
  });
  constructor() {
    const initialWLValue = this.getWLFromLocalStorage();
    this.wishlistArr = signal(initialWLValue);
  }

  getWLFromLocalStorage() {
    const itemsStr = localStorage.getItem(this.localStorageKey);
    return itemsStr ? JSON.parse(itemsStr) : DUMMY_WISHLIST_ARR;
  }
}
