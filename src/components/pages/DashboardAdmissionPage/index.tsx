import { ColumnsConfig, Registration } from "~/components/organisms/Columns/types";
import Dashboard from "~/components/templates/Dashboard";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";
import { useMemo } from "react";
import { COLUMNS } from "./constans";

// TODO: remove mock after api call implementation
const mockedDB: Registration[] =[ {
  "admissionDate": "22/10/2023",
  "email": "luiz@caju.com.br",
  "employeeName": "Luiz Filho",
  "status": "APPROVED",
  "cpf": "56642105087",
  "id": "3"
},
{
  "id": "1",
  "admissionDate": "22/10/2023",
  "email": "filipe@caju.com.br",
  "employeeName": "Filipe Marins",
  "status": "REVIEW",
  "cpf": "78502270001"
},
{
  "id": "2",
  "admissionDate": "22/10/2023",
  "email": "jose@caju.com.br",
  "employeeName": "José Leão",
  "status": "REJECTED",
  "cpf": "78502270001"
}]

const DashboardPage = () => {

  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const columns = useMemo(() => {
    return mockedDB.reduce<ColumnsConfig>((prev, cur) => {
      const columnId = cur.status;
      const column = prev[cur.status];
      return {
        ...prev,
        [columnId]: {
          ...column,
          registrations: {
            ...column.registrations,
            [cur.id]: cur
          }
        }
      }
    }, COLUMNS)
  }, [])

  return (
    <Dashboard
    
    searchBarProps={{
            textFieldProps: {
        placeholder: "Digite um CPF válido"
      },
      buttonText: "Nova Admissão",
      onSubmit: () => goToNewAdmissionPage()
    }}

    columnsProps={{
      columns
    }}
    
    />
  );
};
export default DashboardPage;
