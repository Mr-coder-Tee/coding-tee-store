import { makeStyles } from "@material-ui/core/styles";
import '../../style.css'

export default makeStyles(()=>({

    NavContainer:{
        width: "100%",
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
        justifyContent:"center",
        alignItems: "center",
        cursor: "pointer",
        transition:"all 1s ease-in-out",
        padding: "5px",
        '&:hover':{
            background: "rgba(128, 128, 128,.1)",
        },
        '& img':{
            width: "40px",
            height: "40px",
            color:"white",
            filter:"invert(1)",
        },
        '& h2':{
            fontFamily: "var(--SourceCodePro)",
            color:"white",
        }

    },
    NavContainerLogoH:{
        fontFamily: "var(--SourceCodePro)",
    },
    btn:{
        color:"white",
        transition:" 1s ease-in-out",
        padding:"15px",
        '&:hover':{
            background:"white",
            color:"black",
        },
    },

}));