import { IComments } from "../types";

const C_COMMENTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export const fetchComments = async (
  postNumber: number
): Promise<IComments[]> => {
  try {
    const res = await fetch(`${C_COMMENTS_ENDPOINT}/${postNumber}/comments`);
    const data: IComments[] = await res.json();
    return data;
  } catch (e) {
    console.error("Unable to fetch comments for this post", e);
  }
  return [];
};
