import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PDFList = ({ onSelectPDF }) => {
  const [pdfs, setPDFs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.npoint.io/dee51ea017d20efdfcc8')
      .then(({ data }) => Array.isArray(data) ? setPDFs(data) : console.error('Invalid API response:', data))
      .catch((error) => console.error('Error fetching PDFs:', error));
  }, []);

  const filteredPDFs = pdfs.filter(({ name }) => name?.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Search PDFs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6 w-full p-3 text-lg border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {filteredPDFs.length === 0 ? (
          <p className="text-center text-gray-500">No PDFs found.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPDFs.map((pdf, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-lg p-6 min-h-[220px] hover:shadow-xl transition transform hover:scale-[1.02]"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">{pdf.name || 'Untitled PDF'}</h2>
                  <p className="text-sm text-gray-500">{pdf.author || 'Unknown Author'}</p>
                </div>
                <button
                  onClick={() => onSelectPDF(pdf)}
                  className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold py-2 px-4 rounded shadow-md transition-transform duration-200 hover:scale-105"
                >
                  View PDF
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PDFList;
