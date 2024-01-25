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
            bgim="linear-gradient(to bottom,rgba(81, 93, 69, 1), rgba(48, 70, 31, 0.5)),url(../src/assets/convl.jpg)"
            title="Convolution Animation"
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