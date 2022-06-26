const express = require('express');
const app = express();

let studentDatabase = {
    1: {
        name: 'kurt',
        age: 19,
    },
    2: {
        name: 'bea',
        age: 17
    },
    3: {
        name: 'jasper',
        age: 21
    }
}

// Student Router
const studentRouter = express.Router();

// Student Params
studentRouter.param('id', (req, res, next, id) => {
    const studentID = studentDatabase[id];
    if (studentID) {
        req.studentid = studentID;
        next()
    } else {
        res.sendStatus(404)
    }
});

// Student Method
studentRouter.get('/', (req, res, next) => {
    res.send(studentDatabase);
});

studentRouter.get('/:id', (req, res, next) => {
    res.send(req.studentid);
});

studentRouter.post('/', (req, res, next) => {
    try {
        const lastObj = Object.keys(studentDatabase).pop();
        const newID = Number(lastObj) + 1;
        studentDatabase[newID] = {
            name: req.body.name, age: req.body.age
        }
        res.send('Created successfully')
    } catch (err) {
        console.log(err)
    }
});

studentRouter.put('/:id', (req, res, next) => {
    try {
        if (req.studentid.name && req.studentid.age) {
            req.studentid.name = req.query.name;
            req.studentid.age = req.query.age;
            res.send('Update successfully')  
        } else {
            res.sendStatus(400)
        }
    } catch (err) {
        console.log(err);
    }

});

studentRouter.delete('/:id', (req, res, next) => {
    try {
        const deleteData = delete studentDatabase[req.params.id];
        if (deleteData) {
            res.sendStatus(202)
        } else {
            res.sendStatus(204)
        }
    } catch (err) {
        console.log(err)
    }
    
});

// Student Router Exporting
module.exports = studentRouter;