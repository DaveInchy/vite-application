import Axios from "axios";

const env = import.meta.env;
const publicKey = env["PUBLIC_KEY"];

export const getAuthToken = async (): Promise<string> => {
    const endpoint = dbConfig.api.endpoints.auth[0];
    const query = "/public/key";
    publicKey ? () => console.log(`${import.meta.env['USER']} is using ${publicKey}`) : null;
    const result: any = await Axios.get(dbConfig.host + endpoint.path + endpoint.action + query, {
        headers: generateAuthHeaders(publicKey),
    }).then(response => JSON.parse(JSON.stringify(response.data)));
    return result.bearer?.toString();
}

export const dbConfig = {
    "host": "https://mongodb-rest.vercel.app",
    "api": ({
        "endpoints": ({
            "auth": [
                {
                    "method": "GET",
                    "bearer": false,
                    "path": "/api/auth/",
                    "action": "signin",
                    "params": [
                        ":action",
                        ":username",
                        ":password"
                    ],
                },
                {
                    "method": "GET",
                    "bearer": false,
                    "path": "/api/auth/",
                    "action": "signup",
                    "params": [
                        ":action",
                        ":username",
                        ":email",
                        ":password"
                    ],
                }
            ],
            "data": [
                {
                    "method": "POST",
                    "bearer": true,
                    "path": "/api/database/",
                    "action": "create",
                    "params": [
                        ":collection",
                        ":action",
                        ":id"
                    ],
                },
                {
                    "method": "GET",
                    "bearer": true,
                    "path": "/api/database/",
                    "action": "read",
                    "params": [
                        ":collection",
                        ":action",
                        ":id"
                    ]
                },
                {
                    "method": "POST",
                    "bearer": true,
                    "path": "/api/database/",
                    "action": "update",
                    "params": [
                        ":collection",
                        ":action",
                        ":id"
                    ],
                },
                {
                    "method": "GET",
                    "bearer": true,
                    "path": "/api/database/",
                    "action": "delete",
                    "params": [
                        ":collection",
                        ":action",
                        ":id"
                    ]
                }
            ]
        })
    }),
}

export const generateAuthHeaders = (bearer: string) => {
    return new Axios.AxiosHeaders({
        "Bearer": `${bearer}`,
        "Accept": "application/json",
    });
}

export default dbConfig;