import { createGlobalStyle } from "styled-component";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
`;