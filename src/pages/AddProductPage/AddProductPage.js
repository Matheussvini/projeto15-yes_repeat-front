import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GreenContainer } from "../../assets/styles/GlobalStyle";
import FormButton from "../../components/FormButton/FormButton";
import Logo from "../../components/Logo/Logo";
import AddProductForm from "./AddProductForm";
import { ThreeDots } from "react-loader-spinner";
import Upload from "./Upload";
import FileList from "./FileList";
import { uniqueId } from "lodash";
import filesize from "filesize";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import UserContext from "../../components/Context/context";

export default function AddProductPage() {
  const { user } = useContext(UserContext);

  const [disabled, setDisabled] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const staticUrls = []
  let staticUploads = []

  // const [files, setFiles] = useState([]);

  function handleUpload(arrFiles) {
    // console.log("page", files);
    const newUpload = arrFiles.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));
    // console.log(newUpload)
    const newArr = uploadedFiles.concat(newUpload)
    staticUploads = newArr
    setUploadedFiles(newArr);
    // console.log("no set", newArr); // não está zerando

    // console.log("antes do forEach", uploadedFiles.concat(newUpload))
    // uploadedFiles.concat(newUpload).forEach(e => processUpload(e));
    newUpload.forEach(e => processUpload(e));
    
    
  }

  function updateFile(id, data) {
    // console.log("antes do set no update", uploadedFiles)
    // console.log("up files", uploadedFiles)
    // console.log("enviando imagem ", id)
    // const abc = newArr.find(e => id === e.id )
    // if(!!data.progress){
    //   abc.progress = data.progress
    // }
    // if(!!data.uploaded){
    //   abc.uploaded = data.uploaded
    // }
    // if(!!data.error){
    //   abc.error = data.error
    // }
    // if(!!data.url){
    //   abc.url = data.url
    // }
    // const arr = newArr;
    // console.log("ARRRRR", arr)
    // arr[id - 1] = abc;
    // setUploadedFiles(arr);

    // console.log("ABCCCC", abc)
    // newArr.map(f => )

    // console.log("static antes: ", staticUploads)
    staticUploads = staticUploads.map((uploadedFile) => {
      return id === uploadedFile.id
        ? {...uploadedFile, ...data}
        : uploadedFile;
    })
    // console.log("static após map: ", staticUploads)
    setUploadedFiles(staticUploads);


    // setUploadedFiles(
    //   newArr.map((uploadedFile) => {
    //     return id === uploadedFile.id
    //       ? { ...uploadedFile, ...data }
    //       : uploadedFile;
    //   })
    // );
  }
  

  function processUpload(uploadedFile) {
    const data = new FormData();
    data.append("file", uploadedFile.file, uploadedFile.name);
    // console.log("entrei no process", uploadedFiles) // está entrando aqui z

    axios
      .post(`${BASE_URL}/admin/urls`, data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));
          // console.log("id: ", uploadedFile.id, "progress: ", progress)
          updateFile(uploadedFile.id, {
            progress,
          });
        },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        
        
      })
      .then((res) => {
        // console.log("fiz upload da imagem ", uploadedFile.id)
        // console.log(res.data.url)
        staticUrls.push(res.data.url)
        // (!!urls.length ? setUrls(urls.concat(staticUrls)) : setUrls(staticUrls))
        if(!!urls.length){
          setUrls(urls.concat(staticUrls))
        } else {
          setUrls(staticUrls)
        }
        // setUrls(staticUrls)
        // console.log(staticUrls)
        updateFile(uploadedFile.id, {
          uploaded: true,
          url: res.data.url,
          key: res.data.key
        });
      })
      .catch((err) => {
        err.response.data
          ? alert(err.response.data)
          : alert(err.response);
        updateFile(uploadedFile.id, {
          error: true,
        });
      });
  }

  async function handleDelete(key, url){
    console.log("key: ", key, "url: ", url)

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    
    await axios
            .delete(`${BASE_URL}/admin/urls/${key}`, config)
            .then((res) => {
              setUploadedFiles(uploadedFiles.filter((f) => f.key !== key))
              setUrls(urls.filter((f) => f !== url))
            })
            .catch((err) => {

        console.log(err);
        console.log(err.data);
              // err.response.data
              //   ? alert(err.response.data)
              //   : alert(err.response);
            })
  }

  return (
    <GreenContainer>
      <Logo />
      <Text>Cadastro de produto:</Text>
      <Content>
        <Upload handleUpload={handleUpload} />
        {!!uploadedFiles.length && <FileList files={uploadedFiles} onDelete={handleDelete} />}
      </Content>
      <AddProductForm disabled={disabled} setDisabled={setDisabled} urls={urls}/>
      <Link to={"/produtos"}>
        <FormButton disabled={disabled}>
          {disabled ? (
            <ThreeDots
              height="45px"
              radius="9"
              color="#FFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Cancelar"
          )}
        </FormButton>
      </Link>
    </GreenContainer>
  );
}

const Text = styled.p`
  /* width: 100%; */
    text-align: left;
    color: #fff;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 18px;
    line-height: 17.61px;
    margin: 50px 250px -20px 0;
    /* margin-right: 250px; */
    /* margin-top: 50px; */
`;
const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
`;
