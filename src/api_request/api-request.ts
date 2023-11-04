import axios from "axios";
import {BodyData, BodyParams} from "../data/Types.ts";

class ApiRequest {
    mainUrl = "https://testjob.checkport.ru/";

    public GetAllFilial() {
        return axios.get(this.mainUrl + 'filial/')
            .then(response => {
                const data = response.data;
                return data as {
                    id: number,
                    name: string
                }[]
            })
            .catch(() => {
                return null;
            });
    }

    public GetInfoAboutFilialById(id: number, params: BodyParams) {
        return axios.get(this.mainUrl + `filial/${id}/menu/`, {params})
            .then(response => {
                const data = response.data;
                return data as BodyData;
            })
            .catch(() => {
                return null;
            });
    }
}

export const apiRequest = new ApiRequest();
