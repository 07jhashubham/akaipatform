'use client'
import { FC, useState, ChangeEvent } from 'react'
import DragNDrop from './DragNDrop'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';

interface DataFormProps { }

const DataForm: FC<DataFormProps> = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    datasetName: '',
    datasetDesc: '',
    datasetType: '',
  });
  const [clearFiles, setclearFiles] = useState(false)

  const handleFileSelection = (files: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Selected Files:', files);
    setFormData({
      datasetName: '',
      datasetDesc: '',
      datasetType: '',
    })
    setFiles([]);
    setclearFiles(true)
  };

  return (
    <form className='flex flex-col gap-4 w-full px-6 py-2 mt-4' onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor="datasetName" className='font-rexlia text-base relative'>
          DATASET NAME
        </label>
        <span className='absolute text-prime'>*</span>
        <input
          type="text"
          name="datasetName"
          value={formData.datasetName}
          onChange={handleInputChange}
          placeholder='Enter Name'
          className='px-3 bg-inputBg mt-3 py-2 border border-prime lg:w-full'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor="datasetDesc" className='font-rexlia text-base relative'>
          DATASET DESCRIPTION
        </label>
        <span className='absolute text-prime'>*</span>
        <input
          type="text"
          name="datasetDesc"
          value={formData.datasetDesc}
          onChange={handleInputChange}
          placeholder='Enter Description'
          className='px-3 mt-3 bg-inputBg py-2 border border-prime lg:w-full'
        />
      </div>
      <div className='mb-3'>
        <div className='flex items-center gap-4'>
          <div>
            <label htmlFor="datasetType" className='font-rexlia text-base relative'>
              DATASET TYPE
            </label>
            <span className='absolute text-prime'>*</span>
          </div>
          <div className='font-rexlia text-sm relative'>(SELECT TYPE OF DATASET)</div>
        </div>
        <Select
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, datasetType: value }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Image">Image</SelectItem>
              <SelectItem value="CSV">CSV</SelectItem>
              <SelectItem value="PDF">PDF</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='mb-3'>
        <label htmlFor="datasetFiles" className='font-rexlia text-base relative'>
          UPLOAD DATASET
        </label>
        <span className='absolute text-prime'>*</span>
        <DragNDrop clearFiles={clearFiles} onFilesSelected={handleFileSelection} />
      </div>
      <div className='flex justify-center my-10'>
        <button type="submit" className=''>
          <img src='/btns/submit.png' alt="Submit-form" className="w-32 h-14" />
        </button>
      </div>
    </form>
  );
};

export default DataForm;
