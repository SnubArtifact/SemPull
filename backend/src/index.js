const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/mongoconfig');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const app = express();
const groupRoutes = require('./routes/groupCreate');
const yourGroupsRoutes = require('./routes/yourGroups');
const groupFetchRoutes = require('./routes/groupFetch');


dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB


//Middlewares
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json()); // Parse incoming JSON




//Routes
app.use('/api/auth', authRoutes);
app.use('/api/groupCreate', groupRoutes);
app.use('/api/yourGroups', yourGroupsRoutes);
app.use('/api/groupFetch', groupFetchRoutes);



//Starting server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));





