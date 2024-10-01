import { put, takeEvery } from "redux-saga/effects"
import {createData, deleteData, getData, updateData} from "./Services/MaincategoryService"
import { ADD_MAINCATEGORY, ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Constant"
function* createSaga(payload){
    var response = yield createData(payload)
    put({type : ADD_MAINCATEGORY_RED, payload : response})
}

function* getSaga(){
    var response = yield getData()
    put({type : GET_MAINCATEGORY_RED, payload : response})
}

function* updateSaga(payload){
    var response = yield updateData(payload)
    put({type : UPDATE_MAINCATEGORY_RED, payload : response})
}

function* deleteSaga(payload){
    yield deleteData(payload)
    put({type : DELETE_MAINCATEGORY_RED,payload})
}

export default function* maincategorySaga(){
    yield takeEvery(ADD_MAINCATEGORY,createSaga),
    yield takeEvery(GET_MAINCATEGORY,getSaga),
    yield takeEvery(UPDATE_MAINCATEGORY,updateSaga),
    yield takeEvery(DELETE_MAINCATEGORY,deleteSaga)
}