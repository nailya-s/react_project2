import React from 'react';
import { Loader, Image, Segment, Item } from 'semantic-ui-react';


const LoaderDisabled = () => {
    return (
        <Segment>
            <Loader disabled />
            <Item.Group link>
                <Item>
                <Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
                    <Item.Content verticalAlign='middle'>
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    )
}

export default LoaderDisabled
