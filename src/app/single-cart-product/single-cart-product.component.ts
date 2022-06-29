import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-single-cart-product',
  templateUrl: './single-cart-product.component.html',
  styleUrls: ['./single-cart-product.component.css'],
})
export class SingleCartProductComponent implements OnInit {
  constructor(
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {}
  pName: any = '';
  price: any = '';
  detail: any = '';
  mainImg: any = 'assets/skinny/skinny1.webp';
  img1: any = '';
  img2: any = '';
  img3: any = '';
  img4: any = '';
  titles: any = '';
  paras: any = '';
  quantity: any = '';

  ngOnInit(): void {
    this.pName = localStorage.getItem('pName');
    this.price = localStorage.getItem('price');
    this.mainImg = localStorage.getItem('img');
    this.img1 = localStorage.getItem('img1');
    this.img2 = localStorage.getItem('img2');
    this.img3 = localStorage.getItem('img3');
    this.img4 = localStorage.getItem('img4');
    this.titles = localStorage.getItem('titles');
    this.paras = localStorage.getItem('paras');
    this.detail = localStorage.getItem('detail');
  }

  selection: string = '';
  selected: string = '';

  looKes = [
    {
      img: 'assets/sheLook/look1.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: 'AED 40.00',
    },
    {
      img: 'assets/sheLook/look2.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: 'AED 40.00',
    },
    {
      img: 'assets/sheLook/look3.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: 'AED 40.00',
    },
    {
      img: 'assets/sheLook/look4.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: 'AED 40.00',
    },
  ];

  customer = [
    {
      img: 'assets/customer/custom1.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: 'AED 40.00',
    },
    {
      img: 'assets/customer/custom2.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: 'AED 40.00',
    },
    {
      img: 'assets/customer/custom3.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: 'AED 40.00',
    },
    {
      img: 'assets/customer/custom4.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: 'AED 40.00',
    },
    {
      img: 'assets/customer/custom5.webp',
      para: 'Tie-Hem Button-Up Shirt',
      price: 'AED 40.00',
    },
  ];

  changeImg(url: string) {
    this.mainImg = url;
  }

  addToCart() {
    return new Promise<any>((resolve, reject) => {
      Swal.fire('Good job!', 'Your Order in Add to Cart!', 'success');
      this.angularFirestore.collection('cart').add({
        name: this.pName,
        img: this.mainImg,
        price: this.price,
        quantity: this.selected,
        sized: this.selection,
      });
    });
  }

  buytocart() {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('cart').add({
        name: this.pName,
        img: this.mainImg,
        price: this.price,
        quantity: this.selected,
        sized: this.selection,
      });
    });
  }

  sizes = [
    { cloth: 'S/M' },
    { cloth: 'M/L' },
    { cloth: 'L/Xl' },
    { cloth: 'XL/XXl' },
  ];

  item = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
  ];
}
