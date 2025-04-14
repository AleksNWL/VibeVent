import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react"

interface CardType {
    title: string;
    description: string;
    image: string;
    category: string;
}

function CardEvent({title, description, image, category}: CardType) {
    return (
        <Card.Root flexDirection="row" overflow="hidden" maxW="xl" borderRadius="10px" height="300px">
            <Image
                objectFit="cover"
                maxW="200px"
                src={image}
                alt="Caffe Latte"
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
                    <Button>Buy Latte</Button>
                </Card.Footer>
            </Box>
        </Card.Root>
    )
}
export default CardEvent;