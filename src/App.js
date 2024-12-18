import React, { useState } from 'react';
import PDFList from './components/PDFList';
import PDFReader from './components/PDFReader';

const App = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {!selectedPDF ? (
        <PDFList onSelectPDF={setSelectedPDF} />
      ) : (
        <PDFReader pdf={selectedPDF} onBack={() => setSelectedPDF(null)} />
      )}
    </div>
  );
};

export default App;
