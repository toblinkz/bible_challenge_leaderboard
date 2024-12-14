import { createFetch } from '@vueuse/core';
import { request } from 'http'

const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;

export const useApiFetch = createFetch({
    baseUrl: baseUrl,
    combination: 'overwrite',
    options: {
        beforeFetch({url, options, cancel}){
        
            if(options.method === 'POST' || options.method === 'PATCH'){
                options.headers = {
                    'Content-Type': 'application/json',
                }
            }

            options.headers = {
                'Content-Type': 'application/json',
                
                ...options.headers,
            }

            return { options}
        },

        onFetchError(error){
            let status = error.response?.status;
            let unauthorized = localStorage.getItem('unauthorized') || 'false';
            if (status == 400) {
                try {
                    let errorData = JSON.parse(error.data);
                    if(typeof errorData == "object"){
                 
                    }   
                    
                } catch(e){
                   
                }
                
            }
            else if (status == 401){
               
            } 
            else if(status == 500){
       
            }

            return error
            
        }
    },
    fetchOptions: {
        mode: 'cors'
    }
})

export const parseDataFromApi = (data: any) => {
    return JSON.parse(data.value || '[]') as unknown as object[]
}



