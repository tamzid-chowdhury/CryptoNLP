import {React, useState, useEffect, createRef, useRef} from 'react';
import { Box, Text, Grid, Center, Icon, Tooltip, VStack , Button, IconButton, HStack} from '@chakra-ui/react';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import { useHistory } from 'react-router-dom';
import ChartContainer from './ChartContainer.js'
import BarChart1 from './BarChart1'
import BarChart2 from './BarChart2'
import { Bar } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer'
import "react-tabulator/lib/styles.css"; // default theme
// --- Comment out the Theme you want to try:
//import "react-tabulator/css/tabulator.min.css"; // default
//import "react-tabulator/css/tabulator_modern.min.css"; // default
// import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // bootstrap
//import "react-tabulator/css/bulma/tabulator_bulma.min.css"; // bulma
//import "react-tabulator/css/semantic-ui/tabulator_semantic-ui.min.css"; // semantic
//import "react-tabulator/css/materialize/tabulator_materialize.min.css"; // meterialize
import "react-tabulator/css/tabulator_midnight.css"; // meterialize
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdLogin, MdHome } from 'react-icons/md';
import Slider from "react-slick";

import data from './Data.js'

// for React 16.4.x use: import { ReactTabulator }
import { ReactTabulator } from "react-tabulator"; // for React 15.x
import { propsToOptions } from 'react-tabulator/lib/ConfigUtils';
import RegulationPage from './RegulationPage';
import InvestmentPage from './InvestmentPage';

const MotionBox = motion(Box);
const MotionText = motion(Text);

function TestPage(props) {
    const [isShow, setIsShow] = useState(true);

    const [currentSection, setCurrentSection] = useState("regulation")

    const menuVariants = {
        hidden: {
            opacity:0, x:-100,
         transition: {
            delay: 0.1,
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
            opacity:1, x:0,
          transition: {
            delay: 0.4,
            type: "spring",
            duration: 1,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };

    return (
        <Box h="285vh">
            <Box h="5vh">
            <Grid templateColumns="2fr 13fr 1fr">
                <Box ></Box>
                    {currentSection == "regulation" && <MotionText variants={menuVariants} initial="hidden" animate="visible" exit="hidden" color="lightgrey" borderBottom="1px" marginTop="2vh" fontSize="4xl">NLP CRYPTO: {currentSection.toUpperCase()}</MotionText>}
                    {currentSection == "institutional investment" && <MotionBox variants={menuVariants} initial="hidden" animate="visible" exit="hidden" color="lightgrey" borderBottom="1px" marginTop="2vh" fontSize="4xl">NLP CRYPTO: {currentSection.toUpperCase()}</MotionBox>}
                <Box></Box>
            </Grid>
                <MotionBox whileHover={{scale:1.05}} variants={menuVariants} initial="hidden" animate="visible" exit="hidden" w="7vw" h="13vh" bgColor="rgb(32, 40, 53, 0.5)" borderRightRadius="5%" top="4vh"position="fixed">
                    <Box margin="10px">
                        <VStack color="white" spacing='2px'>
                            <Text borderBottom="1px" variant='ghost' _hover={{color:"white"}}>Choose a Topic</Text>
                            <Text as='b' textAlign="center" variant='ghost' _hover={{color:"#E1D9D1"}} onClick={() => {setCurrentSection("regulation")}} color={currentSection == "regulation" ? "red.300":"white"}> Regulation</Text>
                            <Text as='b' textAlign="center" variant='ghost' _hover={{color:"#E1D9D1"}} onClick={() => {setCurrentSection("institutional investment")}} color={currentSection == "institutional investment" ? "red.300":"white"}> Institutional Investment</Text>
                        </VStack>
                    </Box>
                </MotionBox>
            </Box>
            {currentSection == "regulation" && <RegulationPage onOpen={props.onOpen}/>}
            {currentSection == "institutional investment" && <InvestmentPage onOpen={props.onOpen}/>}
        </Box>
    );
}

export default TestPage;
