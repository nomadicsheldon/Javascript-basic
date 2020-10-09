## Setting router in other files

1. create a new file (auth.js)

2. Making a router here

```
const router = express.Router(); // making router for effecting track of routes in other files as well
```

3. export this router

```
module.exports = router;
```

4. go to another file(index.js) and require the export

```
const authRouter = require("./routes/admin/auth");
```

5. Set this this as a middleware, and that's it

```
app.use(authRouter);
```

---
