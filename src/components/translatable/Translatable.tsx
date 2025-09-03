import { FormattedMessage } from "react-intl";

type Props = {
  text: any;
}

export default function Translatable({text}: Props) {
  return (
    <FormattedMessage id={text}/>
  )
}
