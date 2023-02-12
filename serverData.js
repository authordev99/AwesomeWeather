const http = require('http');
const data = [
  {
    id: 1,
    name: "Budapest",
    status: "Cloudy",
    temperature: 35,
    high: 37,
    low: 24,
    details: [
      { type: "wind", value: 4 },
      { type: "humidity", value: 50 },
      { type: "warm", value: 40 },
    ],
    daily: [
      {
        status: "cloudy",
        day: "THUR",
        date: "16 FEB",
        high: 32,
        low: 24
      },
      {
        status: "rain",
        day: "FRI",
        date: "17 FEB",
        high: 32,
        low: 24
      },
      {
        status: "snow",
        day: "SAT",
        date: "18 FEB",
        high: 32,
        low: 24
      },
      {
        status: "sun",
        day: "SUN",
        date: "19 FEB",
        high: 32,
        low: 24
      }
    ],
    flag: "https://www.countryaah.com/wp-content/uploads/2020/08/Flag-of-Hungary.jpg",
    background: "https://media.timeout.com/images/105879336/750/422/image.jpg",
  },
  {
    id: 2,
    name: "Tokyo",
    status: "Snow",
    temperature: 32,
    high: 40,
    low: 28,
    details: [
      { type: "wind", value: 4 },
      { type: "humidity", value: 40 },
      { type: "warm", value: 10 },
    ],
    daily: [
      {
        status: "partialCloudy",
        day: "THUR",
        date: "16 FEB",
        high: 29,
        low: 27
      },
      {
        status: "rain",
        day: "FRI",
        date: "17 FEB",
        high: 35,
        low: 29
      },
      {
        status: "rain",
        day: "SAT",
        date: "18 FEB",
        high: 32,
        low: 24
      },
      {
        status: "sun",
        day: "SUN",
        date: "19 FEB",
        high: 32,
        low: 24
      }
    ],
    flag: "https://media.istockphoto.com/id/1150921192/vector/japan-national-flag-vector-illustration-tokyo.jpg?s=612x612&w=0&k=20&c=WPsHEI3Oi__hY6F2QDZvx_htM_941osBro2NPGGzyd4=",
    background: "https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg",
  },
  {
    id: 3,
    name: "Kuala Lumpur",
    status: "Sun",
    temperature: 34,
    high: 37,
    low: 24,
    details: [
      { type: "wind", value: 4 },
      { type: "humidity", value: 50 },
      { type: "warm", value: 40 },
    ],
    daily: [
      {
        status: "cloudy",
        day: "THUR",
        date: "16 FEB",
        high: 32,
        low: 24
      },
      {
        status: "sun",
        day: "FRI",
        date: "17 FEB",
        high: 32,
        low: 24
      },
      {
        status: "partialCloudy",
        day: "SAT",
        date: "18 FEB",
        high: 32,
        low: 24
      },
      {
        status: "rain",
        day: "SUN",
        date: "19 FEB",
        high: 32,
        low: 24
      }
    ],
    flag: "https://media.istockphoto.com/id/694743900/vector/malaysian-flag-flat-layout-vector-illustration.jpg?s=612x612&w=0&k=20&c=cAJOiibhRJmiWJY5VbY4vQx3X4UdiZ4BDo84teMkb74=",
    background: "https://retailinasia.com/wp-content/uploads/2016/05/kuala-lumpur-mandarian-hotel.jpg",
  },
];


const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Accept", "application/json");
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
