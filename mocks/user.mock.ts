import { MockMethod } from 'vite-plugin-mock';

export default [
    {
        url: '/api/users',
        method: 'get',
        response: () => ({
            code: 0,
            data: [{ name: "John Doe" }, { name: "Jane Roe" }],
        }),
    },
    // 其他针对用户的接口
] as MockMethod[];
