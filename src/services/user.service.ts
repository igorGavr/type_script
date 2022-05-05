import {AxiosResponse} from "axios";

import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IUser} from "../interfaces";

type Res<T> = Promise<AxiosResponse<T>>

const userService = {
    getAll: (): Res<IUser[]> => axiosService.get(urls.users)
}

export {
    userService
}