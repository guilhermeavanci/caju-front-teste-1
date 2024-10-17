import { HiRefresh } from "react-icons/hi";
import Button from "~/components/atoms/Buttons";
import { IconButton } from "~/components/atoms/Buttons/IconButton";
import TextField from "~/components/atoms/TextField";
import * as S from "./styles";
import * as T from './types'


export const SearchBar = ({textFieldProps, iconButtonProps, buttonText, onSubmit}: T.SearchBarProps) => {
  return (
    <S.Container>
      <TextField {...textFieldProps} />
      <S.Actions>
        <IconButton {...iconButtonProps} aria-label="refetch">
          <HiRefresh />
        </IconButton>
        <Button onClick={() => onSubmit()}>{buttonText}</Button>
      </S.Actions>
    </S.Container>
  );
};
