function Interaction({
    gender,
    sortby,
    race,
    search,
    submit,
    setSubmit,
    setSearch,
    setGender,
    setRace,
    setSortby,
}) {
    return (
        <>
            <div className="border">
                <div className="flex justify-between">
                    <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            class="block w-80 p-4 ps-10 text-sm border"
                            placeholder="Search "
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label htmlFor="">Sort By</label>
                        <select
                            id=""
                            class=" w-52 rounded-lg"
                            onChange={(e) => setSortby(e.target.value)}
                        >
                            <option selected disabled>
                                {" "}
                                Select
                            </option>
                            <option value="asc">ASC</option>
                            <option value="desc">DESC</option>
                            <option value="">Any</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mt-5">
                        <div className="flex gap-3 items-center">
                            <label htmlFor="">Race</label>
                            <select
                                id=""
                                class=" w-52 rounded-lg"
                                onChange={(e) => setRace(e.target.value)}
                            >
                                <option selected disabled>
                                    Select
                                </option>
                                <option value="Human">Human</option>
                                <option value="Dwarf">Dwarf</option>
                                <option value="Elf">Elf</option>
                                <option value="">Any</option>
                            </select>
                        </div>

                        <div className="flex gap-3 items-center">
                            <label htmlFor="">Gender</label>
                            <select
                                id=""
                                class=" w-52 rounded-lg"
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option selected disabled>
                                    Select
                                </option>
                                <option value="Male">Male </option>
                                <option value="Female">Female</option>
                                <option value="">Any</option>
                            </select>
                        </div>

                        <button
                            type="button"
                            class="text-white font-medium rounded-full text-sm px-5 py-2.5 text-center bg-black"
                            onClick={()=>{
                                console.log('clicked');
                                  setSubmit(true);
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Interaction;
