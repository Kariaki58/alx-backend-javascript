import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser () {
  const response1 = await uploadPhoto();
  const response2 = await createUser();
  return {
    photo: response1 || null,
    user: response2 || null,
  };
}
