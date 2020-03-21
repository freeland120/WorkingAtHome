import app from "./app";

const PORT = 3000;

const handleListening = () => {
  console.log(`${PORT} Server ready...✅`);
};

app.listen(PORT, handleListening);
