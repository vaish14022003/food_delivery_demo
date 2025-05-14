

import React from 'react';
import { Button, Box, Typography, TextField } from "../../node_modules/@mui/material";
import Cards from './Cards';

import { useNavigate } from "react-router-dom";



export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            {/* <div className="w-screen h-[90vh] overflow-hidden fixed m-0 p-0  top-0 left-0 mb-4 bg-black"> */}
            <div className="w-screen h-[90vh] relative m-0 p-0  mb-4 bg-black">
                <img
                    src="https://zomato-landing-page.netlify.app/Images/Nav.jpg"
                    alt="Full-screen background"
                    // className="w-full h-[80vh] object-cover scale-x-150 fixed top-0 left-0"
                    className="w-full h-[90vh] object-cover absolute top-0 left-0 -z-10"
                />

                {/* Top Right Buttons */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "6px",
                        right: "6px",
                        zIndex: 20,
                        display: "flex",
                        gap: 2,
                    }}
                >
                    {/* {["Login", "Sign Up", "Add Restaurants"].map((label, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                                if (label === "Login") navigate("/login");
                                // You can add other routes for "Sign Up" or "Add Restaurants" if needed
                            }}
                            sx={{
                                backgroundColor: "white",
                                borderColor: "white",
                                color: "hotpink",
                                fontSize: "16px",
                                padding: "12px 24px",
                                borderRadius: "13px",
                                marginRight:"25px",
                                "&:hover": {
                                    backgroundColor: "pink",
                                    color: "white",
                                },
                            }}
                        >
                            {label}
                        </Button>
                    ))} */}{["Login", "Sign Up", "Add Restaurants"].map((label, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                                if (label === "Login") navigate("/login");
                                // You can add other routes for "Sign Up" or "Add Restaurants" if needed
                            }}
                            sx={{
                                backgroundColor: "white",
                                borderColor: "white",
                                color: "hotpink",
                                fontSize: "16px",
                                padding: "12px 24px",
                                borderRadius: "13px",
                                marginRight: "25px",
                                "&:hover": {
                                    backgroundColor: "pink",
                                    color: "white",
                                },
                            }}
                        >
                            {label}
                        </Button>
                    ))}

                </Box>

                {/* Center Logo + Text + Search */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <img
                        src="https://media-hosting.imagekit.io/998ec5d5bb994b50/zomato_logo.webp?Expires=1841659745&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZNpCUDaP1g8NPlBeVqjoIzqkKr7uTAlrnvQ0yorHtmxl6-mNtra5zmGE4GEThiKeV~uAsE3K0~uE4PN3CwIOBwhrPUt228Zvcb3370mzy-BcQxeRnQQkOgEcmoaKji6Ky4ieH84iHsSU0accmUe91aI8cgOxJ3lrQ~CxH2kZsqVmHWVYoyzbGyrObVzIPCahLkKaW~ChKmV1KGTTmqFh~WYCKjvQa9gGc0V4NpsSB9eDqnD3cB9o4dwZAG3wGITRz8PyAdAXnuZ9sCPq3~0DozAG9IwUNfxp0IDlsMtg9jEQrNhwNALPdN3kO~p~USPzONwpu6PEIIMtPkkySNIm6g__"
                        alt="Zomato logo"
                        className="w-32 bg-transparent"
                    />

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            mt: 5,
                            px: 2,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "white",
                                fontFamily: '"Ubuntu", sans-serif',
                                fontWeight: 300,
                                letterSpacing: "0.5px",
                                marginTop: "35px",
                                textAlign: "center",
                            }}
                        >
                            Discover the best food & drinks in Delhi
                        </Typography>

                        {/* Search Box */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                mt: 4,
                                backgroundColor: "white",
                                borderRadius: "8px",
                                padding: "10px",
                                width: "90%",
                                maxWidth: "800px",
                                boxShadow: 3,
                            }}
                        >
                            <TextField
                                variant="outlined"
                                placeholder="Enter location"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <i
                                            className="fas fa-map-marker-alt"
                                            style={{ marginRight: "10px", color: "#888" }}
                                        />
                                    ),
                                }}
                            />

                            <TextField
                                variant="outlined"
                                placeholder="Search for restaurants, cuisines or dishes"
                                fullWidth
                            />
                        </Box>
                    </Box>
                </div>






            </div>


            {/* <div className=" flex "><Cards /></div> */}
            <div className="mt-[10vh] px-8 py-12">
                <Cards />
            </div>

        </>
    );
}
