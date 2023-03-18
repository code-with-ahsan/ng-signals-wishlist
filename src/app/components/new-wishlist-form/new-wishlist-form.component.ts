import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistItem } from 'src/app/interfaces/wishlist.interface';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-new-wishlist-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-wishlist-form.component.html',
  styleUrls: ['./new-wishlist-form.component.scss'],
})
export class NewWishlistFormComponent {
  wishlistService = inject(WishlistService);
  addNewItem(text: string, e: SubmitEvent) {
    e.preventDefault();
    const newItem: WishlistItem = {
      id: crypto.randomUUID(),
      text,
      done: false,
    };
    this.wishlistService.wishlistArr.set([
      newItem,
      ...this.wishlistService.wishlistArr(),
    ]);
    console.log({ newItem });
    const target = e.target as HTMLFormElement;
    target.reset();
  }
}
