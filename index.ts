import axios from "axios";
import qs from "qs";

async function Solve(appNo: string, day: string, month: string, year: string) {
  let data = qs.stringify({
    "_csrf-frontend":
      "Qg8sXy8NvkA68wvc6O19bbFTHYNmv8EiCu4oTAETcXx1O2IpSkaONWiGSZeAhTEq9CBZ5QvN82ZtvB94OFQ7MQ==",
    "Scorecardmodel[ApplicationNumber]": appNo,
    "Scorecardmodel[Day]": day,
    "Scorecardmodel[Month]": month,
    "Scorecardmodel[Year]": year,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://neet.ntaonline.in/frontend/web/scorecard/index",
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cache-Control": "max-age=0",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "advanced-frontend=nohs44dqg392h2dtnt0qio4pcs; _csrf-frontend=0b9346632bb6160d187f6aad61165951bd63215923b3ffc147832b502cddbb49a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22_csrf-frontend%22%3Bi%3A1%3Bs%3A32%3A%2274NveK0uRuBKhhLGEsDfmr2DgR749GJM%22%3B%7D",
      Origin: "null",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-User": "?1",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      "sec-ch-ua":
        '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Linux"',
    },
    data: data,
  };

  //request part
  const response = await axios(config);
  console.log(response.data);
}

Solve("240411183516", "08", "03", "2007");
