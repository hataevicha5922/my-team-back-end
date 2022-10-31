const express = require('express');
const cors = require('cors');
const multer = require('multer');
const db = require('./models');
const checkAuth = require('./utils/checkAuth');

const app = express();
const PORT = process.env.PORT || 5000;

const authRoute = require('./routes/Auth');
const usersRoute = require('./routes/Users');
const playersRoute = require('./routes/Players');
const teamsRoute = require('./routes/Teams');
const positionsRoute = require('./routes/Positions');
// const uploadRoute = require('./routes/Uploads');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/uploads', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.use(express.json());

const corsOptions = {
  origin: 'https://vercel.com/hataevicha5922/my-team-front-end',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/uploads', cors(corsOptions), express.static('uploads'));

app.use('/auth', cors(corsOptions), authRoute);
app.use('/users', cors(corsOptions), usersRoute);
app.use('/players', cors(corsOptions), playersRoute);
app.use('/teams', cors(corsOptions), teamsRoute);
app.use('/position', cors(corsOptions), positionsRoute);
// app.use('/upload', uploadRoute);

db.Users.belongsTo(db.Teams);
db.Teams.hasOne(db.Users);
db.Teams.hasMany(db.Players);
db.Players.belongsTo(db.Teams);
db.Positions.hasMany(db.Players);

db.sequelize.sync().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Server OK');
  });
});
