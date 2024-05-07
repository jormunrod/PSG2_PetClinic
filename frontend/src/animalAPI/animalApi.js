import React, { useEffect, useState } from "react";
import "../components/formGenerator/css/meteo.css";

export default function AnimalApi() {
    const [animalData, setAnimalData] = useState(null);
    const [animalName, setAnimalName] = useState("dog"); // Initial value for the animal name
    const apiKey = "/U9JtR803LdkKLC7g/35uw==2tIdIb47J9gt6sNA";
    const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${animalName}`;

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "X-Api-Key": apiKey,
                },
            });
            const data = await response.json();

            setAnimalData(data[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleAnimalNameChange = (e) => {
        setAnimalName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="meteo-container">
            {animalData ? (
                <div className="meteo-block">
                    <h1>Animal Data: {animalData.name}</h1>
                    <p className="meteo-text">Family: {animalData.taxonomy.family}</p>
                    <p className="meteo-text">Location: {animalData.characteristics.location}</p>
                    <p className="meteo-text">Lifespan: {animalData.characteristics.lifespan}</p>
                    <p className="meteo-text">Weight: {animalData.characteristics.weight}</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={animalName}
                            onChange={handleAnimalNameChange}
                            placeholder="Enter animal name"
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}
