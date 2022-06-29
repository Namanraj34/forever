import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-accesories',
  templateUrl: './all-accesories.component.html',
  styleUrls: ['./all-accesories.component.css'],
})
export class AllAccesoriesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  pName: any;

  product: any;

  setWomen = [
    {
      img: 'assets/womeSet/women1.webp',
      para: 'Mini Shirt Dress - CYPRESS',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women1.webp',
      img2: 'assets/womeSet/women1-1.jpeg',
      img3: 'assets/womeSet/women1-2.jpeg',
      img4: 'assets/womeSet/women1-3.jpeg',
    },
    {
      img: 'assets/womeSet/women2.jpeg',
      para: 'Satin High-Low Shirt Dress',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women2.jpeg',
      img2: 'assets/womeSet/women2-1.jpeg',
      img3: 'assets/womeSet/women2-2.jpeg',
      img4: 'assets/womeSet/women2-3.jpeg',
    },
    {
      img: 'assets/womeSet/women3.jpeg',
      para: 'Rhinestone Fringe Denim Shorts',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women3.jpeg',
      img2: 'assets/womeSet/women3-1.jpeg',
      img3: 'assets/womeSet/women3-2.jpeg',
      img4: 'assets/womeSet/women3-3.jpeg',
    },
    {
      img: 'assets/womeSet/women4.jpeg',
      para: 'Distressed Skinny Jeans - DARK',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women4.jpeg',
      img2: 'assets/womeSet/women4-1.jpeg',
      img3: 'assets/womeSet/women4-2.jpeg',
      img4: 'assets/womeSet/women4-3.jpeg',
    },
    {
      img: 'assets/womeSet/women5.jpeg',
      para: 'High-Rise Skinny Jeans - MEDIUM',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women5.jpeg',
      img2: 'assets/womeSet/women5-1.jpeg',
      img3: 'assets/womeSet/women5-2.jpeg',
      img4: 'assets/womeSet/women5-3.jpeg',
    },
    {
      img: 'assets/womeSet/women6.jpeg',
      para: 'Surplice Puff-Sleeve Crop Top ',
      price: '119.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women6.jpeg',
      img2: 'assets/womeSet/women6-1.jpeg',
      img3: 'assets/womeSet/women6-2.jpeg',
      img4: 'assets/womeSet/women6-3.jpeg',
    },
    {
      img: 'assets/womeSet/women7.jpeg',
      para: 'Lettuce-Edge Mesh Skirt - BLACK',
      price: '89.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women7.jpeg',
      img2: 'assets/womeSet/women7-1.jpeg',
      img3: 'assets/womeSet/women7-2.jpeg',
      img4: 'assets/womeSet/women7-3.jpeg',
    },
    {
      img: 'assets/womeSet/women8.jpeg',
      para: 'Checkered Happy Face Jeans ',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women8.jpeg',
      img2: 'assets/womeSet/women8-1.jpeg',
      img3: 'assets/womeSet/women8-2.jpeg',
      img4: 'assets/womeSet/women8-3.jpeg',
    },
    {
      img: 'assets/womeSet/women9.jpeg',
      para: 'Ribbed Knit Crop Top - BLACK',
      price: '59.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women9.jpeg',
      img2: 'assets/womeSet/women9-1.jpeg',
      img3: 'assets/womeSet/women9-2.jpeg',
      img4: 'assets/womeSet/women9-3.jpeg',
    },
    {
      img: 'assets/womeSet/women10.jpeg',
      para: 'Ruched-Strap Ribbed Bodysuit',
      price: '79.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women10.jpeg',
      img2: 'assets/womeSet/women10-1.jpeg',
      img3: 'assets/womeSet/women10-2.jpeg',
      img4: 'assets/womeSet/women10-3.jpeg',
    },
    {
      img: 'assets/womeSet/women11.jpeg',
      para: 'Chiffon Floral Print Maxi Dress',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women11.jpeg',
      img2: 'assets/womeSet/women11-1.jpeg',
      img3: 'assets/womeSet/women11-2.jpeg',
      img4: 'assets/womeSet/women11-3.jpeg',
    },
    {
      img: 'assets/womeSet/women12.jpeg',
      para: 'Floral Print Tie-Back Dress',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/women12.jpeg',
      img2: 'assets/womeSet/women12-1.jpeg',
      img3: 'assets/womeSet/women12-2.jpeg',
      img4: 'assets/womeSet/women12-3.jpeg',
    },
  ];

  accesS = [
    {
      img: 'assets/womeSet/access/access1.jpeg',
      para: 'Mini Shirt Dress - CYPRESS',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access1.jpeg',
      img2: 'assets/womeSet/access/access1-1.jpeg',
      img3: 'assets/womeSet/access/access1-2.jpeg',
      img4: 'assets/womeSet/access/access1-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access2.jpeg',
      para: 'Satin High-Low Shirt Dress',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access2.jpeg',
      img2: 'assets/womeSet/access/access2-1.jpeg',
      img3: 'assets/womeSet/access/access2-2.jpeg',
      img4: 'assets/womeSet/access/access2-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access3.jpeg',
      para: 'Rhinestone Fringe Denim Shorts',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access3.jpeg',
      img2: 'assets/womeSet/access/access3-1.jpeg',
      img3: 'assets/womeSet/access/access3-2.jpeg',
      img4: 'assets/womeSet/access/access3-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access4.jpeg',
      para: 'Distressed Skinny Jeans - DARK',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access4.jpeg',
      img2: 'assets/womeSet/access/access4-1.jpeg',
      img3: 'assets/womeSet/access/access4-2.jpeg',
      img4: 'assets/womeSet/access/access4-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access5.jpeg',
      para: 'High-Rise Skinny Jeans - MEDIUM',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access5.jpeg',
      img2: 'assets/womeSet/access/access5-1.jpeg',
      img3: 'assets/womeSet/access/access5-2.jpeg',
      img4: 'assets/womeSet/access/access5-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access6.jpeg',
      para: 'Surplice Puff-Sleeve Crop Top ',
      price: '119.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access6.jpeg',
      img2: 'assets/womeSet/access/access6-1.jpeg',
      img3: 'assets/womeSet/access/access6-2.jpeg',
      img4: 'assets/womeSet/access/access6-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access7.jpeg',
      para: 'Lettuce-Edge Mesh Skirt - BLACK',
      price: '89.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access7.jpeg',
      img2: 'assets/womeSet/access/access7-1.jpeg',
      img3: 'assets/womeSet/access/access7-2.jpeg',
      img4: 'assets/womeSet/access/access7-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access8.jpeg',
      para: 'Checkered Happy Face Jeans ',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access8.jpeg',
      img2: 'assets/womeSet/access/access8-1.jpeg',
      img3: 'assets/womeSet/access/access8-2.jpeg',
      img4: 'assets/womeSet/access/access8-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access9.jpeg',
      para: 'Ribbed Knit Crop Top - BLACK',
      price: '59.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access9.jpeg',
      img2: 'assets/womeSet/access/access9-1.jpeg',
      img3: 'assets/womeSet/access/access9-2.jpeg',
      img4: 'assets/womeSet/access/access9-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access10.jpeg',
      para: 'Ruched-Strap Ribbed Bodysuit',
      price: '79.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access10.jpeg',
      img2: 'assets/womeSet/access/access10-1.jpeg',
      img3: 'assets/womeSet/access/access10-2.jpeg',
      img4: 'assets/womeSet/access/access10-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access11.jpeg',
      para: 'Chiffon Floral Print Maxi Dress',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access11.jpeg',
      img2: 'assets/womeSet/access/access11-1.jpeg',
      img3: 'assets/womeSet/access/access11-2.jpeg',
      img4: 'assets/womeSet/access/access11-3.jpeg',
    },
    {
      img: 'assets/womeSet/access/access12.jpeg',
      para: 'Floral Print Tie-Back Dress',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/womeSet/access/access12.jpeg',
      img2: 'assets/womeSet/access/access12-1.jpeg',
      img3: 'assets/womeSet/access/access12-2.jpeg',
      img4: 'assets/womeSet/access/access12-3.jpeg',
    },
  ];

  ngOnInit(): void {
    this.pName = this.route.snapshot.paramMap.get('id');

    if (this.pName == "WOMEN's") {
      this.product = this.setWomen;
    }
    if (this.pName == 'ACCESSORIES') {
      this.product = this.accesS;
    }
  }

  showAll(product: any) {
    console.log(product.para);
    localStorage.setItem('pName', product.para);
    localStorage.setItem('price', product.price);
    localStorage.setItem('detail', product.detail);
    localStorage.setItem('img', product.img);
    localStorage.setItem('img1', product.img1);
    localStorage.setItem('img2', product.img2);
    localStorage.setItem('img3', product.img3);
    localStorage.setItem('img4', product.img4);
    localStorage.setItem('title', product.titles);
    localStorage.setItem('paras', product.paras);
    this.router.navigateByUrl('/single-product');
  }
}
