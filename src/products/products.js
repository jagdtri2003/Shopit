const product = {
    1001:{
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz0Sds1LwjVmAC8qgXOb2-NQipIjkWWXyVSg&s',
        name:'Blue Sapphire Pendant',
        price:54799,
        discountPrice:59999,
        specifications:'A timeless and elegant Blue Sapphire Pendant that exudes sophistication and luxury. Perfect for special occasions or as a statement piece for everyday wear.',
        brand:'Blue Stone'
    },
    1002:{
        image:'https://kinclimg3.bluestone.com/f_jpg,c_scale,w_828,q_80,b_rgb:f0f0f0/giproduct/BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194.png',
        name:'The Gianna Ring',
        price:54790,
        discountPrice:56364,
        specifications:'An exquisite Diamond Ring crafted in 18Kt Yellow Gold, featuring brilliant diamonds that add a touch of elegance and sophistication. Perfect for engagements, anniversaries, or as a luxurious gift.',
        brand:'Blue Stone'
    },
    1003:{
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqaVlTzAjkWzG8_QJFqQRevGRCBcOefiPLw&s',
        name:'TISSOT Sport Analog Watch',
        price:43499,
        discountPrice:49999,
        specifications:"Amaze everyone around you by wearing this men's analog watch from TISSOT. The blue round dial is protected by a sapphire glass. It features plain 3-hand and a crown for time adjustment. The stainless steel strap comes in a silver hue that further elevates the look of the timekeeper. Besides, it is completed with a fold-over push button clasp with safety clasp to ensure a secure fit on the wrist.",
        brand:'TISSOT'
    },
    1004:{
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgW8FHvRuH6AlUkCe481pnxZeQq4DAWHMdmA&s',
        name:'Air Tube Earphones Headset',
        price:1499,
        discountPrice:1999,
        specifications:'The Air Tube Earphones Headset is a high-quality earphone that offers superior sound',
        brand:'Air Tube'
    },
    1005:{
        image:'https://cdn.thewirecutter.com/wp-content/media/2023/10/smartphone-2048px-4861.jpg?auto=webp&quality=10&width=1024',
        name:'Samsung Galaxy S21 Ultra 5G',
        price:22379,
        discountPrice:25802,
        specifications:'The Samsung Galaxy S21 Ultra 5G is a high-end smartphone that offers a powerful processor, a large display, and a long-lasting battery. It also has a triple rear camera setup that allows you to take stunning photos and videos.',
        brand:'Samsung'
    },
    1006:{
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2yscgkxDOnZgwVJQt6Pa8VGrfBfJe5D5pA&s',
        name:'LG Inverter AC, 2 Ton',
        price: 49599,
        discountPrice: 55999,
        specifications:'The LG Inverter AC is a high-efficiency air conditioner that uses an inverter technology to maintain a consistent temperature in your room. It also has a self-diagnosis feature that helps you to identify and fix any issues with the AC.',
        brand:'LG'
    },
    1007:{
        image:'https://kinclimg6.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BISS0316R31_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-14636.png',
        name:'The Kael Ring',
        price:60064,
        discountPrice: 64999,
        specifications:'A stunning Diamond Ring crafted in 18Kt White Gold, featuring a dazzling center diamond that adds a touch of elegance and sophistication. Perfect for engagements, anniversaries, or as a luxurious gift.',
        brand:'Blue Stone'
    },
    1008:{
        image:'https://dajdiamond.com/wp-content/uploads/2022/04/DOC-ST-27-FY.jpg',
        name:'The Daj Diamond Earring',
        price: 53499,
        discountPrice: 59999,
        specifications:'A stunning Diamond Earring crafted in 18Kt White Gold, featuring a dazzling center diamond that adds a touch of elegance and sophistication. Perfect for engagements, anniversaries, or as a luxurious gift.',
        brand:'Daj Diamond'
    },
    1009:{
        image:'https://m.media-amazon.com/images/I/71aiqeP-APL._SL1500_.jpg',
        name:'Redmi Note 13 Pro (Coral Purple, 8GB RAM, 128GB Storage) | 1.5K AMOLED | 200MP Hi-Res Camera | Flagship 4nm SD 7s Gen 2 | 67W TurboCharge',
        price: 24999,
        discountPrice: 28999,
        specifications:'The Redmi Note 13 Pro is a high-end smartphone that offers a powerful processor and a large display. It also has a triple rear camera setup that allows you to take stunning photos and videos.',
        brand:'Redmi'
    },
    1010:{
        image:'https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg',
        name:'Apple iPhone 15(256 GB) - Blue',
        price: 81999,
        discountPrice: 89900,
        specifications:'The Apple iPhone 15 is a high-end smartphone that offers a powerful processor, a large display, and a long-lasting battery. It also has a triple rear camera setup that allows you to take stunning photos and videos.',
        brand:'Apple'
    },
    1011:{
        image:'https://m.media-amazon.com/images/I/81vxWpPpgNL._SL1500_.jpg',
        name:'Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 1TB Storage)',
        price: 159999,
        discountPrice:164999,
        specifications:'The Samsung Galaxy S24 Ultra 5G is a high-end smartphone that offers a powerful processor, a large display, and a long-lasting battery. It also has a triple rear camera setup that allows you to take stunning photos and videos.',
        brand:'Samsung'
    },
    1012:{
        image:"https://m.media-amazon.com/images/I/81zU65mJmJL._SL1500_.jpg",
        name:'Xiaomi 14 Ultra (White, 16GB RAM, 512GB Storage) | 50 MP Leica Quad Camera | 2K 120 Hz LTPO AMOLED | Flagship Snapdragon 8 Gen 3 | 90 W Hypercharge',
        price: 99998,
        discountPrice: 119999,
        specifications:'The Xiaomi 14 Ultra is a high-end smartphone that offers a powerful processor, a large display, and a long-lasting battery. It also has a quad rear camera setup that allows you to take stunning photos and videos.',
        brand:'Xiaomi'
    },
    1013:{
        image:'https://m.media-amazon.com/images/I/717Qo4MH97L._SL1500_.jpg',
        name:'OnePlus 12 (Flowy Emerald, 12GB RAM, 256GB Storage)',
        price: 64999,
        specifications:'The OnePlus 12 is a high-end smartphone that offers a powerful processor, a large display, and a long-lasting battery. It also has a triple rear camera setup that allows you to take stunning photos and videos.',
        brand:'OnePlus'
    },
    1014:{
        image:"https://m.media-amazon.com/images/I/610IIi6wHuL._SY879_.jpg",
        name:'Lymio Track Pant for Men || Track Pants || Plain Track Pant',
        price: 999,
        discountPrice:1599,
        specifications:'The Lymio Track Pant is a comfortable and stylish track pant that is perfect for working out or lounging around. It is made from a soft and stretchy fabric that allows for a comfortable fit and movement. The track pant also has a drawstring waistband that allows you to adjust the fit to your liking.',
        brand:'Lymio'
    },
    1015:{
        image:'https://m.media-amazon.com/images/I/612JvadSUzL._SY879_.jpg',
        name:'Women Floral Print Anarkali Kurta With Pant and Dupatta',
        price: 999,
        discountPrice: 1499,
        specifications:'The Women Floral Print Anarkali Kurta With Pant and Dupatta is a beautiful kurta set that is perfect for any occasion. The kurta is made from a soft and comfortable fabric that is perfect for wearing all day long. The kurta also has a floral print that adds a touch of elegance to the outfit.',
        brand:'Wedani'
    },
    1016:{
        image:'https://m.media-amazon.com/images/I/61493z-oqKL._SY879_.jpg',
        name:"Avantika Fashion Women's Kanjivaram Soft Pure Silk Banarasi Sarees With Blouse Piece",
        price: 899,
        discountPrice: 1199,
        specifications:"The Avantika Fashion Women's Kanjivaram Soft Pure Silk Banarasi Sarees With Blouse Piece is a beautiful saree that is perfect for any occasion. The saree is made from a soft and comfortable fabric that is perfect for wearing all day long. The saree also has a beautiful design that adds a touch of elegance to the outfit.",
        brand:'Avantika Fashion'
    },
    1017:{
        image:'https://m.media-amazon.com/images/I/518n4wn7k6L.jpg',
        name:'FUNKY RICH Funkyrich® Textured Popcorn Shirts for Men || Casual Shirt for Men ',
        price: 699,
        discountPrice: 1099,
        specifications:'The FUNKY RICH Funkyrich® Textured Popcorn Shirts for Men is a stylish and comfortable shirt that is perfect for any occasion. The shirt is made from a soft and comfortable fabric that is perfect for wearing all day long. The shirt also has a textured popcorn design that adds a touch of style to the outfit.',
        brand:'FUNKY RICH'
    },
    1018:{
        image:'https://m.media-amazon.com/images/I/61mfMh+cEkL._SL1500_.jpg',
        name:'Apple 2023 MacBook Pro (16-inch, M3 Max chip with 16‑core CPU and 40‑core GPU, 48GB Unified Memory, 1TB) - Space Black',
        price: 379990,
        discountPrice:399900,
        specifications:'The Apple 2023 MacBook Pro is a high-end laptop that offers a powerful processor and a large display. It also has a long-lasting battery and a sleek design that makes it perfect for working on the go.',
        brand:'Apple'
    },
    
}

export default product;