import React, { useEffect, useState } from "react";
import '../styles/newsapi.css'
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  ChakraBaseProvider,
  Box
} from "@chakra-ui/react";

function Newsapi() {
  useEffect(() => {}, []);
  const [mystate, setMystate] = useState("abc");
  useEffect(() => {
    console.log(setMystate("abd"));
  }, [mystate]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [isloading, setIsloading] = useState(true);
  const [news, setNews] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"
    );
    const res = await data.json();
    setNews(res.articles);
    console.log(res.articles);
  };
  useEffect(() => {
    if (fetchData()) {
      setIsloading(false);
    } else {
      setIsloading(true);
    }
  }, []);
  return (
    <>
      {/* <ChakraBaseProvider> */}
        <Box className="container">
          {/* {news.map((newdata) => {
          return (
            <div className="card" data-aos="fade-in" key={newdata.description}>
              
              <div className="card-footer">
                <button>
                  <a href={newdata.url}>Source</a>
                </button>
                <p className="publish">Publish Date</p>
                <p className="publish">{newdata.publishedAt}</p>
              </div>
            </div>
          );
        })} */}

          {news.map((newsitem) => {
            return (
              <Card maxW="sm" data-aos="fade-in" >
                <CardBody>
                  <Image
                    src={newsitem.urlToImage}
                    alt="NewsHunt"
                    key={newsitem.urlToImage}
                    borderRadius="lg"
                  />

                  <Text color="blue.600" fontSize="2xl">
                    NewsHunt Presents
                  </Text>

                  <Stack mt="6" spacing="3">
                    <Heading size="md">{newsitem.title}</Heading>
                    <Text>{newsitem.description}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      
                      <a href={newsitem.url} target="blank">Source</a>
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      {new Date(newsitem.publishedAt).toDateString()}
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Box>
      {/* </ChakraBaseProvider> */}
    </>
  );
}

export default Newsapi;
