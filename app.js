const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("./db");

const mapToObj = (m) => {
    return Array.from(m).reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
  };

const app = express();

app.use(express.json());


app.get('/app/taches', (req, res) => {
    res.json(mapToObj(db.memoryDb));
  })
  
  app.get('/app/tache/:id', (req, res) => {
    let id = parseInt(req.params.id)
    res.json(db.memoryDb.get(id));
  })
  
  app.post('/app/taches', (req, res) => {
    const payload = req.body;
    db.memoryDb.set(db['id']++, payload);
    res.status(201).json(payload);
  })
  
  app.put('/app/tache/:id', (req, res) => {
    let id = parseInt(req.params.id)
    const payload = req.body;
    db.memoryDb.set(id, payload);
    res.status(204).send();
  })

  app.delete('/app/tache/:id', (req, res) => {
    let id = parseInt(req.params.id)
    const payload = req.body;
    db.memoryDb.set(id, payload);
    res.status(204).send();
  })


module.exports = app;