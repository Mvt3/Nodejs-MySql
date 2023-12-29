import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoute from "./routes/index.routes.js"


const app = express();


app.use(express.json())
 
app.use(indexRoute)
app.use("/api",employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'URL not found'
    })
})

export default app;