import { makeStyles } from "@material-ui/core/styles";
import '../../style.css'


export default makeStyles(()=>({
    footerContainer:{
        width: "100%",
        background:" var(--NavBarColor)",
        color: "white",
        padding: "5px 10px",
    },
    row:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
    },
    copyRights:{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        minHeight: "20%",
    },
    contactInfo:{
    },
    contactdetails:{
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        cursor: "pointer",
        '& i':{
            transition: "all .5s ease-in",
            margin:"8px",
            '&:nth-child(3)':{
                borderRadius: "4px",       
            },
        
            '&:nth-child(1)':{
                '&:hover':{
                    color:" #6CADDE",
                    transform:"scale(1.1)",
                },
            },
            '&:nth-child(2)':{
                '&:hover':{
                    color:" #43609C",
                    transform:"scale(1.1)",
                },
            },
            '&:nth-child(3)':{
                '&:hover':{
                    transform:"scale(1.1)",
                    background: "linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)",
                },
            },
            '&:nth-child(4)':{
                '&:hover':{
                    color:" #0e76a8",
                    transform:"scale(1.1)",

                },
            },
            '&:nth-child(5)':{
                '&:hover':{
                    color:" #F4CBB2",
                    transform:"scale(1.1)",
                },
            },
            '&:nth-child(6)':{
                '&:hover':{
                    color:" #075e54",
                    transform:"scale(1.1)",

                },
            },
        },
    },
    logo:{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        '& img':{
            width: "84px",
            height:"84px",
            fontFamily: "var(--SourceCodePro)",
            filter:"invert(1)",
        },
    },
    footerother:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "10px",
    },
    FooterCollections:{
        padding: "20px",
        margin: "0 20px",
    },
    legal:{
        padding: "20px",
        margin: "0 20px",
    },

}));