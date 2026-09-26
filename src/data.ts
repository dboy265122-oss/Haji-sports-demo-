export type Category = {
  slug: string;
  name: string;
  blurb: string;
  count: number;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  badge?: string;
  tag?: "New" | "Popular" | "Pro" | "Value";
  image: string;
  rating: number;
  desc: string;
};

export type Review = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
};

export type Faq = {
  q: string;
  a: string;
};

export const storeInfo = {
  name: "Haji Sports",
  tagline: "Every Game Starts Here.",
  phone: "+91 90020 00000",
  phoneHref: "tel:+919002000000",
  whatsapp: "919002000000",
  email: "hello@hajisports.in",
  addressLine1: "Main Road, Near Panskura College",
  addressLine2: "Panskura, Purba Medinipur",
  city: "West Bengal 721152",
  hoursWeekday: "Mon – Sat · 9:00 AM – 8:00 PM",
  hoursSunday: "Sunday · 10:00 AM – 2:00 PM",
  parking: "Two-wheeler & four-wheeler parking available on premises",
  mapEmbed:
    "https://www.google.com/maps?q=Panskura,West+Bengal&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Panskura+West+Bengal",
};

export const categories: Category[] = [
  {
    slug: "cricket",
    name: "Cricket",
    blurb: "Bats, balls, pads, gloves & keepers' kits",
    count: 120,
    image:
      "https://images.pexels.com/photos/20652481/pexels-photo-20652481.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "football",
    name: "Football",
    blurb: "Match balls, studs, shin guards & gloves",
    count: 86,
    image:
      "https://images.pexels.com/photos/27428147/pexels-photo-27428147.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "badminton",
    name: "Badminton",
    blurb: "Rackets, shuttles, grips & court shoes",
    count: 54,
    image:
      "https://images.pexels.com/photos/13116204/pexels-photo-13116204.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "fitness",
    name: "Fitness",
    blurb: "Resistance bands, mats, ropes & supports",
    count: 72,
    image:
      "https://images.pexels.com/photos/8032748/pexels-photo-8032748.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "gym",
    name: "Gym",
    blurb: "Dumbbells, plates, benches & accessories",
    count: 64,
    image:
      "https://images.pexels.com/photos/29224210/pexels-photo-29224210.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "shoes",
    name: "Sports Shoes",
    blurb: "Running, training, court & turf footwear",
    count: 98,
    image:
      "https://images.pexels.com/photos/1456733/pexels-photo-1456733.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "school-sports",
    name: "School Sports",
    blurb: "Athletics kits, house uniforms & supplies",
    count: 41,
    image:
      "https://images.pexels.com/photos/38816455/pexels-photo-38816455.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "accessories",
    name: "Accessories",
    blurb: "Grips, socks, bottles, bags & guards",
    count: 110,
    image:
      "https://images.pexels.com/photos/6878017/pexels-photo-6878017.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Pro Willow Cricket Bat — Grade 1",
    category: "Cricket",
    price: 2499,
    mrp: 3200,
    tag: "Pro",
    badge: "Hand-selected English willow",
    image:
      "https://images.pexels.com/photos/20652481/pexels-photo-20652481.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.9,
    desc: "Pressed and balanced for power hitting with a light pickup. Comes with a factory-fitted scuff sheet.",
  },
  {
    id: "p2",
    name: "Match Football — Size 5 Pro Stitched",
    category: "Football",
    price: 899,
    mrp: 1299,
    tag: "Popular",
    badge: "Tournament approved",
    image:
      "https://images.pexels.com/photos/27428147/pexels-photo-27428147.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.8,
    desc: "Hand-stitched synthetic leather with a true flight bladder. Built for grass and turf play.",
  },
  {
    id: "p3",
    name: "Carbon Pro Badminton Racket — 82g",
    category: "Badminton",
    price: 1799,
    mrp: 2400,
    tag: "New",
    badge: "Isometric head",
    image:
      "https://images.pexels.com/photos/13116204/pexels-photo-13116204.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.7,
    desc: "Full carbon frame for fast swings and controlled smashes. Pre-strung at 26 lbs.",
  },
  {
    id: "p4",
    name: "Hex Dumbbell Pair — 10kg",
    category: "Gym",
    price: 1299,
    mrp: 1800,
    tag: "Value",
    badge: "Rubber-coated heads",
    image:
      "https://images.pexels.com/photos/29224210/pexels-photo-29224210.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.8,
    desc: "Ergonomic knurled chrome grip with anti-roll hex heads. Sold as a pair.",
  },
  {
    id: "p5",
    name: "Sprint Running Shoes — Trainer Edition",
    category: "Sports Shoes",
    price: 2199,
    mrp: 2999,
    tag: "Popular",
    badge: "Cushioned heel",
    image:
      "https://images.pexels.com/photos/1456733/pexels-photo-1456733.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.6,
    desc: "Breathable knit upper with a responsive foam midsole for daily training and long runs.",
  },
  {
    id: "p6",
    name: "Turf Football Cleats — Firm Ground",
    category: "Football",
    price: 1599,
    mrp: 2200,
    tag: "Pro",
    badge: "Lightweight upper",
    image:
      "https://images.pexels.com/photos/32574015/pexels-photo-32574015.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.7,
    desc: "Conical studs for grip on dry grass and turf. Snug lace closure with padded ankle collar.",
  },
  {
    id: "p7",
    name: "Anti-Slip Yoga & Training Mat",
    category: "Fitness",
    price: 699,
    mrp: 999,
    tag: "Value",
    badge: "6mm cushion",
    image:
      "https://images.pexels.com/photos/8032748/pexels-photo-8032748.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.5,
    desc: "Double-sided TPE surface with high-density cushioning. Includes a carry strap.",
  },
  {
    id: "p8",
    name: "Pro Keeper Gloves — Latex Palm",
    category: "Football",
    price: 749,
    mrp: 1100,
    tag: "New",
    badge: "Negative cut",
    image:
      "https://images.pexels.com/photos/6878017/pexels-photo-6878017.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.6,
    desc: "Soft German latex palm for all-weather grip. Wrap-around wrist strap for support.",
  },
];

