import React from "react"
import Paper from "@material-ui/core/Paper"
import styled from "styled-components"
import MuiCard from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import MuiCardContent from '@material-ui/core/CardContent'
import MuiCardMedia from '@material-ui/core/CardMedia'
import LocationOn from "@material-ui/icons/LocationOn"

// $color1: rgba(5, 102, 141, 1);
// $color2: rgba(127, 127, 127, 1);
// $color3: rgba(165, 165, 165, 1);
// $color4: rgba(240, 243, 245, 1);
// $color5: rgba(4, 167, 119, 1);


const Page = styled.div`
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 100;

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
`;
const Header = styled.div`
    height: 75vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-image:
        linear-gradient(
            to bottom right,
            rgba(5, 102, 141, .8),
            rgba(4, 167, 119, .8)
        ),
        url("images/kitchen-bg.jpg");

    color: rgba(240, 243, 245, 1);
`;

const Title = styled.div`
    font-size: 8rem;
    margin-bottom: 2rem;

    @media only screen and (max-width: 1200px) {
        font-size: 6rem;
    }

    @media only screen and (max-width: 800px) {
        font-size: 4rem;
    }
`;

const Deck = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(165, 165, 165, .2);
    box-shadow: 0 0 60px 0px;
    z-index: 10;
`;

const Card = styled(MuiCard)`
    max-width: 20rem;
    margin: 1rem;
    transition: all .2s;

    &:hover {
        transform: scale(1.1);
    }
`

const CardMedia = styled(MuiCardMedia)`
    width: 20rem;
    height: 20rem;
`

const CardContent = styled(MuiCardContent)`
    background-image: linear-gradient(
        to right,
        rgba(240, 243, 245, 1) 50%,
        rgba(4, 167, 119, 1) 50%
    );
    background-size: 200% 100%;
    background-position: left bottom;
    transition: all .4s ease-in;

    &:hover {
        background-position: right bottom;
        color: rgba(240, 243, 245, 1);
    }
`;

const Stats = styled.div`
    height: 75vh;
    font-size: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-image:
        linear-gradient(
            to bottom right,
            rgba(5, 102, 141, .8),
            rgba(4, 167, 119, .8)
        ),
        url("images/kitchen-bg-2.jpg");
    color: rgba(240, 243, 245, 1);

    @media only screen and (max-width: 1200px) {
        font-size: 4rem;
    }

    @media only screen and (max-width: 800px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 2rem;
    }
`;

const MoneyFormat = styled.div``;
const Link = styled.a`
    text-decoration: underline;
    color: inherit;
`;
const Details = styled.div``;
const Subtitle = styled.div``;
const Love = styled(Subtitle)`
    background-color: #333232;
    border-radius: 3px;
    padding: .5rem;
`;
const Footer = styled.div`
    height: 25vh;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-image: url("images/location-background.jpg");
    color: rgba(5, 102, 141, 1);
    cursor: pointer;

    span {
        transition: all .2s;
    }
    
    &:hover > span {
        font-weight: 200;
        transform: scale(1.1);
    }

    @media only screen and (max-width: 900px) {
        font-size: 2rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 1.8rem;
    }
`;

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            image1: 1,
            image2: 1,
            image3: 1,
            image4: 1,
        }
    }

    setImage = (img, num) => {
        if (img === 1) { this.setState({ image1 : num }) }
        if (img === 2) { this.setState({ image2 : num }) }
        if (img === 3) { this.setState({ image3 : num }) }
        if (img === 4) { this.setState({ image4 : num }) }
    }

    render() {
        const { image1, image2, image3, image4 } = this.state;
        return (
            <Page>
                <Paper square>
                    <Header>
                        <Title>1 Million Dollar Kitchens</Title>
                        <Love>Made with <span role="img" aria-label="heart">❤️</span> by <Link href="https://github.com/fgarcia-student">Francisco</Link></Love>
                    </Header>
                    <Deck>
                        <Card>
                            <CardActionArea>
                                    <CardMedia
                                        image={`images/kitchen-1-${image1}.jpg`}
                                        title="1 Million"
                                        onClick={() => image1 === 1 ? this.setImage(1,2) : this.setImage(1,1)}
                                    />
                                <CardContent onClick={() => window.open("https://www.zillow.com/homes/for_rent/house,mobile,land,townhouse_type/63074403_zpid/41.359803,-73.250999,41.284127,-73.361721_rect/12_zm/", "_blank")}>
                                    <Details>
                                        4 BR 4.5 BA 5,224sq ft.
                                    </Details>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    image={`images/kitchen-2-${image2}.jpg`}
                                    title="1 Million"
                                    onClick={() => image2 === 1 ? this.setImage(2,2) : this.setImage(2,1)}
                                />
                                <CardContent onClick={() => window.open("https://www.zillow.com/homes/for_rent/house,mobile,land,townhouse_type/106044711_zpid/30.912535,-91.083698,30.826044,-91.19442_rect/12_zm/", "_blank")}>
                                    <Details>
                                        4 BR 3.5 BA 4,196sq ft.
                                    </Details>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    image={`images/kitchen-3-${image3}.jpg`}
                                    title="1 Million"
                                    onClick={() => image3 === 1 ? this.setImage(3,2) : this.setImage(3,1)}
                                />
                                <CardContent onClick={() => window.open("https://www.zillow.com/homes/for_rent/house,mobile,land,townhouse_type/24269607_zpid/43.358012,-86.333141,43.284703,-86.443863_rect/12_zm/", "_blank")}>
                                    <Details>
                                        4 BR 7 BA 7900sq ft.
                                    </Details>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    image={`images/kitchen-4-${image4}.jpg`}
                                    title="1 Million"
                                    onClick={() => image4 === 1 ? this.setImage(4,2) : this.setImage(4,1)}
                                />
                                <CardContent onClick={() => window.open("https://www.zillow.com/homes/for_rent/house,mobile,land,townhouse_type/102177169_zpid/35.396467,-81.985474,35.314285,-82.096195_rect/12_zm/", "_blank")}>
                                    <Details>
                                        2 BR 4 BA 2986sq ft.
                                    </Details>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Deck>
                    <Stats>
                        <Subtitle>The average American spends</Subtitle>
                        <MoneyFormat>&#65284;21,751.00</MoneyFormat>
                        <Subtitle>on kitchen remodels</Subtitle>
                    </Stats>
                    <Footer onClick={() => window.open("https://www.google.com/search?q=kitchen+remodelers+near+me", "_blank")}><span><LocationOn fontSize="inherit" />Find Remodelers in your area</span></Footer>
                </Paper>
            </Page>
        )
    }
}

export default Main
