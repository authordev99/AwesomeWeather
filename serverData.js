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
        status: "sun",
        day: "WED",
        date: "15 FEB",
        high: 32,
        low: 24
      },
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
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_Budapest_%282011-%29.svg/800px-Flag_of_Budapest_%282011-%29.svg.png",
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
        status: "cloudy",
        day: "WED",
        date: "15 FEB",
        high: 28,
        low: 22
      },
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
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    background: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
  },
  {
    id: 3,
    name: "Malaysia",
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
        status: "rain",
        day: "WED",
        date: "15 FEB",
        high: 32,
        low: 24
      },
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
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Malaya.svg/1280px-Flag_of_Malaya.svg.png",
    background: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/The_Twins_SE_Asia_2019_%2849171985716%29.jpg/640px-The_Twins_SE_Asia_2019_%2849171985716%29.jpg",
  },
];


const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
