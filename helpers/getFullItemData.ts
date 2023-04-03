import api from "./api"

interface Item {
    senderCEP: string,
    receiverCEP: string,
    from: string,
    to: string
}

const getFullItemData = async (item: Item) => {
    const senderCEP = item.senderCEP
    const receiverCEP = item.receiverCEP
    const from = await api.get(`/${senderCEP}/json`)
    if(!from.data.erro === true) item.from = from.data
    else item.from = "Invalid CEP!"
     
    const to = await api.get(`/${receiverCEP}/json`)
    if(!to.data.erro === true) item.to = to.data
    else item.to = "Invalid CEP!"

    return item
}

export default getFullItemData