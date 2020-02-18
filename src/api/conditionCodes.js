export default function conditionCode(code) {
  switch (code) {
    case 0:
      return "tornado";
    case 1:
      return "tropical storm";
    case 2:
      return "hurricane";
    case 3:
      return "severe thunderstorms";
    case 4:
      return "thunderstorms";
    case 5:
      return "mixed rain and snow";
    case 6:
      return "mixed rain and sleet";
    case 7:
      return "mixed snow and sleet";
    case 8:
      return "freezing drizzle";
    case 9:
      return "drizzle";
    case 10:
      return "freezing rain";
    case 11:
      return "showers";
    case 12:
      return "rain";
    case 13:
      return "snow flurries";
    case 14:
      return "light snow showers";
    case 15:
      return "blowing snow";
    case 16:
      return "snow";
    case 17:
      return "hail";
    case 18:
      return "sleet";
    case 19:
      return "dust";
    case 20:
      return "foggy";
    case 21:
      return "haze";
    case 22:
      return "smoky";
    case 23:
      return "blustery";
    case 24:
      return "windy";
    case 25:
      return "cold";
    case 26:
      return "cloudy";
    case 27:
      return "mostly cloudy (night)";
    case 28:
      return "mostly cloudy (day)";
    case 29:
      return "partly cloudy (night)";
    case 30:
      return "partly cloudy (day)";
    case 31:
      return "clear (night)";
    case 32:
      return "sunny";
    case 33:
      return "fair (night)";
    case 34:
      return "fair (day)";
    case 35:
      return "mixed rain and hail";
    case 36:
      return "hot";
    case 37:
      return "isolated thunderstorms";
    case 38:
      return "scattered thunderstorms";
    case 39:
      return "scattered showers (day)";
    case 40:
      return "heavy rain";
    case 41:
      return "scattered snow showers (day)";
    case 42:
      return "heavy snow";
    case 43:
      return "blizzard";
    case 44:
      return "not available";
    case 45:
      return "scattered showers (night)";
    case 46:
      return "scattered snow showers (night)";
    case 47:
      return "scattered thundershowers";
    default:
      return "not found";
  }
}
