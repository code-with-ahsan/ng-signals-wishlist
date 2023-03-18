import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistItemComponent } from '../wishlist-item/wishlist-item.component';
import { NewWishlistFormComponent } from '../new-wishlist-form/new-wishlist-form.component';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, WishlistItemComponent, NewWishlistFormComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wlService = inject(WishlistService);
  wishlistArray = this.wlService.wlArray;
  finishedCount!: Signal<number>;

  ngOnInit() {
    this.finishedCount = computed(() => {
      return this.wishlistArray().filter((item) => !!item.done).length;
    });
  }
}
