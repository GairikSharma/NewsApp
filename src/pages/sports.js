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

function Sports() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [isloading, setIsloading] = useState(true);
  const [news, setNews] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=2bfd69130b6b4832a4a6a9d7b43fb737"
    );
    const res = await data.json();
    setNews(res.articles);
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
        <Box className="container">
          

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
                {/* <Divider /> */}
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
    </>
  );
}

export default Sports;
