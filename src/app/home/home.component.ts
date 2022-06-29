import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  topPicks = [
    {
      id: 'Tops',
      img: 'assets/icon-Tops_200x200.webp',
      name: 'Tops',
    },
    {
      id: 'Dresses',
      img: 'assets/DRESS.webp',
      name: 'Dresses',
    },
    {
      id: 'collection',
      img: 'assets/special collection.webp',
      name: ' collection',
    },
    {
      id: 'Swimwear',
      img: 'assets/swimmer.webp',
      name: 'Swimwear',
    },
    {
      id: 'Jumpsuits',
      img: 'assets/jumpsuit.webp',
      name: 'Jumpsuits',
    },
    {
      id: 'Men',
      img: 'assets/men.webp',
      name: 'Men',
    },
  ];

  denims = [
    {
      id: 'skin',
      img: 'assets/denim/denim1.webp',
      para: 'SKINNY',
    },
    {
      id: 'waist',
      img: 'assets/denim/denim2.webp',
      para: 'HIGH WAIST',
    },
    {
      id: 'mom-jeans',
      img: 'assets/denim/denim3.webp',
      para: 'MOMS JEANS',
    },
    {
      id: 'denim-jeans',
      img: 'assets/denim/denim4.webp',
      para: 'DENIM JEANS',
    },
    {
      id: 'plus',
      img: 'assets/denim/denim5.webp',
      para: 'PLUS SIZE',
    },
  ];

  denimCol = [
    {
      id: "WOMEN's",
      img: 'assets/denim/women.webp',
    },
    {
      id: 'ACCESSORIES',
      img: 'assets/denim/acessori.webp',
    },
    {
      id: 'pluS',
      img: 'assets/denim/plus.webp',
    },
    {
      id: 'meN',
      img: 'assets/denim/men.webp',
    },
  ];

  womenWear = [
    {
      img: 'assets/women-wear/dresses.webp',
      para: 'DRESSES',
    },
    {
      img: 'assets/women-wear/shorts.webp',
      para: 'SHORTS',
    },
    {
      img: 'assets/women-wear/swimwear.webp',
      para: 'SWIMWEAR',
    },
    {
      img: 'assets/women-wear/crop-top.webp',
      para: 'CROP TOP',
    },
    {
      img: 'assets/women-wear/caps-hat.webp',
      para: 'CAPS HAT',
    },
    {
      img: 'assets/women-wear/sunglasses.webp',
      para: 'SUNGLASSES',
    },
  ];

  productsImg = [
    {
      img: 'assets/product/product1.webp',
      para: 'Billowy Sheer Swim Cover-Up Dress - WHITE',
      price: 'AED 149.00',
    },
    {
      img: 'assets/product/product2.webp',
      para: 'O-Ring One-Piece Swimsuit - TANGERINE',
      price: 'AED 129.00',
    },
    {
      img: 'assets/product/product3.webp',
      para: 'Plunging One-Piece Swimsuit - BLACK',
      price: 'AED 99.00',
    },
    {
      img: 'assets/product/product4.webp',
      para: 'Striped Tie-Dye Boyshort Bikini Bottoms -',
      price: 'AED 89.00',
    },
  ];

  trending = [
    {
      img: 'assets/trending/trending1.webp',
      para: 'New York Graphic Short-Sleeve',
      price: 'AED 99.00',
    },
    {
      img: 'assets/trending/trending2.webp',
      para: 'Plaid Button-Front Shirt ',
      price: 'AED 99.00',
    },
    {
      img: 'assets/trending/trending3.webp',
      para: 'Tie-Waist Shirt Dress - CREAM',
      price: 'AED 149.00',
    },
    {
      img: 'assets/trending/trending4.webp',
      para: 'Floral Print Satin Crop Top ',
      price: 'AED 89.00',
    },
    {
      img: 'assets/trending/trending5.webp',
      para: 'Puff-Sleeve Crop Top - CREAM',
      price: 'AED 99.00',
    },
  ];

  arivel = [
    {
      img: 'assets/arrivel/arivel1.webp',
      para: '90s-Fit Curb Chain High',
      price: 'AED 149.00',
    },
    {
      img: 'assets/arrivel/arivel2.webp',
      para: 'Belted Cargo Jeans',
      price: 'AED 179.00',
    },
    {
      img: 'assets/arrivel/arivel3.webp',
      para: 'Straight-Leg Cargo Jeans',
      price: 'AED 179.00',
    },
    {
      img: 'assets/arrivel/arivel4.webp',
      para: 'Denim Utility Joggers ',
      price: 'AED 199.00',
    },
    {
      img: 'assets/arrivel/arivel5.webp',
      para: 'Active Cutout Crop Top ',
      price: 'AED 89.00',
    },
    {
      img: 'assets/arrivel/arivel6.webp',
      para: 'Striped Cropped Cami ',
      price: 'AED 99.00',
    },
  ];

  onClickImage(id: string) {
    this.router.navigateByUrl('/products/' + id);
  }

  onClickImageTop(id: string) {
    this.router.navigateByUrl('/topPick/' + id);
  }

  onClickAll(id: string) {
    this.router.navigateByUrl('/all-acc/' + id);
  }
}
