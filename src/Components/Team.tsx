import styled from "styled-components";
import Jason from './assets/jason.png';
import Rain from './assets/rain.png';
import Suki from './assets/suki.png';
import Bill from './assets/bill.png';
import Johnson from './assets/johnson.png';
import Charon from './assets/charon.png';


const Container = styled("div")`
width: 90%;
background-color: white;
margin:auto;
margin-top:100px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Name = styled("h2")`
text-align: center;
font-size: 1.5rem;
`


const TeamImage = styled("img")`
width:100%;
`

const Team =() =>{
    return (
        <Container id="Team">
            <h1>Team</h1>
            <div className="contrainer">
            <div className="row">
                <div className="col-sm">
                    <TeamImage src={Jason} alt="Jason"/>
                    <Name>Jason</Name>
                </div>
                <div className="col-sm">
                    <TeamImage src={Suki} alt="Suki"/>
                    <Name>Suki</Name>
                </div>
                <div className="col-sm">
                    <TeamImage src={Johnson} alt="Johnson"/>
                    <Name>Johnson</Name>
                    </div>
                </div>
                <div className="row">
                <div className="col-sm">
                    <TeamImage src={Rain} alt="Rain"/>
                    <Name>Rain</Name>
                </div>
                <div className="col-sm">
                    <TeamImage src={Bill} alt="Bill"/>
                    <Name>Bill</Name>
                </div>
                <div className="col-sm">
                    <TeamImage src={Charon} alt="Charon"/>
                    <Name>Charon</Name>
                    </div>
                </div>
                <br></br>
            </div>
        </Container>
        
        

    )
}

export default Team;