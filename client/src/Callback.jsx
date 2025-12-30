import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Callback() {

  const [accessToken, setAccessToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    // if (!code) {
    //   // code already used or missing, redirect to home
    //   navigate("/home");
    //   return;
    // }

    // if(!accessToken){
    //   fetch(`http://127.0.0.1:3000/callback?code=${code}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     setAccessToken(data.access_token);
    //     localStorage.setItem("access_token", data.access_token);
    //     localStorage.setItem("refresh_token", data.refresh_token);

    //     // Clean the URL so ?code=XXXX is removed
    //     window.history.replaceState({}, document.title, "/home");

    //     navigate("/home");
    //   });
    // }

    // async function getTokens() {
    //   try {
    //     const res = await fetch(`http://127.0.0.1:3000/callback?code=${code}`);
    //     const data = await res.json();

    //     if (!data.access_token) {
    //       navigate("/");
    //       return;
    //     }

    //     localStorage.setItem("access_token", data.access_token);
    //     localStorage.setItem("refresh_token", data.refresh_token);

    //     // remove ?code from URL
    //     window.history.replaceState({}, document.title, "/home");

    //     navigate("/home");
    //   } catch (err) {
    //     console.error(err);
    //     navigate("/");
    //   }
    // }

    // getTokens();

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
