import { Diagnose, Entry } from "../../types";

interface EntryDetailProps {
  entry: Entry;
  diagnoses: Diagnose[];
}

const EntryDetail: React.FC<EntryDetailProps> = ({ entry, diagnoses }) => {
  const entryTypeIcon = (): string => {
    switch (entry.type) {
      case "Hospital":
        return "ri-hospital-line text-red-500";
      case "OccupationalHealthcare":
        return "ri-stethoscope-line text-yellow-500";
      case "HealthCheck":
        return "ri-heart-line text-green-500";
      default:
        return "";
    }
  }

  const listDiagnoses = (): JSX.Element[] | undefined => {
    return entry.diagnosisCodes?.map((code) => {
      const diagnose = diagnoses.find((d) => d.code === code);

      return (
        <li key={code} className="flex flex-row gap-3">
          <p className="font-semibold">{code}</p>
          <p>{diagnose?.name}</p>
        </li>
      );
    });
  };

  return (
    <div className="border border-gray-200 rounded-md p-1">
      <i className={entryTypeIcon()} />
      <p>
        {entry.date}: {entry.description}
      </p>
      <ul>{listDiagnoses()}</ul>
    </div>
  );
};

export default EntryDetail;
