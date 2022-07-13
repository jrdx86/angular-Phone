import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  /*To gather the user's name and address, use the FormBuilder group() method to set the checkoutForm property to a form model containing name and address fields.*/ 

  volverHome() {
    this.router.navigate(['']); //con esto podemos navegar a cualquier ruta
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  
  constructor(
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder, 
  ) { 
    
  }

  ngOnInit(): void {
  }

  
  
}
