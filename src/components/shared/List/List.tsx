import { ItemMovie } from "../../../type/type";
import { Item } from "../Item/Item";
import styles from "./List.module.scss";

type Props = {
   data: ItemMovie[];
}

export const List: React.FC<Props> = ({ data }) => {
   return (
      <div className={styles.grid}>
         {data.length > 0 ? (
            data.map(item => (
               <Item key={item.id} {...item} />
            ))
         ) : (
            <h2>Not found</h2>
         )}
      </div>
   )
}