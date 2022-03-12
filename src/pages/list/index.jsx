import './styles.scss';
import { Sidebar } from '../../components/sidebar';
import { Navbar } from '../../components/navbar';
import { Datatable } from '../../components/datatable';
export const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};
