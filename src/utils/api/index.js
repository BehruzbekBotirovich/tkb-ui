import axios from "axios";


const instanceApiV1 = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api/v1`,
})
const instanceApiV2 = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api/v2`,
})

export const api = ({url, open = false, ...props}) => {
    let token = localStorage.getItem("access_token") ?  `${localStorage.getItem("access_token")}` : null;
    if(token) token =  `Bearer ${token}`;
    if(!open){
        props.headers = {
            ...props.headers,
            Authorization: props.headers && props.headers.Authorization ? props.headers.Authorization : token
        }
    }
    if ("pk" in props && props.pk) {
        url = `${url}/${props.pk}`;
    }
    if(props.v === 'v2'){
        return instanceApiV2({
            url: url,
            ...props
        })
    }
    return instanceApiV1({
        url: url,
        ...props
    });
};


function createAxiosResponseInterceptor() {
    const interceptorV1 = instanceApiV1.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status !== 401) {
                return Promise.reject(error);
            }
            axios.interceptors.response.eject(interceptorV1);
            return refreshAccessToken(error);
        }
    );
    const interceptorV2 = instanceApiV2.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status !== 401) {
                return Promise.reject(error);
            }
            axios.interceptors.response.eject(interceptorV2);
            return refreshAccessToken(error);
        }
    );
}

function refreshAccessToken(error) {
    const refresh_token = localStorage.getItem("refresh_token");
    if (refresh_token) {
        return axios({
            url: `${import.meta.env.VITE_APP_BASE_URL}/api/v1/auth/token`,
            method: "POST",
            params:{
                refreshToken:  refresh_token,
                grantType: 'refresh_token'
            },
        })
            .then(({data}) => {
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("refresh_token", data.refresh_token);
                return axios({
                    ...error.response.config,
                    headers: {
                        ...error.response.config.headers,
                        Authorization: `Bearer ${data.access_token}`
                    }
                });
            })
            .catch((error2) => {
                if (error.response.status !== 401) {
                    return Promise.reject(error);
                }
                Clear();
            })
            .finally(createAxiosResponseInterceptor);
    }
    Clear();
    return Promise.reject("Error");
}

function Clear() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/";
    return null;
}

createAxiosResponseInterceptor();
