import { FC, useEffect, useRef, useState } from "react";

interface DragNDropProps {
    onFilesSelected: (files: File[]) => void;
    clearFiles: boolean
}

const DragNDrop: FC<DragNDropProps> = ({ onFilesSelected, clearFiles }) => {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (clearFiles) {
            setFiles([])
        }
    }, [clearFiles])

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            const updatedFiles = [...files, ...newFiles];
            setFiles(updatedFiles);
            onFilesSelected(updatedFiles); // Trigger callback here
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target?.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const newFiles = Array.from(selectedFiles);
            const updatedFiles = [...files, ...newFiles];
            setFiles(updatedFiles);
            onFilesSelected(updatedFiles); // Trigger callback here
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <section className="w-full mt-3 bg-inputBg h-36 border border-dashed border-prime">
            <div
                className="w-full -z-0 h-full flex flex-col justify-center items-center cursor-pointer"
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    hidden
                    id="browse"
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.pptx,.txt,.xlsx,.csv"
                    multiple
                />
                {files.length > 0 ? (
                    <div className="w-full  flex flex-col gap-4 items-center">
                        <p className="font-rexlia text-center text-3xl">
                            {files.length} file(s) selected
                        </p>
                        <button onClick={() => setFiles([])} className="bg-prime z-20 text-white px-3 py-2 text-center rounded-md" >Clear Files</button>
                    </div>
                ) : (
                    <div className="w-full mx-auto ">
                        <div className="font-rexlia text-xl text-center mx-auto">
                            Upload Files here
                        </div>
                        <p className="font-rexlia text-base text-center">Drag Your Files here</p>
                        <p className="font-rexlia text-base text-center">or</p>
                        <p className="font-rexlia text-base text-center">Click To Select Files</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DragNDrop;
