import React from "react";
import { BallonItem } from "./styled.module";

interface ISkillBallonItem {
  contentText: string;
}

const SkillsBallonItem = ({ contentText }: ISkillBallonItem) => {
  return (
    <BallonItem>
      <span> {contentText} </span>
    </BallonItem>
  )
}

export default SkillsBallonItem;