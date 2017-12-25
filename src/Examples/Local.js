import React, { Component } from 'react';
import { STATUS_CODES } from 'http';
//import app from "../data/ikcoe_application.json";

var faker = require('faker');

var student = {
    name: faker.name.findName()
}




const generate = (p1) => {
    var students = []

    for(let i = 0; i<=9; i++) {
        students.push({
            name: faker.name.findName()
        });
    }

    return students
}

const save = (data) => {
    let test_data = JSON.stringify(data);
    localStorage.setItem("test_data", test_data); }

const get = (id) => {
    var data = localStorage.getItem("test_data");
    let local_data = JSON.parse(data);

    if (local_data) {
        return local_data[id];
    }
    else return; }

const list = () => {
    var data = localStorage.getItem("test_data");
    let local_data = JSON.parse(data);
    if (local_data) {
        return local_data;
    }
    else return; }

//save(generate(10))

console.log(list())

class Local extends Component {
    render() {
        return (
            <div>
                <h1>{student.name}</h1>
            </div>
        );
    }
}

export default Local;