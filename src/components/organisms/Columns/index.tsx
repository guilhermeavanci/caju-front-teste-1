import * as S from "./styles";
import * as T from './types'
import RegistrationCard from "~/components/molecules/RegistrationCard";

const Columns = ({columns}: T.ColumnsProps) => {
  return (
    <S.Container>
      {Object.values(columns).map((column) => {
        const {backgroundColor, color} = column.style || {}
        return (
          <S.Column $backgroundColor={backgroundColor} key={column.title}>
            <>
              <S.TitleColumn $color={color}>
                {column.title}
              </S.TitleColumn>
              <S.ColumContent>
                {column.registrations && Object.values(column.registrations).map((registration) => {
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
