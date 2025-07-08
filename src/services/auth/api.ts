import { axios } from "@/utils";



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
