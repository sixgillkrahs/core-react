import { axios } from "@/utils";

export async function listUser(page: number = 1, size: number = 10) {
    const resp = await axios.get(`/user?page=${page}&size=${size}`);
    return {
        data: resp?.data || {},
        code: resp.data?.code,
        message: resp.data?.message,
    };
}