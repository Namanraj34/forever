import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  constructor(
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {}

  shipData: any = [];
  priceTotal = 0;

  taxeS: number = 68;

  getUserData() {
    this.angularFirestore
      .collection('cart')
      .snapshotChanges()
      .subscribe((res) => {
        this.shipData = [];
        res.map((x) => {
          let data: any = x.payload.doc.data();
          data.id = x.payload.doc.id;
          this.shipData.push(data);
        });
        this.shipData.map((x: any) => {
          this.priceTotal =
            this.priceTotal + parseInt(x.price) * parseInt(x.quantity);
        });
      });
  }

  fName: any;
  gMail: any;
  shipAddress: any;
  lName: any;
  aDdress: any;
  cIty: any;
  citySelect: any;
  pHone: any;
  cOD: any;

  ngOnInit(): void {
    this.getUserData();
  }

  handleSubmit() {
    if (
      this.fName == '' ||
      (this.fName == null && this.gMail == '') ||
      (this.gMail == null && this.shipAddress == '') ||
      (this.shipAddress == null && this.lName == '') ||
      (this.lName == null && this.aDdress == '') ||
      (this.aDdress == null && this.cIty == '') ||
      (this.cIty == null && this.citySelect == '') ||
      (this.citySelect == null && this.pHone == '') ||
      (this.pHone == null && this.cOD == '') ||
      this.cOD == null
    ) {
      // alert('Enter Name');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You did not fill the all field!',
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      this.angularFirestore
        .collection('cart')
        .snapshotChanges()
        .subscribe((res) => {
          this.shipData = [];
          res.map((x) => {
            let id = x.payload.doc.id;

            this.angularFirestore.collection('cart').doc(id).delete();
            // .then(() => {
            //   this.handleSubmit();
            // });
          });
        });
      this.router.navigateByUrl('stripes');
      Swal.fire('Your Order is Placed!', 'You clicked the button!', 'success');
    }
  }
}
