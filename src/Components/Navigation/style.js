import { makeStyles } from "@material-ui/core/styles";
import '../../style.css'

export default makeStyles(()=>({

    NavContainer:{
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: "space-between",
        aligniItems: "center",
        padding: "5px 10px",
        border: "2px solid rgba(0, 0, 0, .09)",
        marginBottom:"10px",
        background:"var(--NavBarColor)",
    },
    NavContainerLogo:{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        transition:" 1s ease-in-out",
        padding: "5px",
        border: "2p solid red", 
        '&:hover':{
            background: "rgb(128, 128, 128,.1)",
        },
        '& img':{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
        },

    },
    NavContainerLogoH:{
        fontFamily: "var(--SourceCodePro)",
    },

}));