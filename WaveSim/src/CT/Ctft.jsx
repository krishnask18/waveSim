import { Card, Typography } from '@mui/material';
import { MentionsInput, Mention } from 'react-mentions'
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useTheme,createTheme,ThemeProvider} from "@mui/material/styles";
import TextInput from 'react-autocomplete-input';
import Autocomplete from '@mui/material/Autocomplete';
import AutoSuggestions from './Autocomplete2';

const mytheme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
        
      },

      
      text:{
        primary: "#FFFFFF",
        fontFamily:"Kaushan Scripts",
        fontSize: 25,
      }
    
    }
  });



function FourierTransform()
{   
    
    const[expression, setExpression]= useState("");
  
    useEffect(()=>{


    },[]);

   
    return <div>
        
        <div style={{transform:"translate(0px, 80px)",color:"#9bbfa2"}}>
        <center>
            <div  >
        <Card className="full-list" style={{backgroundColor:"#506060",width:1070  , height:330, padding:20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20, marginRight:10}}>
            <br/>
            <div style={{display:"flex"}}>
            <Typography variant='h5'style={{fontWeight:"bold",color:"white", fontFamily:"Kaushan Script",transform:"translate(-5px,0)"}} align='left'>X</Typography>
            <Typography variant='h5'style={{color:"white", transform:"translate(0px,0)"}} >(t) =    </Typography>
            <ThemeProvider theme={mytheme} >
              <AutoSuggestions style={{fontFamily:"Poppins"}} ></AutoSuggestions>

                  
</ThemeProvider>
        </div>
        </Card>
        </div>

        </center>
        </div>
                        
   
        
      
    </div>
}

export default FourierTransform;