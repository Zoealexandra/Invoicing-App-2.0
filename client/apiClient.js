import request from 'superagent'

export const BASE_ROUTE = '/api/v1/invoices'
export const INVOICES_ROUTE = BASE_ROUTE + '/getAllInvoices'

// aPI call to get all invoices
export function getAllInvoices () {
  return request.get(`${INVOICES_ROUTE}/`)
    .then(res => {
      return groupByInvoice(res.body, 'id')
    })
}

//function to sort invoices by invoice number
function groupByInvoice(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  },{})
}