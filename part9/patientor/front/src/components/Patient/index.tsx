import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import patient from "../../services/patients";
import { Diagnose, Gender, Patient } from "../../types";
import Entries from "./Entries";

interface PatientDetailProps {
  diagnoses: Diagnose[];
}

const PatientDetail: React.FC<PatientDetailProps> = ({ diagnoses }) => {
  const { id } = useParams();
  const [patientDetail, setPatientDetail] = useState<Patient | null>(null);

  useEffect(() => {
    (async () => {
      const res = await patient.getPatient(id as string);

      setPatientDetail(res);
    })();
  }, []);

  const setGenderIcon = (): string => {
    return patientDetail?.gender === Gender.Male
      ? "ri-men-line"
      : "ri-women-line";
  };

  return (
    <div>
      {patientDetail && (
        <>
          <div className="flex flex-row items-center gap-2 font-bold text-2xl mt-2">
            <h3>{patientDetail.name}</h3>
            <i className={setGenderIcon()} />
          </div>
          <p>ssn: {patientDetail.ssn}</p>
          <p>occupation: {patientDetail.occupation}</p>
          <Entries entries={patientDetail.entries} diagnoses={diagnoses}/>
        </>
      )}
    </div>
  );
};

export default PatientDetail;
