import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
    const params = useParams();
    console.log("params : ", params);

    const token = "hfV84dfOeT0ZlrTnMzil";

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const [charecters_details, setCharecters_details] = useState([]);

    useEffect(() => {
        axios
            .get(`https://the-one-api.dev/v2/character/${params.id}`, config)
            .then((response) => {
                console.log(response.data);
                setCharecters_details(response.data);
            })
            .catch(() => {})
            .finally(() => {});
    }, []);

    return (
        <div class="container">
            {charecters_details?.docs?.length > 0 &&
                charecters_details?.docs.map((charecters_details, index) => (
                    <>
                        <div className="flex  justify-center">
                            <header>Charecter </header> <span>&#8594;</span>
                            <span>{charecters_details.name}</span>
                        </div>

                        <div>
                            <ul>
                                <li>Name : {charecters_details.name}</li>
                                <li>Birth:{charecters_details.birth}</li>

                                <li>Gender : {charecters_details.gender}</li>
                                <li>Race:{charecters_details.race}</li>
                                <li>Hair:{charecters_details.hair}</li>

                                <li>Height:{charecters_details.height}</li>
                                <li>Realm:{charecters_details.realm}</li>
                                <li>Spouse:{charecters_details.spouse}</li>
                                <li>Death:{charecters_details.death}</li>
                                <li>
                                    Wikiurl:{" "}
                                    <a
                                        href={charecters_details.wikiUrl}
                                        className="text-blue-500 cursor-pointer"
                                    >
                                        {charecters_details.wikiUrl}
                                    </a>{" "}
                                </li>
                            </ul>
                        </div>
                    </>
                ))}
        </div>
    );
}

export default Details;
