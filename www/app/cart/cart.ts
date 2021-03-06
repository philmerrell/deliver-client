import {Page, NavController, ViewController} from 'ionic/ionic';
import {CartService} from '../data/cart';
import {Checkout} from '../checkout/checkout';

@Page({
  templateUrl: 'app/cart/cart.html'
})
export class Cart {
  constructor(cartService: CartService, nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
    this.cartService = cartService;
    cartService.cartEmitter.subscribe((items) => {
      this.cart = items;
    });

    this.cart = this.cartService.getCart();
    this.total = '$'+this.cartService.getOrderTotal();

    console.log(this.cart);
  }

  remove(item) {
    this.cartService.removeItemFromCart(item);
  }

  checkout() {
    //this.modal.open(Checkout);
    this.nav.push(Checkout);
  }



}
