import { axios } from '@/utils';

/**
 * Ví dụ tạo một function call api.
 * @param defaultValue
 * @returns
 *
 * ```tsx
 * export async function example(body: API.LoginPayload) {
 *   const resp = await axios.get(`/users/1`);
 *   return {
 *       data: resp?.data || {},
 *       success: resp?.code === 1,
 *       message: resp?.message
 *   };
 * }
 * ```
 */
export async function example(id: string) {
  const resp = await axios.get(`/users/${id}`);
  return {
    data: resp?.data || {},
  };
}

export async function login(payload: API.LoginPayload) {
  const resp = await axios.post(`/auth/login`, payload);
  return {
    data: resp?.data || {},
    code: resp.data?.code,
    message: resp.data?.message,
  };
}

export async function getMe() {
  const resp = await axios.get(`/auth/me`);
  return {
    data: resp?.data || {},
    code: resp.data?.code,
    message: resp.data?.message,
  };
  // return {
  //   "data": {
  //     "username": "hello",
  //     "email": "dvq2804@gmail.com",
  //     "permissions": [
  //        "user:deleteUser",
  //        "user:editUser",
  //        "user:createUser",
  //        "user:listUser"
  //      ],
  //     "role": {
  //        "id": 1,
  //        "name": "Admin"
  //     }
  //   },
  //   "code": 1,
  //   "message": "success"
  // }
}
