import { Button, Input } from "../../../components/shared";

type Props = {
   setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
   searchAnime: () => void;
   searchTerm: string;
};

export const SearchForm: React.FC<Props> = ({
   setSearchTerm,
   searchAnime,
   searchTerm,
}) => {
   return (
      <>
         <Input
            type="text"
            name="anime"
            placeholder="Anime name"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
         />
         <Button
            text="Search"
            disabled={!searchTerm}
            onClick={searchAnime}
            size="large"
         />
         <Button
            text="Clear"
            disabled={!searchTerm}
            onClick={() => setSearchTerm("")}
            size="large"
         />
      </>
   );
};