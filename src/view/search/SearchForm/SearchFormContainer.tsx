import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SearchForm } from "./SearchForm";


export const SearchFormContainer = () => {
   //const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const [searchTerm, setSearchTerm] = useState("");

   function searchAnime() {
      //const date = getDateHistory();
      const searchUrl = `/search/title=${searchTerm}`;
      //dispatch(addHistory({ url: searchUrl, date }));
      navigate(searchUrl);
   }

   return (
      <>
         <SearchForm
            searchAnime={searchAnime}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
         />
      </>
   );
};