import React, { useEffect, useState } from "react";
import axios from "axios";

function Interaction() {
    const token = "5ca43d9bee7c4c4882a34927231311";

    const [weather, setWeather] = useState({ location: {}, current: {} });

    const [search, setSearch] = useState("");

    const [nodata, setNodata] = useState(false);

    const [submit, setSubmit] = useState(false);
    useEffect(() => {
        if (submit === true) {
            axios
                .get(
                    `http://api.weatherapi.com/v1/current.json?key=${token}&q=${search}`
                )
                .then((response) => {
                    console.log({
                        location: response.data.location,
                        current: response.data.current,
                    });
                    setWeather({
                        location: response.data.location,
                        current: response.data.current,
                    });
                    setNodata(false);
                })
                .catch(() => {
                    setNodata(true);
                })
                .finally(() => {
                    setSubmit(false);
                });
        }
    }, [submit]);

    return (
        <>
            <div className="flex md:flex-row flex-col gap-10 md:gap-0 justify-around mt-24 items-center">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg ">
                    <div className="font-sans text-black  bg-white flex items-center justify-center">
                        <div className="border rounded overflow-hidden flex">
                            <input
                                type="text"
                                className="px-4 py-2"
                                placeholder="Search City Name"
                                onChange={(e) => setSearch(e.target.value)}
                            ></input>
                            <button
                                className="flex items-center justify-center px-4 border-l"
                                onClick={() => {
                                    setSubmit(true);
                                }}
                            >
                                <svg
                                    className="h-4 w-4 text-grey-dark"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-96 min-h-[92px] p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
                    {nodata === false || search === "" ? "" : "No-Data Found."}

                    {search === "" ||
                    search.toLowerCase() !==
                        weather?.location?.name?.toLowerCase() ||
                    nodata === true ? (
                        <div className="mt-2">
                            <p>Search city to view </p>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-center">
                                <h1 className="text-5xl font-thin ">
                                    {weather?.location?.name}
                                </h1>
                                <img
                                    src={`https:${weather?.current?.condition?.icon}`}
                                    alt="img"
                                    style={{
                                        height: "50px",
                                        width: "50px",
                                    }}
                                    className=""
                                />
                            </div>
                            <div className="mt-3 mb-1 text-center">
                                <span className="text-sm font-thin">
                                    {weather?.location?.region},
                                </span>
                                <span>&nbsp;{weather?.location?.country}</span>
                            </div>

                            <span className="">
                                {weather?.location?.localtime}
                            </span>
                            <div className="mt-3 flex justify-between items-center">
                                <p>Weather Condtion</p>
                                <span className="text-md font-light">
                                    {weather?.current?.condition?.text}
                                </span>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Temperature</p>{" "}
                                <span>{weather?.current.temp_c} &deg; C</span>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Humidity</p>{" "}
                                <span>{weather?.current.humidity}</span>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Wind mph</p>
                                <span>{weather?.current.wind_mph}</span>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Wind kmh</p>{" "}
                                <span>{weather?.current.wind_kph}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Interaction;
