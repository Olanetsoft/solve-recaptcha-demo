const Captcha = require("2captcha");
const axios = require("axios");

// Get access to solver by passing your api key
const captchaSolver = new Captcha.Solver("YOUR_API_KEY");

// Bypass Captcha function
const bypassCaptcha = async () => {
  console.log("Waiting for response...");

  // Send the captcha solution to the server
  try {
    // Get the captcha image and solve it using 2Captcha
    const { data } = await captchaSolver.hcaptcha(
      "f5561ba9-8f1e-40ca-9b5b-a0b3f719ef34",
      "https://discord.com/register"
    );

    let response = await axios.post(
      "https://discord.com/api/v9/auth/register",
      {
        captcha_key: data,
        consent: true,
        date_of_birth: "1995-06-04",
        email: "testnewmail22@gmail.com",
        fingerprint: "892890553807699989.RrSzl_XX1W9EjtTtvu6v-hIRTww",
        gift_code_sku_id: null,
        invite: null,
        password: "testMail12345",
        promotional_email_opt_in: false,
        username: "testMail12",
      }
    );

    // Print the response
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

// Run the function
bypassCaptcha();
