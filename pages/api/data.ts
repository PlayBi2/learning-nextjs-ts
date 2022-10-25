// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import { NextApiRequest, NextApiResponse } from 'next';

const data = {
  bannerItems: [
    {
      id: 1,
      title: 'SELECTED ITEMS. ONLINE ONLY.',
      ImageUrl:
        'https://cdn.shopify.com/s/files/1/0016/2915/9471/files/banner-1_559x387.jpg?v=1630387403',
      firstName: 'Hot Summer',
      lastName: 'Deals',
    },
    {
      id: 2,
      title: 'TREATS & GROOMING',
      ImageUrl:
        'https://cdn.shopify.com/s/files/1/0016/2915/9471/files/banner-2_559x387.jpg?v=1630387421',
      firstName: 'Spoil your true',
      lastName: 'love',
    },
    {
      id: 3,
      title: 'OUR BRAND YOU WILL LOVE',
      ImageUrl:
        'https://cdn.shopify.com/s/files/1/0016/2915/9471/files/banner-3_559x387.jpg?v=1630387453',
      firstName: 'New in this',
      lastName: 'year',
    },
  ],
  bestSeller: [
    {
      id: 1,
      name: "Commodo leo sed porta",
      minPrice: '15.00',
      maxPrice: '22.00',
      rate: '0',
      imgSrc1: 'https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-8_360x360.jpg?v=1636280404',
      imgSrc2: 'https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-8.1_360x360.jpg?v=1636280405',
      descriptions: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      productType: "Dog Apparel",
      Vendor: "Paw Nutrition",
      categories: "Cat Food,Cat Toys,Dog Food,Dog Toys,Fish Food",
      tag: "Dog Toy",

    },
    {
      id: 2,
      name: "Purus consequat congue sit",
      minPrice: "45.00",
      maxPrice: "45.00",
      rate: "5",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-17_360x360.jpg?v=1636280993",
      imgSrc2: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-17.1_360x360.jpg?v=1636280993",
      descriptions: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      productType: "Dog Apparel",
      Vendor: "Paw Nutrition",
      categories: "Cat Food,Cat Toys,Dog Food,Dog Toys,Fish Food",
      tag: "Dog Toy",
    },
    {
      id: 3,
      name: "Morbi vel arcu scelerisque",
      minPrice: "45.00",
      maxPrice: "45.00",
      rate: "0",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-16_360x360.jpg?v=1636280915",
      imgSrc2: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-16.1_360x360.jpg?v=1636280915",
      descriptions: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      productType: "Dog Apparel",
      Vendor: "Paw Nutrition",
      categories: "Cat Food,Cat Toys,Dog Food,Dog Toys,Fish Food",
      tag: "Dog Toy",
    },
    {
      id: 4,
      name: "Morbi vel arcu scelerisque",
      minPrice: "49.00",
      maxPrice: "49.00",
      rate: "0",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-26_360x360.jpg?v=1636281613",
      imgSrc2: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-26.1_360x360.jpg?v=1636281612",
      descriptions: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      productType: "Dog Apparel",
      Vendor: "Paw Nutrition",
      categories: "Cat Food,Cat Toys,Dog Food,Dog Toys,Fish Food",
      tag: "Dog Toy",
    },
    {
      id: 5,
      name: "Morbi vel arcu scelerisque",
      minPrice: "85.00",
      maxPrice: "85.00",
      rate: "",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-14_360x360.jpg?v=1636280845",
      imgSrc2: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-14.1_360x360.jpg?v=1636280845",
      descriptions: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      productType: "Dog Apparel",
      Vendor: "Paw Nutrition",
      categories: "Cat Food,Cat Toys,Dog Food,Dog Toys,Fish Food",
      tag: "Dog Toy",
    },
    {
      id: 6,
      name: "Nam justo libero porta ege",
      minPrice: "85.00",
      maxPrice: "85.00",
      rate: "",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-11_360x360.jpg?v=1636280721",
      imgSrc2: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-12.1_360x360.jpg?v=1636280721",
      descriptions: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      productType: "Dog Apparel",
      Vendor: "Paw Nutrition",
      categories: "Cat Food,Cat Toys,Dog Food,Dog Toys,Fish Food",
      tag: "Dog Toy",
    },
    {
      id: 7,
      name: "Nam justo libero porta ege",
      minPrice: "85.00",
      maxPrice: "85.00",
      rate: "4.5",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-10_b98a5ca2-321c-412b-af32-a2a4c48679d3_360x360.jpg?v=1636280650",
      imgSrc2: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-10.1_360x360.jpg?v=1636280651",
      descriptions: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      productType: "Dog Apparel",
      Vendor: "Paw Nutrition",
      categories: "Cat Food,Cat Toys,Dog Food,Dog Toys,Fish Food",
      tag: "Dog Toy",
    },
    {
      id: 8,
      name: "Etiam commodo leo sed",
      minPrice: "55.00",
      maxPrice: "62.00",
      rate: "4",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-9_85b3789a-41cf-43b4-bca2-5b4dd73e5fb5_360x360.jpg?v=1636280563",
      imgSrc2: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-8_27e6c315-8aa5-425e-bf4a-69c8c8742201_360x360.jpg?v=1636280571",
      descriptions: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      productType: "Dog Apparel",
      Vendor: "Paw Nutrition",
      categories: "Cat Food,Cat Toys,Dog Food,Dog Toys,Fish Food",
      tag: "Dog Toy",
    }
  ],
  AboutItem: [
    {
      id: 1,
      imgSrc: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/service-1_70x70.png?v=1630408456",
      title: "Free Same-Day Delivery",
      slogan: "Order by 2pm local time to get free delivery on orders $35+ today."
    },
    {
      id: 2,
      imgSrc: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/service-2_70x70.png?v=1630408456",
      title: "30 Day Return",
      slogan: "35% off your first order plus 5% off all future orders."
    },
    {
      id: 3,
      imgSrc: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/service-3_70x70.png?v=1630408456",
      title: "Security payment",
      slogan: "25% off your online order of $50+. Available at most locations."
    },
    {
      id: 4,
      imgSrc: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/service-4_70x70.png?v=1630408456",
      title: "24/7 Support",
      slogan: "Shop online to get orders over $35 shipped fast and free.*"
    }
  ],
  recommended: [
    {
      id: 1,
      name: "Morbi vel arcu scelerisque",
      rate: "4",
      minPrice: "18.00",
      maxPrice: "18.00",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-22_360x360.jpg?v=1636281160",
      imgSrc2: ""
    }
    ,
    {
      id: 2,
      name: "Morbi vel arcu scelerisque",
      rate: "0",
      minPrice: "87.00",
      maxPrice: "87.00",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-19_360x360.jpg?v=1636281059",
      imgSrc2: ""
    }
    ,
    {
      id: 3,
      name: "Purus consequat congue sit",
      rate: "5",
      minPrice: "45.00",
      maxPrice: "45.00",
      imgSrc1: " https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-17_360x360.jpg?v=1636280993",
      imgSrc2: ""
    }
    ,
    {
      id: 4,
      name: "Morbi vel arcu scelerisque",
      rate: "0",
      minPrice: "45.00",
      maxPrice: "45.00",
      imgSrc1: " https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-17_360x360.jpg?v=1636280993",
      imgSrc2: ""
    }
    ,
    {
      id: 5,
      name: "Morbi vel arcu scelerisque",
      rate: "4",
      minPrice: "18.00",
      maxPrice: "18.00",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-16_360x360.jpg?v=1636280915",
      imgSrc2: ""
    }
    ,
    {
      id: 6,
      name: "Morbi vel arcu scelerisque",
      rate: "4",
      minPrice: "18.00",
      maxPrice: "18.00",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-22_360x360.jpg?v=1636281160",
      imgSrc2: ""
    }
    ,
    {
      id: 7,
      name: "Morbi vel arcu scelerisque",
      rate: "4",
      minPrice: "18.00",
      maxPrice: "18.00",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-8_360x360.jpg?v=1636280404",
      imgSrc2: ""
    }
    ,
    {
      id: 8,
      name: "Morbi vel arcu scelerisque",
      rate: "4",
      minPrice: "18.00",
      maxPrice: "18.00",
      imgSrc1: "https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-26_360x360.jpg?v=1636281613",
      imgSrc2: ""

    }
  ],
  brands: [
    {
      id: 1,
      imgSrc: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/brand-1_150x150.jpg?v=1630408493"
    },
    {
      id: 2,
      imgSrc: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/brand-2_150x150.jpg?v=1630408493"
    },
    {
      id: 3,
      imgSrc: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/brand-3_150x150.jpg?v=1630408493"
    },
    {
      id: 4,
      imgSrc: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/brand-4_150x150.jpg?v=1630408494"
    },
    {
      id: 5,
      imgSrc: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/brand-5_150x150.jpg?v=1630408494"
    }
  ]
  
}

export {data}


export default function getAllIntroduct(req: NextApiRequest, res: NextApiResponse) {
  res.json(data);
}