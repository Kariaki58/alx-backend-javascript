import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let json = {}
  try {
    const response1 = await uploadPhoto();
    const response2 = await createUser();
    json = {
      photo: response1,
      user: response2,
    }
  } catch (err) {
    json = {
      photo: null,
      user: null,
    }
  } finally {
    return json
  }
}
