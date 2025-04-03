import { I_Info_ApiResponse } from "../types";

const BASE_INFO_ENDPOINT = "people";
const BASE_URL = "https://swapi.dev/api/";

export async function fetchUsers(page: number): Promise<I_Info_ApiResponse> {
  try {
    const response = await fetch(
      `${BASE_URL}${BASE_INFO_ENDPOINT}/?page=${page}`
    );
    const data: I_Info_ApiResponse = await response.json();
    return data;
  } catch (e) {
    console.error("Unexpected error occured while fetching data:", e);
    throw e;
  }
}
