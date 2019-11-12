
// GET Route
app.get('/reg', (req, res, next) => {
  res.render('form')
})
// POST Route
app.post('/reg', (req, res) => {
  // console.log("Form has been posted")
  console.log('body', req.body)
  console.log('Query Params', req.query)
// res.send(req.body)   
})

// Submit Route
app.post('/submit', (req, res) => {
  // res.send("Hello " + req.body.firstname)
  res.render('form_data', {
    fname: req.body.firstname,
    lname: req.body.lastname,
    email: req.body.emailaddress,
    gender: req.body.gender,
    country: req.body.country,
    city: req.body.city,
    password: req.body.password
  })
})

app.get('/index', (req, res) => {
  res.render('index')
})
app.get('/data', (req, res) => {
  res.render('form_data')
})

