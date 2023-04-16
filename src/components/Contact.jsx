import React from "react";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/0f54d787-fc7b-4d20-ab7c-5809de275b1b"
                method="POST"
                className="flex flex-col w-full md:w-7/12"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        className="p-2 bg-transparent border-b rounded-md f
                        ocus:outline-none"
                    />

                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p2 bg-transparent border-2 rounded-md
                        focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Mensagem"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md
                        focus:outline-none"
                    />
                    <button 
                        type="button"
                        className="text-center inline-block px-8 py-3 w-max text-base 
                        font-medium rounded-md text-white bg-gradient-to-r from-yellow-500
                        to-pink-500 drop-shadow-md hover:stroke-white
                        active:scale-[.97] active:duration-75 transition-all hover:scale-[1.02]"
                    >
                            Solicite um Orçamento
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;