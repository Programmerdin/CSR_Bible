import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, ChevronRight, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import procedureList from '../../transaction_procedures/procedureList.json';

const ListOfAllProcedures = () => {
  const navigate = useNavigate();

  const handleProcedureClick = (procedure) => {
    const formattedName = procedure.procedureName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
    
    navigate(`/procedure/${procedure.procedureNumber}/${formattedName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="fixed top-4 left-4 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm w-12 h-12"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-8 w-8 text-indigo-600" />
          </Button>
        </div>

        <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">All Procedures</h1>
        
        <ScrollArea className="h-[calc(100vh-140px)]">
          <div className="space-y-2">
            {procedureList.map((procedure) => (
              <div
                key={procedure.procedureNumber}
                onClick={() => handleProcedureClick(procedure)}
                className="flex items-center p-4 hover:bg-indigo-50 cursor-pointer border border-gray-100 rounded-lg transition-colors duration-150 ease-in-out bg-white shadow-sm group"
              >
                <div className="text-indigo-600 mr-4">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-lg text-gray-800 group-hover:text-indigo-700">
                    {procedure.procedureName}
                  </span>
                  <div className="text-sm text-gray-500">
                    Procedure #{procedure.procedureNumber}
                  </div>
                </div>
                <ChevronRight className="ml-auto text-gray-400 group-hover:text-indigo-600" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ListOfAllProcedures;