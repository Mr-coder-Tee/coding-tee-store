import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(()=>({
    collectioncard:{
        position: "relative",
        top: "0",
        width: "300px", 
        height: "350px",
        margin: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.349)",
        borderRadius: "10px",
        fontFamily: "'Courier New', monospace",
        overflow: "hidden",
        '&:hover':{
            '& img':{
                height: "80%",
            },
            productDetails:{
                background: "coral",
                opacity: "1",
            },
        },
    },
    collectionImgbx:{
        width: "100%",
        height: "100%",
        '& img':{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: ".5s ease-in",
        },
    },
    productDetails:{
        position: "absolute",
        width: "100%",
        height: "20%",
        bottom: "0",
        padding: "10px",
        opacity: "1",
        transition: ".5s",
        zIndex: "999",
    },

}));



/*

*/