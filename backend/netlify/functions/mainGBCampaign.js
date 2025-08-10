// // netlify/functions/getCampaigns.js

// const fetch = require('node-fetch');

// exports.handler = async function(event, context) {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer 6622|3yX9DFPHvaPsZIihooqvlJLoLz7ttbzuMwcY5BXl'
//     }
//   };

//   try {
//     const response = await fetch('https://api.givebutter.com/v1/campaigns', options);

//     if (!response.ok) {
//       return {
//         statusCode: response.status,
//         body: JSON.stringify({ error: `Failed to fetch campaigns: ${response.statusText}` })
//       };
//     }

//     const data = await response.json();

//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//       headers: {
//         "Access-Control-Allow-Origin": "*", // Adjust CORS as needed
//         "Content-Type": "application/json"
//       }
//     };

//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };
