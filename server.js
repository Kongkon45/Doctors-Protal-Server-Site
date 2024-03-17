const app = require("./app");
const config = require("./config/config");
const PORT = config.app.port || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running successfully at http://localhost:${PORT}`);
});
