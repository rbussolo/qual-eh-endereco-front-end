import { useState, useEffect, useRef } from "react";
import { DropContainer } from "./styles";
import axios from "axios";
import { Loading } from "../Loading";

interface Processing {
  state: string;
  files: {
    name: string;
    path: string;
    check: boolean;
    import: boolean;
    state: 'waiting' | 'importing' | 'imported';
    currentLine: number;
  }[];
}

interface FilesDragAndDropProps {
  onUpload: (data: Processing) => void;
}

export function FilesDragAndDrop({ onUpload }: FilesDragAndDropProps) {
  const drop = useRef<HTMLLabelElement>(null);
  const [dragging, setDragging] = useState(false);
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);

    if (e.dataTransfer?.files && e.dataTransfer?.files[0]) {
      const file = e.dataTransfer.files[0];

      setFileSelected(file);
      uploadFile(file);
    }
  }

  function handleChangeFile(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();

    if (e.currentTarget.files && e.currentTarget.files[0]) {
      const file = e.currentTarget.files[0];

      setFileSelected(file);
      uploadFile(file);
    }
  }

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };

  function uploadFile(file: File) {
    const formData = new FormData();

    formData.append("zip_code_file", file);
    formData.append("name", file.name);

    setIsLoading(true);

    axios.post('http://localhost:3333/api/processing/check', formData, {
      headers: {
        "content-type": "multipart/form-data"
      }
    }).then((response) => {
      onUpload(response.data);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    const current = drop.current;

    if (current) {
      current.addEventListener('dragover', handleDragOver);
      current.addEventListener('drop', handleDrop);
      current.addEventListener('dragenter', handleDragEnter);
      current.addEventListener('dragleave', handleDragLeave);

      return () => {
        current.removeEventListener('dragover', handleDragOver);
        current.removeEventListener('drop', handleDrop);
        current.removeEventListener('dragenter', handleDragEnter);
        current.removeEventListener('dragleave', handleDragLeave);
      };
    }
  }, []);

  const fileSize = fileSelected ? Math.round(fileSelected.size / (1024 * 1024) * 100) / 100 : 0;

  return (
    <>
      <DropContainer ref={drop} htmlFor="files" className={dragging ? "dragging" : ""}>
        <span className="drop-title">Adicione o arquivo aqui</span>
        OU
        <input type="file" id="files" required onChange={handleChangeFile} />

        { fileSelected ? (
          <div>
            <p>Arquivo selecionado: { fileSelected.name } ({ fileSize }MB)</p>
          </div>
        ) : null }
      </DropContainer>

      <Loading showLoading={isLoading} />
    </>
  )
}