module.exports = {
  name: "Coastal Edge Landscaping",
  email: "info@coastaledgelandscaping.com.au",
  phoneForTel: "0412345678",
  phoneFormatted: "0412 345 678",
  address: {
    lineOne: "12 Coastal Drive",
    lineTwo: "Mermaid Waters",
    city: "Gold Coast",
    state: "QLD",
    zip: "4218",
    country: "AU",
    mapLink: "https://maps.app.goo.gl/xxxx",
  },
  socials: {
    facebook: "https://www.facebook.com/coastaledgelandscaping",
    instagram: "https://www.instagram.com/coastaledgelandscaping",
  },
  domain: "https://www.coastaledgelandscaping.com.au",
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
