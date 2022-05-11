import axios from "axios";
import { takeEvery } from 'redux-saga/effects'

const Axios = axios.create({
    withCredentials: true
})

function* registration({ data }) {
    yield Axios.post("http://localhost:4000/registration", { data: data })
}

function* ookk(){
    yield Axios.post("http://localhost:4000/okay")
}

function* login({data}){
    yield Axios.post("http://localhost:4000/login", { data: data })
}
export function* rootSaga() {
    yield takeEvery('signin', registration)
    yield takeEvery('barev' , ookk)
    yield takeEvery('login' , login)

}