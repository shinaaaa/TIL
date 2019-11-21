const express = require('express')
const app = express()
app.use(express.json())

const helmet = require('helmet')
app.use(helmet())

const Joi = require('@hapi/joi')

function validate(input) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(10).required(),
        email: Joi.string().email().required(),
        birthDay: Joi.date().less('01-01-2000')
    })
    return schema.validate(input)
}

const courses = [
    { id: 1, name: '홍길동', email: 'hong@naver.com', birthDay: '01-01-1980' },
    { id: 2, name: '이순신', email: 'lee@naver.com', birthDay: '01-01-1990' },
    { id: 3, name: '유관순', email: 'you@naver.com', birthDay: '01-01-1980' },
]

app.get('/', (req, res) => {
    res.send('해피해킹')
})

app.get('/api/course', (req, res) => {
    res.send(courses)
})

app.get('/api/course/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const course = courses.find(el => el.id === id)
    if (!course) {
        res.status(404).send('해당하는 코스가 없습니다.')
    } else {
        res.send(course)
    }
})
app.post('/api/course', (req, res) => {

    const { value, error } = validate(req.body);
    if (error) {
        res.send(error.details[0].message)
        return
    }
    console.log(courses[courses.length - 1]);


    const course = {
        id: courses[courses.length - 1].id + 1,
        name: value.name,
        email: value.email,
        birthDay: value.birthDay,
    }
    courses.push(course)
    res.send(courses)
})

app.patch('/api/course/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const course = courses.find(el => el.id === id)
    if (!course) {
        res.send('해당하는 데이터가 없습니다.')
    } else {
        const name = req.body.name
        course.name = name
        res.send(course)
    }
})

app.delete('/api/course/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const course = courses.find(el => el.id === id)
    if (!course) {
        res.send('해당하는 데이터가 없습니다.')
    } else {
        const index = courses.indexOf(course)
        courses.splice(index, 1)
        res.send(course)
    }
})

app.listen(3000, () => console.log('Listening on port 3000....')
);