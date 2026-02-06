import { Route, Routes } from 'react-router-dom'
import theme from '../themes/theme'
import Home from './pages/Home/Home'
import { ThemeProvider } from '@emotion/react'
import GodAndSex from './pages/God&Sex/God&Sex'
import styled from '@emotion/styled'
import Manhood from '../src/pages/Manhood/Manhood'
import Womanhood from './pages/Womanhood/Womanhood'
import Marriage from './pages/Marriage/Marriage'
import ChastityAndEmpowerment from './pages/Chastity&Empowerment/Chastity&Empowerment'
import PurityAndSex from './pages/Sex&Purity/Sex&Purity'
import TheNaturalLaw from './pages/TheNaturalLaw/TheNaturalLaw'
import ArtificialContraception from './pages/ArtificialContraception/ArteficialContraception'
import SexCanBeCorrupting from './pages/Home/SexCanBeCorrupting'
import HumanFreedom from './pages/Home/HumanFreedom'
import GodIsTheSource from './pages/God&Sex/GodIsTheSource'
import ThreatsToManhood from './pages/Manhood/ThreatsToManhood'
import Homosexuality from './pages/Manhood/Homosexuality'
import FeminismAsThreatToManhood from './pages/Manhood/FeminismAsThreatToManhood'
import Vice from './pages/Manhood/Vice'
import Insemination from './pages/Manhood/Insemination'
import AboutJohnCassidy from './pages/AboutJohnCassidy/AboutJohnCassidy'
import ThreatsToWomanhood from './pages/Womanhood/ThreatsToWomanhood'
import Feminism from './pages/Womanhood/Feminism'
import WorkdomAndSerfdom from './pages/Womanhood/WorkdomAndSefdom'
import MarriageMatters from './pages/Marriage/MarriageMatters'
import SexInMarriage from './pages/Marriage/SexInMarriage'
import Procreation from './pages/Marriage/Procreation'
import ThreatsToMarriage from './pages/Marriage/ThreatsToMarriage'
import WomanAtWell from './pages/Chastity&Empowerment/WomanAtWell'
import Fornication from './pages/Chastity&Empowerment/Fornication'
import SexualTyranny from './pages/Chastity&Empowerment/SexualTyranny'
import SexAndDisgrace from './pages/AboutJohnCassidy/SexAndDisgrace'
import SexAndDisease from './pages/Sex&Purity/SexAndDisease'
import CatholicChurch from './pages/AboutJohnCassidy/CatholicChurch'
import SexualEmpowerment from './pages/AboutJohnCassidy/SexualEmpowerment'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/God&Sex" element={<GodAndSex />} />
                    <Route path="/Manhood" element={<Manhood />} />
                    <Route path="/Womanhood" element={<Womanhood />} />
                    <Route path="/Marriage" element={<Marriage />} />
                    <Route
                        path="/ChastityAndEmpowerment"
                        element={<ChastityAndEmpowerment />}
                    />
                    <Route path="/PurityAndSex" element={<PurityAndSex />} />
                    <Route path="/TheNaturalLaw" element={<TheNaturalLaw />} />
                    <Route
                        path="/ArtificialContraception"
                        element={<ArtificialContraception />}
                    />
                    <Route
                        path="/AboutJohnCassidy"
                        element={<AboutJohnCassidy />}
                    />
                    <Route
                        path="/SexCanBeCorrupting"
                        element={<SexCanBeCorrupting />}
                    />
                    <Route path="/HumanFreedom" element={<HumanFreedom />} />
                    <Route
                        path="/GodIsTheSource"
                        element={<GodIsTheSource />}
                    />
                    <Route
                        path="/ThreatsToManhood"
                        element={<ThreatsToManhood />}
                    />
                    <Route path="/Homosexuality" element={<Homosexuality />} />
                    <Route
                        path="/FeminismAsThreatToManhood"
                        element={<FeminismAsThreatToManhood />}
                    />
                    <Route path="/Vice" element={<Vice />} />
                    <Route path="/Insemination" element={<Insemination />} />
                    <Route
                        path="/ThreatsToWomanhood"
                        element={<ThreatsToWomanhood />}
                    />
                    <Route path="/Feminism" element={<Feminism />} />
                    <Route
                        path="/ArteficialContraception"
                        element={<ArtificialContraception />}
                    />
                    <Route
                        path="/WorkdomAndSerfdom"
                        element={<WorkdomAndSerfdom />}
                    />
                    <Route
                        path="/MarriageMatters"
                        element={<MarriageMatters />}
                    />
                    <Route path="/SexInMarriage" element={<SexInMarriage />} />
                    <Route path="/Procreation" element={<Procreation />} />
                    <Route
                        path="/ThreatsToMarriage"
                        element={<ThreatsToMarriage />}
                    />
                    <Route path="/WomanAtWell" element={<WomanAtWell />} />
                    <Route path="/Fornication" element={<Fornication />} />
                    <Route path="/SexualTyranny" element={<SexualTyranny />} />
                    <Route path="/SexAndDisease" element={<SexAndDisease />} />
                    <Route
                        path="/SexAndDisgrace"
                        element={<SexAndDisgrace />}
                    />
                    <Route
                        path="/CatholicChurch"
                        element={<CatholicChurch />}
                    />
                    <Route
                        path="/SexualEmpowerment"
                        element={<SexualEmpowerment />}
                    />
                </Routes>
            </Container>
        </ThemeProvider>
    )
}

const Container = styled.div`
    background-color: #efefef;
`

export default App
