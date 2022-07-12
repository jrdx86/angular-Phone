import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private router: Router, 
  ) { 
    
  }

  ngOnInit(): void {
  }
  volverHome() {
    this.router.navigate(['']); //con esto podemos navegar a cualquier ruta
  }
}
