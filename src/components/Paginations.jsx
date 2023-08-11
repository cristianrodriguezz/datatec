import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const getApi = async ({ keyword = "perro", limit = 0, currentPage = 10} = {}) => {
  const API_KEY = "ena9q9yxc7Y8LZX8t5OKMqePrQB2bPxM";
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${currentPage * limit}&rating=g&lang=en&bundle=messaging_non_clips`;

  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};

const Paginations = () => {
  const [gifs, setGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (paginationData) => {
    setCurrentPage(paginationData.currentPage);
    
  };

  async function fetchData() {
    try {
      const { data } = await getApi({  limit: 5, currentPage});
      setGifs(data);

    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [currentPage]);


  return (
    <div className="flex flex-wrap">
      {gifs.map((gif) => (
        <div key={gif.id} className="w-[200px] ">
          <img src={gif.images.original.url} alt=""></img>
        </div>
      ))}

      <Pagination
        totalRecords={10}
        pageLimit={1}
        pageNeighbours={2}
        onPageChanged={handlePageChange}
        className='inline-flex -space-x-px text-sm'
      />
    </div>
  );
};

export default Paginations;
