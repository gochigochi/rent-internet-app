import React from 'react'
import {
    SmallContainer,
    IconsContainer,
    IconContainer,
    IconImageContainer,
    Icon,
    Text,
} from './Elements'

const HeroFeatures = ({ content }) => {
    return (
        <SmallContainer>
                <IconsContainer>
                    {
                        Object.entries(content).length !== 0 &&
                        content.icons.map(icon => {
                            return (
                                <IconContainer key={icon.src}>
                                    <IconImageContainer>
                                        <Icon
                                            src={icon.src}
                                            alt="featured icon"
                                            fill
                                        />
                                    </IconImageContainer>
                                    <Text>{icon.description}</Text>
                                </IconContainer>
                            )
                        })
                    }
                </IconsContainer>
        </SmallContainer>
    )
}

export default HeroFeatures