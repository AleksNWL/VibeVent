import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"

interface CardType {
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
}

function CardEvent({title, description, image, category, date}: CardType) {
    return (
        <Card.Root flexDirection="row" overflow="hidden" maxW="xl" borderRadius="10px" height="300px">
            <Image
                objectFit="cover"
                maxW="200px"
                src={image}
                alt="img-event"
            />
            <Box>
                <Card.Body>
                    <Card.Title mb="2">{title}</Card.Title>
                    <Card.Description>
                        {description}
                    </Card.Description>
                    <HStack mt="4">
                        <Badge>{category}</Badge>
                    </HStack>
                </Card.Body>
                <Card.Footer>
                    <Badge color="gray" mr="2">{date}</Badge>
                </Card.Footer>
            </Box>
        </Card.Root>
    )
}
export default CardEvent;