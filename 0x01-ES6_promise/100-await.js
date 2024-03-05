import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser () {
  const response1 = await uploadPhoto();
  const response2 = await createUser();
  return {
    photo: response1,
    user: response2
  };
}
