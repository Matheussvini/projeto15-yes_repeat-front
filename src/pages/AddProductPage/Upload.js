import styled, { css } from "styled-components";
import React, { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";

export default function Upload({ handleUpload }) {
  const newArrFiles = [];
  const [files, setFiles] = useState([]);
  const onDrop = useCallback(
    (f) => {
      // console.log("recebi alguma coisa", f);
      // files.forEach((e) => newArrFiles.push(e));
      f.forEach((e) => newArrFiles.push(e));
      // f.forEach((e) => handleUpload(e));
      console.log("New ArrFiles", newArrFiles);
      console.log("f", f);
      console.log("files", files.concat(newArrFiles));

      // console.log("new arr", newArrFiles);

      setFiles(files.concat(newArrFiles));
      handleUpload(newArrFiles);
    },
    [files, setFiles, handleUpload]
  );

  const { isDragAccept, isDragReject, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
        "image/jpg": [],
        "image/svg": [],
        "image/pjpeg": [],
        "image/gif": [],
      },
      onDrop,
    });

  // console.log("arrfiles", files);

  return (
    <div>
      <DropContainer
        {...getRootProps()}
        isDragAccept={isDragAccept}
        isDragReject={isDragReject}
      >
        {isDragAccept ? (
          <UploadMessege type="success">Solte as imagens aqui</UploadMessege>
        ) : isDragReject ? (
          <UploadMessege type="error">Arquivo não suportado</UploadMessege>
        ) : (
          <UploadMessege>
            Arraste ou clique aqui para enviar as imagens
          </UploadMessege>
        )}
        <input {...getInputProps()} />
      </DropContainer>
    </div>
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
  ${(props) => props.isDragAccept && dragActive};
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
