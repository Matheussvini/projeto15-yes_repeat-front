import styled, { css } from "styled-components";
import React from "react";

import Dropzone from "react-dropzone";

export default function Upload({ onUpload }) {
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessege>Arraste arquivos aqui...</UploadMessege>;
    }
    console.log("drags", isDragActive, isDragReject);

    if (isDragReject) {
      return <UploadMessege type="error">Arquivo não suportado</UploadMessege>;
    }
    console.log("success");
    return <UploadMessege type="success">Solte os arquivos aqui</UploadMessege>;
  }

  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

const UploadMessege = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
