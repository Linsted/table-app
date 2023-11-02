import axios from "axios";

import { URL } from "../constants";

export const fetchUsers = async () => {
  const { data } = await axios.get(URL);

  return data;
};
