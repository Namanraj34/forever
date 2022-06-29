import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  pName: any;

  product: any;

  skinny = [
    {
      titles: 'WOMEN SKINNY JEANS',
      paras:
        "Skinnies are a staple of any denim lover's wardrobe. There are different ways to style them all year round, whether it is summer, fall, winter, or spring. To make sure you always look fashionable and chic, pair the skinnies at Forever 21 with basic tees, button-down shirts, pullovers, and everything else.",
      img: 'assets/skinny/skinny1.webp',
      para: 'High-Rise Skinny Jeans - WASHE',
      price: '219.00',
      detail:
        "A pair of skinny jeans featuring a high rise, five-pocket construction, and belt loops. Content + Care - 93% cotton, 4% polyester, 3% spandex - Machine wash cold Size + Fit - Model is 5'9 'and wearing a Size S/M   Item code 00450904'",
      img1: 'assets/skinny/skinny1.webp',
      img2: 'assets/skinny/skinny-2.jpg',
      img3: 'assets/skinny/skinny-3.jpg',
      img4: 'assets/skinny/skinny-4.jpg',
    },
    {
      img: 'assets/skinny/skinny2.webp',
      para: 'Skinny High-Rise Jeans - MEDIUM',
      price: '219.00',
      detail:
        "A pair of skinny jeans featuring a five-pocket construction, belt loops, whiskering, and a high rise. Content + Care - 91% cotton, 5% polyester, 4% spandex - Machine wash cold Size + Fit - Model is 5'9 ' and wearing a S/M   Item code 00450902'",
      img1: 'assets/skinny/skinny2.webp',
      img2: 'assets/skinny/skinny-2-1.jpeg',
      img3: 'assets/skinny/skinny-2-2.jpeg',
      img4: 'assets/skinny/skinny-2-3.jpeg',
    },
    {
      img: 'assets/skinny/skinny3.webp',
      para: 'Premium Distressed 90s Fit Jeans',
      price: '199.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/skinny/skinny3.webp',
      img2: 'assets/skinny/skinny-3-1.jpg',
      img3: 'assets/skinny/skinny-3-2.jpg',
      img4: 'assets/skinny/skinny-3-3.jpg',
    },
    {
      img: 'assets/skinny/skinny4.webp',
      para: 'Distressed High-Rise Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/skinny/skinny4.webp',
      img2: 'assets/skinny/skinny-4-1.jpg',
      img3: 'assets/skinny/skinny-4-2.jpg',
      img4: 'assets/skinny/skinny-4-3.jpg',
    },
    {
      img: 'assets/skinny/skinny5.webp',
      para: 'High-Rise Skinny Jeans - LIGHT',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/skinny/skinny5.webp',
      img2: 'assets/skinny/skinny-5-1.jpg',
      img3: 'assets/skinny/skinny-5-2.jpg',
      img4: 'assets/skinny/skinny-5-3.jpg',
    },
    {
      img: 'assets/skinny/skinny6.webp',
      para: 'Premium High-Rise Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/skinny/skinny6.webp',
      img2: 'assets/skinny/skinny-6-1.jpg',
      img3: 'assets/skinny/skinny-6-2.jpg',
      img4: 'assets/skinny/skinny-6-3.jpg',
    },
    {
      img: 'assets/skinny/skinny7.webp',
      para: 'High-Rise Skinny Jeans - WASHED',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/skinny/skinny7.webp',
      img2: 'assets/skinny/skinny-7-1.jpeg',
      img3: 'assets/skinny/skinny-7-2.jpeg',
      img4: 'assets/skinny/skinny-7-3.jpeg',
    },
    {
      img: 'assets/skinny/skinny8.webp',
      para: 'Premium Distressed Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/skinny/skinny8.webp',
      img2: 'assets/skinny/skinny-8-1.jpg',
      img3: 'assets/skinny/skinny-8-2.jpg',
      img4: 'assets/skinny/skinny-8-3.jpg',
    },

    {
      img: 'assets/skinny/skinny9.webp',
      para: 'Distressed Skinny Jeans - DARK',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/skinny/skinny9.webp',
      img2: 'assets/skinny/skinny-9-1.jpg',
      img3: 'assets/skinny/skinny-9-2.jpg',
      img4: 'assets/skinny/skinny-9-3.jpg',
    },
    {
      img: 'assets/skinny/skinny10.webp',
      para: 'Plus Size Premium Skinny Uplyfter',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/skinny/skinny10.webp',
      img2: 'assets/skinny/skinny-10-1.jpg',
      img3: 'assets/skinny/skinny-10-2.jpg',
      img4: 'assets/skinny/skinny-10-3.jpg',
    },
    {
      img: 'assets/skinny/skinny11.webp',
      para: 'Plus Size Whiskered Skinny Jeans',
      price: '229.00 --',
      priceLess: '110.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/skinny/skinny11.webp',
      img2: 'assets/skinny/skinny-11-1.jpg',
      img3: 'assets/skinny/skinny-11-2.jpg',
      img4: 'assets/skinny/skinny-11-3.jpg',
    },
    {
      img: 'assets/skinny/skinny12.webp',
      para: 'Plus Size High-Rise Skinny Jeans',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/skinny/skinny12.webp',
      img2: 'assets/skinny/skinny-12-1.jpeg',
      img3: 'assets/skinny/skinny-12-2.jpeg',
      img4: 'assets/skinny/skinny-12-3.jpeg',
    },
  ];

  waist = [
    {
      titles: "WOMEN'S HIGHWAIST JEANS",
      paras:
        "In 2022, these girls' jeans will be the hottest trend. Crop tops and bralettes being in so much fashion, tops with high-waisted bottoms are all the rage. The waistline suits your natural shape and the belly fat is covered, so they look great!",
      img: 'assets/waist/waist1.webp',
      para: 'Wide-Leg High-Rise Jeans',
      price: '199.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist1.webp',
      img2: 'assets/waist/waist-1-1.jpeg',
      img3: 'assets/waist/waist-1-2.jpeg',
      img4: 'assets/waist/waist-1-3.jpeg',
    },
    {
      img: 'assets/waist/waist2.webp',
      para: 'Wide-Leg High-Rise Jeans',
      price: '199.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist2.webp',
      img2: 'assets/waist/waist-2-1.jpeg',
      img3: 'assets/waist/waist-2-2.jpeg',
      img4: 'assets/waist/waist-2-3.jpeg',
    },
    {
      img: 'assets/waist/waist3.webp',
      para: 'Premium High-Waist 9s Fit Jean',
      price: '199.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist3.webp',
      img2: 'assets/waist/waist-3-1.jpg',
      img3: 'assets/waist/waist-3-2.jpg',
      img4: 'assets/waist/waist-3-3.jpg',
    },
    {
      img: 'assets/waist/waist4.webp',
      para: 'High-Waist 9s Fit Jeans',
      price: '199.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist4.webp',
      img2: 'assets/waist/waist-4-1.jpg',
      img3: 'assets/waist/waist-4-2.jpg',
      img4: 'assets/waist/waist-4-3.jpg',
    },
    {
      img: 'assets/waist/waist5.webp',
      para: 'High-Rise Flare Jeans - DARK',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist5.webp',
      img2: 'assets/waist/waist-5-1.jpg',
      img3: 'assets/waist/waist-5-2.jpg',
      img4: 'assets/waist/waist-5-3.jpg',
    },
    {
      img: 'assets/waist/waist6.webp',
      para: 'Premium High-Waist 90s Fit',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist6.webp',
      img2: 'assets/waist/waist-6-1.jpg',
      img3: 'assets/waist/waist-6-2.jpg',
      img4: 'assets/waist/waist-6-3.jpg',
    },
    {
      img: 'assets/waist/waist7.webp',
      para: 'Premium High-Waist 90s Fit',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist7.webp',
      img2: 'assets/waist/waist-7-1.jpg',
      img3: 'assets/waist/waist-7-2.jpg',
      img4: 'assets/waist/waist-7-3.jpg',
    },
    {
      img: 'assets/waist/waist8.webp',
      para: 'Premium Distressed 90s Fit Jeans',
      price: '179.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist8.webp',
      img2: 'assets/waist/waist-8-1.jpg',
      img3: 'assets/waist/waist-8-2.jpg',
      img4: 'assets/waist/waist-8-3.jpg',
    },

    {
      img: 'assets/waist/waist9.webp',
      para: 'Faded Straight-Leg Jeans - BLACK',
      price: '199.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist9.webp',
      img2: 'assets/waist/waist-9-1.jpg',
      img3: 'assets/waist/waist-9-2.jpg',
      img4: 'assets/waist/waist-9-3.jpg',
    },
    {
      img: 'assets/waist/waist10.webp',
      para: '90s-Fit Curb Chain High-Rise',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist10.webp',
      img2: 'assets/waist/waist-10-1.jpeg',
      img3: 'assets/waist/waist-10-2.jpeg',
      img4: 'assets/waist/waist-10-3.jpeg',
    },
    {
      img: 'assets/waist/waist11.webp',
      para: 'Wide-Leg High-Rise Jeans - LIGHT',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist11.webp',
      img2: 'assets/waist/waist-11-1.jpeg',
      img3: 'assets/waist/waist-11-2.jpeg',
      img4: 'assets/waist/waist-11-3.jpeg',
    },
    {
      img: 'assets/waist/waist12.webp',
      para: 'High-Rise Skinny Jeans - LIGHT',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/waist/waist12.webp',
      img2: 'assets/waist/waist-12-1.jpg',
      img3: 'assets/waist/waist-12-2.jpg',
      img4: 'assets/waist/waist-12-3.jpg',
    },
  ];

  momJ = [
    {
      titles: "WOMEN'S MOM JEANS",
      paras:
        'Mom jeans will never go out of style. Printed high-waisted mom jeans are perfect for those feeling playful. You can invest in a classic pair of blue mom jeans as well as distressed styles like black ripped mom jeans. If you need a little extra support, our shaping jeans will work on any figure. To take loose jeans even further, wide-leg jeans are the hottest trend this year.',
      img: 'assets/momJeans/moms1.webp',
      para: 'High-Rise Skinny Jeans - WASHE',
      price: '199999',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms1.webp',
      img2: 'assets/momJeans/moms-1-1.jpg',
      img3: 'assets/momJeans/moms-1-2.jpg',
      img4: 'assets/momJeans/moms-1-3.jpg',
    },
    {
      img: 'assets/momJeans/moms2.webp',
      para: 'Skinny High-Rise Jeans - MEDIUM',
      price: '219.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms2.webp',
      img2: 'assets/momJeans/moms-2-1.jpg',
      img3: 'assets/momJeans/moms-2-2.jpg',
      img4: 'assets/momJeans/moms-2-3.jpg',
    },
    {
      img: 'assets/momJeans/moms3.webp',
      para: 'Premium Distressed 90s Fit Jeans',
      price: '199.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms3.webp',
      img2: 'assets/momJeans/moms-3-1.jpg',
      img3: 'assets/momJeans/moms-3-2.jpg',
      img4: 'assets/momJeans/moms-3-3.jpg',
    },
    {
      img: 'assets/momJeans/moms4.webp',
      para: 'Distressed High-Rise Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms4.webp',
      img2: 'assets/momJeans/moms-4-1.jpg',
      img3: 'assets/momJeans/moms-4-2.jpg',
      img4: 'assets/momJeans/moms-4-3.jpg',
    },
    {
      img: 'assets/momJeans/moms5.webp',
      para: 'High-Rise Skinny Jeans - LIGHT',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms5.webp',
      img2: 'assets/momJeans/moms-5-1.jpg',
      img3: 'assets/momJeans/moms-5-2.jpg',
      img4: 'assets/momJeans/moms-5-3.jpg',
    },
    {
      img: 'assets/momJeans/moms6.webp',
      para: 'Premium High-Rise Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms6.webp',
      img2: 'assets/momJeans/moms-6-1.jpg',
      img3: 'assets/momJeans/moms-6-2.jpg',
      img4: 'assets/momJeans/moms-6-3.jpg',
    },
    {
      img: 'assets/momJeans/moms7.webp',
      para: 'High-Rise Skinny Jeans - WASHED',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms7.webp',
      img2: 'assets/momJeans/moms-7-1.jpg',
      img3: 'assets/momJeans/moms-7-2.jpg',
      img4: 'assets/momJeans/moms-7-3.jpg',
    },
    {
      img: 'assets/momJeans/moms8.webp',
      para: 'Premium Distressed Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms8.webp',
      img2: 'assets/momJeans/moms-8-1.jpg',
      img3: 'assets/momJeans/moms-8-2.jpg',
      img4: 'assets/momJeans/moms-8-3.jpg',
    },

    {
      img: 'assets/momJeans/moms9.webp',
      para: 'Distressed Skinny Jeans - DARK',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms9.webp',
      img2: 'assets/momJeans/moms-9-1.jpg',
      img3: 'assets/momJeans/moms-9-2.jpg',
      img4: 'assets/momJeans/moms-9-3.jpg',
    },
    {
      img: 'assets/momJeans/moms10.webp',
      para: 'Plus Size Premium Skinny Uplyfter',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms10.webp',
      img2: 'assets/momJeans/moms-10-1.jpg',
      img3: 'assets/momJeans/moms-10-2.jpg',
      img4: 'assets/momJeans/moms-10-3.jpg',
    },
    {
      img: 'assets/momJeans/moms11.webp',
      para: 'Plus Size Whiskered Skinny Jeans',
      price: '229.00 --',
      priceLess: 'AED 110.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms11.webp',
      img2: 'assets/momJeans/moms-11-1.jpg',
      img3: 'assets/momJeans/moms-11-2.jpg',
      img4: 'assets/momJeans/moms-11-3.jpg',
    },
    {
      img: 'assets/momJeans/moms12.webp',
      para: 'Plus Size High-Rise Skinny Jeans',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/momJeans/moms12.webp',
      img2: 'assets/momJeans/moms-12-1.jpg',
      img3: 'assets/momJeans/moms-12-2.jpg',
      img4: 'assets/momJeans/moms-12-3.jpg',
    },
  ];

  denimJ = [
    {
      titles: 'DENIM DRESSES',
      paras:
        "Denim on your mind? We've got you covered. Denim shirt dresses, fitted pinafores, and loose styles are all part of our stylish denim dresses. We have a style to reflect your individual style, whewther you prefer puff, short, or long sleeves. Select from a wide range of shades, such as black, khaki green, and beige. Choose from our selection of dungarees or wear with on-trend knee-high boots.",
      img: 'assets/denimJeans/denimj1.webp',
      para: 'High-Rise Skinny Jeans - WASHE',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj1.webp',
      img2: 'assets/denimJeans/denimj-1-1.jpg',
      img3: 'assets/denimJeans/denimj-1-2.jpg',
      img4: 'assets/denimJeans/denimj-1-3.jpg',
    },
    {
      img: 'assets/denimJeans/denimj2.webp',
      para: 'Skinny High-Rise Jeans - MEDIUM',
      price: '219.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj2.webp',
      img2: 'assets/denimJeans/denimj-2-1.jpg',
      img3: 'assets/denimJeans/denimj-2-2.jpg',
      img4: 'assets/denimJeans/denimj-2-3.jpg',
    },
    {
      img: 'assets/denimJeans/denimj3.webp',
      para: 'Premium Distressed 90s Fit Jeans',
      price: '199.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj3.webp',
      img2: 'assets/denimJeans/denimj-3-1.jpg',
      img3: 'assets/denimJeans/denimj-3-2.jpg',
      img4: 'assets/denimJeans/denimj-3-3.jpg',
    },
    {
      img: 'assets/denimJeans/denimj4.webp',
      para: 'Distressed High-Rise Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj4.webp',
      img2: 'assets/denimJeans/denimj-4-1.jpg',
      img3: 'assets/denimJeans/denimj-4-2.jpg',
      img4: 'assets/denimJeans/denimj-4-3.jpg',
    },
    {
      img: 'assets/denimJeans/denimj5.webp',
      para: 'High-Rise Skinny Jeans - LIGHT',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj5.webp',
      img2: 'assets/denimJeans/denimj-5-1.jpg',
      img3: 'assets/denimJeans/denimj-5-2.jpg',
      img4: 'assets/denimJeans/denimj-5-3.jpg',
    },
    {
      img: 'assets/denimJeans/denimj6.webp',
      para: 'Premium High-Rise Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj6.webp',
      img2: 'assets/denimJeans/denimj-6-1.jpg',
      img3: 'assets/denimJeans/denimj-6-2.jpg',
      img4: 'assets/denimJeans/denimj-6-3.jpg',
    },
    {
      img: 'assets/denimJeans/denimj7.webp',
      para: 'High-Rise Skinny Jeans - WASHED',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj7.webp',
      img2: 'assets/denimJeans/denimj-7-1.jpg',
      img3: 'assets/denimJeans/denimj-7-2.jpg',
      img4: 'assets/denimJeans/denimj-7-3.jpg',
    },
    {
      img: 'assets/denimJeans/denimj8.webp',
      para: 'Premium Distressed Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj8.webp',
      img2: 'assets/denimJeans/denimj-8-1.jpg',
      img3: 'assets/denimJeans/denimj-8-2.jpg',
      img4: 'assets/denimJeans/denimj-8-3.jpg',
    },

    {
      img: 'assets/denimJeans/denimj9.webp',
      para: 'Distressed Skinny Jeans - DARK',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj9.webp',
      img2: 'assets/denimJeans/denimj-9-1.jpg',
      img3: 'assets/denimJeans/denimj-9-2.jpg',
      img4: 'assets/denimJeans/denimj-9-3.jpg',
    },
    {
      img: 'assets/denimJeans/denimj10.webp',
      para: 'Plus Size Premium Skinny Uplyfter',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj10.webp',
      img2: 'assets/denimJeans/denimj-10-1.jpg',
      img3: 'assets/denimJeans/denimj-10-2.jpg',
      img4: 'assets/denimJeans/denimj-10-3.jpg',
    },
    {
      img: 'assets/denimJeans/denimj11.webp',
      para: 'Plus Size Whiskered Skinny Jeans',
      price: '229.00 --',
      priceLess: '110.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj11.webp',
      img2: 'assets/denimJeans/denimj-11-1.jpg',
      img3: 'assets/denimJeans/denimj-11-2.jpg',
      img4: 'assets/denimJeans/denimj-11-3.jpg',
    },
    {
      img: 'assets/denimJeans/denimj12.webp',
      para: 'Plus Size High-Rise Skinny Jeans',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/denimJeans/denimj12.webp',
      img2: 'assets/denimJeans/denimj-12-1.jpg',
      img3: 'assets/denimJeans/denimj-12-2.jpg',
      img4: 'assets/denimJeans/denimj-12-3.jpg',
    },
  ];

  plusS = [
    {
      titles: 'DENIM DRESSES',
      paras:
        "Denim on your mind? We've got you covered. Denim shirt dresses, fitted pinafores, and loose styles are all part of our stylish denim dresses. We have a style to reflect your individual style, whewther you prefer puff, short, or long sleeves. Select from a wide range of shades, such as black, khaki green, and beige. Choose from our selection of dungarees or wear with on-trend knee-high boots.",
      img: 'assets/plusS/plus1.webp',
      para: 'High-Rise Skinny Jeans - WASHE',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus1.webp',
      img2: 'assets/plusS/plus1-1.jpeg',
      img3: 'assets/plusS/plus1-2.jpeg',
      img4: 'assets/plusS/plus1-3.jpeg',
    },
    {
      img: 'assets/plusS/plus2.webp',
      para: 'Skinny High-Rise Jeans - MEDIUM',
      price: '219.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus2.webp',
      img2: 'assets/plusS/plus2-1.jpg',
      img3: 'assets/plusS/plus2-2.jpg',
      img4: 'assets/plusS/plus2-3.jpg',
    },
    {
      img: 'assets/plusS/plus3.webp',
      para: 'Premium Distressed 90s Fit Jeans',
      price: '199.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus3.webp',
      img2: 'assets/plusS/plus3-1.jpg',
      img3: 'assets/plusS/plus3-2.jpg',
      img4: 'assets/plusS/plus3-3.jpg',
    },
    {
      img: 'assets/plusS/plus4.webp',
      para: 'Distressed High-Rise Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus4.webp',
      img2: 'assets/plusS/plus4-1.jpeg',
      img3: 'assets/plusS/plus4-2.jpg',
      img4: 'assets/plusS/plus4-3.jpeg',
    },
    {
      img: 'assets/plusS/plus5.webp',
      para: 'High-Rise Skinny Jeans - LIGHT',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus5.webp',
      img2: 'assets/plusS/plus5-1.jpeg',
      img3: 'assets/plusS/plus5-2.jpeg',
      img4: 'assets/plusS/plus5-3.jpeg',
    },
    {
      img: 'assets/plusS/plus6.webp',
      para: 'Premium High-Rise Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus6.webp',
      img2: 'assets/plusS/plus6-1.jpg',
      img3: 'assets/plusS/plus6-2.jpg',
      img4: 'assets/plusS/plus6-3.jpg',
    },
    {
      img: 'assets/plusS/plus7.webp',
      para: 'High-Rise Skinny Jeans - WASHED',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus7.webp',
      img2: 'assets/plusS/plus7-1.jpg',
      img3: 'assets/plusS/plus7-2.jpg',
      img4: 'assets/plusS/plus7-3.jpg',
    },
    {
      img: 'assets/plusS/plus8.webp',
      para: 'Premium Distressed Skinny Jeans',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus8.webp',
      img2: 'assets/plusS/plus8-1.jpg',
      img3: 'assets/plusS/plus8-2.jpg',
      img4: 'assets/plusS/plus8-3.jpg',
    },

    {
      img: 'assets/plusS/plus9.webp',
      para: 'Distressed Skinny Jeans - DARK',
      price: '149.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus9.webp',
      img2: 'assets/plusS/plus9-1.jpg',
      img3: 'assets/plusS/plus9-2.jpg',
      img4: 'assets/plusS/plus9-3.jpg',
    },
    {
      img: 'assets/plusS/plus10.webp',
      para: 'Plus Size Premium Skinny Uplyfter',
      price: '129.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus10.webp',
      img2: 'assets/plusS/plus10-1.jpg',
      img3: 'assets/plusS/plus10-2.jpg',
      img4: 'assets/plusS/plus10-3.jpg',
    },
    {
      img: 'assets/plusS/plus11.webp',
      para: 'Plus Size Whiskered Skinny Jeans',
      price: '229.00 --',
      priceLess: 'AED 110.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus11.webp',
      img2: 'assets/plusS/plus11-1.jpg',
      img3: 'assets/plusS/plus11-2.jpg',
      img4: 'assets/plusS/plus11-3.jpg',
    },
    {
      img: 'assets/plusS/plus12.webp',
      para: 'Plus Size High-Rise Skinny Jeans',
      price: '99.00',
      detail:
        "A pair of denim jeans featuring a skinny fit, mid-rise waist, whiskering, traditional five-pocket construction, and a zip fly with a button closure. Content + Care - 72% cotton, 26% polyester, 2% spandex - Machine wash warm Size + Fit - Model is 5'9 'and wearing a Size 25   Item code 00450345'",
      img1: 'assets/plusS/plus12.webp',
      img2: 'assets/plusS/plus12-1.jpg',
      img3: 'assets/plusS/plus12-2.jpg',
      img4: 'assets/plusS/plus12-3.jpg',
    },
  ];

  ngOnInit(): void {
    this.pName = this.route.snapshot.paramMap.get('id');
    if (this.pName == 'skin') {
      this.product = this.skinny;
    }
    if (this.pName == 'waist') {
      this.product = this.waist;
    }
    if (this.pName == 'mom-jeans') {
      this.product = this.momJ;
    }
    if (this.pName == 'denim-jeans') {
      this.product = this.denimJ;
    }
    if (this.pName == 'plus') {
      this.product = this.plusS;
    }
  }

  showProduct(product: any) {
    console.log(product.para);
    localStorage.setItem('pName', product.para);
    localStorage.setItem('price', product.price);
    localStorage.setItem('detail', product.detail);
    localStorage.setItem('img', product.img);
    localStorage.setItem('img1', product.img1);
    localStorage.setItem('img2', product.img2);
    localStorage.setItem('img3', product.img3);
    localStorage.setItem('img4', product.img4);
    this.router.navigateByUrl('/single-product');
  }
}
