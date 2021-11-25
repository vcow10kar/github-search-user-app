import './App.css';
import { ThemeProvider } from '@mui/material';
import customTheme from './assets/theme';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import { useState } from 'react';
import SearchResults from './components/SearchResults/SearchResults';
import Footer from './components/Footer/Footer';

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = (items) => {
    // let arr = [];
    // let data = items.map(item => {
    //   axios({
    //     url: `${item.url}`,
    //     method: 'get'
    //   })
    //     .then(res => {
    //       return res.data;
    //     })
    //     .catch(err => {
    //       console.log("Error:", err);
    //     })
     
    // })

    

    setUsers(items)
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Navbar />
        <Search handleSearch={handleSearch} />


        {users.length > 0 ?
          <SearchResults results={users} />
          : null
        }


        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;
