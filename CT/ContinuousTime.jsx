import Cardcomp from "../Cardcomp";

function ContinuousTime()
{

    return  <div
    style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" ,transform:"translate(0px, 80px)"}}
  >
        <div className="card-hover" 
          onClick={()=>{
            window.location="/continuousTime/Ctft";
                }}>
          <Cardcomp
          width="267px"
            bgim="linear-gradient(to bottom,rgba(120, 2, 6, 1), rgba(6, 17, 97,0.5)),url(../src/assets/ft.jpg)"
            title="Fourier Transform"
            shadow="0px 10px 30px rgba(0, 0, 0, 1) "
            description={
              <div style={{width:"240px"}}>
                <div>
                  {"\u25CF"}  {"\u0396"} 
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"}
                </div>
              </div>
            }
            />
        </div>

        <div className="card-hover" 
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
          width="267px"
            bgim="linear-gradient(to bottom,rgba(122, 106, 85, 1), rgba(92, 68, 55, 0.8)),url(../src/assets/fs.jpg)"
            title="Fourier Series Visualization"
         shadow=   "0px 10px 30px rgba(0, 0, 0, 1) "
            description={
              <div style={{width:"240px"}}>
                <div>
                  {"\u25CF"} Interepretetion & visualisation of DTFT, DFT, {"\u0396"} Transform for discrete time & digital signals
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Various types of convolutions & animations for Discrete time signals
                </div>
              </div>
            }
            />
        </div>
        <div className="card-hover" 
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
          width="267px"
            bgim="linear-gradient(to bottom,rgba(103, 72, 110, 1), rgba(68, 15, 80, 0.5)),url(../src/assets/Lt.jpg)"
            title="Laplace Transform"
            shadow="0px 10px 30px rgba(0, 0, 0, 1) "
            description={
              <div style={{width:"240px"}}>
                <div>
                  {"\u25CF"} Interepretetion & visualisation of DTFT, DFT, {"\u0396"} Transform for discrete time & digital signals
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Various types of convolutions & animations for Discrete time signals
                </div>
              </div>
            }
            />
        </div>
        <div className="card-hover" 
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
          width="267px"
            bgim="linear-gradient(to bottom,rgba(60, 100, 69, 1), rgba(40, 50, 31, 0.5)),url(../src/assets/convlu.jpg)"
            title="Convolution Animation"
            shadow="0px 10px 30px rgba(0, 0, 0, 1) "
            description={
              <div style={{width:"240px"}}>
                <div>
                  {"\u25CF"} Interepretetion & visualisation of DTFT, DFT, {"\u0396"} Transform for discrete time & digital signals
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Various types of convolutions & animations for Discrete time signals
                </div>
              </div>
            }
            />
        </div>

    </div>
}

export  default ContinuousTime;