export const latestArrivals: Product[] = [
  {
    id: "l1",
    name: "T20 Lightweight Batting Gloves",
    category: "Cricket",
    price: 599,
    mrp: 850,
    tag: "New",
    image:
      "https://images.pexels.com/photos/6878017/pexels-photo-6878017.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.6,
    desc: "Breathable mesh back with split-finger foam padding for confident shot-making.",
  },
  {
    id: "l2",
    name: "Velocity Court Shoes — Non-Marking",
    category: "Sports Shoes",
    price: 1899,
    mrp: 2600,
    tag: "New",
    image:
      "https://images.pexels.com/photos/28375818/pexels-photo-28375818.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.7,
    desc: "Gum rubber outsole built for badminton and indoor courts. Pivot point for quick turns.",
  },
  {
    id: "l3",
    name: "Speed Agility Ladder & Cones Set",
    category: "Fitness",
    price: 449,
    mrp: 699,
    tag: "New",
    image:
      "https://images.pexels.com/photos/8032748/pexels-photo-8032748.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.5,
    desc: "12-rung adjustable ladder with 8 field cones. Ideal for drills, football and athletics.",
  },
  {
    id: "l4",
    name: "Tournament Volleyball — Soft Touch",
    category: "Football",
    price: 699,
    mrp: 999,
    tag: "New",
    image:
      "https://images.pexels.com/photos/27428147/pexels-photo-27428147.jpeg?auto=compress&cs=tinysrgb&w=900",
    rating: 4.6,
    desc: "Microfiber composite cover with a butyl bladder for shape retention over long sets.",
  },
];

