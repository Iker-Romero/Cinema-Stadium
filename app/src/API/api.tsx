import axios from 'axios';

export interface ShowType {
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
  Type: string;
  BoxOffice: string;
  id: number;
}

type ServerResponse = {
  data: ShowType[];
};

export const getShows = async (): Promise<ShowType[] | undefined> => {
  try {
    const { data } = await axios.get('http://localhost:8080/shows', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'aplication/json',
      },
    });

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postShow = async (item: ShowType) => {
  try {
    const { data } = await axios.post('http://localhost:8080/shows', item);

    return data;
  } catch (error) {
    console.log(error);
  }
};
