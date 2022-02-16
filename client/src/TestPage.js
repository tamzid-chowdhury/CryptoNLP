import {React, useState, useEffect, createRef, useRef} from 'react';
import { Box, Text, Grid, Center, Icon, Tooltip, VStack , Button, IconButton, HStack} from '@chakra-ui/react';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import {article1} from "./article1.json";
import {article2} from "./article2.json";
import { useHistory } from 'react-router-dom';
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdLogin, MdHome } from 'react-icons/md';
import Slider from "react-slick";

import data from './Data.js'

// for React 16.4.x use: import { ReactTabulator }
import { ReactTabulator } from "react-tabulator"; // for React 15.x
import { propsToOptions } from 'react-tabulator/lib/ConfigUtils';

const MotionBox = motion(Box);

function TestPage(props) {

    const [currentSection, setCurrentSection] = useState("")

    const {ref, inView} = useInView({
        threshold: 0.3
    });

    const {ref:ref1, inView:inView1} = useInView({
        threshold: 0.2
    });

    const {ref:ref2, inView:inView2} = useInView({
        threshold: 0.4
    });

    const tableRef = useRef()
    const graphRef = useRef()
    const articleRef = useRef()

    function handleScrollTable(){
        let targetEle = tableRef.current;
        let pos = targetEle.style.position;
        let top = targetEle.style.top;
        targetEle.style.position = 'relative';
        targetEle.style.top = '-100px';
        targetEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetEle.style.top = top;
        targetEle.style.position = pos;
    }

    function handleScrollGraph(){
        let targetEle = graphRef.current;
        let pos = targetEle.style.position;
        let top = targetEle.style.top;
        targetEle.style.position = 'relative';
        targetEle.style.top = '-190px';
        targetEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetEle.style.top = top;
        targetEle.style.position = pos;
    }

    function handleScrollArticle(){
        let targetEle = articleRef.current;
        let pos = targetEle.style.position;
        let top = targetEle.style.top;
        targetEle.style.position = 'relative';
        targetEle.style.top = '-100px';
        targetEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetEle.style.top = top;
        targetEle.style.position = pos;
    }

    const [showGraphs, setShowGraphs] = useState(false);

    useEffect(() => {
        if(inView){
            setCurrentSection("gph")
        }
        else if(inView1){
            setCurrentSection("tbl")
        }
        else if(inView2){
            setCurrentSection("rel")
        }
        
    }, [inView1, inView, inView2])

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
        if(inView2){
            animation3.start({
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
        if(!inView2){
            animation3.start({
                scale: 0.5,
                opacity:0
            })
        }
        
    }, [inView2])


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

      const exitVariants = {
          exit: {
              scale: 0,
              opacity:0,
              transition: {
                delay: 0.2,
                type: "spring",
                duration: 1,
                ease: [0.83, 0, 0.17, 1]
              }
          }
      }

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

      const history = useHistory();

      function gotoHome(){
        history.push('/')
      }




    return (
        <Box h="285vh">
            <Box h="5vh"></Box>
            <Grid ref={articleRef} templateColumns="2fr 6fr 1fr 6fr 1fr" h="110vh">
                <MotionBox whileHover={{scale:1.05}} variants={menuVariants} initial="hidden" animate="visible" exit="hidden" w="7.5vw" h="18vh" bgColor="rgb(32, 40, 53, 0.5)" borderRightRadius="5%" top="4vh"position="fixed">
                    <Box margin="10px">
                        <VStack color="white" spacing='2px'>
                            <Button variant='ghost' _hover={{color:"#E1D9D1"}} onClick={() => handleScrollArticle()} color={currentSection == "rel" ? "blue.300":"white"} >Relevent Articles</Button>
                            <Button variant='ghost' _hover={{color:"#E1D9D1"}} onClick={() => handleScrollGraph()} color={currentSection == "gph" ? "blue.300":"white"}>Analytic Graphs</Button>
                            <Button variant='ghost'_hover={{color:"#E1D9D1"}} onClick={() => handleScrollTable()} color={currentSection == "tbl" ? "blue.300":"white"}>Extraction Table</Button>
                            <HStack>
                                <IconButton fontSize="20px" onClick={gotoHome} size='sm' variant='ghost' icon={<MdHome/>} />
                                <IconButton fontSize="20px" onClick={props.onOpen} size='sm' variant='ghost' icon={<MdLogin/>} />
                            </HStack>
                        </VStack>
                    </Box>
                </MotionBox>
                <Box></Box>
                <MotionBox ref={ref2} variants={exitVariants} exit="exit" animate={animation3}><Article article={article1}/></MotionBox>
                <Box></Box>
                <MotionBox ref={ref2} variants={exitVariants} exit="exit" animate={animation3}><Article article={article2}/></MotionBox>
                <Box></Box>
            </Grid>
            <Grid ref={graphRef} templateColumns="2fr 4fr 0.5fr 4fr 0.5fr" h="70vh">
                <Box></Box>
                <MotionBox whileHover={{scale:1.05}} animate={animation} variants={exitVariants} exit="exit" ref={ref} w="42vw" h="50vh" marginTop="10px" bgColor="#202835" borderRadius="4%">
                    <Box margin="25px">
                    {showGraphs && <BarChart1></BarChart1>}
                    </Box>
                </MotionBox>
                <Box></Box>
                <MotionBox whileHover={{scale:1.05}} animate={animation1} variants={exitVariants} exit="exit" ref={ref} w="42vw" h="50vh" marginTop="10px" bgColor="#1b222d" borderRadius="4%">
                    <Box margin="25px">
                    {showGraphs && <BarChart2></BarChart2>}
                    </Box>
                </MotionBox>
                <Box></Box>
            </Grid>
            <Grid templateColumns="3fr 21fr 1fr" h="75vh">
                <Box></Box>
                <MotionBox>
                <Box ref={tableRef}><MotionBox ref={ref1} variants={exitVariants} exit="exit" animate={animation2} color="black" bgColor="#1b222d" borderRadius="1%" h="75vh" overflow="scroll">
                    <Box margin="20px" maxWidth="86vw">
                    <ReactTabulator
                        columns={columns}
                        data={data}
                        options={options}
                        data-custom-attr="test-custom-attribute"
                        className="custom-css-class"
                        />
                    </Box>
                </MotionBox></Box>
                {/* <MotionBox ref={ref1} animate={animation2} h="1.5vh" bgColor="#1b222d"></MotionBox> */}
                </MotionBox>
                <Box></Box>
            </Grid>
        </Box>
    );
}

export default TestPage;
