import { I_Character } from "../types";
import CharacterRowData from "./CharacterRowData";

interface CharacterDataTableProps {
  characters: I_Character[];
}

function CharacterDataTable(props: CharacterDataTableProps) {
  const { characters } = props;
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Movies</th>
        <th>Vehicles</th>
      </tr>
      {characters.map((character) => (
        <CharacterRowData key={character.name} character={character} />
      ))}
    </table>
  );
}

export default CharacterDataTable;
