export const getImageWeatherStatus = (status) => {
  switch (status.toLowerCase()) {
    case "wind":
      return require("../images/wind.png")
    case "sun":
      return require("../images/sun.png")
    case "cloudy":
      return require("../images/cloudy.png")
    case "partialCloudy":
      return require("../images/partialCloudy.png")
    case "humidity":
      return require("../images/drop.png")
    case "warm":
      return require("../images/umbrella.png")
    case "snow":
      return require("../images/snowflake.png")
    case "rain":
      return require("../images/rainy.png")
    default:
      return require("../images/cloudy.png")
  }
}
