import fetch from "node-fetch";
import cheerio from "cheerio";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.text();
  getPromoDeals(data);
}

fetchData(
  "https://www.amazon.fr/primeday?ref_=nav_cs_td_pd_dt_cr&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%2522deals-collection-computers%2522%252C%2522departments%2522%253A%255B%252213921051%2522%252C%2522340858031%2522%255D%252C%2522sorting%2522%253A%2522FEATURED%2522%257D"
);

function getPromoDeals(html) {
  const $ = cheerio.load(html);

  $(".DealContent-module__truncate_sWbxETx42ZPStTc9jwySW", html).each(
    function () {
      console.log($(this).text());
    }
  );
}
