import imgPc from '../../assets/Rectangle 43 (1).svg';
import imgPc2 from '../../assets/Group 16.svg';
import Footer from '../../components/footer/footer';
import cuatro from '../../assets/04.svg';
import circle from '../../assets/memoji female 06.svg';
import comillas from '../../assets/comillas.svg';
import fincomillas from '../../assets/fincomillas.svg';

export default function Home (){

    return (
        <>
            <div className="h-svh min-w-full bg-black">
       
                <div className="flex h-screen mx-auto px-4 bg-black pt-20 mb-10 items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white">
                            NYX TECHNOLOGIES
                        </h1>
                        <p className="text-white text-lg mt-4">
                            "Tu Tiempo Importa, Nuestra Tecnología Simplifica: ¡Vive más, Preocúpate menos!"
                        </p>
                        <br />
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Contáctanos
                        </button>
                    </div>
                </div>
                <div className="container mx-auto px-4 h-auto py-3 mb-10 ">
                    <div className='w-full'>
                        <h5 className='items-center text-left justify-center text-2xl pb-6'>Nuestros Servicios</h5>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-1/3 items-center text-center justify-center'>
                            
                            <div className='w-5/6 h-auto  items-center text-center p-4 shadow-md hover:shadow-xl transition-shadow duration-300'>
                                <img src={imgPc} alt="" className='h-2/3 w-full'/>
                                <h6 className='items-center text-center pt-3 text-lg'>web Developers</h6>
                                <p className='p-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent. </p>
                                <button>Learn more</button>
                            </div>
                        </div>
                        <div className='w-1/3 '>
                            <div className='w-5/6 h-auto  items-center text-center p-4 shadow-md hover:shadow-xl transition-shadow duration-300'>
                                <img src={imgPc2} alt="" className='h-2/3 w-full'/>
                                <h6 className='items-center text-center pt-3 text-lg'>web Developers</h6>
                                <p className='p-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent. </p>
                                <button>Learn more</button>
                            </div>
                        </div>
                        <div className='w-1/3'>  
                            <div className='w-5/6 h-auto items-center text-center p-4 shadow-md hover:shadow-xl transition-shadow duration-300'>
                                <img src={imgPc2} alt="" className='h-2/3 w-full'/>
                                <h6 className='items-center text-center pt-3 text-lg'>web Developers</h6>
                               <p className='p-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent. </p>
                                <button className=''>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 h-auto py-10 mb-10 ">
                    <h5 className='text-2xl text-black ml-28'>Things We Enjoy</h5>
                    <div className='flex justify-center'>
                    <div className='align-center flex-col p-4'>
                        <div className='p-3 my-8 flex shadow-md'>
                            <div>
                                <img src={cuatro} alt="" className='p-4 text-center justify-center align-center'/>
                            </div>
                            <div className='py-4'>
                                <h6 className='text-2xl'>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                        <div className='p-3 flex my-8  shadow-md'>
                            <div>
                                <img src={cuatro} alt="" className='p-4 text-center justify-center align-center'/>
                            </div>
                            <div className='py-4'>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                        <div className='p-3 flex my-8  shadow-md'>
                             <div>
                                <img src={cuatro} alt="" className='p-4 text-center justify-center align-center'/>
                            </div>
                            <div className='py-4'>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-12'>
                        <div className='p-3 flex my-8  shadow-md'>
                            <div>
                                <img src={cuatro} alt="" className='p-4 text-center justify-center align-center'/>
                            </div>
                            <div className='py-4'>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                        <div className='p-3 flex my-8  shadow-md'>
                            <div>
                                <img src={cuatro} alt="" className='p-4 text-center justify-center align-center'/>
                            </div>
                            <div className='py-4'>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                        <div className='p-3 flex my-8  shadow-md'>
                            <div>
                                <img src={cuatro} alt="" className='p-4 text-center justify-center align-center'/>
                            </div>
                            <div className='py-4'>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>

                <div className="container mx-auto px-4 h-auto py-10 mb-10 ">
                    <div>
                        <h5 className='text-4xl py-4'>testimonios</h5>
                    </div>
                    <div className='flex justify-center  text-center items-center py-8'>
                        <div className='w-2/4'>

                        </div>
                        <img src={comillas} alt="" className='relative -ml-10 mb-52 h-10 m-4'/>
                        <div className='w-3/4 shadow-md p-4 flex-col'>
                            <div className='w-2/4'>
                                <img src="" alt="" className=''/>
                            </div>
                            <div className='w-full p-4'>
                
                                <h6 className='w-1/3 text-lg'>
                                    Testimonio
                                </h6>
                                <p className='w-full text-left'>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur et pretium nunc, quis euismod et. Volutpat suspendisse sed in blandit condimentum. Sagittis nullam nec mauris, feugiat hendrerit aliquam cras. Dolor tortor gravida lobortis in ultricies enim vulputate non. Neque nibh donec quam lectus.”
                                    Sed arcu, enim eu adipiscing enim vulputate vulputate semper adipiscing. Customer
                                </p>
                            </div>
                            
                        </div>
                        <img src={fincomillas} alt="" className='relative  h-10 mt-56 m-4'/>
                    </div>
                    <div className='flex'>
                        <div className='flex-col w-1/3 shadow-xl p-8 m-8'>
                            <div className='text-center items-center justify-center w-full'>
                                <img src={circle} alt="" className='w-full h-24 p-2' />
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum velit egestas rutrum purus. Quam velit velit nisi ultrices gravida est in tellus. Id in faucibus consequat hendrerit scelerisque maecenas massa, quis. “ - Customer</p>
                            </div>
                        </div>
                        <div className='flex-col w-1/3  m-8 p-8 shadow-xl'>
                            <div className='text-center items-center justify-center w-full'>
                                <img src={circle} alt="" className='w-full h-24 p-2' />
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum velit egestas rutrum purus. Quam velit velit nisi ultrices gravida est in tellus. Id in faucibus consequat hendrerit scelerisque maecenas massa, quis. “ - Customer</p>
                            </div>
                        </div>
                        <div className='flex-col w-1/3  m-8 p-8 shadow-xl'>
                            <div className='text-center items-center justify-center w-full'>
                            <img src={circle} alt="" className='w-full h-24 p-2' />
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum velit egestas rutrum purus. Quam velit velit nisi ultrices gravida est in tellus. Id in faucibus consequat hendrerit scelerisque maecenas massa, quis. “ - Customer</p>
                            </div>
                        </div>
                    </div>
                     
                </div>
               
                <Footer>

                </Footer>
              
              
            </div>
        </>
    )
}