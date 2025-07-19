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

export async function login(payload: any) {
  const resp = await axios.post(`/auth/login`, payload);
  return {
    data: resp?.data || {},
    code: resp.data?.code,
    message: resp.data?.message,
  };
}

export async function me() {
  const resp = await axios.post(`/auth/me`);
  return {
    data: resp?.data || {},
    code: resp.data?.code,
    message: resp.data?.message,
  };
}
