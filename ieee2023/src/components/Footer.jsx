import logo from '../assets/logod.png';
import logo2 from '../assets/logo2d.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im'

const Footer = () => {
    return (
        <footer className="footer w-full flex flex-col gap-4 px-2 md:px-16 py-2">
            <div className='flex flex-col md:flex-row gap-2'>
                <div className='w-full md:w-1/3 h-full flex flex-col gap-4'>
                    <div className='flex justify-center items-center h-full gap-4'>
                        <img src={logo} alt="cusat" />
                        <div className='w-[0.2rem] bg-white h-3/4 rounded-lg'></div>
                        <img src={logo2} alt="cusat" />
                    </div>
                    <div className='footer__card max-w-[400px] p-10 text-white flex gap-2 flex-col'>
                        <p>We're a team focused on creative and innovative solutions.</p>
                        <p>We measure our success by the participation of students in our events.</p>
                    </div>
                </div>

                <div className='w-full md:w-1/3 h-full flex flex-col items-center justify-center gap-6 text-white'>
                    <h4 className='font-bold mt-2 md:mt-6'>IMPORTANT LINKS</h4>
                    <ul>
                        <li>IEEE Official Website</li>
                        <li>IEEE Xplore</li>
                        <li>IEEE Collabratec</li>
                        <li>IEEE Spectrum</li>
                    </ul>
                    <form action="" className='border-2 border-white rounded-full form__bg p-2 text-white flex gap-4'>
                        <input className='bg-transparent' type="text" placeholder='Enter Your Email' />
                        <button className='bg-white flex items-center justify-center px-4 py-2 font-bold rounded-full text-black' type='submit'>Connect</button>
                    </form>
                </div>

                <div className='w-full md:w-1/3 h-full flex flex-col items-center justify-center gap-6 text-white'>
                    <h4 className='font-bold mt-2 md:mt-6'>CONTACT US</h4>

                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-start gap-2 text-lg'>
                            <BsFillTelephoneFill className='text-white text-4xl' />
                            <p>+919334653551<br></br>+919334653551</p>
                        </div>

                        <div className='flex items-center justify-start gap-2 text-lg'>
                            <HiMail className='text-white text-4xl' />
                            <p>ieeesb@cusat.ac.in</p>
                        </div>

                        <div className='flex items-center justify-start gap-2 text-lg'>
                            <ImLocation className='text-white text-4xl' />
                            <p>University Road<br />South Kalamassery<br />Kochi, Kerala</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[0.1rem] bg-white'></div>

            <div className='flex items-center justify-center w-full text-white'>
                <p>Copyright © 2023 IEEE Cusat SB . All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
