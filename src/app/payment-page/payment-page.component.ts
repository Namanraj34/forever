import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  constructor(
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {}

  payData: any = [];
  priceTotal = 0;

  getUserData() {
    this.angularFirestore
      .collection('cart')
      .snapshotChanges()
      .subscribe((res) => {
        this.payData = [];
        res.map((x) => {
          let data: any = x.payload.doc.data();
          data.id = x.payload.doc.id;
          this.payData.push(data);
        });
        this.payData.map((x: any) => {
          this.priceTotal =
            this.priceTotal + parseInt(x.price) * parseInt(x.quantity);
        });
      });
  }
}
