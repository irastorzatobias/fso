import { Diagnose, Entry } from "../../types";
import EntryDetail from "./EntryDetail";

interface EntryProps {
  entries: Entry[];
  diagnoses: Diagnose[];
}

const Entries: React.FC<EntryProps> = ({ entries, diagnoses }) => {
  const listEntries = (): JSX.Element[] => {
    return (
      entries.map((entry) => {
        return <EntryDetail entry={entry} diagnoses={diagnoses}/>;
      }) ?? []
    );
  };

  return (
    <div className="space-y-2">
      <h3 className="font-bold text-2xl mt-2">entries: </h3>
      {listEntries()}
    </div>
  );
};

export default Entries;
