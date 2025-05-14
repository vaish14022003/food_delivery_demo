
// import React from "react";
// import { Card, CardContent, Typography } from "@mui/material";

// const features = [
//     {
//         title: "Order Food Online",
//         img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//     },
//     {
//         title: "Go Out for a Meal",
//         img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
//     },
//     {
//         title: "Zomato Pro",
//         img: "https://cdn-icons-png.flaticon.com/512/3176/3176292.png",
//     },
//     {
//         title: "Night Parties",
//         img: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
//     },
// ];

// const FeatureCards = () => {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {features.map((feature) => (
//                 <Card
//                     key={feature.title}
//                     sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         padding: 3,
//                         textAlign: "center",
//                         borderRadius: 3,
//                         boxShadow: 3,
//                         transition: "transform 0.3s ease",
//                         "&:hover": {
//                             transform: "scale(1.05)",
//                         },
//                     }}
//                 >
//                     <img src={feature.img} alt={feature.title} className="w-16 h-16 mb-3" />
//                     <CardContent>
//                         <Typography variant="h6" fontWeight="bold">
//                             {feature.title}
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default FeatureCards;


// import React from "react";
// import { Card, CardContent, Typography } from "@mui/material";
// import './Cards.css';
// const features = [
//     {
//         title: "Order Food Online",
//         // img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//     },
//     {
//         title: "Go Out for a Meal",
//         // img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
//     },
//     {
//         title: "Zomato Pro",
//         // img: "https://cdn-icons-png.flaticon.com/512/3176/3176292.png",
//     },
//     {
//         title: "Night Parties",
//         // img: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
//     },
// ];

// const FeatureCards = () => {
//     return (
//         <div className="flex gap-6 justify-center">
//             {features.map((feature) => (
//                 <Card
//                     key={feature.title}
//                     sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         // padding: 3,
//                         textAlign: "center",
//                         borderRadius: 3,
//                         boxShadow: 3,



//                         transition: "transform 0.3s ease",
//                         "&:hover": {
//                             transform: "scale(1.05)",
//                         },
//                     }}
//                 >
//                     <img src={feature.img} alt={feature.title} className="w-16 h-16 mb-3" />
//                     <CardContent>
//                         <Typography variant="h6" fontWeight="bold">
//                             {feature.title}
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default FeatureCards;


// import React from "react";
// import { Card, CardContent, Typography, Box } from "@mui/material";
// import './Cards.css';

// const features = [
//     {
//         title: "Order Food Online",
//         // img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//     },
//     {
//         title: "Go Out for a Meal",
//         // img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
//     },
//     {
//         title: "Zomato Pro",
//         // img: "https://cdn-icons-png.flaticon.com/512/3176/3176292.png",
//     },
//     {
//         title: "Night Parties",
//         // img: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
//     },
// ];

// const FeatureCards = () => {
//     return (
//         <Box
//             display="flex"
//             gap={6}
//             justifyContent="center"
//             alignItems="flex-start"
//             mt={-2}  // Negative margin to shift the cards up
//         >
//             {features.map((feature) => (
//                 <Card
//                     key={feature.title}
//                     sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         textAlign: "center",
//                         borderRadius: 3,
//                         boxShadow: 3,
//                         width: "180px",  // Fixed width for uniformity
//                         height: "250px", // Fixed height
//                         transition: "transform 0.3s ease",
//                         "&:hover": {
//                             transform: "scale(1.05)",
//                         },
//                     }}
//                 >
//                     <img
//                         src={feature.img}
//                         alt={feature.title}
//                         className="card-img"
//                     />
//                     <CardContent>
//                         <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "14px" }}>
//                             {feature.title}
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             ))}
//         </Box>
//     );
// };

// export default FeatureCards;


import React from "react";
import { Card, CardContent, Typography, Box } from "../../node_modules/@mui/material";
import './Cards.css';

const features = [
    {
        title: "Order Food Online",
        // img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJONjy2OMNkKD59daWaW1FMOp-pHN7VAQlw&s"
    },
    {
        title: "Go Out for a Meal",
        // img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHt68qvAzB8TTofyPygJv2nJakzpF04UPlg&s"
    },
    {
        title: "Zomato Pro",
        // img: "https://cdn-icons-png.flaticon.com/512/3176/3176292.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp33gzDSluI50ub62kRWcLgF_eF0rGAH_xfw&s"
    },
    {
        title: "Night Parties",
        // img: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDZhirQmE9mS3Ss6J7EE1hwLrkRv3ppaOeQ&s"
    },
];

const FeatureCards = () => {
    return (
        <Box
            display="flex"
            gap={6}
            justifyContent="center"
            alignItems="flex-start"
            sx={{ height: "100vh", flexDirection: "row" }}
        >
            {features.map((feature) => (
                <Card
                    key={feature.title}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        borderRadius: 3,
                        boxShadow: 3,
                        width: "300px",
                        height: "300px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}
                >
                    <img
                        src={feature.img}
                        alt={feature.title}
                        className="card-img"
                    />
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "14px" }}>
                            {feature.title}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default FeatureCards;
