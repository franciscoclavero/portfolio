import Button from "src/components/atoms/Button";
import { informationAreaItems } from "src/DB/informationAreaItems";
import InformationIcons from "../InformationIcons";

import InformationItems from "../InformationItems";

import { GroupAreaStyled } from "./styled.module";

const InformationGroupArea = () => {
  return (
    <GroupAreaStyled>
      <InformationItems { ...informationAreaItems.name } />
      <InformationItems { ...informationAreaItems.year } />
      <InformationItems { ...informationAreaItems.email } />
      <InformationItems { ...informationAreaItems.city } />
      <InformationIcons />
      
      <Button contentText="Download CV" />
    </GroupAreaStyled>
  )
};

export default InformationGroupArea;