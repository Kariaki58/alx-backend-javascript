export default function handleResponseFromAPI(promise) {
  promise.then(data => {
   return {status: 200, body: 'success'}
  })
  .catch(err => new Error())
  .finally(() => console.log("Got a response from the API"))
}