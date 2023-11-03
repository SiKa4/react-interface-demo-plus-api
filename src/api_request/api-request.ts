import axios from "axios";

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

    public GetInfoAboutFilialById(id: number) {
        return axios.get(this.mainUrl + `filial/${id}/menu/`)
            .then(response => {
                const data = response.data;
                return data as {
                    max_pages: number,
                    data: {
                        id: number,
                        name: string,
                        filial: {
                            id: number,
                            name: string,
                        }
                        tt: {
                            id: number,
                            name: string
                        },
                        active: boolean,
                        export: string[]
                    }[]
                }[]
            })
            .catch(() => {
                return null;
            });
    }
}

export const apiRequest = new ApiRequest();
