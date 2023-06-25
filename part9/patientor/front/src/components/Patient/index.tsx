import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import patient from "../../services/patients";
import { Gender, Patient } from "../../types";

const PatientDetail: React.FC = () => {
  const { id } = useParams();
  const [patientDetail, setPatientDetail] = useState<Patient | null>(null);

  useEffect(() => {
    (async () => {
      const res = await patient.getPatient(id as string);

      setPatientDetail(res);
    })();
  }, []);

  const setGenderIcon = (): string => {
    return patientDetail?.gender === Gender.Male ? 'ri-men-line' : 'ri-women-line';
  }

  return (
    <div>
      {patientDetail && (
        <>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <h3>{patientDetail.name}</h3>
            <i className={setGenderIcon()}/>
          </div>
          <p>ssn: {patientDetail.ssn}</p>
          <p>occupation: {patientDetail.occupation}</p>
        </>
      )}
    </div>
  );
};

export default PatientDetail;
