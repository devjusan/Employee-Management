import React from "react";
import * as S from "./styles";

type PopUpProps = {
  open: boolean;
};

const PopUp: React.FC<PopUpProps> = ({ open, children }) => {
  const [show, setShow] = React.useState(open);
  React.useEffect(() => {
    if (open) setShow(true);
    else setShow(false);
  }, [open]);
  return (
    <S.Wrapper style={{ visibility: show ? "visible" : "hidden" }}>
      {children}
      <div className="popup-cloud" />
    </S.Wrapper>
  );
};

export default PopUp;
