import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-pick',
  templateUrl: './top-pick.component.html',
  styleUrls: ['./top-pick.component.css'],
})
export class TopPickComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  pName: any;

  product: any;

  topPick = [
    {
      titles: 'WOMEN SKINNY JEANS',
      paras:
        "Skinnies are a staple of any denim lover's wardrobe. There are different ways to style them all year round, whether it is summer, fall, winter, or spring. To make sure you always look fashionable and chic, pair the skinnies at Forever 21 with basic tees, button-down shirts, pullovers, and everything else.",
      img: 'assets/topPicks/tops/women1.webp',
      para: 'FUBU Baseball Jersey ',
      price: '219.00',
      detail:
        "A pair of skinny jeans featuring a high rise, five-pocket construction, and belt loops. Content + Care - 93% cotton, 4% polyester, 3% spandex - Machine wash cold Size + Fit - Model is 5'9 'and wearing a Size S/M   Item code 00450904'",
      img1: 'assets/topPicks/tops/women1.webp',
      img2: 'assets/topPicks/tops/women-1.jpeg',
      img3: 'assets/topPicks/tops/women-2.jpeg',
      img4: 'assets/topPicks/tops/women-3.jpeg',
    },
    {
      img: 'assets/topPicks/tops/women2.webp',
      para: 'Floral Print Puff-Sleeve Top - BLUE',
      price: '89.00',
      detail:
        "A pair of skinny jeans featuring a five-pocket construction, belt loops, whiskering, and a high rise. Content + Care - 91% cotton, 5% polyester, 4% spandex - Machine wash cold Size + Fit - Model is 5'9 ' and wearing a S/M   Item code 00450902'",
      img1: 'assets/topPicks/tops/women2.webp',
      img2: 'assets/topPicks/tops/women2-1.jpeg',
      img3: 'assets/topPicks/tops/women2-2.jpeg',
      img4: 'assets/topPicks/tops/women2-3.jpeg',
    },
    {
      img: 'assets/topPicks/tops/women3.webp',
      para: 'Crochet-Trim Peasant Top',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/tops/women3.webp',
      img2: 'assets/topPicks/tops/women3-1.jpeg',
      img3: 'assets/topPicks/tops/women3-2.jpeg',
      img4: 'assets/topPicks/tops/women3-3.jpeg',
    },
    {
      img: 'assets/topPicks/tops/women4.webp',
      para: 'Puff-Sleeve Crop Top - ASH',
      price: '89.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/tops/women4.webp',
      img2: 'assets/topPicks/tops/women4-1.jpeg',
      img3: 'assets/topPicks/tops/women4-2.jpeg',
      img4: 'assets/topPicks/tops/women4-3.jpeg',
    },
    {
      img: 'assets/topPicks/tops/women5.webp',
      para: 'Drop-Sleeve Crop Top - ASH',
      price: '79.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/tops/women5.webp',
      img2: 'assets/topPicks/tops/women5-1.jpeg',
      img3: 'assets/topPicks/tops/women5-2.jpeg',
      img4: 'assets/topPicks/tops/women5-3.jpeg',
    },
    {
      img: 'assets/topPicks/tops/women6.webp',
      para: 'Chevron Print Cami - TEAL/MULTI',
      price: '69.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/tops/women6.webp',
      img2: 'assets/topPicks/tops/women6-1.jpeg',
      img3: 'assets/topPicks/tops/women6-2.jpeg',
      img4: 'assets/topPicks/tops/women6-3.jpeg',
    },
    {
      img: 'assets/topPicks/tops/women7.webp',
      para: 'Plunging Tie-Front Top - WHITE',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/tops/women7.webp',
      img2: 'assets/topPicks/tops/women7-1.jpeg',
      img3: 'assets/topPicks/tops/women7-2.jpeg',
      img4: 'assets/topPicks/tops/women7-3.jpeg',
    },
    {
      img: 'assets/topPicks/tops/women8.webp',
      para: 'Balloon-Sleeve Crop Top - WHITE',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/tops/women8.webp',
      img2: 'assets/topPicks/tops/women8-1.jpeg',
      img3: 'assets/topPicks/tops/women8-2.jpeg',
      img4: 'assets/topPicks/tops/women8-3.jpeg',
    },

    {
      img: 'assets/topPicks/tops/women9.webp',
      para: 'Smocked Peasant-Sleeve Top',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/tops/women9.webp',
      img2: 'assets/topPicks/tops/women9-1.jpeg',
      img3: 'assets/topPicks/tops/women9-2.jpeg',
      img4: 'assets/topPicks/tops/women9-3.jpeg',
    },
    {
      img: 'assets/topPicks/tops/women10.webp',
      para: 'Halter Crop Top - CAPPUCCINO',
      price: '89.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/tops/women10.webp',
      img2: 'assets/topPicks/tops/women10-1.jpeg',
      img3: 'assets/topPicks/tops/women10-2.jpeg',
      img4: 'assets/topPicks/tops/women10-3.jpeg',
    },
    {
      img: 'assets/topPicks/tops/women11.webp',
      para: 'Gingham Seersucker Crop Top ',
      price: '89.00 --',
      priceLess: '110.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/tops/women11.webp',
      img2: 'assets/topPicks/tops/women11-1.jpeg',
      img3: 'assets/topPicks/tops/women11-2.jpeg',
      img4: 'assets/topPicks/tops/women11-3.jpeg',
    },
    {
      img: 'assets/topPicks/tops/women12.webp',
      para: 'Smocked Bell-Sleeve Top',
      price: '79.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/tops/women12.webp',
      img2: 'assets/topPicks/tops/women12-1.jpeg',
      img3: 'assets/topPicks/tops/women12-2.jpeg',
      img4: 'assets/topPicks/tops/women12-3.jpeg',
    },
  ];

  womenDress = [
    {
      titles: 'WOMEN SKINNY JEANS',
      paras:
        "Skinnies are a staple of any denim lover's wardrobe. There are different ways to style them all year round, whether it is summer, fall, winter, or spring. To make sure you always look fashionable and chic, pair the skinnies at Forever 21 with basic tees, button-down shirts, pullovers, and everything else.",
      img: 'assets/topPicks/womenDress/womenD1.jpeg',
      para: 'Buttoned Tiered Mini Dress - ROSE ',
      price: '99.00',
      detail:
        "A pair of skinny jeans featuring a high rise, five-pocket construction, and belt loops. Content + Care - 93% cotton, 4% polyester, 3% spandex - Machine wash cold Size + Fit - Model is 5'9 'and wearing a Size S/M   Item code 00450904'",
      img1: 'assets/topPicks/womenDress/womenD1.jpeg',
      img2: 'assets/topPicks/womenDress/womenD1-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD1-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD1-3.jpeg',
    },
    {
      img: 'assets/topPicks/womenDress/womenD2.jpeg',
      para: 'Cutout Halter Mini Dress',
      price: '129.00',
      detail:
        "A pair of skinny jeans featuring a five-pocket construction, belt loops, whiskering, and a high rise. Content + Care - 91% cotton, 5% polyester, 4% spandex - Machine wash cold Size + Fit - Model is 5'9 ' and wearing a S/M   Item code 00450902'",
      img1: 'assets/topPicks/womenDress/womenD2.jpeg',
      img2: 'assets/topPicks/womenDress/womenD2-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD2-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD2-3.jpeg',
    },
    {
      img: 'assets/topPicks/womenDress/womenD3.jpeg',
      para: 'Baroque Print Satin Mini Dress ',
      price: '79.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/womenDress/womenD3.jpeg',
      img2: 'assets/topPicks/womenDress/womenD3-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD3-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD3-3.jpeg',
    },
    {
      img: 'assets/topPicks/womenDress/womenD4.jpeg',
      para: 'Racerback Ruched Drawstring',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/womenDress/womenD4.jpeg',
      img2: 'assets/topPicks/womenDress/womenD4-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD4-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD4-3.jpeg',
    },
    {
      img: 'assets/topPicks/womenDress/womenD5.jpeg',
      para: 'Happy Floral Print Sweater Dress',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/womenDress/womenD5.jpeg',
      img2: 'assets/topPicks/womenDress/womenD5-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD5-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD5-3.jpeg',
    },
    {
      img: 'assets/topPicks/womenDress/womenD6.jpeg',
      para: 'Floral Print Maxi Dress - BLUE',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/womenDress/womenD6.jpeg',
      img2: 'assets/topPicks/womenDress/womenD6-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD6-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD6-3.jpeg',
    },
    {
      img: 'assets/topPicks/womenDress/womenD7.jpeg',
      para: 'Puff-Sleeve Mini Dress - WHITE',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/womenDress/womenD7.jpeg',
      img2: 'assets/topPicks/womenDress/womenD7-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD7-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD7-3.jpeg',
    },
    {
      img: 'assets/topPicks/womenDress/womenD8.jpeg',
      para: 'FUBU Bodycon Mini Dress',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/womenDress/womenD8.jpeg',
      img2: 'assets/topPicks/womenDress/womenD8-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD8-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD8-3.jpeg',
    },

    {
      img: 'assets/topPicks/womenDress/womenD9.jpeg',
      para: 'Smocked Mini Dress - MAPLE',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/womenDress/womenD9.jpeg',
      img2: 'assets/topPicks/womenDress/womenD9-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD9-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD9-3.jpeg',
    },
    {
      img: 'assets/topPicks/womenDress/womenD10.jpeg',
      para: 'Smocked Bodycon Mini Dress ',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/womenDress/womenD10.jpeg',
      img2: 'assets/topPicks/womenDress/womenD10-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD10-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD10-3.jpeg',
    },
    {
      img: 'assets/topPicks/womenDress/womenD11.jpeg',
      para: 'Plaid Self-Tie Midi Dress ',
      price: '129.00 --',
      priceLess: '110.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/womenDress/womenD11.jpeg',
      img2: 'assets/topPicks/womenDress/womenD11-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD11-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD11-3.jpeg',
    },
    {
      img: 'assets/topPicks/womenDress/womenD12.jpeg',
      para: 'Lace-Back M-Slit Maxi Dress ',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/womenDress/womenD12.jpeg',
      img2: 'assets/topPicks/womenDress/womenD12-1.jpeg',
      img3: 'assets/topPicks/womenDress/womenD12-2.jpeg',
      img4: 'assets/topPicks/womenDress/womenD12-3.jpeg',
    },
  ];

  collection = [
    {
      titles: 'WOMEN SKINNY JEANS',
      paras:
        "Skinnies are a staple of any denim lover's wardrobe. There are different ways to style them all year round, whether it is summer, fall, winter, or spring. To make sure you always look fashionable and chic, pair the skinnies at Forever 21 with basic tees, button-down shirts, pullovers, and everything else.",
      img: 'assets/topPicks/collection/collection1.jpeg',
      para: 'FUBU Velour Zip-Up Hoodie  ',
      price: '119.00',
      detail:
        "A pair of skinny jeans featuring a high rise, five-pocket construction, and belt loops. Content + Care - 93% cotton, 4% polyester, 3% spandex - Machine wash cold Size + Fit - Model is 5'9 'and wearing a Size S/M   Item code 00450904'",
      img1: 'assets/topPicks/collection/collection1.jpeg',
      img2: 'assets/topPicks/collection/collection1-1.jpeg',
      img3: 'assets/topPicks/collection/collection1-2.jpeg',
      img4: 'assets/topPicks/collection/collection1-3.jpeg',
    },
    {
      img: 'assets/topPicks/collection/collection2.jpeg',
      para: 'FUBU Embroidered Sweatpants ',
      price: '119.00',
      detail:
        "A pair of skinny jeans featuring a five-pocket construction, belt loops, whiskering, and a high rise. Content + Care - 91% cotton, 5% polyester, 4% spandex - Machine wash cold Size + Fit - Model is 5'9 ' and wearing a S/M   Item code 00450902'",
      img1: 'assets/topPicks/collection/collection2.jpeg',
      img2: 'assets/topPicks/collection/collection2-1.jpeg',
      img3: 'assets/topPicks/collection/collection2-2.jpeg',
      img4: 'assets/topPicks/collection/collection2-3.jpeg',
    },
    {
      img: 'assets/topPicks/collection/collection3.jpeg',
      para: 'FUBU Velour Zip-Up Track Hoodie',
      price: '119.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/collection/collection3.jpeg',
      img2: 'assets/topPicks/collection/collection3-1.jpeg',
      img3: 'assets/topPicks/collection/collection3-2.jpeg',
      img4: 'assets/topPicks/collection/collection3-3.jpeg',
    },
    {
      img: 'assets/topPicks/collection/collection4.jpeg',
      para: 'FUBU Drawstring Sweatshorts',
      price: '69.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/collection/collection4.jpeg',
      img2: 'assets/topPicks/collection/collection4-1.jpeg',
      img3: 'assets/topPicks/collection/collection4-2.jpeg',
      img4: 'assets/topPicks/collection/collection4-3.jpeg',
    },
    {
      img: 'assets/topPicks/collection/collection5.jpeg',
      para: 'Embroidered FUBU Shorts',
      price: '69.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/collection/collection5.jpeg',
      img2: 'assets/topPicks/collection/collection5-1.jpeg',
      img3: 'assets/topPicks/collection/collection5-2.jpeg',
      img4: 'assets/topPicks/collection/collection5-3.jpeg',
    },
    {
      img: 'assets/topPicks/collection/collection6.jpeg',
      para: 'FUBU Baseball Jersey ',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/collection/collection6.jpeg',
      img2: 'assets/topPicks/collection/collection6-1.jpeg',
      img3: 'assets/topPicks/collection/collection6-2.jpeg',
      img4: 'assets/topPicks/collection/collection6-3.jpeg',
    },
    {
      img: 'assets/topPicks/collection/collection7.jpeg',
      para: 'FUBU Graphic Mesh Fanny Pack ',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/collection/collection7.jpeg',
      img2: 'assets/topPicks/collection/collection7-1.jpeg',
      img3: 'assets/topPicks/collection/collection7-2.jpeg',
      img4: 'assets/topPicks/collection/collection7.jpeg',
    },
    {
      img: 'assets/topPicks/collection/collection8.jpeg',
      para: 'FUBU Print Cotton Shirt - LIGHT',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/collection/collection8.jpeg',
      img2: 'assets/topPicks/collection/collection8-1.jpeg',
      img3: 'assets/topPicks/collection/collection8-2.jpeg',
      img4: 'assets/topPicks/collection/collection8-3.jpeg',
    },

    {
      img: 'assets/topPicks/collection/collection9.jpeg',
      para: 'Plus Size FUBU French Terry',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/collection/collection9.jpeg',
      img2: 'assets/topPicks/collection/collection9-1.jpeg',
      img3: 'assets/topPicks/collection/collection9-2.jpeg',
      img4: 'assets/topPicks/collection/collection9-3.jpeg',
    },
    {
      img: 'assets/topPicks/collection/collection10.jpeg',
      para: 'FUBU Rectangular Sunglasses',
      price: '29.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/collection/collection10.jpeg',
      img2: 'assets/topPicks/collection/collection10-1.jpeg',
      img3: 'assets/topPicks/collection/collection10-2.jpeg',
      img4: 'assets/topPicks/collection/collection10-3.jpeg',
    },
    {
      img: 'assets/topPicks/collection/collection11.jpeg',
      para: 'FUBU Graphic Tee ',
      price: '89.00 --',
      priceLess: '110.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/collection/collection11.jpeg',
      img2: 'assets/topPicks/collection/collection11-1.jpeg',
      img3: 'assets/topPicks/collection/collection11-2.jpeg',
      img4: 'assets/topPicks/collection/collection11-3.jpeg',
    },
    {
      img: 'assets/topPicks/collection/collection12.jpeg',
      para: 'FUBU Graphic Tee - WHITE/BLUE',
      price: '89.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/collection/collection12.jpeg',
      img2: 'assets/topPicks/collection/collection12-1.jpeg',
      img3: 'assets/topPicks/collection/collection12-2.jpeg',
      img4: 'assets/topPicks/collection/collection12-3.jpeg',
    },
  ];

  swim = [
    {
      titles: 'WOMEN SKINNY JEANS',
      paras:
        "Skinnies are a staple of any denim lover's wardrobe. There are different ways to style them all year round, whether it is summer, fall, winter, or spring. To make sure you always look fashionable and chic, pair the skinnies at Forever 21 with basic tees, button-down shirts, pullovers, and everything else.",
      img: 'assets/topPicks/swim/swim1.jpeg',
      para: 'Billowy Sheer Swim Cover-Up',
      price: '149.00',
      detail:
        "A pair of skinny jeans featuring a high rise, five-pocket construction, and belt loops. Content + Care - 93% cotton, 4% polyester, 3% spandex - Machine wash cold Size + Fit - Model is 5'9 'and wearing a Size S/M   Item code 00450904'",
      img1: 'assets/topPicks/swim/swim1.jpeg',
      img2: 'assets/topPicks/swim/swim1-1.jpeg',
      img3: 'assets/topPicks/swim/swim1-2.jpeg',
      img4: 'assets/topPicks/swim/swim1-3.jpeg',
    },
    {
      img: 'assets/topPicks/swim/swim2.jpeg',
      para: 'Leopard Print String Bikini Bottom ',
      price: '49.00',
      detail:
        "A pair of skinny jeans featuring a five-pocket construction, belt loops, whiskering, and a high rise. Content + Care - 91% cotton, 5% polyester, 4% spandex - Machine wash cold Size + Fit - Model is 5'9 ' and wearing a S/M   Item code 00450902'",
      img1: 'assets/topPicks/swim/swim2.jpeg',
      img2: 'assets/topPicks/swim/swim2-1.jpeg',
      img3: 'assets/topPicks/swim/swim2-2.jpeg',
      img4: 'assets/topPicks/swim/swim2-3.jpeg',
    },
    {
      img: 'assets/topPicks/swim/swim3.jpeg',
      para: 'O-Ring One-Piece Swimsuit',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/swim/swim3.jpeg',
      img2: 'assets/topPicks/swim/swim3-1.jpeg',
      img3: 'assets/topPicks/swim/swim3-2.jpeg',
      img4: 'assets/topPicks/swim/swim3-3.jpeg',
    },
    {
      img: 'assets/topPicks/swim/swim4.jpeg',
      para: 'Floral Print Bikini Top - RED/PINK',
      price: '69.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/swim/swim4.jpeg',
      img2: 'assets/topPicks/swim/swim4-1.jpeg',
      img3: 'assets/topPicks/swim/swim4-2.jpeg',
      img4: 'assets/topPicks/swim/swim4-3.jpeg',
    },
    {
      img: 'assets/topPicks/swim/swim5.jpeg',
      para: 'Floral Print String Bikini Bottoms',
      price: '59.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/swim/swim5.jpeg',
      img2: 'assets/topPicks/swim/swim5-1.jpeg',
      img3: 'assets/topPicks/swim/swim5-2.jpeg',
      img4: 'assets/topPicks/swim/swim5-3.jpeg',
    },
    {
      img: 'assets/topPicks/swim/swim6.jpeg',
      para: 'Floral Print Cheeky Bikini Bottoms',
      price: '49.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/swim/swim6.jpeg',
      img2: 'assets/topPicks/swim/swim6-1.jpeg',
      img3: 'assets/topPicks/swim/swim6-2.jpeg',
      img4: 'assets/topPicks/swim/swim6-3.jpeg',
    },
    {
      img: 'assets/topPicks/swim/swim7.jpeg',
      para: 'Floral Cheeky Bikini Bottoms',
      price: '49.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/swim/swim7.jpeg',
      img2: 'assets/topPicks/swim/swim7-1.jpeg',
      img3: 'assets/topPicks/swim/swim7-2.jpeg',
      img4: 'assets/topPicks/swim/swim7-3.jpeg',
    },
    {
      img: 'assets/topPicks/swim/swim8.jpeg',
      para: 'Cutout Bikini Top - BLACK',
      price: '69.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/swim/swim8.jpeg',
      img2: 'assets/topPicks/swim/swim8-1.jpeg',
      img3: 'assets/topPicks/swim/swim8-2.jpeg',
      img4: 'assets/topPicks/swim/swim8-3.jpeg',
    },

    {
      img: 'assets/topPicks/swim/swim9.jpeg',
      para: 'High-Waist Bikini Bottoms ',
      price: '59.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/swim/swim9.jpeg',
      img2: 'assets/topPicks/swim/swim9-1.jpeg',
      img3: 'assets/topPicks/swim/swim9-2.jpeg',
      img4: 'assets/topPicks/swim/swim9-3.jpeg',
    },
    {
      img: 'assets/topPicks/swim/swim10.jpeg',
      para: 'Bandeau Bikini Top - BLACK',
      price: '69.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/swim/swim10.jpeg',
      img2: 'assets/topPicks/swim/swim10-1.jpeg',
      img3: 'assets/topPicks/swim/swim10-2.jpeg',
      img4: 'assets/topPicks/swim/swim10-3.jpeg',
    },
    {
      img: 'assets/topPicks/swim/swim11.jpeg',
      para: 'Cheeky Bikini Bottoms - BLACK',
      price: '39.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/swim/swim11.jpeg',
      img2: 'assets/topPicks/swim/swim11-1.jpeg',
      img3: 'assets/topPicks/swim/swim11-2.jpeg',
      img4: 'assets/topPicks/swim/swim11-3.jpeg',
    },
    {
      img: 'assets/topPicks/swim/swim12.jpeg',
      para: 'Knotted Bikini Top - WHITE',
      price: '79.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/swim/swim12.jpeg',
      img2: 'assets/topPicks/swim/swim12-1.jpeg',
      img3: 'assets/topPicks/swim/swim12-2.jpeg',
      img4: 'assets/topPicks/swim/swim12.jpeg',
    },
  ];

  jumpSuit = [
    {
      titles: 'WOMEN SKINNY JEANS',
      paras:
        "Skinnies are a staple of any denim lover's wardrobe. There are different ways to style them all year round, whether it is summer, fall, winter, or spring. To make sure you always look fashionable and chic, pair the skinnies at Forever 21 with basic tees, button-down shirts, pullovers, and everything else.",
      img: 'assets/topPicks/jump/jump1.jpeg',
      para: 'Billowy Sheer Swim Cover-Up',
      price: '149.00',
      detail:
        "A pair of skinny jeans featuring a high rise, five-pocket construction, and belt loops. Content + Care - 93% cotton, 4% polyester, 3% spandex - Machine wash cold Size + Fit - Model is 5'9 'and wearing a Size S/M   Item code 00450904'",
      img1: 'assets/topPicks/jump/jump1.jpeg',
      img2: 'assets/topPicks/jump/jump1-1.jpeg',
      img3: 'assets/topPicks/jump/jump1-2.jpeg',
      img4: 'assets/topPicks/jump/jump1-3.jpeg',
    },
    {
      img: 'assets/topPicks/jump/jump2.jpeg',
      para: 'Leopard Print String Bikini Bottom ',
      price: '49.00',
      detail:
        "A pair of skinny jeans featuring a five-pocket construction, belt loops, whiskering, and a high rise. Content + Care - 91% cotton, 5% polyester, 4% spandex - Machine wash cold Size + Fit - Model is 5'9 ' and wearing a S/M   Item code 00450902'",
      img1: 'assets/topPicks/jump/jump2.jpeg',
      img2: 'assets/topPicks/jump/jump2-1.jpeg',
      img3: 'assets/topPicks/jump/jump2-2.jpeg',
      img4: 'assets/topPicks/jump/jump2-3.jpeg',
    },
    {
      img: 'assets/topPicks/jump/jump3.jpeg',
      para: 'O-Ring One-Piece Swimsuit',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/jump/jump3.jpeg',
      img2: 'assets/topPicks/jump/jump3-1.jpeg',
      img3: 'assets/topPicks/jump/jump3-2.jpg',
      img4: 'assets/topPicks/jump/jump3-3.jpg',
    },
    {
      img: 'assets/topPicks/jump/jump4.jpeg',
      para: 'Floral Print Bikini Top - RED/PINK',
      price: '69.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/jump/jump4.jpeg',
      img2: 'assets/topPicks/jump/jump4-1.jpeg',
      img3: 'assets/topPicks/jump/jump4-2.jpeg',
      img4: 'assets/topPicks/jump/jump4-3.jpeg',
    },
    {
      img: 'assets/topPicks/jump/jump5.jpeg',
      para: 'Floral Print String Bikini Bottoms',
      price: '59.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/jump/jump5.jpeg',
      img2: 'assets/topPicks/jump/jump5-1.jpeg',
      img3: 'assets/topPicks/jump/jump5-2.jpeg',
      img4: 'assets/topPicks/jump/jump5-3.jpeg',
    },
    {
      img: 'assets/topPicks/jump/jump6.jpeg',
      para: 'Floral Print Cheeky Bikini Bottoms',
      price: '49.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/jump/jump6.jpeg',
      img2: 'assets/topPicks/jump/jump6-1.jpeg',
      img3: 'assets/topPicks/jump/jump6-2.jpeg',
      img4: 'assets/topPicks/jump/jump6-3.jpeg',
    },
    {
      img: 'assets/topPicks/jump/jump7.jpeg',
      para: 'Floral Cheeky Bikini Bottoms',
      price: '49.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/jump/jump7.jpeg',
      img2: 'assets/topPicks/jump/jump7-1.jpeg',
      img3: 'assets/topPicks/jump/jump7-2.jpeg',
      img4: 'assets/topPicks/jump/jump7.jpeg',
    },
    {
      img: 'assets/topPicks/jump/jump8.jpeg',
      para: 'Cutout Bikini Top - BLACK',
      price: '69.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/jump/jump8.jpeg',
      img2: 'assets/topPicks/jump/jump8-1.jpeg',
      img3: 'assets/topPicks/jump/jump8-2.jpeg',
      img4: 'assets/topPicks/jump/jump8-3.jpeg',
    },

    {
      img: 'assets/topPicks/jump/jump9.jpeg',
      para: 'High-Waist Bikini Bottoms ',
      price: '59.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/jump/jump9.jpeg',
      img2: 'assets/topPicks/jump/jump9-1.jpeg',
      img3: 'assets/topPicks/jump/jump9-2.jpeg',
      img4: 'assets/topPicks/jump/jump9-3.jpeg',
    },
    {
      img: 'assets/topPicks/jump/jump10.jpeg',
      para: 'Bandeau Bikini Top - BLACK',
      price: '69.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/jump/jump10.jpeg',
      img2: 'assets/topPicks/jump/jump10-1.jpeg',
      img3: 'assets/topPicks/jump/jump10-2.jpeg',
      img4: 'assets/topPicks/jump/jump10-3.jpeg',
    },
    {
      img: 'assets/topPicks/jump/jump11.jpeg',
      para: 'Cheeky Bikini Bottoms - BLACK',
      price: '39.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/jump/jump11.jpeg',
      img2: 'assets/topPicks/jump/jump11-1.jpeg',
      img3: 'assets/topPicks/jump/jump11-2.jpeg',
      img4: 'assets/topPicks/jump/jump11-3.jpeg',
    },
    {
      img: 'assets/topPicks/jump/jump12.jpeg',
      para: 'Knotted Bikini Top - WHITE',
      price: '79.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/jump/jump12.jpeg',
      img2: 'assets/topPicks/jump/jump12.jpeg',
      img3: 'assets/topPicks/jump/jump12-2.jpeg',
      img4: 'assets/topPicks/jump/jump12-3.jpeg',
    },
  ];

  mens = [
    {
      titles: 'Men  JEANS',
      paras:
        "Skinnies are a staple of any denim lover's wardrobe. There are different ways to style them all year round, whether it is summer, fall, winter, or spring. To make sure you always look fashionable and chic, pair the skinnies at Forever 21 with basic tees, button-down shirts, pullovers, and everything else.",
      img: 'assets/topPicks/men/men1.webp',
      para: 'Seersucker Button-Front Shirt',
      price: '129.00',
      detail:
        "A pair of skinny jeans featuring a high rise, five-pocket construction, and belt loops. Content + Care - 93% cotton, 4% polyester, 3% spandex - Machine wash cold Size + Fit - Model is 5'9 'and wearing a Size S/M   Item code 00450904'",
      img1: 'assets/topPicks/men/men1.webp',
      img2: 'assets/topPicks/men/men1-1.jpeg',
      img3: 'assets/topPicks/men/men1-2.jpeg',
      img4: 'assets/topPicks/men/men1-3.jpeg',
    },
    {
      img: 'assets/topPicks/men/men2.webp',
      para: 'Cotton-Blend Drawstring Shorts',
      price: '99.00',
      detail:
        "A pair of skinny jeans featuring a five-pocket construction, belt loops, whiskering, and a high rise. Content + Care - 91% cotton, 5% polyester, 4% spandex - Machine wash cold Size + Fit - Model is 5'9 ' and wearing a S/M   Item code 00450902'",
      img1: 'assets/topPicks/men/men2.webp',
      img2: 'assets/topPicks/men/men2-1.jpeg',
      img3: 'assets/topPicks/men/men2-2.jpeg',
      img4: 'assets/topPicks/men/men2-3.jpeg',
    },
    {
      img: 'assets/topPicks/men/men3.webp',
      para: 'Summer Vibes Graphic Tee',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/men/men3.webp',
      img2: 'assets/topPicks/men/men3-1.jpeg',
      img3: 'assets/topPicks/men/men3-2.jpeg',
      img4: 'assets/topPicks/men/men3-3.jpeg',
    },
    {
      img: 'assets/topPicks/men/men4.webp',
      para: 'Striped Short-Sleeve Polo Shirt',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/men/men4.webp',
      img2: 'assets/topPicks/men/men4-1.jpeg',
      img3: 'assets/topPicks/men/men4-2.jpeg',
      img4: 'assets/topPicks/men/men4-3.jpeg',
    },
    {
      img: 'assets/topPicks/men/men5.webp',
      para: 'Oversized Crew Neck Tee - BLACK',
      price: '69.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/men/men5.webp',
      img2: 'assets/topPicks/men/men5-1.jpeg',
      img3: 'assets/topPicks/men/men5-2.jpeg',
      img4: 'assets/topPicks/men/men5-3.jpeg',
    },
    {
      img: 'assets/topPicks/men/men6.webp',
      para: 'Denim Button-Up Jacket - BLACK',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/men/men6.webp',
      img2: 'assets/topPicks/men/men6-1.jpeg',
      img3: 'assets/topPicks/men/men6-2.jpeg',
      img4: 'assets/topPicks/men/men6-3.jpeg',
    },
    {
      img: 'assets/topPicks/men/men7.webp',
      para: 'Ornate Print Linen-Blend Shirt',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/men/men7.webp',
      img2: 'assets/topPicks/men/men7-1.jpeg',
      img3: 'assets/topPicks/men/men7-2.jpeg',
      img4: 'assets/topPicks/men/men7-3.jpeg',
    },
    {
      img: 'assets/topPicks/men/men8.webp',
      para: 'Reworked Plaid Button-Front Shirt',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/men/men8.webp',
      img2: 'assets/topPicks/men/men8-1.jpeg',
      img3: 'assets/topPicks/men/men8-2.jpeg',
      img4: 'assets/topPicks/men/men8-3.jpeg',
    },

    {
      img: 'assets/topPicks/men/men9.webp',
      para: 'FUBU Print Cotton Shirt - LIGHT',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/men/men9.webp',
      img2: 'assets/topPicks/men/men9-1.jpeg',
      img3: 'assets/topPicks/men/men9-2.jpeg',
      img4: 'assets/topPicks/men/men9-3.jpeg',
    },
    {
      img: 'assets/topPicks/men/men10.webp',
      para: 'FUBU Graphic Tee ',
      price: '79.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/men/men10.webp',
      img2: 'assets/topPicks/men/men10-1.jpeg',
      img3: 'assets/topPicks/men/men10-2.jpeg',
      img4: 'assets/topPicks/men/men10-3.jpeg',
    },
    {
      img: 'assets/topPicks/men/men11.webp',
      para: 'FUBU Graphic Tee - WHITE/BLUE',
      price: '89.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/men/men11.webp',
      img2: 'assets/topPicks/men/men11-1.jpeg',
      img3: 'assets/topPicks/men/men11-2.jpeg',
      img4: 'assets/topPicks/men/men11-3.jpeg',
    },
    {
      img: 'assets/topPicks/men/men12.webp',
      para: 'Embroidered FUBU Pants - BLACK',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/topPicks/men/men12.webp',
      img2: 'assets/topPicks/men/men12-1.jpeg',
      img3: 'assets/topPicks/men/men12-2.jpeg',
      img4: 'assets/topPicks/men/men12-3.jpeg',
    },
  ];

  ngOnInit(): void {
    this.pName = this.route.snapshot.paramMap.get('id');
    if (this.pName == 'Tops') {
      this.product = this.topPick;
    }
    if (this.pName == 'Dresses') {
      this.product = this.womenDress;
    }
    if (this.pName == 'collection') {
      this.product = this.collection;
    }
    if (this.pName == 'Swimwear') {
      this.product = this.swim;
    }
    if (this.pName == 'Jumpsuits') {
      this.product = this.jumpSuit;
    }
    if (this.pName == 'Men') {
      this.product = this.mens;
    }
  }

  showProductTop(product: any) {
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
