import axios from "axios"


export const getVideo = async () => {
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/playlist/videos/",
    params: {
      id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr",
      hl: "en",
      gl: "US",
    },
    headers: {
      "x-rapidapi-key": "c378d16cd2msh888095c9d837338p17eb1ajsnca927d51c7ba",
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


export const getPlayList = async()=>{
const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/playlist/details/',
  params: {
    id: 'PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'x-rapidapi-key': 'c378d16cd2msh888095c9d837338p17eb1ajsnca927d51c7ba',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

