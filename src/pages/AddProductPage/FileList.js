import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import styled from "styled-components";

export default function FileList({ files, onDelete }) {
    console.log("files", files)
  return (
    <Container>
      {files.map((uploadedFile) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}
                {!!uploadedFile.url && (
                  <button onClick={() => onDelete(uploadedFile.key, uploadedFile.url)}>Excluir</button>
                )}
              </span>
            </div>
          </FileInfo>
          <StatusBox>
            {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: "#549448" },
                }}
                strokeWidth={10}
                value={uploadedFile.progress}
              />
            )}
            {uploadedFile.url && (
              <a
                href={uploadedFile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}
            {uploadedFile.uploaded && (
              <MdCheckCircle size={24} color="#7FA244" />
            )}
            {uploadedFile.error && <MdError size={24} color="#e57878" />}
          </StatusBox>
        </li>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    & + li {
      margin-top: 15px;
    }
  }
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    strong{
    word-wrap: break-word;
    text-align: start;
  }

    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
  
`;
const StatusBox = styled.div`
    display: flex;
`