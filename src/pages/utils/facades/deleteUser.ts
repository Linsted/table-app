import axios from "axios";

import { URL } from "../constants";

export const deleteUser = (id: string) => axios.delete(`${URL}/${id}`);
