require("dotenv").config();

const mongoose = require("mongoose");
const roomModel = require("./models/room");
// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("COnnected to the adatbase");
//     app.listen(port, () => {
//       console.log(" Listening to port " + port);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };
// connectDb();

async function seedDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the database");
    await roomModel.deleteMany();
    // const roomsData = [
    //   {
    //     name: 'Bicycle',
    //     maxCount: 10,
    //     phoneNumber: 1234567890,
    //     rentperday: 20,
    //     imageurls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSoA4kAcQXK-Es3mHJ24zMBpTOR4bCuD4sMq8NUPwt4H1fxgjomjW-8yXBJ86Uyk6bHo&usqp=CAU'],
    //     currentbookings: [],
    //     type: 'Sports',
    //     description: 'A bicycle for outdoor activities.'
    //   },
    //   // ... (remaining rooms)
    // ];
    const rooms = [
      {
        name: "Kokoro Teien Hotel (心庭園ホテル)",
        maxCount: 10,
        phoneNumber: 1234567890,
        rentperday: 20,
        imageurls: [
          "https://cdn.tatlerasia.com/asiatatler/i/hk/2021/07/07032140-most-expensive-hotel-rooms-suites-in-the-world-wilson3_cover_2000x1334.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSoA4kAcQXK-Es3mHJ24zMBpTOR4bCuD4sMq8NUPwt4H1fxgjomjW-8yXBJ86Uyk6bHo&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0WvT7tC5jsJBfzi0_6zzpuAv5rcXz1WgWlQ&usqp=CAU",
        ],
        currentbookings: [],
        type: "Delux",
        description: "A bicycle for outdoor activities.",
      },
      {
        name: "Serene Haven Resort",
        maxCount: 5,
        phoneNumber: 9876543210,
        rentperday: 50,
        imageurls: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR04lZBkXcPKgPkIdZ9fh4OC-NybvEHQ4ZdWSU4gYRReUxqF40-Y67rqgHR-sDLjXdSEE&usqp=CAU",
        ],
        currentbookings: [],
        type: "Transportation",
        description: "A car for convenient travel.",
      },
      {
        name: "Whispering Pines Inn",
        maxCount: 50,
        phoneNumber: 5551234567,
        rentperday: 100,
        imageurls: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3XbD6HjvUwye_03Z-pMS-mGLflRv1k5299kdFVPJ_wG6fKrlMbFeyZtGHwHhd4ag5xo&usqp=CAU",
        ],
        currentbookings: [],
        type: "Delux",
        description: "A cozy hotel for a comfortable stay.",
      },
      {
        name: "Tranquil Waters Inn",
        maxCount: 30,
        phoneNumber: 5559876543,
        rentperday: 80,
        imageurls: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAz8sjGRBe81oeLvsGQ-V3zgKcKSmCfl0DYTzNrslUlmRutci3AAbwcz3e-SiIUA3Xv8&usqp=CAU",
        ],
        currentbookings: [],
        type: "Delux",
        description: "A luxurious hotel with top-notch amenities.",
      },
      {
        name: "Emerald Heights Resort",
        maxCount: 20,
        phoneNumber: 5552468137,
        rentperday: 120,
        imageurls: ["https://seasidehotelvancouver.com/images/room-444.jpg"],
        currentbookings: [],
        type: "Delux",
        description: "A charming boutique hotel in a scenic location.",
      },
      {
        name: "Hanabi Ryokan (花火旅館)",
        maxCount: 40,
        phoneNumber: 5551357924,
        rentperday: 90,
        imageurls: [
          "https://symphony.cdn.tambourine.com/hotel-elkhart/media/qq-bed-straightview-6197b1b43f6e2.jpg",
        ],
        currentbookings: [],
        type: "Delux",
        description: "A modern hotel with stunning views of the city.",
      },
      {
        name: "Minami no Shima Ryokan (南の島旅館)",
        maxCount: 25,
        phoneNumber: 5556789012,
        rentperday: 110,
        imageurls: [
          "https://afar.brightspotcdn.com/dims4/default/a3055a8/2147483647/strip/false/crop/1500x1001+0+0/resize/1486x992!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2F9c%2Faf%2Fcf220f8fd93b8b503de9810d17c3%2Foriginal-nvc-160.jpg",
        ],
        currentbookings: [],
        type: "Delux",
        description: "An elegant hotel with excellent service.",
      },
      {
        name: "Shizuka Onsen Ryokan (静か温泉旅館)",
        maxCount: 15,
        phoneNumber: 5557890123,
        rentperday: 95,
        imageurls: [
          "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg",
        ],
        currentbookings: [],
        type: "Delux",
        description: "A historic hotel with charming architecture.",
      },
      {
        name: "Sakura View Hotel (桜ビューホテル)",
        maxCount: 35,
        phoneNumber: 5553214567,
        rentperday: 130,
        imageurls: [
          "https://hotelandra.com/wp-content/uploads/2022/01/Andra2483-Andra-Queen-Queen.jpg",
        ],
        currentbookings: [],
        type: "Non-Delux",
        description: "A resort-style hotel with a relaxing atmosphere.",
      },
    ];
    const insertedRooms = await roomModel.insertMany(rooms);
    console.log(`${insertedRooms.length} documents inserted`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected from the database");
  }
}

seedDb();
