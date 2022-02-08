import {React, useState, useEffect} from 'react';
import { Box, Text, Grid, Center, Icon, Tooltip, VStack } from '@chakra-ui/react';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import {article1} from "./article1.json";
import {article2} from "./article2.json";
import Article from './Article'
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

import data from './Data.js'

// for React 16.4.x use: import { ReactTabulator }
import { ReactTabulator } from "react-tabulator"; // for React 15.x


const MotionBox = motion(Box);

function TestPage() {

    const [currentSection, setCurrentSection] = useState("rel")

    const {ref, inView} = useInView({
        threshold: 0.6
    });

    const {ref:ref1, inView:inView1} = useInView({
        threshold: 0.2
    });


    const [showGraphs, setShowGraphs] = useState(false);

    useEffect(() => {
        if(inView){
            setCurrentSection("gph")
        }
        else if(inView1){
            setCurrentSection("tbl")
        }
        else{
            setCurrentSection("rel")
        }
        
    }, [inView1, inView])

    useEffect(() => {
        if(inView1){
            animation2.start({
                scale: 1,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    y: {
                        delay: 0.1
                    }
                }
            })
        }
        if(!inView1){
            animation2.start({
                scale: 0.8,
                opacity:0
            })
        }
        
    }, [inView1])


    useEffect(() => {
        if(inView){
            setShowGraphs(true)
        }
        else{
            setShowGraphs(false)
        }
        
    }, [inView])

    const animation = useAnimation();
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                scale: 1,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    y: {
                        delay: 0.1
                    }
                }
            })
            animation1.start({
                scale: 1,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    y: {
                        delay: 0.1
                    }
                }
            })
        }
        if(!inView){
            animation.start({
                scale: 0.8,
                opacity:0
            })
            animation1.start({
                scale: 0.8,
                opacity:0
            })
        }
        console.log("use effect inView=", inView)
    },[inView])

    const leftGraphVariants = {
        hidden: {
          x: "-100vh",
         transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
          x: "0",
          transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };

      const rightGraphVariants = {
        hidden: {
          x: "100vh",
         transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
          x: "0",
          transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };

      const columns = [
        { title: "Date", field: "name", width: 150, headerFilter: "input" },
        { title: "Sentence", field: "age", width: 900, headerFilter: "input" },
        { title: "Extraction", field: "color", width: 400, headerFilter: "input"  },
        { title: "Direction", field: "dob", headerFilter: "input"  }
      ];

      const options = {
        movableRows: false,
        responsiveLayout: "hide"
      };


    return (
        <>
            <Box h="3vh"></Box>
            <Grid templateColumns="2fr 6fr 1fr 6fr 1fr" h="115vh">
                <MotionBox initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{delay:0.7, duration:0.25}} w="8vw" h="17vh" bgColor="rgb(32, 40, 53, 0.5)" borderRightRadius="5%" top="8vh"position="fixed">
                    <Box margin="10px">
                        <VStack color="white" spacing='24px'>
                            <Text _hover={{color:"#E1D9D1"}} color={currentSection == "rel" ? "blue.300":"white"} borderBottom="1px">Relevent Articles</Text>
                            <Text _hover={{color:"#E1D9D1"}} color={currentSection == "gph" ? "blue.300":"white"} borderBottom="1px">Analytic Graphs</Text>
                            <Text _hover={{color:"#E1D9D1"}} color={currentSection == "tbl" ? "blue.300":"white"} borderBottom="1px">Extraction Table</Text>
                        </VStack>
                    </Box>
                </MotionBox>
                <Box></Box>
                <MotionBox><Article article={article1}/></MotionBox>
                <Box></Box>
                <MotionBox><Article article={article2}/></MotionBox>
                <Box></Box>
            </Grid>
            <Grid templateColumns="2fr 6fr 1fr 6fr 1fr" h="65vh">
                <Box></Box>
                <MotionBox whileHover={{scale:1.1}} animate={animation}  ref={ref} w="38vw" h="45vh" marginTop="10px" bgColor="#202835" borderRadius="4%">
                    <Box margin="25px">
                    {showGraphs && <BarChart1></BarChart1>}
                    </Box>
                </MotionBox>
                <Box></Box>
                <MotionBox whileHover={{ scale:1.1}} animate={animation1} ref={ref} w="38vw" h="45vh" marginTop="10px" bgColor="#1b222d" borderRadius="4%">
                    <Box margin="25px">
                    {showGraphs && <BarChart2></BarChart2>}
                    </Box>
                </MotionBox>
                <Box></Box>
            </Grid>
            <Grid templateColumns="3fr 21fr 1fr" h="55vh">
                <Box></Box>
                <MotionBox>
                <MotionBox ref={ref1} animate={animation2} color="black" bgColor="#1b222d" borderRadius="1%" h="50vh" overflow="scroll">
                    <Box margin="10px">
                    <ReactTabulator
                        columns={columns}
                        data={data}
                        options={options}
                        data-custom-attr="test-custom-attribute"
                        className="custom-css-class"
                        />
                    </Box>
                </MotionBox>
                <MotionBox ref={ref1} animate={animation2} h="1.5vh" bgColor="#1b222d"></MotionBox>
                </MotionBox>
                <Box></Box>
            </Grid>
        </>
    );
}

export default TestPage;
