import { Navbar } from '../../components/navbar';
import { Sidebar } from '../../components/sidebar';
import { Chart } from '../../components/chart';
import './styles.scss';
import { ListTable } from '../../components/table';

export const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButtom">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="img"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doo</h1>
                <div className="detailItem">
                  <spam className="itemKey">Email: </spam>
                  <spam className="itemValue">janedoo@gmail.com</spam>
                </div>
                <div className="detailItem">
                  <spam className="itemKey">Phone: </spam>
                  <spam className="itemValue">+55 11 953737342</spam>
                </div>
                <div className="detailItem">
                  <spam className="itemKey">Address: </spam>
                  <spam className="itemValue">Rua das Magnólias, Portal dos Ypês, Cajamar, São Paulo</spam>
                </div>
                <div className="detailItem">
                  <spam className="itemKey">Country: </spam>
                  <spam className="itemValue">Brasil</spam>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last 6 months</h1>
          <ListTable />
        </div>
      </div>
    </div>
  );
};
