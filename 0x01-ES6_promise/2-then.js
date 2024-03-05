export default function handleResponseFromAPI(promise) {
  promise.then(data => {
    console.log("Got a response from the API")
    if (data === undefined) {
      return new Error()
    }
   return {status: 200, body: 'success'}
  })
}