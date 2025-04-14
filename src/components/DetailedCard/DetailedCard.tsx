import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"

interface CardType {
    title: string;
    description: string;
    detailed: string;
    image: string;
    category: string;
    date: string;
}

function DetailedCard({title, description, detailed, image, category, date}: CardType) {
    return (
        <div>
            <Card.Root flexDirection="row" overflow="hidden" maxW="1000px" borderRadius="10px" height="600px">
                <Image
                    objectFit="cover"
                    maxW="500px"
                    src={image}
                    alt="img-event"
                />
                <Box>
                    <Card.Body>
                        <Card.Title mb="2" fontSize="2.5rem">{title}</Card.Title>
                        <Card.Header>
                            {description}
                        </Card.Header>
                        <Card.Description fontSize="1.5rem">
                            {detailed}
                        </Card.Description>
                        <HStack mt="4">
                            <Badge>{category}</Badge>
                        </HStack>
                    </Card.Body>
                    <Card.Footer>
                        <Badge color="gray" mr="2" fontSize="1rem">{date}</Badge>
                    </Card.Footer>
                </Box>
            </Card.Root>
        </div>
    )
}
export default DetailedCard;