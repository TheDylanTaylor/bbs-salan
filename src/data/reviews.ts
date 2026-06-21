/**
 * GOOGLE REVIEWS — paste real reviews only
 *
 * 1. Open the BBS Google Maps listing → Reviews tab
 * 2. For each review, copy exactly: reviewer name, star rating, date, full text
 * 3. Add one object per review to googleReviews[] below
 * 4. Do NOT edit review meaning. Do NOT invent names, ratings, or quotes.
 * 5. Optionally set totalReviewCount and averageRating from the Google listing header.
 *
 * Listing: https://www.google.com/maps/place/BBS+Barber+%26+Salon+Supply/
 */

export type GoogleReview = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  source: "Google";
  featured?: boolean;
};

const PLACE_URL =
  "https://www.google.com/maps/place/BBS+Barber+%26+Salon+Supply/@34.0109104,-118.271454,15z/data=!4m16!1m9!3m8!1s0x80c2c91ad58333b5:0x7200ae36ce5785a!2sBBS+Barber+%26+Salon+Supply!8m2!3d34.0109912!4d-118.2714562!9m1!1b1!16s%2Fg%2F11jwdysj8v";

export const googlePlaceMeta = {
  placeUrl: PLACE_URL,
  writeReviewUrl: `${PLACE_URL}?entry=ttu`,
  totalReviewCount: 11,
  averageRating: 4.8,
};

export const googleReviews: GoogleReview[] = [
  {
    id: "google-henry-guandique",
    name: "Henry Guandique",
    rating: 5,
    text: "Walking into the store, the first thing I notice is that it is very well organized and clean. The staff is great and helps you with whatever you need. Stocked with a lot of products, making it easy to shop for whatever you need. From machines to hair products to scissors maintenance, you'll find everything here. 5 stars and I'll be looking forward to coming in for future needs.",
    date: "",
    source: "Google",
    featured: true,
  },
  {
    id: "google-luis-padilla-gonzalez",
    name: "Luis Padilla-Gonzalez",
    rating: 5,
    text: "The moment you step inside, you're greeted with a warm and welcoming atmosphere that sets the tone for a fantastic shopping experience. The staff is knowledgeable and always ready to assist, making sure you find exactly what you need. Their selection of supplies is top-notch, featuring high-quality products for both professional barbers and home grooming enthusiasts. What really stands out is their commitment to customer service and personalized recommendations.",
    date: "",
    source: "Google",
    featured: true,
  },
  {
    id: "google-melton-williams",
    name: "Melton Williams",
    rating: 5,
    text: "I was extremely satisfied with the service I received. My cordless masters are working much better now. They immediately made me feel welcomed and comfortable while they were servicing my clippers. I only had to wait about 15 to 20 minutes for the service. Highly recommend.",
    date: "",
    source: "Google",
    featured: true,
  },
  {
    id: "google-anarol-sajor",
    name: "Anarol Sajor",
    rating: 5,
    text: "I like that the staff treats me well and is very friendly. They have everything for barbershops and it's very clean. I like it, that's why I give it 5 stars.",
    date: "",
    source: "Google",
  },
  {
    id: "google-jay-way",
    name: "Jay Way",
    rating: 5,
    text: "Awesome place to repair clippers and good sales personnel. I will be returning.",
    date: "",
    source: "Google",
  },
  {
    id: "google-rick-abarca",
    name: "Rick Abarca",
    rating: 5,
    text: "Very great customer service. Best clippers, trimmer, and shaver deals out there. Highly recommend.",
    date: "",
    source: "Google",
  },
  {
    id: "google-delmy-anderson",
    name: "Delmy Anderson",
    rating: 5,
    text: "You can find everything for hair, especially for barbers.",
    date: "",
    source: "Google",
  },
  {
    id: "google-humberto-ramos",
    name: "Humberto Ramos",
    rating: 5,
    text: "You can find many products for your hair and face. The store is well stocked with everything needed for daily use. Highly advisable and recommended.",
    date: "",
    source: "Google",
  },
  {
    id: "google-kevin-d",
    name: "Kevin D",
    rating: 5,
    text: "You can get hair products and everything seems convenient and easy to find.",
    date: "",
    source: "Google",
  },
  {
    id: "google-carlos-trevi",
    name: "Carlos Trevi",
    rating: 3,
    text: "Prices are good and they often have promotions. They can also repair clippers, which is very helpful. Service can sometimes feel rushed during busy times.",
    date: "",
    source: "Google",
  },
  {
    id: "google-randy-bonilla",
    name: "Randy Bonilla",
    rating: 5,
    text: "Amazing staff and always welcoming. Never had a bad shopping experience here.",
    date: "",
    source: "Google",
  },
];
