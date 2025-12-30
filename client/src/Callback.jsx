import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Callback() {

  const [accessToken, setAccessToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");


     if (code) {
      fetch(`https://spotify-clone-server-veda.onrender.com/callback?code=${code}`)
        .then(res => res.json())
        .then(data => {
          console.log("TOKEN DATA:", data);

          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);

          // Clean URL
          window.history.replaceState({}, document.title, "/home");

          navigate("/home");
        });
    }
  }, []);

  return <div>Authenticating...</div>;
}
