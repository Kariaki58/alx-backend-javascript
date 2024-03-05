import { uploadPhoto, createUser } from "./utils";

export default async function handleProfileSignup() {
    const response = await uploadPhoto()
    const response2 = await createUser()

    console.log(response.body, response2.firstName, response2.lastName)
}