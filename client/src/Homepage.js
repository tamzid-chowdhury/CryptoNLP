import {React, useState} from 'react';
import { useSpring, animated, a } from 'react-spring'
import { Box, Text, Grid, Center, Icon, Tooltip } from '@chakra-ui/react';
import {
    Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { StarIcon, ViewIcon } from '@chakra-ui/icons'
import { BsFillBookmarkHeartFill, BsFillLightningFill, BsFillTrophyFill } from 'react-icons/bs';

import styles from './styles.module.css'
import Document from './Document.js'
import Document2 from './Document2.js'


function Homepage() {
  const [currentSection, setCurrentSection] = useState("REGULATION")
  const header_sections = [
      {
          pageName: "REGULATION",
          icon: BsFillBookmarkHeartFill
      },
      {
          pageName: "EXCHANGE LISTINGS",
          icon: BsFillLightningFill
      },
      {
          pageName: "THEFTS/HACKS",
          icon: BsFillTrophyFill
      },
      {
          pageName: "VC FUNDING",
          icon: StarIcon
      }
  ]

  function renderRegulation() {
      return(
        <Grid templateColumns="2fr 7fr 2fr 7fr 2fr">
            <Box>    
            </Box>

            <Document/>

            <Box>
                    
            </Box>

            <Document2/>

            <Box>
            </Box>
        </Grid>
      )
  }

  function renderExchange() {
    return(
        <Grid templateColumns="2fr 7fr 2fr 7fr 2fr">
            <Box>    
            </Box>

            <Document2/>

            <Box>
                    
            </Box>

            <Document/>

            <Box>
            </Box>
        </Grid>
      )
  }

  function renderDocument(){
      if(currentSection == "REGULATION"){
          return renderRegulation();
      }
      if(currentSection == "EXCHANGE LISTINGS"){
        return renderExchange();
      }
  }


  return (
    <Box>

        {/* navbar selector to switch between documents */}
        <Grid w="100%" minW="800px" templateColumns="1fr 1fr 1fr 1fr" boxShadow="md" bgColor="gray.700"> 
          {header_sections.map((section, key) => {
              return (
                  <Box h="55px" key={key}>
                      <Box h="100%" display="flex" flexDirection="column" justifyContent="center" onClick={() => setCurrentSection(section.pageName)} _hover={{ cursor:"pointer", bgColor:"gray.600", transition:"0.15s linear" }}>
                          <Text  
                              className="disable-select"
                              fontSize="125%" 
                              textColor={section.pageName === currentSection ? "white" : "gray.400" }
                              textAlign="center"
                              transition="0.1s linear"
                          >
                              {section.pageName}
                          </Text>
                      </Box>
                      <Center>
                          <Box h="3px" w='100%' bgColor={section.pageName === currentSection ? "blue.500" : "" }  transition="0.15s linear"/>
                      </Center>
                  </Box>
              )
          })}
        </Grid>

          {/* documents section  */}
        <Box marginTop='50px' bgColor = "gray.800">
          {renderDocument()}
        </Box>

    </Box>
  );
}

export default Homepage;
