"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("qs"));
const cheerio_1 = __importDefault(require("cheerio"));
function Solve(appNo, day, month, year) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = qs_1.default.stringify({
            "_csrf-frontend": "Qg8sXy8NvkA68wvc6O19bbFTHYNmv8EiCu4oTAETcXx1O2IpSkaONWiGSZeAhTEq9CBZ5QvN82ZtvB94OFQ7MQ==",
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
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
                "Cache-Control": "max-age=0",
                Connection: "keep-alive",
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "advanced-frontend=nohs44dqg392h2dtnt0qio4pcs; _csrf-frontend=0b9346632bb6160d187f6aad61165951bd63215923b3ffc147832b502cddbb49a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22_csrf-frontend%22%3Bi%3A1%3Bs%3A32%3A%2274NveK0uRuBKhhLGEsDfmr2DgR749GJM%22%3B%7D",
                Origin: "null",
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "same-origin",
                "Sec-Fetch-User": "?1",
                "Upgrade-Insecure-Requests": "1",
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                "sec-ch-ua": '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Linux"',
            },
            data: data,
        };
        //request part
        const response = yield (0, axios_1.default)(config);
        const parsedData = parseHTML(JSON.stringify(response.data));
        if (parsedData) {
            console.log(parsedData);
        }
        else {
            console.log("Invalid Details");
        }
    });
}
function parseHTML(html) {
    const $ = cheerio_1.default.load(html);
    let data = $("div").text();
    const appNo = $('td:contains("Application No.")').next("td").text() || "N/A";
    const candidateName = $('td:contains("Candidate’s Name")').next().text().trim() || "N/A";
    const air = $('td:contains("NEET All India Rank")').next("td").text().trim() || "N/A";
    const marks = $('td:contains("Total Marks Obtained (out of 720)")')
        .first()
        .next("td")
        .text()
        .trim() || "N/A";
    console.log(appNo, candidateName, air, marks);
    if (air === "N/A")
        return null;
    return {
        appNo,
        candidateName,
        air,
        marks,
    };
}
Solve("240411183516", "08", "03", "2007");
