import React from 'react';

const PDFReader = ({ pdf, onBack }) => {
  if (!pdf) return null;

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <button
          onClick={onBack}
          className="mb-6 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold py-2 px-4 rounded shadow-md transition-transform duration-200 hover:scale-105"
        >
          Back to List
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{pdf.name || 'Untitled PDF'}</h1>
        <p className="text-sm text-gray-500 mb-4">{pdf.author || 'Unknown Author'}</p>
        <iframe src={pdf.link} title={pdf.name} className="w-full h-[75vh] border border-gray-300 rounded" />
      </div>
    </div>
  );
};

export default PDFReader;
