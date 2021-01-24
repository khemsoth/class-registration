const MongoClient = require('mongodb').MongoClient
const express = require('express')
const app = express()
const Router = express.Router()
const url = 'mongodb://localhost:27017'
const dbName = 'class_registration'
const assert = require('assert')

module.exports = function(app) {

  app.get('/test', function(req, res) {
    res.send('apiRoutes test')
  })  
  
  app.get('/get/classes', function(req, res) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
      assert.strictEqual(null, err)
      const db = client.db(dbName)
      db.collection('classes').find().toArray(function(err, docs) {
        assert.strictEqual(null, err)
        res.send(docs)
      })
    })
  })

  app.get('/get/instructors', function(req, res) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
      assert.strictEqual(null, err)
      const db = client.db(dbName)
      db.collection('instructors').find().toArray(function(err, docs) {
        assert.strictEqual(null, err)
        res.send(docs)
      })
    })
  })

  app.get('/get/students', function(req, res) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
      assert.strictEqual(null, err)
      const db = client.db(dbName)
      db.collection('students').find().toArray(function(err, docs) {
        assert.strictEqual(null, err)
        res.send(docs)
      })
    })
  })
  

  app.post('/api/classes', function(req, res) {
    MongoClient.connect(url, { useUnifiedTopology: true }, async function(err, client) {
      assert.strictEqual(null, err)
      console.log(`Connected to DB ${dbName} successfully`)
      const db = client.db(dbName)
      let course = {
        title: req.body.title,
        prerequisites: req.body.prerequisites,
        capacity: req.body.capacity,
        course_no: req.body.course_no,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        location: req.body.location,
        instructor: req.body.instructor
      }
      await db.collection('classes').insertOne(course, function(err, res) {
        if(err) throw (err)
        console.log(`${course.title} inserted into db`)
      })
    })
    res.send('ok')
  })

  app.post('/api/instructors', function(req, res) {
    MongoClient.connect(url, { useUnifiedTopology: true }, async function(err, client) {
      assert.strictEqual(null, err)
      console.log(`Connected to DB ${dbName} successfully`)
      const db = client.db(dbName)
      let instructor = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        instructor_id: req.body.instructor_id,
        email: req.body.email,
        phone: req.body.phone
      }
      await db.collection('instructors').insertOne(instructor, function(err, res) {
        if(err) throw (err)
        console.log(`${instructor.first_name} ${instructor.last_name} inserted into db`)
      })
    })
    res.send('ok')
  })

  app.post('/api/students', function(req, res) {
    MongoClient.connect(url, { useUnifiedTopology: true }, async function(err, client) {
      assert.strictEqual(null, err)
      console.log(`Connected to DB ${dbName} successfully`)
      const db = client.db(dbName)
      let student = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        student_id: req.body.student_id,
        email: req.body.email,
        gpa: req.body.gpa,
        classes_taken: req.body.classes_taken
      }
      await db.collection('students').insertOne(student, function(err, res) {
        if(err) throw (err)
        console.log(`${student.first_name} ${student.last_name} inserted into db`)
      })
    })
    res.send('ok')
  })


}