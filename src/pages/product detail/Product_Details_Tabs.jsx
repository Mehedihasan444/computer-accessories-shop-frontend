import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Reviews from './Reviews';

const Product_Details_Tabs = ({id}) => {
    return (
        <div>
              <Tabs>
    <TabList>
      <Tab>Description</Tab>
      <Tab>Reviews</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      <Reviews id={id}/>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Product_Details_Tabs;