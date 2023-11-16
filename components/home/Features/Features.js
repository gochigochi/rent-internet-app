import {
  Container,
  Grid,
  Item,
  IconImageContainer,
  Icon,
  Title,
  Text,
} from './Elements'

const Features = ({ content }) => {

  return (
    <Container id="features-section">
      <Grid>
        {
          content.length !== 0 &&
          content.map(item => {
            return (
              <Item key={item.title}>
                <IconImageContainer>
                  <Icon
                    src={item.src}
                    alt="featured icon"
                    fill
                  />
                </IconImageContainer>
                <Title>{item.title}</Title>
                <Text>{item.description}</Text>
              </Item>
            )
          })
        }
      </Grid>
    </Container>
  )
}

export default Features