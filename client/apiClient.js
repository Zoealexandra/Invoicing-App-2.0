import request from 'superagent'

export const BASE_ROUTE = '/api/v1/invoices'
export const INVOICES_ROUTE = BASE_ROUTE + '/getAllInvoices'

export function getAllInvoices () {
  return request.get(`${INVOICES_ROUTE}/`)
    .then(res => res.body)
}