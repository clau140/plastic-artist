import React from 'react';
import CreateJob from '../../src/components/CreateJobs';  

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Crear Nuevo Trabajo</h2>
        <CreateJob />  
      </div>
      
    </div>
  );
};

export default Dashboard;
