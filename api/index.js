import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`,
      {
        params: {
          latitude: "9.672948",
          longitude: "123.873002",
          limit: "30",
          currency: "USD",
          distance: "2",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "77919d1af6msha3672cdce8b1834p1784e1jsn6966e9768ff0",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    return null;
  }
};
