import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Result from './result';

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("All");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } =  await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
    console.log(animals);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed();

    pet.breeds(animal).then(({ breeds }) => {
      console.log(breeds);
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
      console.log(breedString);
    }, console.error);
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(val) => setLocation(val.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button onClick={() => console.log(location)} >Submit</button>
      </form>
      <Result pets={pets}/>
    </div>
  );
};

export default SearchParams;
