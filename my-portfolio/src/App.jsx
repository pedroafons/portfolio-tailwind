import { useState } from 'react'
import email from '/src/assets/Group.svg'
import Linkedin from '/src/assets/Linkedin.svg'
import Github from '/src/assets/Github.svg'
import Behance from '/src/assets/Behance.svg'
import Perfil from '/src/assets/perfil.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mx-[400px]'>
        <div className='flex justify-between items-center border-b-2 border-[#B6B6B6] mt-5'>
          <div className='mb-9'>
            <img src={email} alt="" />
          </div>
          <div className='flex flex-row mb-9'>
            <img className='mr-5' src={Linkedin} alt="" />
            <img className='mr-5' src={Github} alt="" />
            <img src={Behance} alt="" />
          </div>
        </div>
        <div className='flex flex-col items-center mt-9'>
          <img className='w-[190px] rounded-full border-2 border-[#CBFF4D]' src={Perfil} alt="" />
          <p className='text-[#B6B6B6] mt-9'>
            Pedro Afonso
          </p>
        </div>
        <div className='flex justify-center mt-9'>
          <h2 className='text-[#B6B6B6] font-sans text-4xl text-center'>
            Lorem ipsum dolor <br />
            sit amet, consectetur adipiscing <br />
            elit. Donec eros.
          </h2>
        </div>
        <div className='flex flex-row justify-center mt-14'>
          <div className='w-[250px] h-[325px] bg-[#1A1A1A] border-2 border-[#474747] rounded-md mr-6'>
            <p>
              Tecnologias
            </p>
          </div>
          <div className='w-[250px] h-[325px] bg-[#1A1A1A] border-2 border-[#CBFF4D] rounded-md mr-6'>
            <p>
              Projetos
            </p>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='w-[250px] h-[152px] bg-[#1A1A1A] border-2 border-[#474747] rounded-md'>
              <p>
                Variados
              </p>
            </div>
            <div className='w-[250px] h-[152px] bg-[#1A1A1A] border-2 border-[#474747] rounded-md'>
              <p>
                Variados
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
