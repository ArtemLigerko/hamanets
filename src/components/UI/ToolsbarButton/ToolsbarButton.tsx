import { Button } from "@chakra-ui/react";
// import Button from "@mui/material/Button";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin: 0 5px !important;
`;

export const ToolsbarButton = ({
  children,
  ...props
}: PropsWithChildren<any>) => {
  return (
    <StyledButton variant="contained" {...props}>
      {children}
    </StyledButton>
  );
};

export default ToolsbarButton;
