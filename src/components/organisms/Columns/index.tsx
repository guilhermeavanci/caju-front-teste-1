
import * as S from "./styles";
import * as T from './types'
import RegistrationCard from "~/components/molecules/RegistrationCard";

const allColumns = [
  { status: 'REVIEW', title: "Pronto para revisar" },
  { status: 'APPROVED', title: "Aprovado" },
  { status: 'REPROVED', title: "Reprovado" },
];

const Columns = (props: T.ColumnsProps) => {
  return (
    <S.Container>
      {allColumns.map((colum) => {
        return (
          <S.Column status={colum.status} key={colum.title}>
            <>
              <S.TitleColumn status={colum.status}>
                {colum.title}
              </S.TitleColumn>
              <S.ColumContent>
                {props?.registrations?.map((registration) => {
                  return (
                    <RegistrationCard
                      data={registration}
                      key={registration.id}
                    />
                  );
                })}
              </S.ColumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Columns;
