import { useEffect, useState } from "react";
import { FilesDragAndDrop } from "../../components/FilesDragAndDrop";
import { ImportContainer, ImportTable, ProcessingContainer } from "./styles";
import { api } from "../../services/api";
import { CheckBox } from "../../components/CheckBox";
import { FileState } from "./FileState";

interface KeyValue {
  [key: string]: string;
}

const processingStates: KeyValue = {
  waiting: 'Aguardando',
  uploaded: 'Carregado',
  checking: 'Verificando',
  checked: 'Verificado',
  importing: 'Importando',
  imported: 'Importado',
  error: 'Erro'
}

interface File {
  name: string;
  path: string;
  check: boolean;
  import: boolean;
  state: 'waiting' | 'importing' | 'imported';
  currentLine: number;
}

interface Processing {
  state: string;
  files: File[];
}

export function Import() {
  const [processing, setProcessing] = useState<Processing | null>(null);

  function onUploadFile(data: Processing) {
    setProcessing(data);
  }

  function handleChangeCheck(item: File) {
    if (processing === null) {
      return;
    }

    setProcessing({
      ...processing,
      files: processing.files.map(file => {
        if (file.name === item.name) return { ...item, import: !item.import };

        return file;
      })
    });
  }

  useEffect(() => {
    api.get("/processing").then((response) => {
      setProcessing(response.data);
    });
  }, []);

  useEffect(() => {
    if(processing?.state !== 'waiting') {
      const interval = setInterval(() => {
        api.get("/processing").then((response) => {
          setProcessing(response.data);
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      }
    }
  }, [processing]);

  function handleProcessing() {
    api.post("/processing/import").then((response) => {
      setProcessing(response.data);
    });
  }

  const showProcessButton = processing?.state === 'checked';

  return (
    <ImportContainer>
      <FilesDragAndDrop onUpload={onUploadFile}/>

      { processing && (
        <ProcessingContainer>
          <h1>{processingStates[processing.state]}</h1>

          { showProcessButton && (
            <div>
              <button type="button" onClick={handleProcessing}>Processar</button>
            </div>
          ) }

          <ImportTable>
            <thead>
              <tr>
                <th>
                  Arquivo
                </th>
                <th>
                  Importar?
                </th>
                <th>
                  Status
                </th>
                <th>
                  Qtde Registros
                </th>
              </tr>
            </thead>
            <tbody>
              { processing.files.map(item => {
                return (
                  <tr key={item.path}>
                    <td>{item.name}</td>
                    <td>
                      <CheckBox 
                        labelChecked="Importar"
                        labelNotChecked="Não Importar"
                        checked={item.import} 
                        onChange={() => handleChangeCheck(item)}
                      />
                    </td>
                    <td>
                      <FileState state={item.state} />
                    </td>
                    <td>{item.currentLine}</td>
                  </tr>
                )
              })}
            </tbody>
          </ImportTable>
        </ProcessingContainer>
      ) }
    </ImportContainer>
  )
}