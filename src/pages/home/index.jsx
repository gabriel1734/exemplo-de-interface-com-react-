import { Featured } from '../../components/featured';
import { Navbar } from '../../components/navbar';
import { Sidebar } from '../../components/sidebar';
import { Widget } from '../../components/widget';
import { Chart } from '../../components/chart';
import './styles.scss';
import { ListTable } from '../../components/table';

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <ListTable />
        </div>
      </div>
    </div>
  );
};
