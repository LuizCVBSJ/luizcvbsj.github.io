import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Beach House</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Aluguéis Temporários</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Providenciamos experiências únicas, 
            de apartamentos bem localizados na cidade até chalés na praia, venha conhecer seu 
            pŕoximo refúgio, entre em contato!</p>
        </div>
    )
}

export default Intro;