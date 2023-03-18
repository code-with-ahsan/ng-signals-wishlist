import {
  Component,
  HostBinding,
  HostListener,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistItem } from 'src/app/interfaces/wishlist.interface';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-wishlist-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss'],
})
export class WishlistItemComponent {
  wishlistService = inject(WishlistService);
  @Input() item!: WishlistItem;
  @HostBinding('style.order')
  get order() {
    return this.item.done ? '1' : '0';
  }
  @HostListener('click')
  itemClick() {
    this.wishlistService.wishlistArr.set(
      this.wishlistService.wishlistArr().map((item) => {
        if (item.id === this.item.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  }
}
