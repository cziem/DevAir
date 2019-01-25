require('./config/config')

const express         = require('express'),
     mongoose        = require('mongoose'),
     cors            = require('cors'),
     bodyParser      = require('body-parser')

/* DECLARE APP BINDINGS HERE */
const app    =  express(),
     port   =   process.env.PORT,
     uri    =   process.env.MONGODB_URI,
     secret =   process.env.APP_SECRET

/* REQUIRE CUSTOM MODULES HERE */
const airRoutes = require('./routes/route')


/* START DB CONNECTION */
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true
}).then(() => console.log(`Connected to DB @: ${uri}`))
  .catch(err => console.log(`Could not connect to DB. Please refer to Error: ${err.message}`))

/* ALL APP.USE() CALLS HERER */
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))


/* APPLICATION ROUTES HERE */
app.use('/*', airRoutes)

app.listen(port, () => console.log(`DevAir running on port localhost://${port}`))