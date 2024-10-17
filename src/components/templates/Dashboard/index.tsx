import Columns from "~/components/organisms/Columns";
import * as S from "./styles";
import { SearchBar } from "~/components/molecules/SearchBar";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";

const Dashboard = () => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };
  return (
    <S.Container>
      <SearchBar textFieldProps={{
        placeholder: "Digite um CPF válido"
      }}
      buttonText="Nova Admissão"
      onSubmit={() => goToNewAdmissionPage()}/>
      <Columns registrations={[]} />
    </S.Container>
  );
};
export default Dashboard;
