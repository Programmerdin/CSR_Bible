import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Search, Clock, Bookmark, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  const navigate = useNavigate();

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

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-900">About</h1>
        </div>
        
        <ScrollArea className="h-[calc(100vh)]">
          <div className="space-y-8 px-4">
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                CSR Bible is designed with Customer Service Representatives (CSR) in mind. 
                This Web App provides image based guidance of procedures to help you navigate the systems used at CIBC.
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Thank you for using CSR Bible</h2>
              <p className="text-gray-700 leading-relaxed">
                Hi there! I hope you find CSR Bible helpful.
                I started working on this app as I felt that there wasn't a good resource for CSRs to utilize when navigating CIBC's systems.
                Some of the procedures are still incomplete, but I will do my best to add more procedures over time.

                If you like CSR Bible please share it with your colleagues!              
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                My name is Odin.
                If you have any feedback or want to help improve the app, please don't hesitate to contact me. 
                <br />
                <br />
                <span className="text-indigo-800 font-semibold">Email:</span> hong525011@gmail.com
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Version Information</h2>
              <p className="text-gray-700">
                Version 1.0.0<br />
                Last Updated: December 2024<br />
                Built with React, Tailwind CSS, and Vite
              </p>
            </section>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default About;