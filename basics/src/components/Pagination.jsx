function Pagination({ limit, setLimit, page, setPage, charecters, loading }) {
    return (
        <>
            <div class="flex justify-center gap-5 mt-10">
                <nav class="flex ">
                    <ul
                        class="inline-flex gap-2 justify-start  text-sm "
                        style={
                            loading
                                ? {
                                      display: "none",
                                  }
                                : {}
                        }
                    >
                        <li>
                            <a
                                class=" flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                style={
                                    charecters?.page === page
                                        ? {
                                              backgroundColor: "lightgreen",
                                              color: "black",
                                          }
                                        : {}
                                }
                                onClick={() => {
                                    if (page === 1) {
                                        setPage(page);
                                    } else {
                                        setPage(page - 1);
                                    }
                                }}
                            >
                                {page == charecters.pages ? page - 1 : page}
                            </a>
                        </li>
                        <li>
                            <a
                                class="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={(e) => {
                                    setPage(
                                        page === charecters.pages
                                            ? page
                                            : page + 1
                                    );
                                }}
                            >
                                {page == charecters.pages ? page : page + 1}
                            </a>
                        </li>
                        
                        <span
                            className={`${
                                page === charecters.pages
                                    ? "hide-pagination"
                                    : ""
                            } `}
                        >
                            .......
                        </span>
                        <li>
                            <a
                                class="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                className={`${
                                    page === charecters.pages
                                        ? "hide-pagination"
                                        : " display-pagination"
                                }  `}
                                onClick={() => {
                                    setPage(charecters.pages);
                                }}
                            >
                                {charecters.pages}
                            </a>
                        </li>
                    </ul>
                </nav>

                <div>
                    <select
                        id=""
                        class=" w-52 rounded-lg py-1 "
                        onChange={(e) => setLimit(e.target.value)}
                    >
                        <option value="5">5</option>
                        <option selected value="10">
                            10
                        </option>

                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </>
    );
}
export default Pagination;
