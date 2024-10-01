import { Box, Button, ButtonGroup, IconButton, Modal, Paper, Popover, Typography } from '@mui/material'
import { ImCross } from "react-icons/im";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import Logo from '../../assets/logos/logo.png';
import React from 'react'
import zIndex from '@mui/material/styles/zIndex';


const style = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -45%)',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "15px",
    p: 4,
    zIndex: 5000,
};


const PopupModal = ({ open, setOpen, firstPop, setFirstPop, title, img }) => {
    const handleClose = () => {
        setOpen(false);
        if (firstPop) {
            setFirstPop(false);
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ zIndex: "5000" }}
        >
            <Paper elevation={8}>
                <Box
                    sx={style}
                    className="min-w-[200px] w-[350px] md:h-[480px] sm:w-[500px] relative">
                    <button
                        className='absolute right-4 top-4 z-[1000]'
                        onClick={handleClose}
                    >
                        <ImCross className='text-[20px] opacity-30 hover:opacity-50 transition-opacity duration-150 ' />
                    </button>
                    <div>
                        <div className='flex items-center gap-1'>
                            <img
                                src={Logo}
                                alt="logo"
                                loading='lazy'
                                className='w-[50px] h-[50px] -mt-3'
                            />
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                                fontSize={24}
                                fontWeight={600}
                                color={"#10439F"}
                                fontFamily={"Poetsen One"}
                                className='opacity-85'
                            >
                                JETSETTERS
                            </Typography>
                            <img
                                src={img}
                                className='w-[30px] h-[25px]'
                                loading='lazy'
                            />
                        </div>
                        <div
                            className='text-[#3c5598aa] sm:text-xl text-base sm:mt-5 sm:pl-5'
                        >
                            <p>Find Cheapest {title}</p>
                            <p>Get 20% off upto 40$ on your first booking.</p>
                        </div>
                    </div>
                    <div className='flex mt-5 gap-x-3 items-center justify-between sm:pl-5'>
                        <a href="tel:+18885813028">
                            <IconButton
                                size='large'
                                aria-label='Call'
                                color='primary'
                                className='group'
                            >
                                <IoCallSharp className='group-hover:scale-[1.1] md:text-[50px] transition-transform duration-300' />
                            </IconButton>
                        </a>
                        <a href="https://wa.me/+14088999705" target="_blank" rel="noopener noreferrer">
                            <IconButton
                                size='large'
                                aria-label='whatsapp'
                                sx={{ color: "#47d94a" }}
                                className='group'
                            >
                                <IoLogoWhatsapp className='group-hover:scale-[1.1] md:text-[50px] transition-transform duration-300' />
                            </IconButton>
                        </a>
                        <a href="mailto:bookings@jetsetterss.com">
                            <IconButton
                                size='large'
                                aria-label='mail'
                                sx={{ color: "#eb4545" }}
                                className='group'
                            >
                                <IoMail className='group-hover:scale-[1.1] md:text-[50px] transition-transform duration-300' />
                            </IconButton>
                        </a>
                    </div>
                    <div className='flex flex-col mt-10 gap-y-1 items-center text-heading-text sm:pl-5'>
                        <div className='mb-5'>
                            <p className='sm:text-sm md:text-base font-medium text-[#3c5598cd] text-center'>PHONE SPECIAL SUPER DEALS</p>
                            <p className='text-sm text-[10px] font-medium text-[#3c5598cb] text-center'>let's connect you with our team via call or email to get started with your travel plans</p>
                        </div>
                        <Typography variant='h6'>
                            <a href="tel:+18885813028" className='font-medium sm:text-3xl text-xl sm:ml-2'>
                                +1-888-581-3028
                            </a>
                        </Typography>
                        <Typography variant='h6'>
                            <a href="mailto:bookings@jetsetterss.com" className='font-medium sm:text-3xl text-xl sm:ml-2'>
                                bookings@jetsetterss.com
                            </a>
                        </Typography>

                    </div>
                </Box>
            </Paper>
        </Modal>
    )
}

export default PopupModal