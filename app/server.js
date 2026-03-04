const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let jobs = [];
let nextId = 1;

const statusColors = {
  Applied: 'badge-blue',
  Interview: 'badge-orange',
  Offer: 'badge-green',
  Rejected: 'badge-red'
};

app.get('/', (req, res) => {
  const { status } = req.query;
  let filteredJobs = jobs;
  let selectedStatus = status || '';
  if (status) {
    filteredJobs = jobs.filter(j => j.status === status);
  }
  res.render('index', { jobs: filteredJobs, statusColors, selectedStatus });
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const { company, role, status, dateApplied } = req.body;
  jobs.push({
    id: nextId++,
    company,
    role,
    status,
    dateApplied
  });
  res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
  const job = jobs.find(j => j.id === parseInt(req.params.id));
  if (!job) return res.redirect('/');
  res.render('edit', { job });
});

app.post('/edit/:id', (req, res) => {
  const job = jobs.find(j => j.id === parseInt(req.params.id));
  if (job) {
    job.company = req.body.company;
    job.role = req.body.role;
    job.status = req.body.status;
    job.dateApplied = req.body.dateApplied;
  }
  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  jobs = jobs.filter(j => j.id !== parseInt(req.params.id));
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Job Application Tracker running on port ${PORT}`);
});
