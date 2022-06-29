import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  constructor(
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserList();
  }

  customer = [
    {
      img: 'assets/customer/custom1.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: '40.00',
    },
    {
      img: 'assets/customer/custom2.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: '40.00',
    },
    {
      img: 'assets/customer/custom3.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: '40.00',
    },
    {
      img: 'assets/customer/custom4.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: '40.00',
    },
    {
      img: 'assets/customer/custom5.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: '40.00',
    },
  ];

  cartData: any = [];
  final_Quantity = '';

  finalPrice = 0;

  getUserList() {
    this.angularFirestore
      .collection('cart')
      .snapshotChanges()
      .subscribe((res) => {
        this.finalPrice = 0;
        this.cartData = [];
        res.map((x) => {
          let data: any = x.payload.doc.data();
          data.id = x.payload.doc.id;
          this.cartData.push(data);
        });
        this.cartData.map((x: any) => {
          x.subTotal = x.price * x.quantity;
          this.final_Quantity = x.quantity;
          this.finalPrice =
            this.finalPrice + parseInt(x.price) * parseInt(x.quantity);
        });
      });
  }

  onDeleteUser(user: any) {
    this.angularFirestore
      .collection('cart')
      .doc(user)
      .delete()
      .then(() => {
        this.getUserList();
      });
  }

  updateUser(id: any) {
    console.log('Updated');
    return this.angularFirestore
      .collection('cart')
      .doc(id)
      .update({
        quantity: this.final_Quantity,
      })
      .then(() => {
        this.getUserList();
      });
  }
}
