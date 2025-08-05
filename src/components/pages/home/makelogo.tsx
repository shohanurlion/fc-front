import Container from '@/components/shared/Container'
import Image from 'next/image'
import img from '../../../../public/img/istockphoto.jpg'

const LogoMaker = () => {
  return (
    <div className='my-44'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                <div>
                    <h1 className='text-[40px] text-white font-normal py-8'>Web Logo Maker</h1>
                    <div>
                      <h1 className="text-[40px] text-white font-normal py-8">Make an incredible logo <br/><span className='text-[#FC832B] font-bold'>in seconds</span></h1>
                    <p className='text-[24px] font-normal mb-12'>Pre-designed by top talent. Just add your touch.</p>
                    </div>
                    <div>
                         <button className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-md hover:scale-105 transition"> Try Fiver Logo Maker
                        </button>
                    </div>
                </div>
                {/* img part */}
                <div className='flex justify-center items-center'>
                    <Image src={img} alt="logo" width={600} height={400} />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default LogoMaker