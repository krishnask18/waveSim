import { Card, Typography } from '@mui/material';
import { MentionsInput, Mention } from 'react-mentions'
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useTheme,createTheme,ThemeProvider} from "@mui/material/styles";
import TextInput from 'react-autocomplete-input';
import Autocomplete from '@mui/material/Autocomplete';
import AutoSuggestions from './Autocomplete2';
import { Button } from '@mui/base';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';


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
        
        <div style={{transform:"translate(30px, 80px)",color:"#9bbfa2"}}>
        <center>
            <div  >
        <Card className="full-list" style={{backgroundColor:"rgba(34, 80, 77, 1)",width:1100  , height:330, padding:20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 1) ",
        borderTopLeftRadius: 20, marginRight:10}}>
            <br/>
            <div style={{display:"flex"}}>
            <Typography variant='h5'style={{fontWeight:"bold",color:"white", fontFamily:"Kaushan Script",transform:"translate(-5px,0)"}} align='left'>X</Typography>
            <Typography variant='h5'style={{color:"white", transform:"translate(0px,0px)"}} >(t) =    </Typography>
            <ThemeProvider theme={mytheme} >
              <AutoSuggestions style={{fontFamily:"Poppins"}} >
               </AutoSuggestions> 
               {/* <div style={{}}>
               <Button variant="contained" style={{
                fontSize:18,
               transform:"translate(30px,-9px)",
               height:55,
              //  width:55,
               borderBottomRightRadius: 10,
               borderBottomLeftRadius: 10,
               borderTopRightRadius: 10,
              //  boxShadow: "0px 2px 7px rg ba(0, 0, 0, 1) ",
               borderTopLeftRadius: 10, marginRight:10
               }}>Send</Button>
               </div>  */}
               

                  
</ThemeProvider>
        </div>

       
        </Card>
        </div>

        </center>
        </div>

        
        <div style={{transform:"translate(600px,px)"}}>
          
        </div>
   
        
      
    </div>
}

export default FourierTransform;