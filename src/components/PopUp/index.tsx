import React, { DOMAttributes } from "react";
import * as S from "./styles";

interface PopUpProps extends DOMAttributes<HTMLDivElement> {
  open: boolean;
}

const PopUp: React.FC<PopUpProps> = ({ open, children, ...rest }) => {
  const [show, setShow] = React.useState(open);
  React.useEffect(() => {
    if (open) setShow(true);
    else setShow(false);
  }, [open]);
  return (
    <S.Wrapper {...rest} style={{ visibility: show ? "visible" : "hidden" }}>
      {children}
      <div className="popup-cloud" />
    </S.Wrapper>
  );
};

export default PopUp;
