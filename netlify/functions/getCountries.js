// netlify/functions/getCountries.js
//
// Handles THREE cases from your frontend, all going through one function
// so process.env.api_key never has to leave the server:
//
//   /.netlify/functions/getCountries                → all countries (script.js restApiCaller)
//   /.netlify/functions/getCountries?region=asia     → by region      (script.js regionFilter)
//   /.netlify/functions/getCountries?code=USA        → by alpha_3 code (countryInfo.js border lookup)

export default async (req, context) => {
    const apiKey = process.env.api_key;

    const url = new URL(req.url);
    const region = url.searchParams.get("region");
    const code = url.searchParams.get("code");

    let upstreamUrl;
    if (code) {
        // matches: https://api.restcountries.com/countries/v5/codes.alpha_3/${element}
        upstreamUrl = `https://api.restcountries.com/countries/v5/codes.alpha_3/${code}`;
    } else if (region) {
        upstreamUrl = `https://api.restcountries.com/countries/v5?region=${region}&limit=100`;
    } else {
        upstreamUrl = `https://api.restcountries.com/countries/v5?limit=100`;
    }

    try {
        const response = await fetch(upstreamUrl, {
            headers: {
                // NOTE: confirm raw key vs "Bearer <key>" against the API docs,
                // then keep this consistent everywhere.
                'Authorization': `Bearer ${apiKey}`
            }
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(
            JSON.stringify({ error: "Failed to fetch countries", details: err.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};
