// mockData.ts
import { Product } from './types';
import Rectangle2 from './assets/Rectangle 2.png'; // Red bench
import dog2 from './assets/dog2.png'; // Samurai
import Rectangle21 from './assets/Rectangle 2.1.png'; // Egg Ballon
import Rectangle24 from './assets/Rectangle 2.4.png'; // MAN
import Rectangle25 from './assets/Rectangle 2.5.png';
import Rectangle101 from './assets/Rectangle 10.1.png';
import Rectangle102 from './assets/Rectangle 10.2.png';
import Rectangle10 from './assets/Rectangle 10.png';
import dog3 from './assets/dog3.jpg'
import pexel1 from './assets/pexels-lina-1741205.jpg';
import pexel2 from './assets/pexels-melly-1954515.jpg';
import pexel3 from './assets/pexels-pixabay-220938.jpg';
import person1 from './assets/pexels-anouar-olh-836891-1770803.jpg';
import person2 from './assets/pexels-creationhill-1681010.jpg';
import food1 from './assets/pexels-valeriya-842571.jpg'
import food2 from './assets/pexels-lum3n-44775-1410235.jpg'
import food3 from './assets/pexels-pixabay-416471.jpg'
import food4 from './assets/pexels-rakicevic-nenad-233369-1262302.jpg'
import landmark1 from './assets/pexels-562238395-16795713.jpg'
import landmark2 from './assets/pexels-simonlschlee-19142027.jpg'
import landmark3 from './assets/pexels-daydili-653358424-18005682.jpg'
import landmark4 from './assets/pexels-eikenaar-14655516.jpg'