export const brands = [
  "SG",
  "Kookaburra",
  "GM",
  "Nivia",
  "Cosco",
  "Yonex",
  "MRF",
  "SS",
  "BDM",
  "Puma",
  "Nike",
  "Adidas",
];

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Soumyadeep Maity",
    role: "Club Cricketer · Panskura",
    quote:
      "Bought my first Grade 1 willow bat here. The owner helped me pick based on my game, not the price. Best pickup I've ever held.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/9271180/pexels-photo-9271180.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: "r2",
    name: "Riya Das",
    role: "PE Teacher · Local School",
    quote:
      "We ordered 40 house jerseys and athletics kits for our annual sports day. On time, neatly printed, and the kids loved the fit.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/4993172/pexels-photo-4993172.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: "r3",
    name: "Imtiaz Khan",
    role: "Football Coach",
    quote:
      "Match balls that actually last a full season. Honest advice, fair pricing, and the gear is always genuine. My go-to store.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/9271168/pexels-photo-9271168.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: "r4",
    name: "Ankush Patra",
    role: "College Badminton Player",
    quote:
      "Got my Yonex racket strung perfectly and the shuttle stock is always fresh. Felt like a pro shop in the middle of Panskura.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/9271180/pexels-photo-9271180.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export const faqs: Faq[] = [
  {
    q: "Do you deliver outside Panskura?",
    a: "Yes. We ship across West Bengal and most of India through trusted courier partners. Walk in or call us with your list and we'll arrange delivery to your nearest hub.",
  },
  {
    q: "Can I place a bulk order for a school or club?",
    a: "Absolutely. We handle school jerseys, team uniforms, tournament kits and club supplies in any quantity. Tell us your colours, sizes and deadline and we'll share a quote within a day.",
  },
  {
    q: "Do you make custom school sports uniforms?",
    a: "We do. Choose your house colours, fabric and print style, and we'll tailor uniforms with names and numbers for your athletes. Minimum order applies.",
  },
  {
    q: "What is your return and exchange policy?",
    a: "Unused items in original packaging can be exchanged within 7 days with the original bill. Custom-printed jerseys and team orders are non-returnable unless there is a manufacturing defect.",
  },
  {
    q: "Are all products genuine and branded?",
    a: "Every branded product we stock is sourced from authorised suppliers. You'll always receive genuine equipment with the original tags and packaging.",
  },
  {
    q: "Can I get a bat knocked-in or a racket restrung?",
    a: "Yes. We offer bat knocking-in, grip changes and racket stringing in-store. Ask the counter and we'll have it ready for you, usually within a day.",
  },
];

export const galleryImages = [
  { src: "https://images.pexels.com/photos/793097/pexels-photo-793097.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Organised sports equipment on store shelves", span: "tall" },
  { src: "https://images.pexels.com/photos/27428147/pexels-photo-27428147.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Match football on green grass", span: "normal" },
  { src: "https://images.pexels.com/photos/20652481/pexels-photo-20652481.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Cricket bat, ball and stumps", span: "normal" },
  { src: "https://images.pexels.com/photos/1456733/pexels-photo-1456733.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Premium sports shoes", span: "wide" },
  { src: "https://images.pexels.com/photos/13116204/pexels-photo-13116204.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Badminton racket and shuttles", span: "tall" },
  { src: "https://images.pexels.com/photos/29224210/pexels-photo-29224210.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Hex dumbbells on gym floor", span: "normal" },
  { src: "https://images.pexels.com/photos/34742833/pexels-photo-34742833.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Team huddle in jerseys", span: "wide" },
  { src: "https://images.pexels.com/photos/903967/pexels-photo-903967.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Sports accessories on display", span: "normal" },
  { src: "https://images.pexels.com/photos/38816455/pexels-photo-38816455.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Young players on the field", span: "normal" },
];

export const blogTips = [
  {
    title: "How to choose the right cricket bat weight",
    excerpt: "Pickup matters more than the number on the scale. A quick guide to finding your balance.",
    read: "3 min read",
  },
  {
    title: "5 warm-up drills every footballer should own",
    excerpt: "Prevent injury and sharpen your first touch with these simple pre-match routines.",
    read: "4 min read",
  },
  {
    title: "Caring for your badminton strings",
    excerpt: "String tension drops before it breaks. Here's how to keep your smash crisp.",
    read: "2 min read",
  },
];
