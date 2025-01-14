export async function createData(data){
    var response = await fetch("/maincategory",{
        method : 'post',
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(payload)
    })
    return await response.json()
}

export async function getData(){
    var response = await fetch("/maincategory",{
        method:'get',
        headers : {
            "content-type" : "application/json"
        }
    })
    return await response.json()
}

export async function updateData(payload){
    var response = await fetch(`/maincategory/${payload.id}`,{
        method : 'put',
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(payload)
    })
    return await response.json(payload)
}

export async function deleteData(payload){
    var response = await fetch(`maincategory/${payload.id}`,{
        method : "delete",
        headers : {
            "content-type" : "appliction.json"
        }
    })
    return await response.json()
}