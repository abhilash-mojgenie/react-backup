import React, { useEffect } from "react";

import Interaction from "../components/Interaction";
import Header from "../components/Header";

function Home() {
    return (
        <>
            <div className="bg-teal-600 h-screen">
                <Header />
                <Interaction />
            </div>
        </>
    );
}

export default Home;
