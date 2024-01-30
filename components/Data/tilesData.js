/** @*/

import  {
  FaFileWord,
  FaFilePowerpoint,
  FaFileExcel,
  FaFileImage,
  FaFilePdf,
  FaFileAlt,
  FaFileCode,
  FaFileVideo,
  FaFileAudio,
  FaFileArchive,
  FaFileContract,
  FaFileInvoice,
  FaFileMedical,
  FaFilePrescription,
  FaFileImport,
} from 'react-icons/fa';
import { RiEditBoxFill, RiFindReplaceFill } from 'react-icons/ri';
import { PiCropFill } from 'react-icons/pi';
import { MdOutlineCropRotate } from 'react-icons/md';

export const pdfTiles = [{
    icon: <FaFileWord className='w-14 h-14 text-blue-500' />,
    heading: 'PDF to Word',
    text: 'Convert your PDF files to Word in browser',
  },
  {
    icon: <FaFilePowerpoint className='w-14 h-14 text-red-500' />,
    heading: 'PDF to PPT',
    text: 'Convert your PDF files to PPT in browser',
  },
  {
    icon: <FaFileExcel className='w-14 h-14 text-green-500' />,
    heading: 'PDF to Excel',
    text: 'Convert your PDF files to Excel in browser',
  },
  {
    icon: <FaFileImage className='w-14 h-14 text-yellow-500' />,
    heading: 'PDF to JPG',
    text: 'Convert your PDF files to JPG in browser',
  },
  {
    icon: <FaFilePdf className='w-14 h-14 text-gray-500' />,
    heading: 'PDF to PDF',
    text: 'Convert your files to PDF in browser',
  },
  {
    icon: <FaFileAlt className='w-14 h-14 text-purple-500' />,
    heading: 'PDF to TXT',
    text: 'Convert your PDF files to TXT in browser',
  },
  {
    icon: <FaFileCode className='w-14 h-14 text-pink-500' />,
    heading: 'PDF to HTML',
    text: 'Convert your PDF files to HTML in browser',
  },
  {
    icon: <FaFileVideo className='w-14 h-14 text-indigo-500' />,
    heading: 'PDF to MP4',
    text: 'Convert your PDF files to MP4 in browser',
  },
  {
    icon: <FaFileAudio className='w-14 h-14 text-teal-500' />,
    heading: 'PDF to MP3',
    text: 'Convert your PDF files to MP3 in browser',
  },
  {
    icon: <FaFileArchive className='w-14 h-14 text-orange-500' />,
    heading: 'PDF to ZIP',
    text: 'Convert your PDF files to ZIP in browser',
  },
  {
    icon: <FaFileContract className='w-14 h-14 text-lime-500' />,
    heading: 'PDF to DOC',
    text: 'Convert your PDF files to DOC in browser',
  },
  {
    icon: <FaFileInvoice className='w-14 h-14 text-amber-500' />,
    heading: 'PDF to CSV',
    text: 'Convert your PDF files to CSV in browser',
  },
  {
    icon: <FaFileMedical className='w-14 h-14 text-cyan-500' />,
    heading: 'PDF to XML',
    text: 'Convert your PDF files to XML in browser',
  },
  {
    icon: <FaFilePrescription className='w-14 h-14 text-emerald-500' />,
    heading: 'PDF to EPS',
    text: 'Convert your PDF files to EPS in browser',
  },
  {
    icon: <FaFileImport className='w-14 h-14 text-violet-500' />,
    heading: 'PDF to Other',
    text: 'Convert your PDF files to other  in  browser',
  },
];

export const bookmarkTiles = [
  {
    icon: <RiEditBoxFill className='w-14 h-14 text-orange-500' />,
    heading: 'Edit PDF',
    text: 'use the best pdf tool to edit pdf in your browser',
  },
  {
    icon: <PiCropFill className='w-14 h-14 text-orange-500' />,
    heading: 'Crop PDF',
    text: 'use the best pdf tool to crop pdf in your browser',
  },
  {
    icon: <RiFindReplaceFill className='w-14 h-14 text-orange-500' />,
    heading: 'Replace Text',
    text: 'replace easyly text in your pdf in your browser',
  },
  {
    icon: <MdOutlineCropRotate className='w-14 h-14 text-orange-500' />,
    heading: 'Rotate PDF',
    text: 'rotate and save your pdf in your browser ',
  },
];
