const app = require('./src/app')
const port = 3000
const msg = `Example app listening on port ${port}!`

app.listen(port, () => console.log(msg))
