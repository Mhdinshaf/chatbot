const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-goog-api-key", "AIzaSyClXqBWKf7ban0H-0B6o1isDrREx5fRwto");

const raw = JSON.stringify({
  "contents": [
    {
      "parts": [
        {
          "text": "Explain how AI works in a few words"
        }
      ]
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));