export const mockProducts: Product[] = [
  {
    name: 'Samurai King Resting',
    category: 'pets',
    price: 20,
    featured: true,
    image: {
      src: dog2,
      alt: 'Samurai King Resting'
    },
    details: {
      dimmentions: {
        width: 1020,
        height: 1020,
      },
      size: 15000,
      description: 'So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Ciceros De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Ciceros De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.',
      recommendations: [
        { src: Rectangle101, alt: 'Recommendation 1' },
        { src: Rectangle102, alt: 'Recommendation 2' },
        { src: Rectangle10, alt: 'Recommendation 2' }
      ]
    }
  },
  {
    name: 'Red Bench',
    category: 'people',
    price: 3.89,
    featured: false,
    image: {
      src: Rectangle2,
      alt: 'Red Bench'
    },
    details: {
      dimmentions: {
        width: 500,
        height: 500,
      },
      size: 2000,
      description: 'Description for product 1',
      recommendations: [
        { src: Rectangle2, alt: 'Recommendation 1' },
        { src: Rectangle2, alt: 'Recommendation 2' }
      ]
    }
  },
  {
    name: 'Egg Balloon',
    category: 'food',
    price: 93.89,
    featured: false,
    image: {
      src: Rectangle21,
      alt: 'Egg Balloon'
    },
    details: {
      dimmentions: {
        width: 500,
        height: 500,
      },
      size: 1500,
      description: 'Description for product 2',
      recommendations: [
        { src: Rectangle2, alt: 'Recommendation 3' },
        { src: Rectangle2, alt: 'Recommendation 4' }
      ]
    }
  },
  {
    name: 'Man',
    category: 'people',
    price: 100.00,
    featured: false,
    image: {
      src: Rectangle24,
      alt: 'Man'
    },
    details: {
      dimmentions: {
        width: 500,
        height: 500,
      },
      size: 1500,
      description: 'Description for product 2',
      recommendations: [
        { src: Rectangle2, alt: 'Recommendation 3' },
        { src: Rectangle2, alt: 'Recommendation 4' }
      ]
    }
  },
  {
    name: 'Architecture',
    category: 'landmarks',
    price: 101.00,
    featured: false,
    image: {
      src: Rectangle25,
      alt: 'Architecture'
    },
    details: {
      dimmentions: {
        width: 500,
        height: 500,
      },
      size: 1500,
      description: 'Description for product 2',
      recommendations: [
        { src: Rectangle2, alt: 'Recommendation 3' },
        { src: Rectangle2, alt: 'Recommendation 4' }
      ]
    }
  },
  // Additional products
  {
    name: 'Golden Retriever',
    category: 'pets',
    price: 50.00,
    featured: false,
    image: {
      src:dog3,
    alt: 'Dog'
    },
    details: {
      dimmentions: {
        width: 600,
        height: 600,
      },
      size: 1800,
      description: 'Description for product 3',
      recommendations: [
        { src: Rectangle10, alt: 'Recommendation 1' },
        { src: Rectangle10, alt: 'Recommendation 2' }
      ]
    }
  },
  {
    name: 'CAT',
    category: 'pets',
    price: 70.00,
    featured: false,
    image: {
      src: pexel1,
      alt: 'DOG'
    },
    details: {
      dimmentions: {
        width: 700,
        height: 700,
      },
      size: 2000,
      description: 'Description for product 4',
      recommendations: [
        { src: Rectangle10, alt: 'Recommendation 1' },
        { src: Rectangle10, alt: 'Recommendation 2' }
      ]
    }
  },
  {
    name: 'Drowning',
    category: 'people',
    price: 60.00,
    featured: false,
    image: {
      src: person1,
      alt: 'Rectangle 5'
    },
    details: {
      dimmentions: {
        width: 600,
        height: 600,
      },
      size: 1800,
      description: 'Description for product 5',
      recommendations: [
        { src: Rectangle10, alt: 'Recommendation 1' },
        { src: Rectangle10, alt: 'Recommendation 2' }
      ]
    }
  },
  {
    name: 'Boy',
    category: 'people',
    price: 80.00,
    featured: false,
    image: {
      src: person2,
      alt: 'Rectangle 6'
    },
    details: {
      dimmentions: {
        width: 700,
        height: 700,
      },
      size: 2000,
      description: 'Description for product 6',
      recommendations: [
        { src: Rectangle10, alt: 'Recommendation 1' },
        { src: Rectangle10, alt: 'Recommendation 2' }
      ]
    }
  },
  {
    name: 'Salad',
    category: 'food',
    price: 40.00,
    featured: false,
    image: {
      src: food1,
      alt: 'Rectangle 7'
    },
    details: {
      dimmentions: {
        width: 600,
        height: 600,
      },
      size: 1800,
      description: 'Description for product 7',
      recommendations: [
        { src: Rectangle10, alt: 'Recommendation 1' },
        { src: Rectangle10, alt: 'Recommendation 2' }
      ]
    }
  },
  {
    name: 'Healthy',
    category: 'food',
    price: 90.00,
    featured: false,
    image: {
      src: food2,
      alt: 'Rectangle 8'
    },
    details: {
      dimmentions: {
        width: 700,
        height: 700,
      },
      size: 2000,
      description: 'Description for product 8',
      recommendations: [
        { src: Rectangle10, alt: 'Recommendation 1' },
        { src: Rectangle10, alt: 'Recommendation 2' }
      ]
    }
  },
  {
    name: 'C',
    category: 'landmarks',
    price: 150.00,
    featured: false,
    image: {
      src: landmark1,
      alt: 'Rectangle 9'
    },
    details: {
      dimmentions: {
        width: 800,
        height: 800,
      },
      size: 2500,
      description: 'Description for product 9',
      recommendations: [
        { src: Rectangle10, alt: 'Recommendation 1' },
        { src: Rectangle10, alt: 'Recommendation 2' }
      ]
    }
  },
  
{
  name: 'H',
  category: 'landmarks',
  price: 120.00,
  featured: false,
  image: {
    src: landmark2,
    alt: 'Rectangle 10'
  },
  details: {
    dimmentions: {
      width: 800,
      height: 800,
    },
    size: 2500,
    description: 'Description for product 10',
    recommendations: [
      { src: Rectangle2, alt: 'Recommendation 1' },
      { src: Rectangle2, alt: 'Recommendation 2' }
    ]
  }
},
{
  name: 'MELLY',
  category: 'pets',
  price: 45.00,
  featured: false,
  image: {
    src: pexel2,
    alt: 'Rectangle 11'
  },
  details: {
    dimmentions: {
      width: 600,
      height: 600,
    },
    size: 1800,
    description: 'Description for product 11',
    recommendations: [
      { src: Rectangle10, alt: 'Recommendation 1' },
        { src: Rectangle10, alt: 'Recommendation 2' }
    ]
  }
},
{
  name: 'BLACK',
  category: 'pets',
  price: 55.00,
  featured: false,
  image: {
    src: pexel3,
    alt: 'Rectangle 12'
  },
  details: {
    dimmentions: {
      width: 700,
      height: 700,
    },
    size: 2000,
    description: 'Description for product 12',
    recommendations: [
      { src: Rectangle10, alt: 'Recommendation 1' },
        { src: Rectangle10, alt: 'Recommendation 2' }
    ]
  }
},


{
  name: 'Yumm',
  category: 'food',
  price: 35.00,
  featured: false,
  image: {
    src: food3,
    alt: 'Rectangle 15'
  },
  details: {
    dimmentions: {
      width: 600,
      height: 600,
    },
    size: 1800,
    description: 'Description for product 15',
    recommendations: [
      { src: Rectangle10, alt: 'Recommendation 1' },
        { src: Rectangle10, alt: 'Recommendation 2' }
    ]
  }
},
{
  name: 'Ice cream',
  category: 'food',
  price: 85.00,
  featured: false,
  image: {
    src: food4,
    alt: 'Rectangle 16'
  },
  details: {
    dimmentions: {
      width: 700,
      height: 700,
    },
    size: 2000,
    description: 'Description for product 16',
    recommendations: [
      { src: Rectangle2, alt: 'Recommendation 1' },
      { src: Rectangle10, alt: 'Recommendation 2' }
    ]
  }
},
{
  name: 'K',
  category: 'landmarks',
  price: 155.00,
  featured: false,
  image: {
    src: landmark3,
    alt: 'Rectangle 17'
  },
  details: {
    dimmentions: {
      width: 800,
      height: 800,
    },
    size: 2500,
    description: 'Description for product 17',
    recommendations: [
      { src: Rectangle2, alt: 'Recommendation 1' },
      { src: Rectangle2, alt: 'Recommendation 2' }
    ]
  }
},
{
  name: 'S',
  category: 'landmarks',
  price: 135.00,
  featured: false,
  image: {
    src: landmark4,
    alt: 'Rectangle 18'
  },
  details: {
    dimmentions: {
      width: 800,
      height: 800,
    },
    size: 2500,
    description: 'Description for product 18',
    recommendations: [
      { src: Rectangle2, alt: 'Recommendation 1' },
      { src: Rectangle2, alt: 'Recommendation 2' }
    ]
  }
},
];

export const categories = [
{ name: 'pets', label: 'Pets' },
{ name: 'people', label: 'People' },
{ name: 'food', label: 'Food' },
{ name: 'landmarks', label: 'Landmarks' }
];
