import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './carousel';


class Details extends React.Component {

    state = { loading: true };

    componentDidMount() {
        pet.animal(this.props.id)
            .then(({ animal }) => {
                this.setState({
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false
             })
        }) 
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading......</h1>
        }

        const data = this.state;
        console.log(data);

        return (
            <div className="details">
                <Carousel media={data.media} />
                <div>
                <h1>{data.name}</h1>
                    <h2>{`${data.animal} - ${data.breed} - ${data.location}`}</h2>
                    <button>Adopt {data.name}!!</button>
                    <p>{data.description}</p>
                </div>
            </div>
        )
    }
}

export default Details;