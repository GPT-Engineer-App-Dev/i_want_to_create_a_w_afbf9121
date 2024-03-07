import { useState } from "react";
import { Box, Button, Heading, Text, VStack, HStack, Image, Select, Input, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [participantCount, setParticipantCount] = useState(1);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Event Finder
        </Heading>

        {!isLoggedIn ? (
          <HStack justify="center">
            <Button colorScheme="blue" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="outline">Browse Events</Button>
          </HStack>
        ) : (
          <>
            <Tabs isFitted variant="enclosed" index={selectedTab} onChange={(index) => setSelectedTab(index)}>
              <TabList>
                <Tab>Upcoming Events</Tab>
                <Tab>Create Event</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text fontSize="xl" mb={4}>
                    Upcoming events in the next 3 days:
                  </Text>
                  <Image src="https://images.unsplash.com/photo-1700480555928-198c674a6ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXAlMjB3aXRoJTIwZXZlbnQlMjBtYXJrZXJzfGVufDB8fHx8MTcwOTgwMTEyOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Event map" />
                  <Button colorScheme="green" mt={4}>
                    Join Event
                  </Button>
                </TabPanel>
                <TabPanel>
                  <VStack spacing={4} align="stretch">
                    <Select placeholder="Select event type">
                      <option value="existing">Join existing event</option>
                      <option value="custom">Create custom event</option>
                    </Select>
                    {selectedTab === 1 && (
                      <>
                        <Input placeholder="Event name" />
                        <Input placeholder="Event location" />
                        <HStack>
                          <Text>Participants:</Text>
                          <Select value={participantCount} onChange={(e) => setParticipantCount(e.target.value)}>
                            <option value="1">Just me</option>
                            <option value="2">Me + 1 friend</option>
                            <option value="3">Me + 2 friends</option>
                          </Select>
                        </HStack>
                        <Button colorScheme="blue">Create Event</Button>
                      </>
                    )}
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
