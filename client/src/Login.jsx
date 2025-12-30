export default function Login() {

  const handleLogin = () => {
    window.location.href = "https://spotify-clone-server-veda.onrender.com/login";
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={handleLogin} className="bg-green-500 text-white p-4 rounded">
        Login with Spotify
      </button>
    </div>
  );
}
