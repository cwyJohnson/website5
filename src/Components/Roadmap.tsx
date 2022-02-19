import styled from "styled-components";

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
const ListItem = styled("li")`
    margin-top: 10px;
`

const Roadmap =() =>{
    return (
        <Container id="Roadmap">
            <h1>Roadmap</h1>
            <h2>Q1 2022</h2>
            <ul style={{ padding:'0px 20%'}}>
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
            <h2>Q2 2022</h2>
            <ul>
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
            <h2>Q3 2022</h2>
            <ul> 
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
            <h2>Q4 2022</h2>
            <ul>
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
        </Container>
    )
}

export default Roadmap;