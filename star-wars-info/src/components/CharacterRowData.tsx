import { useCallback, useEffect, useState } from "react";
import { I_Character, I_Films, I_Vehicle } from "../types";

interface CharacterRowDataProps {
  character: I_Character;
}

function CharacterRowData(props: CharacterRowDataProps) {
  const { character } = props;
  const [showMovies, setShowMovies] = useState(false);
  const [showVehicles, setShowVehicles] = useState(false);
  const [vehicleData, setVehicleData] = useState<I_Vehicle>();
  const [filmData, setFilmData] = useState<I_Films>();
  const [loadingVehicle, setLoadingVehicle] = useState(true);
  const [loadingMovie, setLoadingMovie] = useState(true);

  const fetchVehicles = useCallback(async () => {
    try {
      if (!character.vehicles || character?.vehicles?.length === 0) return;
      setLoadingVehicle(true);
      const res = await fetch(character.vehicles[0]);
      const data: I_Vehicle = await res.json();
      setVehicleData(data);
    } catch (e) {
      console.error("Unexpected error occured while fetching vehicles", e);
    } finally {
      setLoadingVehicle(false);
    }
  }, [character]);
  const fetchMovieData = useCallback(async () => {
    try {
      if (!character.films || character?.films?.length === 0) return;
      setLoadingMovie(true);
      const res = await fetch(character.films[0]);
      const data: I_Films = await res.json();
      setFilmData(data);
    } catch (e) {
      console.error("Unexpected error occured while fetching films", e);
    } finally {
      setLoadingMovie(false);
    }
  }, [character]);
  useEffect(() => {
    if (showVehicles) {
      fetchVehicles();
    }
  }, [showVehicles, fetchVehicles]);
  useEffect(() => {
    if (showMovies) {
      fetchMovieData();
    }
  }, [showMovies]);
  return (
    <tr>
      <td>{character.name}</td>
      <td>{character.gender}</td>
      <td>
        {!showMovies && (
          <button onClick={() => setShowMovies(true)}>Show Movies</button>
        )}
        {showMovies && (
          <p onClick={() => setShowMovies(false)}>
            {!loadingMovie && filmData?.title}
            {loadingMovie && "Loading Movie..."}
          </p>
        )}
      </td>
      <td>
        {!showVehicles && (
          <button onClick={() => setShowVehicles(true)}>Show Vehicles</button>
        )}
        {showVehicles && (
          <p onClick={() => setShowVehicles(false)}>
            {!loadingVehicle && vehicleData?.name}
            {loadingVehicle && "Loading Vehicle..."}
          </p>
        )}
      </td>
    </tr>
  );
}

export default CharacterRowData;
