import { createData } from "./Services/MaincategoryService";
import { put } from "redux-saga";

function createSaga(payload){
    var response = createData(payload)
}