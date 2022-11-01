import React, { useEffect, useMemo, useRef, useState } from "react";

type FileResponseProps =
  | {
      type: "error";
      message: string;
    }
  | {
      type: null;
    };

const useUploadFile = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileResponse, setFileResponse] = useState<FileResponseProps>();
  const inputRef = useRef<HTMLInputElement>(null);
  const data = useMemo(() => new FormData(), []);

  const openFilePicker = () => inputRef.current?.click();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) {
      setFileResponse({
        type: "error",
        message: "An error occured while reading your video file. 🥲",
      });
      return;
    }

    Array.from(fileList).forEach((file) => {
      setFiles((currentState) => {
        return [...currentState, file];
      });
      setFileResponse({ type: null });
    });
  };

  const removeFile = (filename: string) => {
    const tmp = [...files];
    const filteredArr = tmp.filter((file) => file.name !== filename);
    setFiles(filteredArr);
  };

  const checkIfFileExist = () => {
    if (files.length < 1) {
      setFileResponse({
        type: "error",
        message: "Oops sorry, your file basket is empty. 📂",
      });
    }
  };

  const resetFile = () => {
    setFiles([]);
    setFileResponse({ type: null });
  };

  useEffect(() => {
    files.forEach((file) => {
      data.append("file", file as Blob);
    });
  }, [files, data]);

  return {
    files,
    inputRef,
    fileResponse,
    data,
    openFilePicker,
    onFileChange,
    removeFile,
    checkIfFileExist,
    resetFile,
  };
};

export default useUploadFile;
