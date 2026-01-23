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
import ArteficialContraception from './pages/ArteficialContraception/ArteficialContraception'
import SexCanBeCorrupting from './pages/Home/SexCanBeCorrupting'
import HumanFreedom from './pages/Home/HumanFreedom'
import GodIsTheSource from './pages/God&Sex/GodIsTheSource'
import ThreatsToManhood from './pages/Manhood/ThreatsToManhood'
import Homosexuality from './pages/Manhood/Homosexuality'
import FemenismAsThreatToManhood from './pages/Manhood/FemenismAsThreatToManhood'
import Vice from './pages/Manhood/Vice'
import Insemination from './pages/Manhood/Insemination'
import AboutJohnCassidy from './pages/AboutJohnCassidy/AboutJohnCassidy'

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
                        path="/ArteficialContraception"
                        element={<ArteficialContraception />}
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
                        path="/FemenismAsThreatToManhood"
                        element={<FemenismAsThreatToManhood />}
                    />
                    <Route path="/Vice" element={<Vice />} />
                    <Route path="/Insemination" element={<Insemination />} />
                </Routes>
            </Container>
        </ThemeProvider>
    )
}

const Container = styled.div`
    background-color: #efefef;
`

export default App
