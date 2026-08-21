// netlify/functions/getCountries.js
//
// This is your two original fetch() calls from script.js, moved here so
// they run on Netlify's server instead of in the browser. That's the ONLY
// reason this file exists: process.env.api_key only resolves server-side.
//
// Original call #1 (restApiCaller, no region):
//   fetch('https://api.restcountries.com/countries/v5?limit=100', ...)
//
// Original call #2 (regionFilter listener, with region):
//   fetch(`https://api.restcountries.com/countries/v5?region=${e.target.value}&limit=100`, ...)
//
// Both are the same endpoint, just with an optional ?region= param.
// So instead of two functions, this one function handles both cases,
// depending on whether the browser sends a region.

export default async (req, context) => {
    // this is the equivalent of your Netlify dashboard's api_key value
    const apiKey = process.env.api_key;

    // read ?region=... off the request THIS function receives from your browser
    // e.g. browser calls /.netlify/functions/getCountries?region=asia
    const url = new URL(req.url);
    const region = url.searchParams.get("region");

    // rebuild the exact same URL your original script.js was building
    const upstreamUrl = region
        ? `https://api.restcountries.com/countries/v5?region=${region}&limit=100`   // = call #2
        : `https://api.restcountries.com/countries/v5?limit=100`;                     // = call #1

    // this is your original fetch(), just running here instead of in script.js
    const response = await fetch(upstreamUrl, {
        headers: {
            // NOTE: your original two calls disagreed on this format
            // (raw key vs "Bearer <key>"). Confirm the correct one in your
            // API's docs, then make sure this matches.
            'Authorization': apiKey
        }
    });

    const data = await response.json();

    // send the JSON back to script.js, same as data.json() did originally
    return new Response(JSON.stringify(data), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
    });
};
