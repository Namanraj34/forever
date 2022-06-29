import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css'],
})
export class StripeComponent implements OnInit {
  constructor(private angularFirestore: AngularFirestore) {}

  ngOnInit(): void {}

  selection: string = '';
  selected: string = '';
  yearSelect: string = '';

  addToCart() {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('cart').add({
        quantity: this.selected,
        sized: this.selection,
        monthS: this.yearSelect,
      });
    });
  }

  monthS = [
    { months: 'Jan (01)' },
    { months: 'Feb (02)' },
    { months: 'Mar (03)' },
    { months: 'Apr (04)' },
    { months: 'May (05)' },
    { months: 'Jun (06)' },
    { months: 'Jul (07)' },
    { months: 'Aug (08)' },
    { months: 'Sep (09)' },
    { months: 'Oct (10)' },
    { months: 'Nov (11)' },
    { months: 'Dec (12)' },
  ];

  yearS = [
    { year: '2022' },
    { year: '2023' },
    { year: '2024' },
    { year: '2025' },
    { year: '2027' },
    { year: '2028' },
    { year: '2029' },
    { year: '2030' },
    { year: '2031' },
    { year: '2032' },
    { year: '2033' },
    { year: '2034' },
    { year: '2035' },
    { year: '2036' },
    { year: '2037' },
    { year: '2038' },
    { year: '2039' },
    { year: '2040' },
    { year: '2041' },
    { year: '2042' },
    { year: '2043' },
    { year: '2044' },
  ];

  stripePayment() {
    console.log('working');
    // const stripe = require('stripe')(
    //   'sk_test_51LDp8WSEwUvzIHVurgubfDSe0WpP7x5NQd0lzm7jAXMgpM1DNi40PkaehV5zZtWtX1YTVc246Ycac2bdY2FP02bQ00YT07mzOb'
    // );
    // stripe.customers
    //   .create({
    //     email: 'namanraj34@gmail.com',
    //   })
    //   .then(() => console.log('ok'))
    //   .catch(() => console.error('error'));
  }
}
