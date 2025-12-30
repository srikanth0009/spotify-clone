import express from "express";
import axios from "axios";
import cors from "cors";
import qs from "qs";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

app.get("/login", (req, res) => {
  const redirect_uri = " https://spotify-clone-henna.vercel.app/callback";
 

  const scope = [
    "user-read-private",
    "user-read-email",
    "user-top-read",
    "playlist-read-private",
    "user-library-modify",
    "user-library-read",
    "playlist-read-collaborative",
    "streaming",
    "user-read-playback-state",
    "user-modify-playback-state"
  ].join(" ");

  const authUrl = 
    "https://accounts.spotify.com/authorize?" +
    new URLSearchParams({
      client_id: process.env.CLIENT_ID,
      response_type: "code",
      redirect_uri,
      scope
    });

  res.redirect(authUrl);
});


app.get("/callback", async (req, res) => {
  const code = req.query.code;

  const tokenUrl = "https://accounts.spotify.com/api/token";

  const data = qs.stringify({
    grant_type: "authorization_code",
    code,
    redirect_uri: "http://127.0.0.1:5173/callback"
  });

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic " +
      Buffer.from(
        process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
      ).toString("base64"),
  };

  try {
    const response = await axios.post(tokenUrl, data, { headers });
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: "Auth failed", details: error });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));

