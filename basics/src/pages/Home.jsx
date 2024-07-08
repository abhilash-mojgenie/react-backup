import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Interaction from "../components/Interaction";
import Tables from "../components/Tables";
import Pagination from "../components/Pagination";
import axios from "axios";

function Home() {
    const [charecters, setCharecters] = useState([]);

    const [gender, setGender] = useState("");

    const [sortby, setSortby] = useState("");

    const [race, setRace] = useState("");

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(false);

    const [limit, setLimit] = useState(10);

    const [nodata, setNodata] = useState("");

    const [submit, setSubmit] = useState(true);

    const [page, setPage] = useState(1);

    const token = "hfV84dfOeT0ZlrTnMzil";

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    useEffect(() => {
        if (submit === true || page) {
            setLoading(true);
            setCharecters([]);
            axios
                .get(
                    `https://the-one-api.dev/v2/character?limit=${limit}&gender=${gender}&race=${race}&sort=name:${sortby}&name=${search}&page=${page}
`,
                    config
                )
                .then((response) => {
                    console.log(response.data);
                    setCharecters(response.data);
                })
                .catch(() => {})
                .finally(() => {
                    setLoading(false);
                    setSubmit(false);
                });
        }
    }, [submit, page]);

    useEffect(() => {
        console.log(
            "gender",
            gender,
            "sortby",
            sortby,
            "race",
            race,
            "search",
            search,
            "sub",
            submit,
            "page",
            page
        );
    }, [gender, sortby, race, search, limit, submit, page]);

    return (
        <div
            className="App"
            style={{
                backgroundColor: "lightgray",
            }}
        >
            <Header />
            <Interaction
                gender={gender}
                sortby={sortby}
                race={race}
                search={search}
                submit={submit}
                setSubmit={setSubmit}
                setSearch={setSearch}
                setGender={setGender}
                setRace={setRace}
                setSortby={setSortby}
            />
            <Tables
                charecters={charecters}
                loading={loading}
                nodata={nodata}
                setLimit={setLimit}
            />
            <Pagination
                charecters={charecters}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
                loading={loading}
            />
        </div>
    );
}

export default Home;
