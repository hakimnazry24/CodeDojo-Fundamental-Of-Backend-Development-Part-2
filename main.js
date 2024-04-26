require("./lib/db")
const app = require("./lib/route");
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});

