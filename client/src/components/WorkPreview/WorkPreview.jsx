// import './WorkPreview.scss';
import React from "react";

// sc
import { WorkPreviewContainer, WorkPreviewImg } from "./WorkPreview.styles";

const WorkPreview = ({ image }) => {
  return (
    <WorkPreviewContainer>
      <WorkPreviewImg src={image} alt="project overview" />
    </WorkPreviewContainer>
  );
};

export default WorkPreview;
