if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const api_key = process.env.API_KEY;

app.get("/dinoname", async (request, response) => {
  const fetchApi = await fetch(
    "https://dinoipsum.com/api/?format=json&paragraphs=1&words=2",
    {
      method: "GET",
    }
  );
  const dinoNameResponse = await fetchApi.json();
  console.log(dinoNameResponse);
  response.json(dinoNameResponse);
});

app.get("/dinoimage", async (request, response) => {
  const url =
    "https://google-search72.p.rapidapi.com/imagesearch?q=dinosaur&gl=us&lr=lang_en&num=20&start=0";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
    },
  };

  const fetchApi = await fetch(url, options);
  const dinoImageResponse = await fetchApi.json();
  console.log(dinoImageResponse);
  response.json(dinoImageResponse);
});
